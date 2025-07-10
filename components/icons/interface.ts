import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  style?: React.CSSProperties;
  spin?: boolean;
}
