import { DataCategory, DataEntry } from './base';

export interface ExpenseCategory extends DataCategory {}
export interface ExpenseEntry extends DataEntry<ExpenseCategory> {}
