import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, type ReactNode, Suspense } from 'react';


import { ChakraProvider, useToast } from '@chakra-ui/react';
import { queryClient } from '@/admin/lib/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
interface LayoutProps {
  children?: ReactNode; // ReactNode型を使用して、childrenの型を指定します。
}

// 元々 admin/indexにあったもの
const SetUpComponent: React.FC<LayoutProps> = ({ children  }) => {
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
  return (<Suspense fallback={null}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  </Suspense>)
}


export const CommonLayout: React.FC<LayoutProps> = ({ children }) => {

  const content = children || null;

  return (
    <SetUpComponent>
    <Flex align="stretch" direction="row" height="100vh" justify="space-between" width="100%">
      <Box bg="gray.100" flexGrow={0} flexShrink={0} p={2} w={200}>
        <Text fontSize="xl" fontWeight="bold" p={2}>
          管理画面
        </Text>
        <nav>
          <Link passHref href="/admin">
            <Text p={2}>ログイン</Text>
          </Link>
          <Link passHref href="/admin/authors">
            <Text p={2}>作者一覧</Text>
          </Link>
          <Link passHref href="/admin/books">
            <Text p={2}>作品一覧</Text>
          </Link>
        </nav>
      </Box>
      <Box flexGrow={1} flexShrink={1} overflowY="auto" p={4}>
        <Box height="100%" marginX="auto" maxWidth="100ch" width="100%">
          { content }
        </Box>
      </Box>
    </Flex>
    </SetUpComponent>
  );
};
