'use client';

import { ExpenseEntry, IncomeEntry } from '@/interfaces';
import {
  Container,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Image,
} from '@chakra-ui/react';

function DataBubble({ label, value, icon, backgroundColor }: DataBubbleProps) {
  return (
    <Flex
      backgroundColor={backgroundColor}
      width="250px"
      margin="10px"
      padding="10px"
      borderRadius="10px"
    >
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>$ {value}</StatNumber>
      </Stat>
      {icon}
    </Flex>
  );
}

interface DataBubbleProps {
  label: string;
  value: number;
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  backgroundColor: any;
}

export function Balance({ expenses, incomes }: BalanceProps) {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount.value,
    0
  );
  const totalIncomes = incomes.reduce(
    (sum, income) => sum + income.amount.value,
    0
  );
  const totalBalance = totalIncomes - totalExpenses;
  return (
    <DataBubble
      label="Balance"
      value={totalBalance}
      icon={<Image src="/balance.png" alt="balance" />}
      backgroundColor="blue.100"
    />
  );
}

interface BalanceProps {
  expenses: ExpenseEntry[];
  incomes: IncomeEntry[];
}

export function Expense({ expenses }: ExpenseProps) {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount.value,
    0
  );
  return (
    <DataBubble
      label="Expense"
      value={totalExpenses}
      icon={<Image src="/expense.png" alt="balance" />}
      backgroundColor="red.100"
    />
  );
}

interface ExpenseProps {
  expenses: ExpenseEntry[];
}

export function Income({ incomes }: IncomeProps) {
  const totalIncomes = incomes.reduce(
    (sum, income) => sum + income.amount.value,
    0
  );

  return (
    <DataBubble
      label="Income"
      value={totalIncomes}
      icon={<Image src="/income.png" alt="income" />}
      backgroundColor="purple.100"
    />
  );
}

interface IncomeProps {
  incomes: IncomeEntry[];
}
