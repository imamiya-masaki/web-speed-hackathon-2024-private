"use client"
import React, { ReactNode, Suspense, useMemo, useState } from 'react';

import { Color, Space, Typography } from '../styles/variables';

import { Box } from './Box';
import { Button } from './Button';
import { Flex } from './Flex';

import NextImage from 'next/image'
import { Text } from './Text';
import { Spacer } from './Spacer';
import { FooterContent } from './FooterContent';

const Close: React.FC = () => {
  return (<NextImage src="/color_set_icon/close_40dp.svg" width={32} height={32} alt="Close" />)
}

const ContentDom: React.FC<{children: ReactNode, role: string}> = ({role, children}) => {
  return <section style={{"whiteSpace": "pre-line"}} role={role}>{children}</section>
}

export const Footer: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [flag, setFlag] = useState<'term' | 'question' | 'overview' | 'contact' | 'company' | 'none'>('none');
  // const [text, setText] = useState<string>("");
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleRequestToTermDialogOpen = () => {
    setFlag('term')
    openDialog()
  };

  const handleRequestToContactDialogOpen = () => {
    setFlag('contact')
    openDialog()
  };

  const handleRequestToQuestionDialogOpen = () => {
    setFlag('question')
    openDialog()
  };

  const handleRequestToCompanyDialogOpen = () => {
    setFlag('company')
    openDialog()
  };

  const handleRequestToOverviewDialogOpen = () => {
    setFlag('overview')
    openDialog()
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  };
  
  const wrapperStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `calc(100% - ${Space * 8}px)`,
    maxWidth: '480px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
  };
  
  const containerStyle: React.CSSProperties = {
    padding: `${Space * 2}px`,
    borderRadius: '4px',
    backgroundColor: Color.MONO_A,
    height: '540px',
    // overflow: 'scroll', // iframe内部でスクロールさせる
  };
  const Overlay:React.FC<{children: ReactNode}> = ({ children }) => (
    <div style={overlayStyle}>{children}</div>
  );
  
  const Wrapper: React.FC<{children: ReactNode}> = ({ children }) => (
    <div style={wrapperStyle}>{children}</div>
  );
  
  const Container: React.FC<{children: ReactNode}> = ({ children }) => (
    <div style={containerStyle}>{children}</div>
  );

  return (
    <>
    <dialog  open={isOpen} onClose={closeDialog} style={overlayStyle}>
      <Wrapper>
        <Button addStyle={{"borderRadius": "50%", "height": "32px", "width": "32px", "position": "absolute", top: `-${Space * 5}px`, left: `-${Space * 1}px`}} onClick={() => {closeDialog();}}>
          <Close />
          {/* <SvgIcon color={Color.MONO_A} height={32} type="Close" width={32} /> */}
        </Button>
        <Container>
          <Suspense fallback={null}>
            <FooterContent flag={flag} />
          </Suspense>
          </Container>
      </Wrapper>
    </dialog>
    <Box as="footer" backgroundColor={Color.Background} p={Space * 1}>
      <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
        <img alt="Cyber TOON" src="/assets/cyber-toon.png" width={189} height={45}/>
        <Flex align="start" direction="row" gap={Space * 1.5} justify="center">
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToTermDialogOpen}>
            利用規約
          </Button>
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToContactDialogOpen}>
            お問い合わせ
          </Button>
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToQuestionDialogOpen}>
            Q&A
          </Button>
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToCompanyDialogOpen}>
            運営会社
          </Button>
          <Button addStyle={{"color": Color.MONO_A}} onClick={handleRequestToOverviewDialogOpen}>
            Cyber TOONとは
          </Button>
        </Flex>
      </Flex>
    </Box>
    </>
  );
};
