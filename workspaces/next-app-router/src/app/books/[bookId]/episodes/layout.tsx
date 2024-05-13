import { Suspense } from 'react';

import { useBook } from '../../../../_components/src/features/book/hooks/useBook';
import  EpisodeListItem from '../../../../_components/src/features/episode/components/EpisodeListItem';
import { Box } from '../../../../_components/src/foundation/components/Box';
import { Flex } from '../../../../_components/src/foundation/components/Flex';
import { Space } from '../../../../_components/src/foundation/styles/variables';

import { ActionLayout } from '../../../../_components/src/foundation/layouts/ActionLayout';

export default async function Page ({params, children}: {params: {bookId: string}, children: React.ReactNode}){
  const { bookId } = params

  const { data: book } = await useBook({ params: { bookId } });

  return (
    <ActionLayout>
    <Box>
      <section aria-label="漫画ビューアー" className="separator_line">
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
      </section>

      <Box aria-label="エピソード一覧" as="section" px={Space * 2}>
        <Flex align="center" as="ul" direction="column" justify="center">
          {book.episodes.map((episode) => (
            // @ts-expect-error
            <EpisodeListItem key={episode.id} bookId={bookId} episodeId={episode.id} />
          ))}
        </Flex>
      </Box>
    </Box>
    </ActionLayout>
  );
};
