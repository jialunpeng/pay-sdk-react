import React from 'react';
import omit from '../../utils/omit';
import { IconProps } from '../interface';
import { getPrefixCls } from '../../utils/getPrefixCls';

const classPrefix = getPrefixCls('icon');

const IconStripe = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    d="1749699330712"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    data-p-id="12279"
    stroke="currentColor"
    strokeWidth="4"
    className={`${classPrefix} ${classPrefix}-stripe`}
    {...omit(props, ['className'])}
  >
    <path
      d="M128 0a128 128 0 0 0-128 128v768a128 128 0 0 0 128 128h768a128 128 0 0 0 128-128V128a128 128 0 0 0-128-128z m398.464 344.64c-37.376 0-59.968 10.496-59.968 37.952 0 29.952 38.848 43.136 87.04 59.52 78.592 26.56 182.016 61.632 182.464 191.552C736 759.552 635.136 832 488.32 832a490.784 490.784 0 0 1-195.744-41.312l3.168 1.248v-167.424c59.264 32.384 134.08 56.32 192.64 56.32 39.488 0 67.712-10.56 67.712-42.944 0-33.152-42.112-48.32-92.992-66.624C385.664 543.36 288 508.16 288 391.04 288 266.56 383.232 192 526.464 192l4.192-0.032c61.472 0 120.192 11.872 173.952 33.44l-3.136-1.12v165.312c-53.632-28.8-121.344-44.992-174.976-44.992z"
      data-p-id="12280"
      fill="#5f59d7"
    ></path>
  </svg>
));

IconStripe.displayName = 'IconStripe';

export default IconStripe;
