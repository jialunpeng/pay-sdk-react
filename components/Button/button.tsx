import React, { useImperativeHandle, useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';
import cs from '../utils/classNames';
import { withNativeProps } from '../utils/native-props';
import { mergeProps } from '../utils/with-default-props';
import { isPromise } from '../utils/is';
import { ButtonProps, ButtonRef } from './interface';
import DotLoading from '../dot-loading';
import { getPrefixCls } from '../utils/getPrefixCls';

const classPrefix = getPrefixCls('button');

const defaultProps: ButtonProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  loadingIcon: <DotLoading color="currentColor" />,
  type: 'button',
  shape: 'default',
  size: 'middle',
};

export const Button = React.forwardRef<ButtonRef, ButtonProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const [innerLoading, setInnerLoading] = useState(false);
  const nativeButtonRef = useRef<HTMLButtonElement>(null);
  const loading = props.loading === 'auto' ? innerLoading : props.loading;
  const disabled = props.disabled || loading;

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current;
    },
  }));

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (!props.onClick) return;

    const promise = props.onClick(e);

    if (isPromise(promise)) {
      try {
        setInnerLoading(true);
        await promise;
        setInnerLoading(false);
      } catch (e) {
        setInnerLoading(false);
        throw e;
      }
    }
  };

  return withNativeProps(
    props,
    <button
      ref={nativeButtonRef}
      type={props.type}
      form={props.form}
      onClick={handleClick}
      className={cs(
        classPrefix,
        {
          [`${classPrefix}-${props.color}`]: props.color,
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: props.size === 'mini',
          [`${classPrefix}-small`]: props.size === 'small',
          [`${classPrefix}-large`]: props.size === 'large',
          [`${classPrefix}-loading`]: loading,
        },
        `${classPrefix}-shape-${props.shape}`
      )}
      disabled={disabled}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >
      {loading ? (
        <div className={`${classPrefix}-loading-wrapper`}>
          {props.loadingIcon}
          {props.loadingText}
        </div>
      ) : (
        <span className={`${classPrefix}-content`}>{props.children}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
