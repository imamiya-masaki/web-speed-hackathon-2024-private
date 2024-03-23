import { styled } from 'styled-components';

import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';
const _Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.SMALL};
  background-color: ${Color.MONO_A};
  max-width: 192px;
  border: 1px solid ${Color.MONO_30};
`;

const _ImgWrapper = styled.div`
  > img {
    border-radius: ${Radius.SMALL} ${Radius.SMALL} 0 0;
  }
`;

const _AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  > img {
    border-radius: 50%;
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


export default function Page({ bookData, bookId }: serversideParameter) {
  const book = bookData
  const imageUrl = useImage({ height: 128, imageId: book.image.id, width: 192 });
  const authorImageUrl = useImage({ height: 32, imageId: book.author.image.id, width: 32 });

  return (
    <Suspense>
    <_Wrapper href={`/books/${bookId}`}>
      {imageUrl != null && (
        <_ImgWrapper>
          <Image alt={book.image.alt} height={128} objectFit="cover" src={imageUrl} width={192} />
        </_ImgWrapper>
      )}

      <Flex align="stretch" direction="column" flexGrow={1} gap={Space * 1} justify="space-between" p={Space * 2}>
        <Text color={Color.MONO_100} typography={Typography.NORMAL14} weight="bold">
          {book.name}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          {authorImageUrl != null && (
            <_AvatarWrapper>
              <Image alt={book.author.name} height={32} objectFit="cover" src={authorImageUrl} width={32} />
            </_AvatarWrapper>
          )}
          <Text color={Color.MONO_100} typography={Typography.NORMAL12}>
            {book.author.name}
          </Text>
        </Flex>
      </Flex>
    </_Wrapper>
    </Suspense>
  );
};
