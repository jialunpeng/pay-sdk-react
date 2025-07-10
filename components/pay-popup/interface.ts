import { NativeProps } from '../utils/native-props';
import React, { PropsWithChildren } from 'react';
import { GetContainer } from '../utils/render-to-container';
import { PropagationEvent } from '../utils/with-stop-propagation';

export type PopupPosition = 'bottom' | 'top' | 'left' | 'right';

export interface PayPopupBaseProps extends NativeProps<'--z-index'> {
  /**
   * @zh 是否可见
   * @eb Whether to show the popup
   * @default false
   */
  visible?: boolean;
  /**
   * @zh 是否显示遮罩层
   * @en Whether to show the mask
   * @default true
   */
  mask?: boolean;
  /**
   * @zh 关闭时触发
   * @en Triggered when the popup is closed
   */
  onClose?: () => void;
  /**
   * @zh 点击遮罩层时触发
   * @en Triggered when the mask is clicked
   */
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * @zh 不可见时是否销毁 DOM 结构
   * @en Whether to destroy the DOM structure when the popup is hidden
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @zh 强制渲染内容
   * @en Force render content
   * @default false
   */
  forceRender?: boolean;
  /**
   * @zh 弹出时是否禁止滚动
   * @en Whether to disable scrolling when the popup is displayed
   * @default true
   */
  disableBodyScroll?: boolean;
  /**
   * @zh 指定父级 `DOM`，`false` 则不挂载 `DOM`
   * @en Specify the parent `DOM`, `false` will not mount the `DOM`
   * @default document.body
   */
  getContainer?: GetContainer;
  /**
   * @zh 完全显示后触发
   * @en Triggered after the popup is fully displayed
   */
  afterShow?: () => void;
  /**
   * @zh 完全关闭后触发
   * @en Triggered after the popup is fully closed
   */
  afterClose?: () => void;
  /**
   * @zh 设置阻止冒泡的事件
   * @en Set the event to stop propagation
   * @default ['click']
   */
  stopPropagation?: PropagationEvent[];
  /**
   * @zh 点击内容时触发
   * @en Triggered when the content is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * @zh 弹出位置
   * @en Popup position
   * @default 'bottom'
   */
  position?: PopupPosition;
  /**
   * @zh `popup` 内容区的类名
   * @en The class name of the `popup` content area
   */
  bodyClassName?: string;
  /**
   * @zh `popup` 内容区的样式
   * @en The style of the `popup` content area
   */
  bodyStyle?: React.CSSProperties;
  /**
   * @zh `mask` 遮罩层的类名
   * @en The class name of the `mask`
   */
  maskClassName?: string;
  /**
   * @zh `mask` 遮罩层的样式
   * @en The style of the `mask`
   */
  maskStyle?: React.CSSProperties;
  /**
   * @zh 是否显示关闭按钮
   * @en Whether to show the close button
   * @default false
   */
  showCloseButton?: boolean;
  /**
   * @zh 自定义关闭图标
   * @en Custom close icon
   */
  closeIcon?: React.ReactNode;
  /**
   * @zh 点击遮罩层是否关闭
   * @en Whether to close when the mask is clicked
   * @default true
   */
  closeOnMaskClick?: boolean;
  /**
   * @zh 是否支持手势关闭
   * @en Whether to support gesture to close
   * @default false
   */
  closeOnSwipe?: boolean;
  /**
   * @zh 是否圆角
   * @en Whether to have rounded corners
   * @default false
   */
  round?: boolean;
  /**
   * @zh 自定义 `popup` 内容
   * @en Custom `popup` content
   */
  children?: React.ReactNode;
}

export type PayPopupProps = PayPopupBaseProps &
  PropsWithChildren<{
    /**
     * @zh 弹出位置
     * @en Popup position
     * @default 'bottom'
     */
    position?: PopupPosition;
    /**
     * @zh 是否支持手势关闭
     * @en Whether to support gesture to close
     * @default false
     */
    closeOnSwipe?: boolean;
  }>;
