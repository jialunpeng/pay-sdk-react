import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import cs from '../utils/classNames';
import { PixProps } from './interface';
import makeQrcode from '../utils/qrcode';
import { IconCopy, IconCheck } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';

const classPrefix = getPrefixCls('pix-qrcode');

const PixQrCode: React.FC<PixProps> = ({
  pixCode,
  tipText = '请使用银行App扫码支付',
  showCopyButton = true,
  className,
  style,
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (pixCode) {
      makeQrcode(pixCode).then((url) => {
        setImageUrl(url);
      });
    }
  }, [pixCode]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: use textarea for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = pixCode;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    }
  }, [pixCode]);

  if (!imageUrl) {
    return null;
  }

  return (
    <div className={cs(classPrefix, className)} style={style}>
      <div className={`${classPrefix}__container`}>
        <img
          className={`${classPrefix}__image`}
          src={imageUrl}
          alt={'PIX支付二维码'}
        />
      </div>
      {tipText && <span className={`${classPrefix}__tip`}>{tipText}</span>}
      {showCopyButton && (
        <div className={`${classPrefix}__code-section`}>
          <button
            type="button"
            className={cs(`${classPrefix}__copy-btn`, {
              [`${classPrefix}__copy-btn--copied`]: copied,
            })}
            onClick={handleCopy}
          >
            {copied ? (
              <IconCheck className={`${classPrefix}__copy-icon`} />
            ) : (
              <IconCopy className={`${classPrefix}__copy-icon`} />
            )}
            <span>{copied ? '已复制' : '复制 PIX Code'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(PixQrCode);
