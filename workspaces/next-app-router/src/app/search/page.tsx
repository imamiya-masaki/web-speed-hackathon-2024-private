'use client'

import { Suspense, useCallback, useEffect, useId, useState } from 'react';

import { useBookList } from '../../_components/src/features/book/hooks/useBookList';
import { Box } from '../../_components/src/foundation/components/Box';
import { Text } from '../../_components/src/foundation/components/Text';
import { Color, Space, Typography } from '../../_components/src/foundation/styles/variables';

import { Input } from '../../_components/search/internal/Input';
import { SearchResult } from '../../_components/search/internal/SearchResult';
import { ActionLayout } from '@/_components/src/foundation/layouts/ActionLayout';
export default async function Page () {
  const books = await useBookList({ query: {} });
  console.log('books', books)
  const searchResultsA11yId = useId();

  const [isClient, setIsClient] = useState(false);
  const [keyword, setKeyword] = useState('');

  const onChangedInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    },
    [setKeyword],
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ActionLayout>
    <Suspense fallback={<div>Loading...</div>}>
      <Box px={Space * 2}>
        <Input disabled={!isClient} onChange={onChangedInput} />
        <Box aria-labelledby={searchResultsA11yId} as="section" maxWidth="100%" py={Space * 2} width="100%">
          <Text color={Color.MONO_100} id={searchResultsA11yId} typography={Typography.NORMAL20} weight="bold">
            検索結果
          </Text>
          {keyword !== '' && <SearchResult books={books} keyword={keyword} />}
        </Box>
      </Box>
    </Suspense>
    </ActionLayout>
  );
};
// export { SearchPageWithSuspense as SearchPage };
