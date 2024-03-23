import styled from 'styled-components';

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Separator } from '../../../foundation/components/Separator';
import { Spacer } from '../../../foundation/components/Spacer';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled.li`
  width: 100%;
`;

const _Link = styled(Link)`
  width: 100%;
`;

const _ImgWrapper = styled.div`
  width: 64px;
  height: 64px;
  > img {
    border-radius: ${Radius.SMALL};
  }
`;

type Props = {
  bookId: string;
};



import { bookApiClient } from '../../../features/book/apiClient/bookApiClient';
import type { GetServerSideProps } from 'next';
import { Suspense } from 'react';

type serversideParameter = { bookData: Awaited<ReturnType<(typeof bookApiClient.fetch)>>, bookId: string}

export const getServerSideProps =  (async(context) =>{
   // ここでauthorApiClient.fetchを使用してデータをフェッチします。
  // optionsは、必要に応じてcontextから抽出またはハードコーディングされた値を使用します。
  const { bookId } = context.params!;
  const options = {bookId} as {bookId: string}; // 必要に応じてオプションを設定
  const data = await bookApiClient.fetch({params: options});

  // props経由でページにデータを渡します。
  return { props: { bookData: data, bookId: options.bookId } };
}) satisfies GetServerSideProps<serversideParameter>

export default function Page({ bookData }: serversideParameter) {
  const book = bookData

  const imageUrl = useImage({ height: 64, imageId: book.image.id, width: 64 });

  return (
    <Suspense>
    <_Wrapper>
      <_Link href={`/books/${book.id}`}>
        <Spacer height={Space * 1.5} />
        <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
          {imageUrl != null && (
            <_ImgWrapper>
              <Image alt={book.name} height={64} objectFit="cover" src={imageUrl} width={64} />
            </_ImgWrapper>
          )}
          <Box width="100%">
            <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
              <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                {book.name}
              </Text>
              <Text as="p" color={Color.MONO_80} typography={Typography.NORMAL12}>
                {book.description}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Spacer height={Space * 1.5} />
        <Separator />
      </_Link>
    </_Wrapper>
    </Suspense>
  );
};
