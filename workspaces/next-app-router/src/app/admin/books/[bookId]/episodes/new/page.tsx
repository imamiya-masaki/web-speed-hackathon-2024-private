import { CircularProgress, Flex } from '@chakra-ui/react';

import { useBook } from '../../../../../../_components/src/admin/features/books/hooks/useBook';
import { EpisodeDetailEditor } from '../../../../../../_components/src/admin/features/episodes/components/EpisodeDetailEditor';
import { CommonLayout } from '../../../../../../_components/src/admin/foundation/layouts/CommonLayout';

export default function Page(props: {bookId: string}) {
  const query = props;
  const bookId = typeof query.bookId === "string" ? query.bookId : ''
  const { data: book } = useBook({ bookId });

  if (book == null) {
    return (
      <CommonLayout><Flex align="center" height="100%" justify="center" width="100%">
        <CircularProgress isIndeterminate flexGrow={0} flexShrink={0} size={120} />
      </Flex></CommonLayout>
    );
  }

  return <CommonLayout><EpisodeDetailEditor book={book} /></CommonLayout>;
};
