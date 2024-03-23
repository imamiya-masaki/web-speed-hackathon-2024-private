'use client'

import styled from 'styled-components';

import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Footer } from '../components/Footer';
import { Color, Space, Typography } from '../styles/variables';
import { SvgIcon } from '../../features/icons/components/SvgIcon';
import { Link } from '../components/Link';
import { Text } from '../components/Text';

import {type ReactNode} from 'react';
const _Header = styled.header`
  padding: ${Space * 2}px;
  border-bottom: 1px solid ${Color.MONO_0};
`;

type Props = {
  children?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  
};



export const ActionLayout: React.FC<Props> = ({ children}) => {

  const _BackToTopButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${Space * 1}px;
  border: none;
  background-color: transparent;
`;

  return (
    <Container>
      <_Header>
        <Flex align="center" justify="space-between">
        <_BackToTopButton href={'/'}>
            <SvgIcon color={Color.MONO_100} height={32} type="ArrowBack" width={32} />
            <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
            トップへ戻る
            </Text>
        </_BackToTopButton>
          {/* {leftContent} */}
          {/* {rightContent}  使わないはず*/} 
        </Flex>
      </_Header>

      <Box as="main" height="100%" py={Space * 2}>
        {children}
      </Box>

      <Footer />
    </Container>
  );
};
