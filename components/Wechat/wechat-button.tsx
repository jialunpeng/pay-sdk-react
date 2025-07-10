import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import cs from '../utils/classNames';
import {
  WechatButtonProps,
  WechatButtonRef,
  WechatModalRef,
} from './interface';
import WechatModal from './wechat-modal';
import Button from '../Button';
import { IconWechatPay } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';

const WechatButton = forwardRef<
  WechatButtonRef,
  PropsWithChildren<WechatButtonProps>
>((props, ref) => {
  const {
    className,
    children = (
      <>
        <IconWechatPay />
        微信支付
      </>
    ),
    onClick,
    createOrder,
    modalProps,
    ...others
  } = props;

  const wechatButtonRef = useRef<WechatButtonRef>({ nativeElement: null });

  const wechatModalRef = useRef<WechatModalRef>(null);

  useImperativeHandle(ref, () => wechatButtonRef.current);

  const handlePayCreateOrder = useCallback(async () => {
    if (createOrder) {
      const options = await createOrder();
      wechatModalRef.current?.open(options);
    }
  }, [createOrder]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (createOrder) {
        handlePayCreateOrder();
      } else {
        wechatModalRef?.current?.open();
      }
      onClick?.(e);
    },
    [onClick, createOrder, handlePayCreateOrder]
  );

  return (
    <React.Fragment>
      <Button
        ref={wechatButtonRef}
        className={cs(getPrefixCls('wechat-btn'), className)}
        onClick={handleClick}
        {...others}
      >
        {children}
      </Button>
      <WechatModal ref={wechatModalRef} {...modalProps} />
    </React.Fragment>
  );
});

WechatButton.displayName = 'WechatButton';

export default memo(WechatButton);
