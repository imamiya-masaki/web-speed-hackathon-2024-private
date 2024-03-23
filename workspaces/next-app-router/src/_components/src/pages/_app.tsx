import type { AppProps } from "next/app";

import { useEffect, type ReactNode, Suspense } from 'react';
interface LayoutProps {
  children?: ReactNode; // ReactNode型を使用して、childrenの型を指定します。
}


import { ChakraProvider, useToast } from '@chakra-ui/react';
import { queryClient } from '../admin/lib/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';


import { init as ucaInit } from 'unicode-collation-algorithm2';

ucaInit();

const AdminSetUpComponent: React.FC<LayoutProps> = ({ children  }) => {
  const toast = useToast();

  useEffect(() => {
    const mutationCache = queryClient.getMutationCache();
    const onError = mutationCache.config.onError?.bind(mutationCache.config);

    queryClient.getMutationCache().config.onError = (...args) => {
      toast({
        duration: 1000,
        isClosable: true,
        status: 'error',
        title: 'リクエストの処理に失敗しました',
      });
      onError?.(...args);
    };

    return () => {
      queryClient.getMutationCache().config.onError = onError;
    };
  }, [toast]);
  return (<Suspense fallback={<div>Loading...</div>}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  </Suspense>)
}

import { Dialog } from '../foundation/components/Dialog';
import { GlobalStyle } from '../foundation/styles/GlobalStyle';
import { useRouter } from "next/router";

const ClientSetUpComponent: React.FC<LayoutProps> = ({ children  }) => {
  return (
    <GlobalStyle />
    <Dialog />
    {children ?? null}
}


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  if (router.pathname.includes('/admin')) {
    return <AdminSetUpComponent><Component {...pageProps} /></AdminSetUpComponent>;
  } else {
    return <ClientSetUpComponent><Component {...pageProps} /></ClientSetUpComponent>
  }
}
