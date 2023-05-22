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

export function Balance({ displayValue }: BalanceProps) {
  return (
    <DataBubble
      label="Balance"
      value={displayValue}
      icon={<Image src="/balance.png" alt="balance" />}
      backgroundColor="blue.100"
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
      backgroundColor="red.100"
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
      backgroundColor="purple.100"
    />
  );
}

interface IncomeProps {
  displayValue: number;
}
