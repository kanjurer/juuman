'use client';

import Entries from '@/components/client/Entries';
import { Expense } from '@/components/client/DataBubbles';
import { Flex } from '@chakra-ui/react';

import { EXPENSES } from '@/data';

export default function ExpensesPage() {
  return (
    <>
      <Flex flexDirection="column">
        <Expense displayValue={1000} />
      </Flex>
      <Entries entriesData={EXPENSES} />
    </>
  );
}
