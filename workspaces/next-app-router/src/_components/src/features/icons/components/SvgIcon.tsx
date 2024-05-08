// import Favorite from '@mui/icons-material/Favorite';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Search from '@mui/icons-material/Search';
// import NavigateNext from '@mui/icons-material/NavigateNext';
// import Close from '@mui/icons-material/Close';
// import ArrowBack from '@mui/icons-material/ArrowBack';

import { ReactNode } from "react";

const candidateType = ["Favorite", "FavoriteBorder", "Search", "NavigateNext", "Close", "ArrowBack"] as const;
type candidateType = (typeof candidateType)[number];
type Props = {
  color: string;
  height: number;
  type: candidateType;
  width: number;
};
// typeを列挙
// tree shakingを効かすため

// 一応 サイズを受け取るが、iconの関係上それ用のサイズを用意している
const Favorite: React.FC<{height: number, width: number, color: string}> = ({height, width, color}) => {
  return (<img src="/color_set_icon/favorite_24dp.svg" width={width} height={height} color={color}/>)
}

const FavoriteBorder: React.FC<{height: number, width: number, color: string}> = ({height, width, color}) => {
  return (<img src="/color_set_icon/favorite_border_24dp.svg" width={width} height={height} color={color}/>)
}

const Search: React.FC<{height: number, width: number, color: string}> = ({height, width, color}) => {
  return (<img src="/color_set_icon/search_24dp.svg" width={width} height={height} color={color}/>)
}

const NavigateNext: React.FC<{height: number, width: number, color: string}> = ({height, width, color}) => {
  return (<img src="/color_set_icon/navigate_next_40dp.svg" width={width} height={height} color={color}/>)
}

const Close: React.FC<{height: number, width: number, color: string}> = ({height, width, color}) => {
  return (<img src="/color_set_icon/close_40dp.svg" width={width} height={height} color={color}/>)
}

const ArrowBack: React.FC<{height: number, width: number, color: string}> = ({height, width, color}) => {
  return (<img src="/color_set_icon/arrow_back_40dp.svg" width={width} height={height} color={color}/>)
}


export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  let Icon: candidateType; 
  const style = { color, height, width };
  switch(type) {
    case "Favorite":
      return <Favorite height={height} width={width} color={color} />
    case "FavoriteBorder":
      return <FavoriteBorder height={height} width={width} color={color} />
    case "Search":
      return <Search height={height} width={width} color={color}  />;
    case "NavigateNext":
      return <NavigateNext height={height} width={width} color={color} />;
    case "Close":
      return <Close height={height} width={width} color={color} />;
    case "ArrowBack":
      return <ArrowBack height={height} width={width} color={color} />;
    default:
      return <span>Icon not found</span>;
  }
};
