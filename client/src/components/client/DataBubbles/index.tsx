'use client';

import {
  Container,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Image,
} from '@chakra-ui/react';

function DataBubble({ label, value, icon }: DataBubbleProps) {
  return (
    <Flex backgroundColor="red.200" width={200} margin="10px">
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
}

export function Balance({ displayValue }: BalanceProps) {
  return (
    <DataBubble
      label="Balance"
      value={displayValue}
      icon={<Image src="/expense.png" alt="balance" />}
    />
  );
}

interface BalanceProps {
  displayValue: number;
}

export function Expense({ displayValue }: ExpenseProps) {
  return (
    <DataBubble
      label="Expense"
      value={displayValue}
      icon={<Image src="/expense.png" alt="balance" />}
    />
  );
}

interface ExpenseProps {
  displayValue: number;
}

export function Income({ displayValue }: IncomeProps) {
  return (
    <DataBubble
      label="Income"
      value={displayValue}
      icon={<Image src="/income.png" alt="income" />}
    />
  );
}

interface IncomeProps {
  displayValue: number;
}
