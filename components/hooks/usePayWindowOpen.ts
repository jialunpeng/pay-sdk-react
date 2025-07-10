import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * @zh 如果您希望用户在支付过程中随时可以通过"后退"按钮放弃支付并返回到您的应用，那么 href 是一个好选择;
 * @en If you want users to be able to abandon payment at any time and return to your application, then href is a good choice;
 * @zh 使用 replace: 如果您的业务逻辑是"一旦点击支付，就不能轻易返回"，replace 会更合适。例如，点击支付后，您的后端已经创建了一张"待支付"的订单。为了防止用户通过"后退"按钮回到上一个页面再次创建订单，使用 replace 可以强制用户要么完成支付，要么关闭页面，而不能"后退"到上一步。
 * @en Use replace: If your business logic is "once clicked, payment cannot be easily returned", replace is more suitable. For example, after clicking payment, your backend has already created an "awaiting payment" order. To prevent users from returning to the previous page by clicking the "back" button and creating an order again, using replace can force users to either complete payment or close the page, and cannot "back" to the previous step.
 */
export type OpenPayUrlMode = 'window' | 'replace' | 'href';

interface UsePayWindowOpenOptions {
  payUrl: string;
  onClose?: () => void;
  onSuccess?: () => void;
  autoOpen?: boolean;
  openMode?: OpenPayUrlMode;
}

export function usePayWindowOpen({
  payUrl,
  onClose,
  onSuccess,
  autoOpen = true,
  openMode = 'window',
}: UsePayWindowOpenOptions) {
  const payWindowRef = useRef<Window | null>(null);
  const pollTimerRef = useRef<number | null>(null);
  const [isWindowMonitoring, setWindowMonitoring] = useState(false);

  // 打开支付窗口
  const openWindow = useCallback(() => {
    if (openMode === 'window') {
      if (payWindowRef.current && !payWindowRef.current.closed) {
        payWindowRef.current.focus();
      } else {
        payWindowRef.current = window.open(payUrl);
        setWindowMonitoring(true);
      }
    } else if (openMode === 'replace') {
      window.location.replace(payUrl);
    } else if (openMode === 'href') {
      window.location.href = payUrl;
    }
  }, [payUrl, openMode]);

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
    if (!isWindowMonitoring || openMode !== 'window') {
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
      payWindowRef.current?.close();
    };
  }, [isWindowMonitoring, openMode, onClose, onSuccess]);

  return {
    openWindow,
    closeWindow,
    payWindowRef,
  };
}
