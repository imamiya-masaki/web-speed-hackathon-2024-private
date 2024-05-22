
import { Box } from '../_components/src/foundation/components/Box';
import { Flex } from '../_components/src/foundation/components/Flex';
import { Spacer } from '../_components/src/foundation/components/Spacer';
import { Text } from '../_components/src/foundation/components/Text';
import { Color, Space, Typography } from '../_components/src/foundation/styles/variables';

import { CoverSection } from '../_components/internal/CoverSection';
import { CommonLayout } from '../_components/src/foundation/layouts/CommonLayout';

// import dynamic from 'next/dynamic';

import FeatureListComponents from '../_components/src/features/feature/components/FeatureCardList'
import RankingListComponents from '../_components/src/features/ranking/components/RankingCardList'
import ReleaseComponents from '../_components/src/features/book/components/BookCardList'
// @ts-expect-error
// const FeatureListComponents = dynamic(() => import('../_components/src/features/feature/components/FeatureCardList'))

// @ts-expect-error
// const RankingListComponents = dynamic(() => import('../_components/src/features/ranking/components/RankingCardList'), {
//   loading: () => <Spacer strHeight='calc(100vh - 206px - 244px)'/>
// })

// @ts-expect-error
// const ReleaseComponents = dynamic(() => import('../_components/src/features/book/components/BookCardList'), {
//   loading: () => <Spacer strHeight='244px'></Spacer>
// })

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
              <FeatureListComponents />
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
            <RankingListComponents />
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
                <ReleaseComponents />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
    </CommonLayout>
  );
};
