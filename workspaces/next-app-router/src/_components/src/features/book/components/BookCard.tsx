'use client'

import './bookcard.css'

import { ReactNode, Suspense } from 'react';

import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Space, Typography } from '../../../foundation/styles/variables';
import { useBook } from '../hooks/useBook';

type Props = {
  bookId: string;
};


const Wrapper:React.FC<{href: string, children: ReactNode}> = ({ href, children }) => {
  return (
    <Link to={href} className="bookcard-wrapper">
      {children}
    </Link>
  );
};

const ImgWrapper: React.FC<{ children: ReactNode}> = ({ children }) => {
  return <div className="bookcard-imgWrapper">{children}</div>;
};

const AvatarWrapper: React.FC<{ children: ReactNode}> = ({ children }) => {
  return <div className="bookcard-avatarWrapper">{children}</div>;
};

// @ts-ignore
const BookCard: React.FC<Props>= async({ bookId }) => {
  const { data: book } = await useBook({ params: { bookId } });

  const imageUrl = useImage({ height: 128, imageId: book.image.id, width: 192 });
  const authorImageUrl = useImage({ height: 32, imageId: book.author.image.id, width: 32 });

  return (
    <Wrapper href={`/books/${bookId}`}>
      {imageUrl != null && (
        <ImgWrapper>
          <Image alt={book.image.alt} height={128} objectFit="cover" src={imageUrl} width={192} />
        </ImgWrapper>
      )}

      <Flex align="stretch" direction="column" flexGrow={1} gap={Space * 1} justify="space-between" p={Space * 2}>
        <Text color={Color.MONO_100} typography={Typography.NORMAL14} weight="bold">
          {book.name}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          {authorImageUrl != null && (
            <AvatarWrapper>
              <Image alt={book.author.name} height={32} objectFit="cover" src={authorImageUrl} width={32} />
            </AvatarWrapper>
          )}
          <Text color={Color.MONO_100} typography={Typography.NORMAL12}>
            {book.author.name}
          </Text>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

const BookCardWithSuspense: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={null}>
      <BookCard {...props} />
    </Suspense>
  );
};

export { BookCardWithSuspense as BookCard };