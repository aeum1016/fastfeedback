import Head from 'next/head';
import { Button, Flex, Text, Code } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

import { useAuth } from '../lib/auth';
import EmptyState from '@/components/EmptyState';

export default function Dashboard() {
  const auth = useAuth();
  return !auth.user ? (
    'Loading...'
  ) : (
    <EmptyState />
    // <Button onClick={(e) => auth.signout()}>Sign Out</Button>
  );
}
