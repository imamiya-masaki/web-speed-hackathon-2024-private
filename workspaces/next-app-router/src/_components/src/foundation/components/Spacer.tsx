import type React from 'react';
// import { useBoolean, useMount } from 'react-use';

type Props = {
  height?: number;
  width?: number;
  strHeight?: string
};

export const Spacer: React.FC<Props> = ({ height, width, strHeight }) => {
  // const [mounted, toggleMounted] = useBoolean(false);
  const setHeight = height ?? strHeight ?? '100%'
  const setWidth =  width ?? '100%'
  // useMount(() => {
  //   toggleMounted();
  // });

  return <div style={{height: setHeight, width: setWidth, flexGrow: "0", flexShrink: "0"}} />;
};
