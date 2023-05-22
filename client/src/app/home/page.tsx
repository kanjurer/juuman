'use client';

import Entries from '@/components/client/Entries';
import { Balance, Income, Expense } from '@/components/client/DataBubbles';
import { Flex } from '@chakra-ui/react';

import { EXPENSES } from '@/data';

export default function HomePage() {
  return (
    <>
      <Flex flexDirection="column">
        <Balance displayValue={1000} />
        <Income displayValue={2000} />
        <Expense displayValue={1000} />
      </Flex>
      <Entries entriesData={EXPENSES} />
    </>
  );
}
