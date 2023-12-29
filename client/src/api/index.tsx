import { ExpenseEntry, IncomeEntry } from '@/interfaces';

export const fetchExpenseEntry: () => Promise<ExpenseEntry[]> = async () => {
  const response = await fetch('http://localhost:8000/tracker/expense_entry/');
  const data: ExpenseEntry[] = await response.json();
  console.log(data);
  return data;
};

export const fetchIncomeEntry: () => Promise<IncomeEntry[]> = async () => {
  const response = await fetch('http://localhost:8000/tracker/income_entry/');
  const data: IncomeEntry[] = await response.json();
  console.log(data);
  return data;
};

export const postExpenseEntry: (
  entry: ExpenseEntry
) => Promise<ExpenseEntry> = async (entry) => {
  const response = await fetch('http://localhost:8000/tracker/expense_entry/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
  const data: ExpenseEntry = await response.json();
  console.log(data);
  return data;
};

export const postIncomeEntry: (
  entry: IncomeEntry
) => Promise<IncomeEntry> = async (entry) => {
  const response = await fetch('http://localhost:8000/tracker/income_entry/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
  const data: IncomeEntry = await response.json();
  console.log(data);
  return data;
};
