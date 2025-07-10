import React from 'react';
import omit from '../../utils/omit';
import { IconProps } from '../interface';
import { getPrefixCls } from '../../utils/getPrefixCls';

const classPrefix = getPrefixCls('icon');

const IconClose = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    d="1750733458208"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    data-p-id="4564"
    stroke="currentColor"
    strokeWidth="4"
    className={`${classPrefix} ${classPrefix}-close`}
    {...omit(props, ['className'])}
  >
    <path
      d="M0 0h1024v1024H0z"
      fill="#999999"
      fillOpacity="0"
      data-p-id="4565"
    ></path>
    <path
      d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z"
      fill="#999999"
      data-p-id="4566"
    ></path>
  </svg>
));

IconClose.displayName = 'IconClose';

export default IconClose;
