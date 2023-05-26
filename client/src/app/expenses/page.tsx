'use client';

import Entries from '@/components/Tables/Entries';
import { Expense } from '@/components/client/DataBubbles';
import { Container, Flex } from '@chakra-ui/react';

import { EXPENSES } from '@/data';
import { useState } from 'react';
import { ExpenseEntry } from '@/interfaces';
import { AddExpenseButton } from '@/components/client/AddEntryButton';

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<ExpenseEntry[]>(EXPENSES);

  return (
    <Flex flexDirection={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }}>
      <Flex flexDirection="column" display="inline-flex" alignItems="center">
        <Expense expenses={expenses} />
        <Flex justifyContent="center">
          <AddExpenseButton setExpense={setExpenses} />
        </Flex>
      </Flex>
      <Entries entriesData={expenses} />
    </Flex>
  );
}
