import "./books-bookid.css"
import { Suspense } from 'react';

import { useBook } from '../../../_components/src/features/book/hooks/useBook';
import  EpisodeListItem from '../../../_components/src/features/episode/components/EpisodeListItem';
import { useEpisodeList } from '../../../_components/src/features/episode/hooks/useEpisodeList';
import { Box } from '../../../_components/src/foundation/components/Box';
import { Flex } from '../../../_components/src/foundation/components/Flex';
import { ImageRender } from '../../../_components/src/foundation/components/Image';
import { Link } from '../../../_components/src/foundation/components/Link';
import { Spacer } from '../../../_components/src/foundation/components/Spacer';
import { Text } from '../../../_components/src/foundation/components/Text';
import { Color, Space, Typography } from '../../../_components/src/foundation/styles/variables';

import { BottomNavigator } from '../../../_components/books/internal/BottomNavigator';
import { ActionLayout } from '../../../_components/src/foundation/layouts/ActionLayout';
import React from "react";

const headingWrapperStyle = {
  display: 'grid',
  alignItems: 'start',
  gridTemplateColumns: 'auto 1fr',
  paddingBottom: `${Space * 2}px`,
  gap: `${Space * 2}px`,
};

const authorWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  gap: `${Space}px`,
};

const HeadingWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <section style={headingWrapperStyle} aria-label="作品情報">
    {children}
  </section>
);

const AuthorWrapper: React.FC<{children: React.ReactNode; to: string}> = ({ children, to }) => (
  <Link to={to} style={authorWrapperStyle}>
    {children}
  </Link>
);

const AvatarWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="book-bookid-avatarWrapper">
    {children}
  </div>
);


 const EpisodeListDOM = async({bookId}: {bookId: string}) => {
  console.log('bookId', bookId)
  const  episodeList  = await useEpisodeList({ query: { bookId } });

  console.log({episodeList})
  const latestEpisode = episodeList?.find((episode: any) => episode.chapter === 1);
  return (
    <>
       <BottomNavigator
        bookId={bookId}
        latestEpisodeId={latestEpisode?.id ?? ''}
      />
      <section aria-label="エピソード一覧">
        <Flex align="center" as="ul" direction="column" justify="center">
          {episodeList.map((episode) => (
            // @ts-expect-error
            <EpisodeListItem key={episode.id} bookId={bookId} episodeId={episode.id} episodeInfo={episode}/>
          ))}
          {episodeList.length === 0 && (
            <>
              <Spacer height={Space * 2} />
              <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
                この作品はまだエピソードがありません
              </Text>
            </>
          )}
        </Flex>
      </section>
    </>
  )
}

export default async function Page ({params}: {params: {bookId: string}}){
  const { bookId } = params
  console.log('bookId', bookId)
  const { data: book } = await useBook({ params: { bookId } });

  return (
    <ActionLayout>
    <Box height="100%" position="relative" px={Space * 2}>
      <HeadingWrapper>
          <ImageRender alt={book.name} height={256} objectFit="cover" width={192} priority={true} loading={"eager"} canvas={{ height: 256, imageId: book.image.id, width: 192 }}/>
        <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-end">
          <Box>
            <Text color={Color.MONO_100} typography={Typography.NORMAL20} weight="bold">
              {book.name}
            </Text>
            <Spacer height={Space * 1} />
            <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL14}>
              {book.description}
            </Text>
          </Box>

          <Spacer height={Space * 1} />

          <AuthorWrapper to={`/authors/${book.author.id}`}>
              <AvatarWrapper>
                <ImageRender alt={book.author.name} height={32} objectFit="cover" priority={true} loading={"eager"} width={32} canvas={{ height: 32, imageId: book.author.image.id, width: 32 }}/>
              </AvatarWrapper>
            <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
              {book.author.name}
            </Text>
          </AuthorWrapper>
        </Flex>
      </HeadingWrapper>

     <Suspense fallback={null}>
      {/*/ @ts-ignore */}
        <EpisodeListDOM bookId={bookId}/>
     </Suspense>
    </Box>
    </ActionLayout>
  );
};

// export { BookDetailPageWithSuspense as BookDetailPage };
