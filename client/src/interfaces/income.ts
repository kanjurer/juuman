export interface IncomeCategory {
  id: string;
  name: string;
}

export interface IncomeEntry {
  id: string;
  name: string;
  category: IncomeCategory;
  amount: number;
}
