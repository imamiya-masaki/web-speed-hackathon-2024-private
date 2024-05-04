import { OVERVIEW } from '../../../_components/src/foundation/constants/Overview';
import { Color, Space, Typography } from '../../../_components/src/foundation/styles/variables';
import React, { ReactNode } from 'react';
import { Spacer } from '../../../_components/src/foundation/components/Spacer';
import { Text } from '../../../_components/src/foundation/components/Text';

const ContentDom: React.FC<{children: ReactNode, role: string}> = ({role, children}) => {
    return <section style={{"whiteSpace": "pre-line"}} role={role}>{children}</section>
  }

export default function Page () {
  const overviewDialogA11yId = 'overviewDialogA11yId';
  
    return (
      <ContentDom aria-labelledby={overviewDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={overviewDialogA11yId} typography={Typography.NORMAL16}>
          Cyber TOONとは
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12} overflowX='hidden' overflowY='scroll'>
          {OVERVIEW}
        </Text>
      </ContentDom>
    )
  };