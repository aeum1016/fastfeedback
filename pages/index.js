import Head from 'next/head';
import { Button, Flex, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import { useAuth } from '../lib/auth';
import { GitHubIcon, GoogleIcon } from '@/components/CustomIcons';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto"
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
        <title>Fast Feedback Tutorial</title>
      </Head>

      <ArrowRightIcon w={8} h={8} />
      <Text my={2} fontSize="md">
        Fast Feedback was built as a part of React 2025 by Lee Robinson. It's an
        easy way to add comments or reviews to your static site.
      </Text>
      {!auth.user ? (
        <>
          <Button
            leftIcon={<GitHubIcon />}
            onClick={(e) => auth.signInWithGithub()}
            mt={4}
            fontWeight="semibold"
            color="white"
            backgroundColor="gray.900"
            size="lg"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)',
            }}
          >
            Sign In with GitHub
          </Button>
          <Button
            leftIcon={<GoogleIcon />}
            onClick={(e) => auth.signInWithGoogle()}
            mt={4}
            fontWeight="semibold"
            color="gray.900"
            backgroundColor="white"
            variant="outline"
            size="lg"
            _hover={{ bg: 'gray.200' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)',
            }}
          >
            Sign In with Google
          </Button>
        </>
      ) : (
        <NextLink href="/dashboard">
          <Button
            mt={4}
            fontWeight="semibold"
            color="gray.900"
            backgroundColor="white"
            variant="outline"
            size="lg"
            _hover={{ bg: 'gray.200' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)',
            }}
          >
            View Dashboard
          </Button>
        </NextLink>
      )}
    </Flex>
  );
}
