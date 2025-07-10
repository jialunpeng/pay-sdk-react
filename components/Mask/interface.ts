import React from 'react';
import { PropagationEvent } from '../utils/with-stop-propagation';
import { GetContainer } from '../utils/render-to-container';

/**
 * @version 1.1.0
 * @description
 * @zh 蒙层组件属性定义
 * @en Props for Mask component
 */
export interface MaskProps {
  /**
   * @zh 是否显示蒙层
   * @en Whether the mask is visible
   */
  visible?: boolean;

  /**
   * @zh 是否强制渲染
   * @en Whether to force render
   */
  forceRender?: boolean;

  /**
   * @zh 关闭时是否销毁
   * @en Whether to destroy on close
   */
  destroyOnClose?: boolean;

  /**
   * @zh 点击蒙层的回调
   * @en Callback when mask is clicked
   */
  onMaskClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

  /**
   * @zh 自定义类名
   * @en Custom class name
   */
  className?: string;

  /**
   * @zh 自定义样式
   * @en Custom style
   */
  style?: React.CSSProperties;

  /**
   * @zh 是否禁用body滚动
   * @en Whether to disable body scroll
   */
  disableBodyScroll?: boolean;

  /**
   * @zh 阻止事件冒泡的事件类型
   * @en Event types to stop propagation
   */
  stopPropagation?: PropagationEvent[];

  /**
   * @zh 蒙层颜色
   * @en Mask color
   */
  color?: 'white' | 'black' | (string & {});

  /**
   * @zh 蒙层透明度
   * @en Mask opacity
   */
  opacity?: 'default' | 'thin' | 'thick' | number;

  /**
   * @zh 挂载容器
   * @en Mount container
   */
  getContainer?: GetContainer;

  /**
   * @zh 显示后回调
   * @en Callback after show
   */
  afterShow?: () => void;

  /**
   * @zh 关闭后回调
   * @en Callback after close
   */
  afterClose?: () => void;

  /**
   * @zh 子元素
   * @en Children
   */
  children?: React.ReactNode;
}
