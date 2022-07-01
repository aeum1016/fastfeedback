import React from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import NextLink from 'next/link';
import { Box, Skeleton, Link } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" width={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" width={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" width={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" width={width} my={4} />
    </Td>
  </Box>
);

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th> </Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <Box as="tr" key={site.id}>
            <Td fontWeight="semibold">{site.name}</Td>
            <Td>{site.url}</Td>
            <Td>
              <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                <Link>View Feedback</Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;
