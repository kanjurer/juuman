'use client';

import Entries from '@/components/Tables/Entries';
import { Income } from '@/components/client/DataBubbles';
import { Container, Flex } from '@chakra-ui/react';

import { INCOMES } from '@/data';
import { useState } from 'react';
import { IncomeEntry } from '@/interfaces';
import { AddIncomeButton } from '@/components/client/AddEntryButton';

export default function IncomePage() {
  const [incomes, setIncomes] = useState<IncomeEntry[]>(INCOMES);

  return (
    <Flex flexDirection={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }}>
      <Flex flexDirection="column" display="inline-flex" alignItems="center">
        <Income incomes={incomes} />
        <Flex justifyContent="center">
          <AddIncomeButton setIncome={setIncomes} />
        </Flex>
      </Flex>
      <Entries entriesData={incomes} />
    </Flex>
  );
}
