import Head from 'next/head';
import { Button, Heading, Text, Code } from '@chakra-ui/react';

import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          Current User: <Code>{auth.user ? auth.user.email : 'NA'}</Code>
        </Text>
        {!auth.user ? (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        ) : (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        )}
      </main>
    </div>
  );
}
