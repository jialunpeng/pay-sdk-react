import React, { memo, useState } from 'react';
import FullScreenLoading from '../FullScreenLoading';
import { AlipayProps } from './interface';
import { getPrefixCls } from '../utils/getPrefixCls';
import cs from '../utils/classNames';
const classPrefix = getPrefixCls('alipay-qr-iframe');

const AlipayQrIframe: React.FC<AlipayProps> = ({
  formHtml,
  tipText = '请使用支付宝APP扫码支付',
  wrapperClassName = '',
  wrapperStyle = {},
  iframeClassName = '',
  iframeStyle = {},
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <FullScreenLoading
      loading={loading}
      type={'spin-dots'}
      text={null}
      fullscreen={false}
    >
      <div
        className={cs(classPrefix, wrapperClassName)}
        style={{ position: 'relative', ...wrapperStyle }}
      >
        <iframe
          srcDoc={formHtml}
          className={cs(`${classPrefix}__iframe`, iframeClassName)}
          style={{ width: 210, height: 210, border: 'none', ...iframeStyle }}
          title="alipay-qrcode"
          scrolling="no"
          onLoad={() => setLoading(false)}
        />
        {!!tipText && <span className={`${classPrefix}__tip`}>{tipText}</span>}
      </div>
    </FullScreenLoading>
  );
};

export default memo(AlipayQrIframe);
