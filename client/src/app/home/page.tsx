'use client';

import Entries from '@/components/Tables/Entries';
import { Balance, Income, Expense } from '@/components/client/DataBubbles';
import { Flex } from '@chakra-ui/react';

import { EXPENSES, INCOMES } from '@/data';
import AddEntryButton from '@/components/client/AddEntryButton';
import { useEffect, useState } from 'react';
import { ExpenseEntry, IncomeEntry } from '@/interfaces';
import { fetchExpenseEntry, fetchIncomeEntry } from '@/api';

export default function HomePage() {
  const [expenses, setExpenses] = useState<IncomeEntry[]>(EXPENSES);
  const [incomes, setIncomes] = useState<ExpenseEntry[]>(INCOMES);

  useEffect(() => {
    fetchExpenseEntry().then((data) => setExpenses(data));
    fetchIncomeEntry().then((data) => setIncomes(data));
  }, []);

  return (
    <Flex flexDirection={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }}>
      <Flex flexDirection="column" display="inline-flex" alignItems="center">
        <Balance expenses={expenses} incomes={incomes} />
        <Income incomes={incomes} />
        <Expense expenses={expenses} />
        <Flex justifyContent="center">
          <AddEntryButton />
        </Flex>
      </Flex>
      <Entries entriesData={[...expenses, ...incomes]} />
    </Flex>
  );
}
