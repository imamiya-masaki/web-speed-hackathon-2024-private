import "./cover_section.css"

import Link from 'next/link';
import { Text } from '../src/foundation/components/Text';
import { Color, Typography } from '../src/foundation/styles/variables';

import { HeroImage } from './HeroImage';

import NextImage from 'next/image';

// // _Wrapperコンポーネントのスタイル
// const wrapperStyle = {
//   width: `calc(100% + ${Space * 4}px)`,
//   marginLeft: `-${Space * 2}px`,
//   marginRight: `-${Space * 2}px`,
//   marginTop: `-${Space * 2}px`,
//   position: 'relative' as any,
// };

// // _SearchLinkコンポーネントのスタイル
// const searchLinkStyle = {
//   position: 'absolute' as any,
//   right: `${Space * 1}px`,
//   top: 0,
//   padding: `${Space * 1}px ${Space * 2}px`,
//   border: `2px solid ${Color.MONO_A}`,
//   borderRadius: Radius.X_LARGE,
//   backdropFilter: 'blur(12px)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   transform: 'translateY(50%)',
// };

// Propsの型定義
interface WrapperProps {
  children: React.ReactNode;
}

interface SearchLinkProps {
  href: string;
  children: React.ReactNode;
}


const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="wrapperStyle">{children}</div>;
};

const SearchLink: React.FC<SearchLinkProps> = ({ href, children }) => {
  return <Link href={href} className="search-style">{children}</Link>;
};



const SearchSVG: React.FC = () => {
  return (<NextImage src="/color_set_icon/search_24dp.svg" width={24} height={24} alt="Search" />)
}


export const CoverSection: React.FC = () => {
  return (
    <Wrapper>
      <HeroImage />
      <SearchLink href="/search">
        <SearchSVG />
        <Text color={Color.MONO_A} typography={Typography.NORMAL16}>
          検索
        </Text>
      </SearchLink>
    </Wrapper>
  );
};
