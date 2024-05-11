// import { useState} from 'react';

import NextImage from 'next/image'

// _Wrapper コンポーネントのスタイルを JavaScript オブジェクトとして定義
const wrapperStyle: React.CSSProperties = {
  aspectRatio: '16 / 9',
  width: '100%',
};

// _Image コンポーネントのスタイルを JavaScript オブジェクトとして定義
const imageStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '100%',
};

// Wrapper コンポーネントの定義
const Wrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return <div style={wrapperStyle}>{children}</div>;
};


export const HeroImage: React.FC = () => {
  const imageInfo = {dpr: 1, height: (4096 / 16) * 9, width: 4096, src: "/assets/HeroImageSrc/HeroImageSrc-1.webp"}
  // const [imageInfo, setImageInfo] = useState<{"width": number, "height": number, dpr: number, src: string}>({dpr: 1, height: (4096 / 16) * 9, width: 4096, src: "/assets/HeroImageSrc/HeroImageSrc-1.png"})

  // ↓そもそもdprなんだから、srcsetでやるべき案件なので、nexrimageに任せるためコメントアウト
  // useEffect(() => {
  //   const clientDpr = window.devicePixelRatio
  //   if (clientDpr && imageInfo.dpr !== clientDpr) {
  //     const width = 4096 / clientDpr;
  //     const height = (width / 16) * 9;
  //     // 基本的には1 ~ 4ぐらいで治るはず
  //     const targetSrc = clientDpr <= 13 ? `/assets/HeroImageSrc/HeroImageSrc-${clientDpr}.png` : `/assets/HeroImageSrc/HeroImageSrc-${13}.png`
  //     setImageInfo({
  //       dpr: clientDpr,
  //       height,
  //       src: targetSrc,
  //       width
  //     })
  //   }
  //   const resize = () => {
  //     const clientDpr = window.devicePixelRatio
  //     if (clientDpr && imageInfo.dpr !== clientDpr) {
  //       const width = 4096 / clientDpr;
  //       const height = (width / 16) * 9;
  //       // 基本的には1 ~ 4ぐらいで治るはず
  //       const targetSrc = clientDpr <= 13 ? `/assets/HeroImageSrc/HeroImageSrc-${clientDpr}.png` : `/assets/HeroImageSrc/HeroImageSrc-${13}.png`
  //       setImageInfo({
  //         dpr: clientDpr,
  //         height,
  //         src: targetSrc,
  //         width
  //       })
  //     }
  //   };

  //   window?.addEventListener('resize', resize);

  //   return () => {
  //     window?.removeEventListener('resize', resize);
  //   };

  // })
  return (
    <Wrapper>
      <NextImage style={imageStyle} src={imageInfo.src} fill={true} alt="Cyber TOON" loading={"eager"}/>
    </Wrapper>
  );
};
