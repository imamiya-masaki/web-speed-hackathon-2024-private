import { animated, useSpring } from '@react-spring/web';
import { useCallback } from 'react';

import { Link } from '../../../../_components/src/foundation/components/Link';
import { Color, Radius, Space } from '../../../../_components/src/foundation/styles/variables';

import { FavButton } from './FavButton';

// コンポーネントの定義
const Wrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div style={{
    position: 'fixed',
    bottom: `${Space * 4}px`,
    left: '50%',
    transform: 'translateX(-50%)',
  }}>
    {children}
  </div>
);

const Content: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div style={{
    display: 'flex',
    gap: `${Space}px`,
    justifyContent: 'center',
    minWidth: '296px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    padding: `${Space}px`,
    borderRadius: `calc(${Radius.X_LARGE} + ${Space}px)`,
    backgroundColor: Color.MONO_A,
  }}>
    {children}
  </div>
);

// ReadLinkコンポーネントのpropsの型を直接定義
const ReadLink: React.FC<{to: string, children: React.ReactNode}> = ({ to, children }) => (
  <Link to={to} style={{
    display: 'block',
    borderRadius: Radius.X_LARGE,
    backgroundColor: Color.Primary,
    padding: `${Space * 2}px ${Space * 8}px`,
    fontWeight: 'bold',
    color: Color.MONO_100,
    flexShrink: 0,
  }}>
    {children}
  </Link>
);

type Props = {
  bookId: string;
  isFavorite: boolean;
  latestEpisodeId: string;
  onClickFav: () => void;
};

export const BottomNavigator: React.FC<Props> = ({ bookId, isFavorite, latestEpisodeId, onClickFav }) => {
  const props = useSpring({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  });

  const handleFavClick = useCallback(() => {
    onClickFav();
  }, [onClickFav]);

  return (
    <Wrapper>
      <animated.div style={props}>
        <Content>
          <FavButton enabled={isFavorite} onClick={handleFavClick} />
          <ReadLink to={`/books/${bookId}/episodes/${latestEpisodeId}`}>最新話を読む</ReadLink>
        </Content>
      </animated.div>
    </Wrapper>
  );
};
