import React from 'react';
import omit from '../../utils/omit';
import { IconProps } from '../interface';
import { getPrefixCls } from '../../utils/getPrefixCls';

const classPrefix = getPrefixCls('icon');

const IconCopy = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    className={`${classPrefix} ${classPrefix}-copy`}
    {...omit(props, ['className'])}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path
      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      strokeLinecap="round"
    />
  </svg>
));

IconCopy.displayName = 'IconCopy';

export default IconCopy;
