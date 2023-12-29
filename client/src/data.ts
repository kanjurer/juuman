import {
  ExpenseCategory,
  ExpenseEntry,
  IncomeCategory,
  IncomeEntry,
} from './interfaces';

export const EXPENSECATEGORIES: ExpenseCategory[] = [
  {
    id: '1',
    name: 'Food',
  },
  {
    id: '2',
    name: 'Entertainment',
  },
  {
    id: '3',
    name: 'Phone',
  },
  {
    id: '4',
    name: 'Leisure',
  },
  {
    id: '5',
    name: 'Gas',
  },
];

export const EXPENSES: ExpenseEntry[] = [
  {
    category: EXPENSECATEGORIES[0],
    name: 'Truly Tasty',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '100',
    date: '2023-12-12',
  },
  {
    category: EXPENSECATEGORIES[1],
    name: 'Avatar 2',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '200',
    date: '2023-12-12',
  },
  {
    category: EXPENSECATEGORIES[2],
    name: 'FIDO',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '300',
    date: '2023-12-12',
  },
  {
    category: EXPENSECATEGORIES[3],
    name: 'Pool',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '400',
    date: '2023-12-12',
  },
  {
    category: EXPENSECATEGORIES[4],
    name: 'Esso',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '500',
    date: '2023-12-12',
  },
];

export const INCOMECATEGORIES: IncomeCategory[] = [
  {
    id: '1',
    name: 'Dal Safe',
  },
  {
    id: '2',
    name: 'Software Dev',
  },
  {
    id: '3',
    name: 'Learning Center',
  },
  {
    id: '4',
    name: 'DMOB',
  },
  {
    id: '5',
    name: 'Teaching Assistant',
  },
];

export const INCOMES: IncomeEntry[] = [
  {
    category: INCOMECATEGORIES[0],
    name: 'Dal Safe',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '100',
    date: '2023-12-12',
  },
  {
    category: INCOMECATEGORIES[1],
    name: 'Dal Safe',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '200',
    date: '2023-12-12',
  },
  {
    category: INCOMECATEGORIES[2],
    name: 'Software Dev',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '300',
    date: '2023-12-12',
  },
  {
    category: INCOMECATEGORIES[3],
    name: 'Software Dev',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '400',
    date: '2023-12-12',
  },
  {
    category: INCOMECATEGORIES[4],
    name: 'Learning Center',
    amount: {
      value: 23,
      currency: '$',
    },
    id: '500',
    date: '2023-12-12',
  },
];
