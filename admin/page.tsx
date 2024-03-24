'use client'

import { Flex } from '@chakra-ui/react';


import { useAuthUser } from '../workspaces/next-app-router/src/_components/src/admin/features/auth/hooks/useAuthUser';
import { CommonLayout } from '../workspaces/next-app-router/src/_components/src/admin/foundation/layouts/CommonLayout';

import { LoginContent } from '../trash/admin/internal/LoginContent';
import { LogoutContent } from '../trash/admin/internal/LogoutContent';

export default async function Page(){
  const { data: user } = await useAuthUser();

  return (
    <CommonLayout>
    <Flex align="stretch" direction="column" justify="center" minHeight="100%" w="100%">
      {user == null ? <LoginContent /> : <LogoutContent />}
    </Flex>
    </CommonLayout>
  );
};
