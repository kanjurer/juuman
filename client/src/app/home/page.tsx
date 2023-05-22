'use client';

import Entries from '@/components/client/Entries';
import { Balance, Income, Expense } from '@/components/client/DataBubbles';
import { Flex } from '@chakra-ui/react';

import { EXPENSES } from '@/data';
import AddEntryButton from '@/components/client/AddEntryButton';

export default function HomePage() {
  return (
    <Flex flexDirection={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }}>
      <Flex flexDirection="column">
        <Balance displayValue={1000} />
        <Income displayValue={2000} />
        <Expense displayValue={1000} />
        <AddEntryButton />
      </Flex>
      <Entries entriesData={EXPENSES} />
    </Flex>
  );
}
