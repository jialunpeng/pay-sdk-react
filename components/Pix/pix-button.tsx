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
  PixButtonProps,
  PixButtonRef,
  PixModalRef,
  PixProps,
} from './interface';
import PixModal from './pix-modal';
import Button from '../Button';
import { IconPix } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';

const PixButton = forwardRef<PixButtonRef, PropsWithChildren<PixButtonProps>>(
  (props, ref) => {
    const {
      className,
      children = (
        <>
          <IconPix />
          PIX
        </>
      ),
      onClick,
      createOrder,
      modalProps,
      ...others
    } = props;

    const pixButtonRef = useRef<PixButtonRef>(null);
    const pixModalRef = useRef<PixModalRef>(null);

    useImperativeHandle(ref, () => ({
      get nativeElement() {
        return pixButtonRef.current?.nativeElement || null;
      },
      openModal: (options?: PixProps) => {
        pixModalRef.current?.open(options);
      },
      closeModal: () => {
        pixModalRef.current?.close();
      },
      current: pixButtonRef.current,
    }));

    const handlePayCreateOrder = useCallback(async () => {
      if (createOrder) {
        const options = await createOrder();
        pixModalRef.current?.open(options);
      }
    }, [createOrder]);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (createOrder) {
          handlePayCreateOrder();
        } else if (modalProps?.pixProps?.pixCode) {
          pixModalRef?.current?.open();
        }
        onClick?.(e);
      },
      [onClick, createOrder, handlePayCreateOrder, modalProps]
    );

    return (
      <React.Fragment>
        <Button
          ref={pixButtonRef}
          className={cs(getPrefixCls('pix-btn'), className)}
          onClick={handleClick}
          {...others}
        >
          {children}
        </Button>
        <PixModal ref={pixModalRef} {...modalProps} />
      </React.Fragment>
    );
  }
);

PixButton.displayName = 'PixButton';

export default memo(PixButton);
