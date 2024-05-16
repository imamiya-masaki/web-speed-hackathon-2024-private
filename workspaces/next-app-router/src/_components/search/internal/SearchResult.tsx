import { Suspense, useMemo } from 'react';


import { useBookList } from '../../../_components/src/features/book/hooks/useBookList';
import BookListItem from '../../src/features/book/components/BookListItem';
import { Text } from '../../src/foundation/components/Text';
import { Color, Typography } from '../../src/foundation/styles/variables';

type Props = {
  keyword: string;
};

//@ts-expect-error
export const SearchResult: React.FC<Props> = async({  keyword }) => {
  const relatedBooks = await useMemo(async() => {
    console.log('relatedBooks:keyword', keyword)
    if (keyword) {
      return useBookList({ query: {keyword} })
    } else {
      return []
    }
  }, [keyword]);



  return (
    <>
    {relatedBooks?.map?.((book) => (
      //  @ts-expect-error Server Component
      <BookListItem key={book.id} bookId={book.id} bookData={book}/>
    ))}
    {relatedBooks?.length === 0 && keyword && (
      <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
        関連作品は見つかりませんでした
      </Text>
    )}
    </>
  );
};
