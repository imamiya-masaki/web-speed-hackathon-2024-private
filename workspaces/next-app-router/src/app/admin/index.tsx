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