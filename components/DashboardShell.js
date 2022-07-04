import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, Stack, Avatar, Button } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack
          spacing={4}
          isInline
          alignItems="center"
          justifyContent="flex-start"
        >
          <NextLink href="/" passHref>
            <ArrowRightIcon overflow="visible" boxSize={6} />
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link display="block" fontWeight="semibold">
              Sites
            </Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link fontWeight="semibold">Feedback</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          {!auth.user ? (
            <Button
              variant="ghost"
              mr={2}
              fontWeight="semibold"
              onClick={(e) => auth.signInWithGithub()}
            >
              Log In
            </Button>
          ) : (
            <Button
              variant="ghost"
              mr={2}
              fontWeight="semibold"
              onClick={(e) => auth.signout()}
            >
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={auth.user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} minHeight="100vh" height="100%">
        <Flex
          margin="0 auto"
          flexDirection="column"
          maxWidth="1250px"
          width="100%"
          px={8}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
