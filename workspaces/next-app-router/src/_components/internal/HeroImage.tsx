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
  // })
  return (
    <Wrapper>
      <NextImage style={imageStyle} src={imageInfo.src} fill={true} alt="Cyber TOON" loading={"eager"} priority={true}/>
    </Wrapper>
  );
};
