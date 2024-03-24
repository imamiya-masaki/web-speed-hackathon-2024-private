import { Flex } from '@chakra-ui/react';


import { useAuthUser } from '../../_components/src/admin/features/auth/hooks/useAuthUser';
import { CommonLayout } from '../../_components/src/admin/foundation/layouts/CommonLayout';

import { LoginContent } from './internal/LoginContent';
import { LogoutContent } from './internal/LogoutContent';

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
