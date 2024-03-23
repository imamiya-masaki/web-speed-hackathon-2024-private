'use client'

import { useAtom } from 'jotai';

import { SvgIcon } from '../../features/icons/components/SvgIcon';
import { DialogContentAtom } from '../atoms/DialogContentAtom';
import { Color, Space } from '../styles/variables';

import { Button } from './Button';
import { ReactNode } from 'react';

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
  overflow: 'scroll',
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

export const Dialog: React.FC<{children: ReactNode}> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return content != null ? (
    <dialog isOpen={isOpen} onClose={closeDialog} style={overlayStyle}>
      <Wrapper>
        <Button addStyle={{"borderRadius": "50%", "height": "32px", "width": "32px", "position": "absolute", top: `-${Space * 5}px`, left: `-${Space * 5}px`}} onClick={() => updateContent(null)}>
          <SvgIcon color={Color.MONO_A} height={32} type="Close" width={32} />
        </Button>
        <Container>{content}</Container>
      </Wrapper>
    </dialog>
  ) : null;
};
