import './rankingcard.css'

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { ImageRender } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Spacer } from '../../../foundation/components/Spacer';
import { Text } from '../../../foundation/components/Text';
import { Color, Space, Typography } from '../../../foundation/styles/variables';

import NextImage from 'next/image';

const WrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <li style={{ width: '100%' }} className='separator_line'>
    {children}
  </li>
);

const LinkComponent: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} style={{ width: '100%' }} >
    {children}
  </Link>
);

const ImgWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="RankingCardImgWrapper" style={{ width: '96px', height: '96px' }}>
    {children}
  </div>
);

const AvatarWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="RankingCardAvatarWrapper" style={{ width: '32px', height: '32px' }}>
    {children}
  </div>
);

const NavigateNextSVG: React.FC = () => {
  return (<NextImage src="/color_set_icon/navigate_next_40dp.svg" width={32} height={32} alt="NavigateNext" />)
}


type RankingBookCardInfo = {
  id: string;
  name: string;
  image: {
    id: string;
  }
  description: string;
  author: {
    name: string;
    image: {
      id: string;
    }
  }
}

type Props = {
  bookId: string;
  bookData: RankingBookCardInfo;
};

export default function RankingCard ({ bookData }: Props){
  const book = bookData;

  return (
    <WrapperComponent>
      <LinkComponent to={`/books/${book.id}`}>
        <Spacer height={Space * 1.5} />
        <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
            <ImgWrapperComponent>
              <ImageRender alt={book.name} height={96} loading="lazy" objectFit="cover" width={96} canvas={{ height: 96, imageId: book.image.id, width: 96 }}/>
            </ImgWrapperComponent>
          <Box width="100%">
            <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
              <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                {book.name}
              </Text>
              <Text as="p" color={Color.MONO_80} typography={Typography.NORMAL12}>
                {book.description}
              </Text>
            </Flex>

            <Spacer height={Space * 1} />

            <Flex align="center" gap={Space * 1} justify="flex-end">
                <AvatarWrapperComponent>
                  <ImageRender
                    alt={`${book.author.name}のアイコン`}
                    height={32}
                    loading="lazy"
                    objectFit="cover"
                    width={32}
                    canvas={{ height: 32, imageId: book.author.image.id, width: 32 }}
                  />
                </AvatarWrapperComponent>
              <Text color={Color.MONO_80} typography={Typography.NORMAL12}>
                {book.author.name}
              </Text>
            </Flex>

            <Spacer height={Space * 1} />

            <Flex align="center" justify="flex-end">
              <Text color={Color.Secondary} typography={Typography.NORMAL14} weight="bold">
                この漫画を読む
              </Text>
              <NavigateNextSVG />
              {/* <SvgIcon color={Color.Secondary} height={32} type="NavigateNext" width={32} /> */}
            </Flex>
          </Box>
        </Flex>
        <Spacer height={Space * 1.5} />
      </LinkComponent>
    </WrapperComponent>
  );
};
