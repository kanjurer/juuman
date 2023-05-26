import { DataCategory, DataEntry } from './base';

export interface IncomeCategory extends DataCategory {}
export interface IncomeEntry extends DataEntry<IncomeCategory> {}
