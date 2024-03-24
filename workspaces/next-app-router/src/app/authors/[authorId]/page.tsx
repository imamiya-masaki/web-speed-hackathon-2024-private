import "./authorsImage.css"

import { Suspense } from 'react';
import invariant from 'tiny-invariant';

import { useAuthor } from '../../../_components/src/features/author/hooks/useAuthor';
import  BookListItem from '../../../_components/src/features/book/components/BookListItem';
import { Box } from '../../../_components/src/foundation/components/Box';
import { Flex } from '../../../_components/src/foundation/components/Flex';
import { Image } from '../../../_components/src/foundation/components/Image';
import { Separator } from '../../../_components/src/foundation/components/Separator';
import { Spacer } from '../../../_components/src/foundation/components/Spacer';
import { Text } from '../../../_components/src/foundation/components/Text';
import { useImage } from '../../../_components/src/foundation/hooks/useImage';
import { Color, Space, Typography } from '../../../_components/src/foundation/styles/variables';


const HeadingWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <section style={{
    display: 'grid',
    alignItems: 'start',
    gridTemplateColumns: 'auto 1fr',
    paddingBottom: `${Space * 2}px`,
    gap: `${Space * 2}px`,
  }}>
    {children}
  </section>
);

const AuthorImageWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="authorImageWrapper">
    {children}
  </div>
);


export default async function Page ({ params: {authorId} }: {params: { authorId: string }}) {
  invariant(authorId);

  const { data: author } = await useAuthor({ params: { authorId } });

  const imageUrl = useImage({ height: 128, imageId: author.image.id, width: 128 });
  const bookListA11yId = `bookListA11yId`;

  return (
    <Suspense fallback={null}>
    <Box height="100%" px={Space * 2}>
      <HeadingWrapper aria-label="作者情報">
        {imageUrl != null && (
          <AuthorImageWrapper>
            <Image key={author.id} alt={author.name} height={128} objectFit="cover" src={imageUrl} width={128} />
          </AuthorImageWrapper>
        )}

        <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
          <Text color={Color.MONO_100} typography={Typography.NORMAL20} weight="bold">
            {author.name}
          </Text>
          <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL14}>
            {author.description}
          </Text>
        </Flex>
      </HeadingWrapper>

      <Separator />

      <Box aria-labelledby={bookListA11yId} as="section" maxWidth="100%" py={Space * 2} width="100%">
        <Text as="h2" color={Color.MONO_100} id={bookListA11yId} typography={Typography.NORMAL20} weight="bold">
          作品一覧
        </Text>

        <Spacer height={Space * 2} />

        <Flex align="center" as="ul" direction="column" justify="center">
          {author.books.map((book) => (
            //  @ts-expect-error Server Component
            <BookListItem key={book.id} bookId={book.id} />
          ))}
          {author.books.length === 0 && (
            <>
              <Spacer height={Space * 2} />
              <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
                この作者の作品はありません
              </Text>
            </>
          )}
        </Flex>
      </Box>
    </Box>
    </Suspense>
  );
};