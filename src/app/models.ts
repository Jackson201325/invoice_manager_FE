import { List, Record } from 'immutable';
export type IItem = {
  id: string,
  name: string,
  model: string,
  description: string,
  color: string,
  company: string,
  year: string,
  url: string,
  cost_price: string,
  sales_price: string,
  order: number,
  total_revenue: number,
  invoice_id: number,
  total_cost: number,
  profit: number,
  confirm: boolean,
  invoice: string
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

export const itemRecord = Record({
  color: '',
  company: '',
  confirm: false,
  cost_price: '',
  description: '',
  id: '',
  invoice: {},
  invoice_id: 0,
  model: '',
  name: '',
  order: 0,
  profit: 0,
  sales_price: '',
  total_cost: 0,
  total_revenue: 0,
  url: '',
  year: '',
  lowerCase() {
    // console.log(`${this.cost_price}${this.confirm ? 'true' : 'false'}${this.model.trim()}${this.order}${this.url.trim()}`.toLocaleLowerCase())
    return `${this.cost_price}${this.confirm ? 'true' : 'false'}${this.model}${this.order}${this.url}`.replace(/\s/g, "").toLocaleLowerCase()
  }
})