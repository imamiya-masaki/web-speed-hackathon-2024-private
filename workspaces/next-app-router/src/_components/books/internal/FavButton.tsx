import { Color, Space } from '../../src/foundation/styles/variables';
import NextImage from 'next/image';
interface ButtonProps {
  $outlined: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // クリックイベントハンドラーも追加可能
  AriaLabel: string;
}

const Button: React.FC<ButtonProps> = ({ $outlined, children, onClick, AriaLabel }) => {

  const style = {
    borderRadius: '50%',
    backgroundColor: $outlined ? Color.MONO_0 : Color.SubFavorite,
    border: 'none',
    padding: `${Space * 1}px`,
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }
  return (
    <button style={style} onClick={onClick} aria-label={AriaLabel}>
      {children}
    </button>
  );
};

const Favorite: React.FC = () => {
  return (<NextImage src="/color_set_icon/favorite_24dp.svg" width={24} height={24} alt="Favorite" />)
}

const FavoriteBorder: React.FC = () => {
  return (<NextImage src="/color_set_icon/favorite_border_24dp.svg" width={24} height={24} alt="FavoriteBorder"/>)
}

type Props = {
  enabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & JSX.IntrinsicElements['button'];

export const FavButton: React.FC<Props> = ({ enabled, onClick }) => {
  return (
    <Button
      $outlined={!enabled}
      AriaLabel={enabled ? 'お気に入りを解除する' : 'お気に入りに追加する'}
      onClick={onClick}
    >
      {enabled ? <Favorite/> : <FavoriteBorder />}
    </Button>
  );
};
