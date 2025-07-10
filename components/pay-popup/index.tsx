import cs from '../utils/classNames';
import React, { useState, useRef } from 'react';
import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks';
import { withNativeProps } from '../utils/native-props';
import { useLockScroll } from '../hooks/use-lock-scroll';
import { useSpring, animated } from '@react-spring/web';
import { PayPopupProps } from './interface';
import { useDrag } from '@use-gesture/react';
import { ShouldRender } from '../utils/should-render';
import { withStopPropagation } from '../utils/with-stop-propagation';
import { useInnerVisible } from '../hooks/use-inner-visible';
import { mergeProps } from '../utils/with-default-props';
import { renderToContainer } from '../utils/render-to-container';
import Mask from '../Mask';
import { IconClose } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';

const classPrefix = getPrefixCls('popup');

const defaultPopupBaseProps = {
  closeOnMaskClick: true,
  closeIcon: <IconClose />,
  destroyOnClose: false,
  disableBodyScroll: true,
  forceRender: false,
  getContainer: () => document.body,
  mask: true,
  showCloseButton: false,
  stopPropagation: ['click'],
  visible: false,
};

const defaultProps = {
  ...defaultPopupBaseProps,
  closeOnSwipe: false,
  position: 'bottom',
  round: false,
};

const PayPopup: React.FC<PayPopupProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  const bodyCls = cs(
    `${classPrefix}-body`,
    props.bodyClassName,
    `${classPrefix}-body-position-${props.position}`,
    {
      [`${classPrefix}-body-with-close`]: props.showCloseButton,
      [`${classPrefix}-body-round`]: props.round,
    }
  );

  const [active, setActive] = useState(props.visible);
  const ref = useRef<HTMLDivElement>(null);
  useLockScroll(ref, props.disableBodyScroll && active ? 'strict' : false);

  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);

  const unmountedRef = useUnmountedRef();
  const { percent } = useSpring({
    percent: props.visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30,
    },
    onRest: () => {
      if (unmountedRef.current) return;
      setActive(props.visible);
      if (props.visible) {
        props.afterShow?.();
      } else {
        props.afterClose?.();
      }
    },
  });

  const bind = useDrag(
    ({ swipe: [, swipeY] }) => {
      if (!props.closeOnSwipe) return;
      if (
        (swipeY === 1 && props.position === 'bottom') ||
        (swipeY === -1 && props.position === 'top')
      ) {
        props.onClose?.();
      }
    },
    {
      axis: 'y',
      enabled: ['top', 'bottom'].includes(props.position),
    }
  );

  const maskVisible = useInnerVisible(active && props.visible);

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <div
        className={classPrefix}
        onClick={props.onClick}
        style={{
          display: active ? undefined : 'none',
          touchAction: ['top', 'bottom'].includes(props.position)
            ? 'none'
            : 'auto',
        }}
        {...bind()}
      >
        {props.mask && (
          <Mask
            visible={maskVisible}
            forceRender={props.forceRender}
            destroyOnClose={props.destroyOnClose}
            onMaskClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              props.onMaskClick?.(e);

              if (props.closeOnMaskClick) {
                props.onClose?.();
              }
            }}
            className={props.maskClassName}
            style={props.maskStyle}
            disableBodyScroll={false}
            stopPropagation={props.stopPropagation}
          />
        )}
        <animated.div
          className={cs(
            `${classPrefix}-body`,
            `${classPrefix}-body-position-${props.position}`,
            {
              [`${classPrefix}-body-with-close`]: props.showCloseButton,
              [`${classPrefix}-body-round`]: props.round,
            },
            bodyCls
          )}
          style={{
            ...props.bodyStyle,
            pointerEvents: percent.to((v) => (v === 0 ? 'unset' : 'none')),
            transform: percent.to((v) => {
              if (props.position === 'bottom') {
                return `translate(0, ${v}%)`;
              }
              if (props.position === 'top') {
                return `translate(0, -${v}%)`;
              }
              if (props.position === 'left') {
                return `translate(-${v}%, 0)`;
              }
              if (props.position === 'right') {
                return `translate(${v}%, 0)`;
              }
              return 'none';
            }),
          }}
          ref={ref}
        >
          {props.showCloseButton && (
            <a
              className={cs(
                `${classPrefix}-close-icon`,
                `${classPrefix}-close-button`
              )}
              onClick={() => {
                props.onClose?.();
              }}
              role="button"
              aria-label={'close'}
            >
              {props.closeIcon}
            </a>
          )}
          <div className={`${classPrefix}-content`}>{props.children}</div>
        </animated.div>
      </div>
    )
  );

  return (
    <ShouldRender
      active={active}
      forceRender={props.forceRender}
      destroyOnClose={props.destroyOnClose}
    >
      {renderToContainer(props.getContainer, node)}
    </ShouldRender>
  );
};

export * from './interface';

export default PayPopup;
