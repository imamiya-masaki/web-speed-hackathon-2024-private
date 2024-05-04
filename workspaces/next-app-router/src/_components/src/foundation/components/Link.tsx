import NextLink from 'next/link'
import type { UrlObject } from 'node:url';
import type { CSSProperties } from 'react';
type Url = string | UrlObject;
type Props = {
  children: React.ReactNode;
  to?: Url;
  className?: string;
  style?: CSSProperties;
}; 

export const Link: React.FC<Props> = ({ children, to, ...rest }) => {
  return (
    
    <NextLink href={to ?? "/"} {...rest}>
      {children}
    </NextLink>
  );
};
