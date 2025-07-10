export interface FullScreenLoadingProps {
  /**
   * @zh 是否显示 loading
   * @en Whether to show loading
   * @default false
   */
  loading?: boolean;
  /**
   * @zh 显示的文本，传入 null 则不显示
   * @en The text to display, pass null to hide
   * @default "Loading..."
   */
  text?: string | null;
  /**
   * @zh 局部 loading 包裹的子元素
   * @en The children of the loading
   */
  children?: React.ReactNode;
  /**
   * @zh 是否全屏显示
   * @en Whether to display fullscreen
   * @default true
   */
  fullscreen?: boolean;
  /**
   * @zh 类名
   * @en The class name of the loading
   */
  className?: string;
  /**
   * @zh 大小
   * @en The size of the loading
   * @default "default"
   */
  size?: 'small' | 'medium' | 'large' | 'default';
  /**
   * @zh 类型
   * @en The type of the loading
   * @default "circle"
   */
  type?: 'circle' | 'dots' | 'spin-dots';
}
