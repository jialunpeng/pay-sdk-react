import React, { useMemo, useRef, useState } from 'react';
import { useUnmountedRef } from 'ahooks';
import { useSpring, animated } from '@react-spring/web';
import { mergeProps } from '../utils/with-default-props';
import { ShouldRender } from '../utils/should-render';
import {
  withStopPropagation,
  PropagationEvent,
} from '../utils/with-stop-propagation';
import { renderToContainer } from '../utils/render-to-container';
import { useLockScroll } from '../hooks/use-lock-scroll';
import cs from '../utils/classNames';
import { MaskProps } from './interface';
import { getPrefixCls } from '../utils/getPrefixCls';

const classPrefix = getPrefixCls('mask');

const opacityRecord: Record<string, number> = {
  default: 0.7,
  thin: 0.35,
  thick: 0.75,
};

const colorRecord: Record<string, string> = {
  black: '0, 0, 0',
  white: '255, 255, 255',
};

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: () => document.body,
  stopPropagation: ['click'] as PropagationEvent[],
};

const Mask: React.FC<MaskProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const ref = useRef<HTMLDivElement>(null);

  useLockScroll(ref, props.visible && props.disableBodyScroll);

  const background = useMemo(() => {
    const opacity = opacityRecord[props.opacity as string] ?? props.opacity;
    const rgb = colorRecord[props.color];
    return rgb ? `rgba(${rgb}, ${opacity})` : props.color;
  }, [props.color, props.opacity]);

  const [active, setActive] = useState(props.visible);

  const unmountedRef = useUnmountedRef();
  const { opacity } = useSpring({
    opacity: props.visible ? 1 : 0,
    config: {
      precision: 0.01,
      mass: 1,
      tension: 250,
      friction: 30,
      clamp: true,
    },
    onStart: () => {
      setActive(true);
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

  const node = withStopPropagation(
    props.stopPropagation,
    <animated.div
      className={cs(classPrefix, props.className)}
      ref={ref}
      aria-hidden
      style={{
        ...props.style,
        background,
        opacity,
        display: active ? undefined : 'none',
      }}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
          props.onMaskClick?.(e);
        }
      }}
    >
      {props.children}
    </animated.div>
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

export default Mask;
