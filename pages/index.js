import Head from 'next/head';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
        if(document.cookie && document.cookie.includes('fast-feedback-auth')) {
          window.location.href = "/dashboard"
        }`,
          }}
        />
        <title>Create Next App</title>
      </Head>

      <ArrowRightIcon w={16} h={16} />
      <NextLink href="/dashboard">
        <Button mt={4}>Go to Dashboard</Button>
      </NextLink>
    </Flex>
  );
}
