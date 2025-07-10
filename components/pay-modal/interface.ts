import React, { ReactNode } from 'react';
import { ButtonProps } from '../Button';

export interface PayModalProps {
  /**
   * @zh 是否显示弹窗
   * @en Whether to show the modal
   */
  visible?: boolean;
  /**
   * @zh 图标
   * @en Icon
   */
  icon?: React.ReactNode;
  /**
   * @zh 标题
   * @en Title
   */
  title?: string;
  /**
   * @zh 描述
   * @en Description
   */
  desc?: React.ReactNode;
  /**
   * @zh 内容
   * @en Content
   */
  children?: React.ReactNode;
  /**
   * @zh 重试按钮 props
   * @en Retry button props
   */
  retryButtonProps?: ButtonProps;
  /**
   * @zh 完成按钮 props
   * @en Finish button props
   */
  finishButtonProps?: ButtonProps;
  /**
   * @zh 是否显示右上角关闭按钮，默认 true
   */
  showClose?: boolean;
  /**
   * @zh 点击蒙层是否关闭弹窗，默认 false
   * @en Whether to close the modal when clicking the mask, default is false
   */
  maskClosable?: boolean;

  /**
   * @zh 关闭弹窗回调
   * @en Close modal callback
   */
  onClose?: () => void;
  /**
   * @zh 自定义页脚，传入 null 则不显示
   * @en Custom footer, pass null to hide
   */
  footer?:
    | ReactNode
    | ((retryButtonNode: ReactNode, finishButtonNode: ReactNode) => ReactNode)
    | null;
  /**
   * @zh 自定义样式
   * @en Custom style
   */
  className?: string;
  /**
   * @zh 自定义样式
   * @en Custom style
   */
  style?: React.CSSProperties;
  /**
   * @zh 自定义样式
   * @en Custom style
   */
  contentClassName?: string;
  /**
   * @zh 自定义样式
   * @en Custom style
   */
  contentStyle?: React.CSSProperties;
  /**
   * @zh 弹窗挂载的容器
   * @en The container to mount the modal
   * @default document.body
   */
  container?: HTMLElement;
}
