import Head from 'next/head';
import { Button, Flex, Text, Code } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

import { useAuth } from '../lib/auth';
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';

export default function Dashboard() {
  const auth = useAuth();
  return !auth.user ? (
    <DashboardShell>
      <SiteTableSkeleton />
    </DashboardShell>
  ) : (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
    // <Button onClick={(e) => auth.signout()}>Sign Out</Button>
  );
}
