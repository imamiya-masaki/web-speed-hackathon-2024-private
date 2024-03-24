'use client'

import './featurecard.css'
import { Suspense } from 'react';

import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';
import { useBook } from '../../book/hooks/useBook';

const WrapperComponent: React.FC<{to: string; children: React.ReactNode}> = ({ to, children }) => (
  <Link to={to} style={{
    display: 'grid',
    gap: `${Space}px`,
    backgroundColor: Color.MONO_A,
    padding: `${Space * 1.5}px`,
    borderRadius: Radius.SMALL,
    gridTemplateColumns: 'auto 1fr',
    flexShrink: 0,
    border: `1px solid ${Color.MONO_30}`,
  }}>
    {children}
  </Link>
);

const ImgWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="FeatureCardImgWrapper" style={{ width: '96px', height: '96px' }}>
    {children}
  </div>
);

const ContentWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div style={{
    display: 'grid',
    gap: `${Space}px`,
    maxWidth: '200px',
    width: '100%',
  }}>
    {children}
  </div>
);

const AvatarWrapperComponent: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="FeatureCardAvatarWrapper" style={{ width: '32px', height: '32px' }}>
    {children}
  </div>
);

type Props = {
  bookId: string;
};

export default async function FeatureCard ({ bookId }: {bookId: string}){
  const { data: book } = await useBook({ params: { bookId } });

  const imageUrl = useImage({ height: 96, imageId: book.image.id, width: 96 });
  const authorImageUrl = useImage({ height: 32, imageId: book.author.image.id, width: 32 });

  return (
    <Suspense fallback={null}>
    <WrapperComponent to={`/books/${bookId}`}>
      {imageUrl != null && (
        <ImgWrapperComponent>
          <Image alt={book.image.alt} height={96} objectFit="cover" src={imageUrl} width={96} />
        </ImgWrapperComponent>
      )}

      <ContentWrapperComponent>
        <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
          {book.name}
        </Text>
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL14}>
          {book.description}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          {authorImageUrl != null && (
            <AvatarWrapperComponent>
              <Image alt={book.author.name} height={32} objectFit="cover" src={authorImageUrl} width={32} />
            </AvatarWrapperComponent>
          )}
          <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
            {book.author.name}
          </Text>
        </Flex>
      </ContentWrapperComponent>
    </WrapperComponent>
    </Suspense>
  );
};