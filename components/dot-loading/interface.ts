import type { NativeProps } from '../utils/native-props';

export type DotLoadingProps = {
  /**
   * @zh 颜色
   * @en Color
   */
  color?: 'default' | 'primary' | 'white' | (string & {});
} & NativeProps;
