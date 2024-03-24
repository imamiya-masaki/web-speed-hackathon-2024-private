"use client" 

import { type ReactNode, useEffect, Suspense } from 'react';
interface LayoutProps {
  children?: ReactNode; // ReactNode型を使用して、childrenの型を指定します。
}


import { ChakraProvider, useToast } from '@chakra-ui/react';
import { queryClient } from '../workspaces/next-app-router/src/_components/src/admin/lib/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
 
 
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
  }, []);
  return (<Suspense fallback={<div>Loading...</div>}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider  cssVarsRoot="body">
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  </Suspense>)
}


 export default function AdminLayout({ children }: {children: React.ReactNode
 }) {
  return (
    <AdminSetUpComponent>
    {children}
    </AdminSetUpComponent>
  )
}