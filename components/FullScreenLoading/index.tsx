import React, { useEffect, useRef } from 'react';
import cs from '../utils/classNames';
import { FullScreenLoadingProps } from './interface';
import { useLockScroll } from '../hooks/use-lock-scroll';
import { getPrefixCls } from '../utils/getPrefixCls';

const classPrefix = getPrefixCls('fullscreen-loading');

const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({
  loading = false,
  text = 'Loading...',
  children,
  fullscreen = true,
  className = '',
  size = 'default',
  type = 'circle',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sizeClass = size ? `${classPrefix}--${size}` : '';
  const typeClass = type ? `${classPrefix}--${type}` : '';

  const classNames = cs(
    {
      [classPrefix]: fullscreen,
      [`${classPrefix}__container`]: !fullscreen,
      [sizeClass]: size,
      [typeClass]: type,
    },
    className
  );

  useLockScroll(containerRef, fullscreen && loading);

  useEffect(() => {
    if (!fullscreen || !loading) return;
    const originalPointerEvents = document.body.style.pointerEvents;
    const originalUserSelect = document.body.style.userSelect;
    document.body.style.pointerEvents = 'none';
    document.body.style.userSelect = 'none';
    return () => {
      document.body.style.pointerEvents = originalPointerEvents;
      document.body.style.userSelect = originalUserSelect;
    };
  }, [fullscreen, loading]);

  // 局部 loading 时禁止容器操作
  useEffect(() => {
    if (fullscreen || !containerRef.current) return;
    const container = containerRef.current;
    if (loading) {
      container.style.pointerEvents = 'none';
      container.style.userSelect = 'none';
    } else {
      container.style.pointerEvents = '';
      container.style.userSelect = '';
    }
    return () => {
      container.style.pointerEvents = '';
      container.style.userSelect = '';
    };
  }, [fullscreen, loading]);

  const renderLoadingIcon = () => {
    switch (type) {
      case 'circle':
        return <div className={`${classPrefix}__circle`} />;
      case 'dots':
        return (
          <div className={`${classPrefix}__dots`}>
            <div className={`${classPrefix}__dot`} />
            <div className={`${classPrefix}__dot`} />
            <div className={`${classPrefix}__dot`} />
          </div>
        );
      case 'spin-dots':
        return (
          <div className={`${classPrefix}__spin-dots`}>
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className={`${classPrefix}__spin-dot`}
                style={{
                  transform: `rotate(${index * 30}deg)`,
                  opacity: 1 - index * 0.08,
                }}
              />
            ))}
          </div>
        );
      default:
        return <div className={`${classPrefix}__circle`} />;
    }
  };

  const loadingContent = (
    <div className={`${classPrefix}__center`}>
      <div
        className={cs(`${classPrefix}__spinner-box`, {
          [`${classPrefix}__spinner-box--no-text`]: text === null,
        })}
      >
        <div className={`${classPrefix}__spinner`}>{renderLoadingIcon()}</div>
        {text !== null && <div className={`${classPrefix}__text`}>{text}</div>}
      </div>
    </div>
  );

  // 局部 loading 包裹 children
  if (children) {
    return (
      <div className={classNames} ref={containerRef}>
        {children}
        {loading && (
          <div className={`${classPrefix}__mask`}>{loadingContent}</div>
        )}
      </div>
    );
  }

  // 全屏 loading
  return loading ? <div className={classNames}>{loadingContent}</div> : null;
};

export default FullScreenLoading;
