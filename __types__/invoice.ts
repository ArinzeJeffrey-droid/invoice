interface InvoiceItem {
  name: string;
  description?: string;
  quantity: number;
  price: string;
  total: string;
}

interface ContactInfo {
  name: string;
  email: string;
  contact: string;
  address?: string;
}

interface PaymentInformation {
  account_name: string;
  account_number: string;
  routing_number: string;
  bank_name: string;
  bank_address: string;
}

export type InvoiceStatus = "paid" | "overdue" | "draft" | "pending payment";

export interface Invoice {
  id: string;
  number: string;
  issue_date: string;
  due_date: string;
  currency: string;
  customer: ContactInfo;
  sender: ContactInfo;
  items: InvoiceItem[];
  subtotal: string;
  discount: string;
  total: string;
  payment_information: PaymentInformation;
  note: string;
  status: InvoiceStatus;
}

export interface InvoiceActivity {
  title: string;
  time: string;
  action: string;
  user: string;
}
