import React from 'react';
import omit from '../../utils/omit';
import { IconProps } from '../interface';
import { getPrefixCls } from '../../utils/getPrefixCls';

const classPrefix = getPrefixCls('icon');

const IconPix = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`${classPrefix} ${classPrefix}-pix`}
    {...omit(props, ['className'])}
  >
    <path
      d="M18.5 4.87a8.5 8.5 0 0 1 0 14.26L13.23 23a1.5 1.5 0 0 1-2.46 0L5.5 19.13A8.5 8.5 0 0 1 5.5 4.87L10.77 1a1.5 1.5 0 0 1 2.46 0l5.27 3.87z"
      fill="#32BCAD"
    />
    <path
      d="M13.23 1a1.5 1.5 0 0 0-2.46 0L5.5 4.87a8.5 8.5 0 0 0 0 14.26l5.27 3.87a1.5 1.5 0 0 0 2.46 0l5.27-3.87a8.5 8.5 0 0 0 0-14.26L13.23 1z"
      fill="none"
      stroke="#32BCAD"
      strokeWidth="0.5"
    />
    <path
      d="M9.5 7.5h5l-5 9h5"
      fill="none"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

IconPix.displayName = 'IconPix';

export default IconPix;
