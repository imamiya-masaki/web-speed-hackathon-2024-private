'use client'

import styled from 'styled-components';
import { type ReactNode } from 'react';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Space } from '../styles/variables';

const _Content = styled.div`
  height: 100%;
  padding: 0 ${Space * 2}px;
`;


interface LayoutProps {
  children?: ReactNode; // ReactNode型を使用して、childrenの型を指定します。
}

export const CommonLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <_Content>
        {children}
      </_Content>
      <Footer />
    </Container>
  );
};
