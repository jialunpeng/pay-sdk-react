import React from 'react';
import omit from '../../utils/omit';
import { IconProps } from '../interface';
import { getPrefixCls } from '../../utils/getPrefixCls';

const classPrefix = getPrefixCls('icon');

const IconCheck = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${classPrefix} ${classPrefix}-check`}
    {...omit(props, ['className'])}
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
));

IconCheck.displayName = 'IconCheck';

export default IconCheck;
