import { Amount } from './amount';

export interface DataCategory {
  id: string;
  name: string;
}

export interface DataEntry<T extends DataCategory> {
  id: string;
  name: string;
  category: T;
  amount: Amount;
  date: string;
}
