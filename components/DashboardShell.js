import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

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
          <ArrowRightIcon overflow="visible" boxSize={6} />
          <Link display="block" fontWeight="semibold">
            Sites
          </Link>
          <Link fontWeight="semibold">Feedback</Link>
        </Stack>
        <Flex alignItems="center">
          {!auth.user ? (
            <Button
              mr={4}
              backgroundColor="white"
              fontWeight="semibold"
              onClick={(e) => auth.signinWithGithub()}
            >
              Sign In
            </Button>
          ) : (
            <Button
              mr={4}
              backgroundColor="white"
              fontWeight="semibold"
              onClick={(e) => auth.signout()}
            >
              Sign Out
            </Button>
          )}
          <Avatar size="sm" src={auth.user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex
          margin="0 auto"
          flexDirection="column"
          maxWidth="1250px"
          width="100%"
          px={8}
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading mb={4}>My Sites</Heading>
            <AddSiteModal>+ Add Site</AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
