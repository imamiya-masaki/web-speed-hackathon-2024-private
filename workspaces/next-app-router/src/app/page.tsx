import { BookCard } from '../_components/src/features/book/components/BookCard';
import FeatureCard from '../_components/src/features/feature/components/FeatureCard';
import { useFeatureList } from '../_components/src/features/feature/hooks/useFeatureList';
import  RankingCard from '../_components/src/features/ranking/components/RankingCard';
import { useRankingList } from '../_components/src/features/ranking/hooks/useRankingList';
import { useRelease } from '../_components/src/features/release/hooks/useRelease';
import { Box } from '../_components/src/foundation/components/Box';
import { Flex } from '../_components/src/foundation/components/Flex';
import { Spacer } from '../_components/src/foundation/components/Spacer';
import { Text } from '../_components/src/foundation/components/Text';
import { Color, Space, Typography } from '../_components/src/foundation/styles/variables';
import { getDayOfWeekStr } from '../_components/src/lib/date/getDayOfWeekStr';

import { CoverSection } from '../_components/internal/CoverSection';
import { CommonLayout } from '../_components/src/foundation/layouts/CommonLayout';

import { Suspense } from 'react';


const FeatureListComponents = async() => {
  const featureList = await useFeatureList({ query: {} });
  return (<>
  {featureList.map((feature) => (
    //@ts-expect-error
    <FeatureCard key={feature.id} bookId={feature.book.id} bookData={feature.book}/>
  ))}
</>)}

const RankingListComponents = async() => {
  const rankingList = await useRankingList({ query: {} });
  return (<>
  {rankingList.map((ranking) => (
    <RankingCard key={ranking.id} bookId={ranking.book.id} bookData={ranking.book}/>
  ))}
  </>) 
}

const ReleaseComponents = async() => {
  const todayStr = getDayOfWeekStr(new Date());
  const release = await useRelease({ params: { dayOfWeek: todayStr } });
  return (<>
  {release.books.map((book) => (
                <BookCard key={book.id} bookId={book.id} bookData={book}/>
              ))}
  </>) 
}

export default async function Page() {

  const pickupA11yId = 'pickupA11yId';
  const rankingA11yId = 'rankingA11yId';
  const todayA11yId = 'todayA11yId';

  return (
    <CommonLayout>
    <Flex align="flex-start" direction="column" gap={Space * 2} justify="center" pb={Space * 2}>
      <Box as="header" maxWidth="100%" width="100%">
        <CoverSection />
      </Box>
      <Box as="main" maxWidth="100%" width="100%">
        <Box aria-labelledby={pickupA11yId} as="section" maxWidth="100%" mt={16} width="100%">
          <Text as="h2" color={Color.MONO_100} id={pickupA11yId} typography={Typography.NORMAL20} weight="bold">
            ピックアップ
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
            {/* レンダリング後は206pxが大体一定？ のため minheightの設定*/}
          <Flex align="stretch" direction="row" gap={Space * 2} justify="flex-start" minHeight="206px">
            <Suspense fallback={null}>
              {/*@ts-expect-error */}
              <FeatureListComponents />
            </Suspense>
          </Flex>
          </Box>
        </Box>

        <Spacer height={Space * 2} />

        <Box aria-labelledby={rankingA11yId} as="section" maxWidth="100%" width="100%">
          <Text as="h2" color={Color.MONO_100} id={rankingA11yId} typography={Typography.NORMAL20} weight="bold">
            ランキング
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="hidden" overflowY="hidden">
            <Flex align="center" as="ul" direction="column" justify="center">
            <Suspense fallback={null}>
              {/*@ts-expect-error */}
              <RankingListComponents />
            </Suspense>
            </Flex>
          </Box>
        </Box>

        <Spacer height={Space * 2} />

        <Box aria-labelledby={todayA11yId} as="section" maxWidth="100%" width="100%">
          <Text as="h2" color={Color.MONO_100} id={todayA11yId} typography={Typography.NORMAL20} weight="bold">
            本日更新
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
            <Flex align="stretch" gap={Space * 2} justify="flex-start">
              <Suspense fallback={null}>
                {/*@ts-expect-error */}
                  <ReleaseComponents />
              </Suspense>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
    </CommonLayout>
  );
};
