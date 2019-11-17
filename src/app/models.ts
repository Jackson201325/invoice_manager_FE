import { List, Record } from 'immutable';
export type IItem = {
  name: string,
  model: string,
  description: string,
  color: string,
  company: string,
  year: string,
  url: string,
  cost_price_usd: string,
  order: number,
  confirm: boolean,
  cost_price_pyg?: string,
  sales_price_pyg?: string,
  profit_per_unit?: string,
  total_revenue?: number,
  profit?: number,
  total_cost_price?: number,
  created_at?: string,
  updated_at?: string
}


export interface IInvoice {
  id: number,
  created_by?: string,
  total_spend?: number,
  total_net_sales?: number,
  total_profit?: number,
  created_at?: string,
  updated_at?: string,
  items?: List<IItem>
}

export const invoiceRecord = Record({
  id: 0,
  total_spend: null,
  total_net_sales: null,
  total_profit: null,
  created_at: '',
  updated_at: '',
  items: [],
})