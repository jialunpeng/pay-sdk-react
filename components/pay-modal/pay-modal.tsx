import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { PayModalProps } from './interface';
import { isFunction } from '../utils/is';
import cs from '../utils/classNames';
import { useLockScroll } from '../hooks/use-lock-scroll';
import { clientDocument } from '../utils/dom';
import { getPrefixCls } from '../utils/getPrefixCls';
import Button from '../Button';
const classPrefix = getPrefixCls('modal');

const PayModal: React.FC<PayModalProps> = (props) => {
  const {
    visible,
    title,
    desc,
    retryButtonProps,
    finishButtonProps,
    icon,
    showClose = true,
    maskClosable = false,
    onClose,
    children,
    footer,
    className,
    style,
    contentClassName,
    contentStyle,
    container,
  } = props;

  const {
    className: retryButtonClassName,
    children: retryButtonChildren = '重新支付',
    ...retryButtonPropsRest
  } = retryButtonProps || {};

  const {
    className: finishButtonClassName,
    children: finishButtonChildren = '支付完成',
    ...finishButtonPropsRest
  } = finishButtonProps || {};

  const el = useRef(clientDocument?.createElement('div'));
  const ref = useRef<HTMLDivElement>(null);

  useLockScroll(ref, !!visible);

  useEffect(() => {
    if (visible) {
      const mountNode = container || document.body;
      const currentEl = el.current;
      if (currentEl) {
        mountNode.appendChild(currentEl);
      }

      return () => {
        if (currentEl && mountNode.contains(currentEl)) {
          mountNode.removeChild(currentEl);
        }
      };
    }
  }, [visible, container]);

  const classNames = cs(classPrefix, className);
  const contentClassNames = cs(`${classPrefix}__content`, contentClassName);

  const handleMaskClose = useCallback(() => {
    if (maskClosable) onClose?.();
  }, [maskClosable, onClose]);

  const renderFooter = () => {
    if (footer === null) return;

    const retryButtonNode = (
      <Button
        className={cs(
          `${classPrefix}__btn`,
          `${classPrefix}__btn--retry`,
          retryButtonClassName
        )}
        {...retryButtonPropsRest}
      >
        {retryButtonChildren}
      </Button>
    );
    const finishButtonNode = (
      <Button
        className={cs(
          `${classPrefix}__btn`,
          `${classPrefix}__btn--finish`,
          finishButtonClassName
        )}
        {...finishButtonPropsRest}
      >
        {finishButtonChildren}
      </Button>
    );
    const footerContent = isFunction(footer)
      ? footer(retryButtonNode, finishButtonNode)
      : footer || (
          <>
            {retryButtonNode}
            {finishButtonNode}
          </>
        );

    return <div className={`${classPrefix}__actions`}>{footerContent}</div>;
  };

  if (!visible || !el.current) return null;

  const modalContent = (
    <div className={classNames} style={style}>
      <div className={`${classPrefix}__mask`} onClick={handleMaskClose} />
      <div className={contentClassNames} style={contentStyle}>
        {showClose && (
          <button
            className={`${classPrefix}__close`}
            onClick={onClose}
            aria-label="关闭"
          >
            ×
          </button>
        )}
        {icon && <div className={`${classPrefix}__icon`}>{icon}</div>}
        {title && <div className={`${classPrefix}__title`}>{title}</div>}
        {desc && <div className={`${classPrefix}__desc`}>{desc}</div>}
        {children && (
          <div className={`${classPrefix}__content-wrapper`}>{children}</div>
        )}
        {renderFooter()}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, el.current);
};

export * from './interface';

export default PayModal;
