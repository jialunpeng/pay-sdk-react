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
  AlipayButtonProps,
  AlipayButtonRef,
  AlipayModalRef,
  AlipayProps,
} from './interface';
import AlipayModal from './alipay-modal';
import Button from '../Button';
import { IconAlipay } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';

const AlipayButton = forwardRef<
  AlipayButtonRef,
  PropsWithChildren<AlipayButtonProps>
>((props, ref) => {
  const {
    className,
    children = (
      <>
        <IconAlipay />
        支付宝支付
      </>
    ),
    onClick,
    createOrder,
    modalProps,
    ...others
  } = props;

  const alipayButtonRef = useRef<AlipayButtonRef>(null);
  const alipayModalRef = useRef<AlipayModalRef>(null);

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return alipayButtonRef.current?.nativeElement || null;
    },
    openModal: (options?: AlipayProps) => {
      alipayModalRef.current?.open(options);
    },
    closeModal: () => {
      alipayModalRef.current?.close();
    },
    current: alipayButtonRef.current,
  }));

  const handlePayCreateOrder = useCallback(async () => {
    if (createOrder) {
      const options = await createOrder();
      if (options) {
        alipayModalRef?.current?.open(options);
      }
    }
  }, [createOrder]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (createOrder) {
        handlePayCreateOrder();
      } else if (modalProps?.alipayProps?.formHtml) {
        alipayModalRef?.current?.open();
      }
      onClick?.(e);
    },
    [onClick, createOrder, handlePayCreateOrder, modalProps]
  );

  return (
    <React.Fragment>
      <Button
        ref={alipayButtonRef}
        className={cs(getPrefixCls('alipay-btn'), className)}
        onClick={handleClick}
        {...others}
      >
        {children}
      </Button>
      <AlipayModal ref={alipayModalRef} {...modalProps} />
    </React.Fragment>
  );
});

AlipayButton.displayName = 'AlipayButton';

export default memo(AlipayButton);
