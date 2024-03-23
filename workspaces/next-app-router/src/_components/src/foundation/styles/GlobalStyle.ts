'use client'

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: #FFFFFF;
  }

  a {
    text-decoration: none;
  }
`;
