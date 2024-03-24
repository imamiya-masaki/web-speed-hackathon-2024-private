'use client'

import type * as CSS from 'csstype';

import { addUnitIfNeeded } from '../../lib/css/addUnitIfNeeded';

import { useAsync } from 'react-use';

import { getImageUrl } from '../../lib/image/getImageUrl';

const useImage = ({ height, imageId, width }: { height: number; imageId: string; width: number }) => {
  const { value } = useAsync(async () => {
    const dpr = window.devicePixelRatio;

    const img = new Image();
    img.src = getImageUrl({
      format: 'jpg',
      height: height * dpr,
      imageId,
      width: width * dpr,
    });

    await img.decode();

    const canvas = document.createElement('canvas');
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext('2d')!;

    // Draw image to canvas as object-fit: cover
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const targetAspect = width / height;

    if (imgAspect > targetAspect) {
      const srcW = img.naturalHeight * targetAspect;
      const srcH = img.naturalHeight;
      const srcX = (img.naturalWidth - srcW) / 2;
      const srcY = 0;
      ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, width * dpr, height * dpr);
    } else {
      const srcW = img.naturalWidth;
      const srcH = img.naturalWidth / targetAspect;
      const srcX = 0;
      const srcY = (img.naturalHeight - srcH) / 2;
      ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, width * dpr, height * dpr);
    }

    return canvas.toDataURL('image/png');
  }, [height, imageId, width]);

  return value;
};


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
  canvas?: { height: number; imageId: string; width: number }
} & JSX.IntrinsicElements['img'];

export const ImageRender: React.FC<Props> = ({ height, loading = 'eager', objectFit, width, canvas, ...rest }) => {
  if (!canvas) {
  return <ImageComponent {...rest} $height={height} $objectFit={objectFit} $width={width} loading={loading} />;
  } else {
    const imageUrl = useImage({ height: canvas.height, imageId: canvas.imageId, width: canvas.width });
    if (imageUrl != null) {
      return <ImageComponent src={imageUrl} {...rest} $height={height} $objectFit={objectFit} $width={width} loading={loading} />
    } else {
      return <></>
    }
  }
};
