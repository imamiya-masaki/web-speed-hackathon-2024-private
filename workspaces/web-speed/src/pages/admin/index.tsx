// import './setup';

// import { ChakraProvider, useToast } from '@chakra-ui/react';
// import { QueryClientProvider } from '@tanstack/react-query';
// import { RouterProvider } from '@tanstack/react-router';
// import { Suspense, useEffect } from 'react';

// import { queryClient } from '../../admin/lib/api/queryClient';

// import { router } from './routes';

// export const AdminApp: React.FC = () => {
//   const toast = useToast();

//   useEffect(() => {
//     const mutationCache = queryClient.getMutationCache();
//     const onError = mutationCache.config.onError?.bind(mutationCache.config);

//     queryClient.getMutationCache().config.onError = (...args) => {
//       toast({
//         duration: 1000,
//         isClosable: true,
//         status: 'error',
//         title: 'リクエストの処理に失敗しました',
//       });
//       onError?.(...args);
//     };

//     return () => {
//       queryClient.getMutationCache().config.onError = onError;
//     };
//   }, [toast]);

//   return (
//     <Suspense fallback={null}>
//       <QueryClientProvider client={queryClient}>
//         <ChakraProvider>
//           <RouterProvider router={router()} />
//         </ChakraProvider>
//       </QueryClientProvider>
//     </Suspense>
//   );
// };

import { Flex } from '@chakra-ui/react';


import { useAuthUser } from '../../admin/features/auth/hooks/useAuthUser';
import { CommonLayout } from '../../admin/foundation/layouts/CommonLayout';

import { LoginContent } from './internal/LoginContent';
import { LogoutContent } from './internal/LogoutContent';

export const AuthPage: React.FC = () => {
  const { data: user } = useAuthUser();

  return (
    <CommonLayout>
    <Flex align="stretch" direction="column" justify="center" minHeight="100%" w="100%">
      {user == null ? <LoginContent /> : <LogoutContent />}
    </Flex>
    </CommonLayout>
  );
};

export default AuthPage