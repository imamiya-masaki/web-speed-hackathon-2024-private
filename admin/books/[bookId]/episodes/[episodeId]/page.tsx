import { CircularProgress, Flex } from '@chakra-ui/react';

import { useBook } from '../../../../../../_components/src/admin/features/books/hooks/useBook';
import { EpisodeDetailEditor } from '../../../../../../_components/src/admin/features/episodes/components/EpisodeDetailEditor';
import { useEpisode } from '../../../../../../_components/src/admin/features/episodes/hooks/useEpisode';
import { CommonLayout } from '../../../../../../_components/src/admin/foundation/layouts/CommonLayout';

export default function Page ({params}:  {params: {bookId: string, episodeId: string}}) {
  const query = params;
  const bookId = typeof query.bookId === "string" ? query.bookId : ''
  const episodeId = typeof query.episodeId === "string" ? query.episodeId : ''

  const { data: book } = useBook({ bookId });
  const { data: episode } = useEpisode({ episodeId });

  if (book == null || episode == null) {
    return (
      <Flex align="center" height="100%" justify="center" width="100%">
        <CircularProgress isIndeterminate flexGrow={0} flexShrink={0} size={120} />
      </Flex>
    );
  }

  return <CommonLayout><EpisodeDetailEditor book={book} episode={episode} /></CommonLayout>;
};
