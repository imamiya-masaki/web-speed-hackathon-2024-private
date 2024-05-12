import { TERM } from '../../../_components/src/foundation/constants/Term';
import { Color, Space, Typography } from '../../../_components/src/foundation/styles/variables';
import type { ReactNode } from 'react';
import { Spacer } from '../../../_components/src/foundation/components/Spacer';
import { Text } from '../../../_components/src/foundation/components/Text';

const ContentDom: React.FC<{children: ReactNode, role: string}> = ({role, children}) => {
    return <section style={{"whiteSpace": "pre-line"}} role={role}>{children}</section>
  }

export default function Page () {
    const termDialogA11yId = 'termDialogA11yId';
  
    return (
        <ContentDom aria-labelledby={termDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={termDialogA11yId} typography={Typography.NORMAL16}>
          利用規約
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12} overflowX='hidden' overflowY='scroll'>
          {TERM}
        </Text>
      </ContentDom>
    )
  };