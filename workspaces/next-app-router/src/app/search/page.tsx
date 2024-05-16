'use client'

import { Suspense,  useState } from 'react';

import { Box } from '../../_components/src/foundation/components/Box';
import { Text } from '../../_components/src/foundation/components/Text';
import { Color, Space, Typography } from '../../_components/src/foundation/styles/variables';

import { Input } from '../../_components/search/internal/Input';
import { SearchResult } from '../../_components/search/internal/SearchResult';
import { ActionLayout } from '../../_components/src/foundation/layouts/ActionLayout';

import { useDebouncedCallback } from 'use-debounce';

import { Flex } from '../../_components/src/foundation/components/Flex';

const SearchContent: React.FC<{keyword: string}> = ({keyword}) => {
// 
  // console.log('books', books)
  return (
    <Flex align="center" as="ul" direction="column" justify="center">
  <Suspense
    fallback={
      <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
        「{keyword}」を検索中...
      </Text>
    }
  >
    <SearchResult keyword={keyword}/>
      </Suspense>
      </Flex>
      )
}


export default function Page () {
  const searchResultsA11yId = `searchResultsA11yId`;

  // const [isClient, setIsClient] = useState(false);
  const [keyword, setKeyword] = useState('');

  // const onChangedInput = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setKeyword(event?.target?.value ?? '');
  //     console.log('keyword', keyword)
  //   },
  //   [setKeyword],
  // );

  // inputのonchangeをまびく
  const onChangeInput = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event?.target?.value ?? '');
    console.log('keyword', keyword)
  },200)

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <ActionLayout>
      <Box px={Space * 2}>
        <Input  onChange={onChangeInput} />
        <Box aria-labelledby={searchResultsA11yId} as="section" maxWidth="100%" py={Space * 2} width="100%">
          <Text color={Color.MONO_100} id={searchResultsA11yId} typography={Typography.NORMAL20} weight="bold">
            検索結果
          </Text>
          <SearchContent keyword={keyword} />
        </Box>
      </Box>
    </ActionLayout>
  );
};