'use client'

import type * as CSS from 'csstype';

import { addUnitIfNeeded } from '../../lib/css/addUnitIfNeeded';

const ImageComponent: React.FC<{
  src?: string;
  alt?: string;
  $height: number | string;
  $objectFit:CSS.Property.ObjectFit;
  $width: number | string;
  loading:  "eager" | "lazy"
}> = ({ src, alt, $height, $objectFit, $width, loading }) => (
  <img 
    src={src} 
    alt={alt} 
    style={{ 
      objectFit: $objectFit,
      width: addUnitIfNeeded($width),
      height: addUnitIfNeeded($height),
      display: 'block',
    }} 
    loading={loading}
  />
);

type Props = {
  height: number | string;
  objectFit: CSS.Property.ObjectFit;
  width: number | string;
} & JSX.IntrinsicElements['img'];

export const Image: React.FC<Props> = ({ height, loading = 'eager', objectFit, width, ...rest }) => {
  return <ImageComponent {...rest} $height={height} $objectFit={objectFit} $width={width} loading={loading} />;
};
