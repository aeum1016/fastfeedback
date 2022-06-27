import Head from 'next/head';
import { Button, Flex, Text, Code } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Create Next App</title>
      </Head>

      <ArrowRightIcon w={16} h={16} />
      {!auth.user ? (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      ) : (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      )}
    </Flex>
  );
}
