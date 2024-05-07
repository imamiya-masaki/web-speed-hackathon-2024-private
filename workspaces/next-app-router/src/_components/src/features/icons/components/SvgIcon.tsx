import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Search from '@mui/icons-material/Search';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';

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


export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  let Icon: candidateType; 
  const style = { color, height, width };
  switch(type) {
    case "Favorite":
      return <Favorite style={style}/>
    case "FavoriteBorder":
      return <FavoriteBorder style={style}/>
    case "Search":
      return <Search style={style} />;
    case "NavigateNext":
      return <NavigateNext style={style} />;
    case "Close":
      return <Close style={style} />;
    case "ArrowBack":
      return <ArrowBack style={style} />;
    default:
      return <span>Icon not found</span>;
  }
};
