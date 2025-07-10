import React from 'react';
import omit from '../../utils/omit';
import { IconProps } from '../interface';
import { getPrefixCls } from '../../utils/getPrefixCls';

const classPrefix = getPrefixCls('icon');

const IconPaypalWhite = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <svg
      ref={ref}
      d="1749564648720"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-p-id="10907"
      stroke="currentColor"
      strokeWidth="4"
      className={`${classPrefix} ${classPrefix}-paypal-white`}
      {...omit(props, ['className'])}
    >
      <path
        d="M856.192 361.728c20.992 37.547 23.723 85.93 12.8 141.952-31.573 162.39-139.776 218.453-277.93 218.453h-21.334a34.347 34.347 0 0 0-33.877 29.014l-1.707 9.386-26.88 170.368-1.365 7.254a34.304 34.304 0 0 1-33.878 28.97H329.387a20.608 20.608 0 0 1-20.352-23.808L316.5 896h64.768l40.534-256.853h59.093c199.595 0 330.667-93.995 375.296-277.419zM729.899 144.555c32.512 37.034 41.941 77.226 32.085 140.16-0.81 5.248-1.707 10.24-2.645 15.36-31.36 160.981-131.798 232.362-296.79 232.362h-80.384c-26.88 0-50.09 17.664-57.77 42.752l-0.598-0.085-39.68 251.477H133.163a2.176 2.176 0 0 1-2.134-2.56l110.848-704.426A40.533 40.533 0 0 1 281.9 85.333h254.976c93.141 0 158.549 20.011 192.981 59.222z"
        fill="#ffffff"
        data-p-id="10908"
      ></path>
    </svg>
  )
);

IconPaypalWhite.displayName = 'IconPaypalWhite';

export default IconPaypalWhite;
