import React, { memo, useEffect, useState } from 'react';
import cs from '../utils/classNames';
import { WechatProps } from './interface';
import makeQrcode from '../utils/qrcode';
import { getPrefixCls } from '../utils/getPrefixCls';

const classPrefix = getPrefixCls('wechat');

const WechatQrCode: React.FC<WechatProps> = ({
  wechatType = 'qrcode',
  wechatUrl,
  tipText = '请使用微信APP扫码支付',
  className,
  style,
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (wechatType === 'qrcode') {
      makeQrcode(wechatUrl).then((url) => {
        setImageUrl(url);
      });
    } else {
      setImageUrl(wechatUrl);
    }
  }, [wechatUrl, wechatType]);

  if (!imageUrl) {
    return null;
  }

  return (
    <div className={cs(classPrefix, className)} style={style}>
      <div className={`${classPrefix}__container`}>
        <img
          className={`${classPrefix}__image`}
          src={imageUrl}
          alt={'微信支付二维码'}
        />
      </div>
      {tipText && <span className={`${classPrefix}__tip`}>{tipText}</span>}
    </div>
  );
};

export default memo(WechatQrCode);
