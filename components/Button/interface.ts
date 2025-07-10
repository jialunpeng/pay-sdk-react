import type { NativeProps } from '../utils/native-props';
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = {
  /**
   * @zh 按钮颜色
   * @en Button color
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * @zh 按钮填充类型
   * @en Button fill type
   */
  fill?: 'solid' | 'outline' | 'none';
  /**
   * @zh 按钮大小
   * @en Button size
   * @default 'middle'
   */
  size?: 'mini' | 'small' | 'middle' | 'large';
  /**
   * @zh 按钮是否块级
   * @en Button block
   * @default false
   */
  block?: boolean;
  /**
   * @zh 按钮是否禁用
   * @en Button disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @zh 按钮是否加载中
   * @en Button loading
   * @default false
   */
  loading?: boolean | 'auto';
  /**
   * @zh 加载中文字
   * @en Loading text
   */
  loadingText?: string;
  /**
   * @zh 加载中图标
   * @en Loading icon
   */
  loadingIcon?: ReactNode;
  /**
   * @zh 点击事件
   * @en Click event
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | Promise<void>;
  /**
   * @zh 按钮类型
   * @en Button type
   * @default 'button'
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * @zh 按钮形状
   * @en Button shape
   * @default 'default'
   */
  shape?: 'default' | 'rounded' | 'rectangular';
  /**
   * @zh 按钮内容
   * @en Button content
   */
  children?: ReactNode;
} & Pick<
  NativeButtonProps,
  'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id' | 'form'
> &
  NativeProps;

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null;
};
