import { isMobileDevice, isTouchDevice } from '../utils/is';
import { mergeProps } from '../utils/with-default-props';
import { useEffect, useRef, useCallback, useState } from 'react';
import { OpenPayUrlMode } from '../shared/enums';
import { clientDocument, clientWindow } from '../utils/dom';

interface BaseUsePayWindowOpenOptions {
  payUrl: string;
  onClose?: () => void;
  onSuccess?: () => void;
  autoOpen?: boolean;
  /**
   * @zh 组件卸载时是否关闭支付窗口
   * @en Whether to close payment window when component unmounts
   * @default true
   */
  closeWindowOnUnmount?: boolean;
}

interface WindowModeOptions extends BaseUsePayWindowOpenOptions {
  openMode?: OpenPayUrlMode.Window;
  /**
   * @zh 是否强制打开新窗口（仅在非移动端设备生效）
   * @en Whether to force open new window (only effective on non-mobile devices)
   * @default false
   */
  forceNewWindow?: boolean;
}

interface OtherModeOptions extends BaseUsePayWindowOpenOptions {
  openMode?: OpenPayUrlMode.Replace | OpenPayUrlMode.Href;
}

type UsePayWindowOpenProps = WindowModeOptions | OtherModeOptions;

/**
 * @zh 获取屏幕宽度
 * @en Get screen width
 */
function getScreenWidth() {
  return (
    clientWindow?.innerWidth ||
    clientDocument?.documentElement?.clientWidth ||
    clientDocument?.body?.clientWidth
  );
}

const defaultProps: UsePayWindowOpenProps = {
  payUrl: '',
  openMode: OpenPayUrlMode.Window,
  closeWindowOnUnmount: true,
};

export function usePayWindowOpen(p: UsePayWindowOpenProps) {
  const props = mergeProps(defaultProps, p);

  const {
    payUrl,
    onClose,
    onSuccess,
    autoOpen = true,
    closeWindowOnUnmount = true,
  } = props;
  const payWindowRef = useRef<Window | null>(null);
  const pollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isWindowMonitoring, setWindowMonitoring] = useState(false);

  // 创建弹窗的公共函数
  const createPopupWindow = useCallback(
    (url: string) => {
      // 计算弹窗尺寸和位置，实现垂直水平居中
      const width = Math.min(550, window.outerWidth * 0.9);
      const height = Math.min(700, window.outerHeight);

      // 使用多种定位方法确保居中
      const left = Math.round((window.screen.availWidth - width) / 2);
      const top = Math.round((window.screen.availHeight - height) / 2);
      const screenX = left;
      const screenY = top;

      return window.open(
        url,
        'paypal_payment',
        `width=${width},height=${height},left=${left},top=${top},screenX=${screenX},screenY=${screenY},scrollbars=yes,resizable=yes`
      );
    },
    [onClose, onSuccess]
  );

  // 打开支付窗口
  const openWindow = useCallback(() => {
    if (props?.openMode === OpenPayUrlMode.Window) {
      if (payWindowRef.current && !payWindowRef.current.closed) {
        payWindowRef.current.focus();
      } else {
        const isMobile = isMobileDevice() || isTouchDevice();
        const forceNewWindow = props?.forceNewWindow;

        if (isMobile) {
          payWindowRef.current = window.open(payUrl);
          return;
        }
        if (forceNewWindow) {
          payWindowRef.current = createPopupWindow(payUrl);
          return;
        }
        const screenWidth = getScreenWidth() || 0;

        if (screenWidth >= 768) {
          payWindowRef.current = createPopupWindow(payUrl);
        } else {
          payWindowRef.current = window.open(payUrl);
        }
      }
      setWindowMonitoring(true);
      return;
    }
    if (props?.openMode === OpenPayUrlMode.Replace) {
      window.location.replace(payUrl);
      return;
    }
    if (props?.openMode === OpenPayUrlMode.Href) {
      window.location.href = payUrl;
    }
  }, [payUrl, props, createPopupWindow]);

  // 关闭窗口
  const closeWindow = useCallback(() => {
    payWindowRef.current?.close();
    setWindowMonitoring(false);
  }, []);

  // 自动打开
  useEffect(() => {
    if (autoOpen) {
      openWindow();
    }
  }, [autoOpen, openWindow]);

  // 轮询和消息监听
  useEffect(() => {
    if (!isWindowMonitoring || props?.openMode !== OpenPayUrlMode.Window) {
      return;
    }

    pollTimerRef.current = setInterval(() => {
      if (payWindowRef.current && payWindowRef.current.closed) {
        onClose?.();
        clearInterval(pollTimerRef.current!);
        setWindowMonitoring(false);
      }
    }, 1500);

    function handleMessage(event: any) {
      if (event.data === 'PAYMENT_SUCCESS') {
        onSuccess?.();
        onClose?.();
        payWindowRef.current?.close();
        clearInterval(pollTimerRef.current!);
        setWindowMonitoring(false);
      }
    }
    window.addEventListener('message', handleMessage);

    return () => {
      clearInterval(pollTimerRef.current!);
      window.removeEventListener('message', handleMessage);
      if (closeWindowOnUnmount) {
        payWindowRef.current?.close();
      }
    };
  }, [isWindowMonitoring, props, onClose, onSuccess]);

  return {
    openWindow,
    closeWindow,
    payWindowRef,
  };
}
