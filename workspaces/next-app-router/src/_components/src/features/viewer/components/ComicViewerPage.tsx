
'use client'

import { useMemo, useRef } from 'react';
import { useAsync } from 'react-use';

import { decrypt } from '../../../image-encrypt/src/decrypt';

import { getImageUrl } from '../../../lib/image/getImageUrl';


type Props = {
  pageImageId: string;
};

export const ComicViewerPage = ({ pageImageId }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useAsync(async () => {
    const startTime = performance.now()
    console.log('ComicViewerPage', )
    const image = new Image();
    image.src = getImageUrl({
      format: 'avif',
      imageId: pageImageId,
    });
    await image.decode();
    // console.log('time', performance.now() - startTime)
    const canvas = ref.current!;
    if (canvas) {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      // canvas.width = 500
      // canvas.height = 700
      console.log('width.height', image.naturalHeight, image.naturalWidth)
      const ctx = canvas.getContext('2d')!;

      decrypt({
        exportCanvasContext: ctx,
        sourceImage: image,
        sourceImageInfo: {
          height: image.naturalHeight,
          width: image.naturalWidth,
        },
      })

      const endTime = performance.now();
      // console.log('performanceTime', endTime - startTime, `endtime: ${endTime}, startTime: ${startTime}`)

      // console.log('decrypted')
      canvas.setAttribute('role', 'img');
    }

  }, [pageImageId, ref]);

  return <canvas 
  ref={ref}
  style={{ 
    height: '100%', 
    width: 'auto', 
    flexGrow: 0, 
    flexShrink: 0,
  }} 
/>
};
