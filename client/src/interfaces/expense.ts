export interface ExpenseCategory {
  id: string;
  name: string;
}

export interface ExpenseEntry {
  id: string;
  name: string;
  category: ExpenseCategory;
  amount: number;
}
