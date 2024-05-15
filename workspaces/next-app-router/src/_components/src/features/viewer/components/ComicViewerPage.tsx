
'use client'

import { useEffect, useMemo, useRef } from 'react';
import { useAsync } from 'react-use';

import { decrypt } from '../../../image-encrypt/src/decrypt';

import { getImageUrl } from '../../../lib/image/getImageUrl';


type Props = {
  pageImageId: string;
};

const IMAGE_WIDTH = 1075 as const;
const IMAGE_HEIGHT = 1518 as const;


export const ComicViewerPage = ({ pageImageId }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);

  // const image = new Image();
  // image.src = getImageUrl({
  //   format: 'avif',
  //   imageId: pageImageId,
  //   height: 800
  // });
  // useEffect(() => {
  //   console.log('ComicViewerPage', )
  //   const image = new Image();
  //   image.src = getImageUrl({
  //     format: 'avif',
  //     imageId: pageImageId,
  //   });
  //   // console.log('time', performance.now() - startTime)
  //   const canvas = ref.current!;
  //   if (canvas) {
  //     const ctx = canvas.getContext('2d')!;
  //     console.log('canvas')
  //     image.decode().then(() => {
  //       decrypt({
  //         exportCanvasContext: ctx,
  //         sourceImage: image,
  //         sourceImageInfo: {
  //           height:IMAGE_HEIGHT,
  //           width:IMAGE_WIDTH,
  //         },
  //       })
  //     });
  //   }
  // },[pageImageId, ref])
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
      const ctx = canvas.getContext('2d')!;

      decrypt({
        exportCanvasContext: ctx,
        sourceImage: image,
        sourceImageInfo: {
          height:IMAGE_HEIGHT,
          width:IMAGE_WIDTH,
        },
      })

      // const endTime = performance.now();
      // console.log('performanceTime', endTime - startTime, `endtime: ${endTime}, startTime: ${startTime}`)

      // console.log('decrypted')
      canvas.setAttribute('role', 'img');
    }

  }, [pageImageId, ref]);

  return <canvas 
  width={IMAGE_WIDTH}
  height={IMAGE_HEIGHT}
  className='comic-viewer-core-page'
  ref={ref}
  style={{ 
    height: '100%', 
    // width: '100%', 
    flexGrow: 0, 
    flexShrink: 0,
    aspectRatio: "1075 / 1518",
    // paddingLeft: "400px"
  }} 
/>
};
