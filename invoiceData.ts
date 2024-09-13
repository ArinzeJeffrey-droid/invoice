import { Invoice } from "./__types__/invoice";

export const invoiceData: Invoice = {
  id: "Invoice - 1023494 - 2304",
  number: "1023902390",
  issue_date: "March 30th, 2023",
  due_date: "May 19th, 2023",
  currency: "USD ($)",
  customer: {
    name: "Olaniyi Ojo Adewale",
    email: "info@fabulousenterise.co",
    contact: "+386 989 271 3115",
  },
  sender: {
    name: "Fabulous Enterprises",
    email: "support@fabulousenterprise.co",
    contact: "+386 989 271 3115",
    address: "1331 Hart Ridge Road 48436 Gaines, MI",
  },
  items: [
    {
      name: "Email Marketing",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
      quantity: 10,
      price: "$1,500",
      total: "$15,000.00",
    },
    {
      name: "Video looping effect",
      description: "",
      quantity: 6,
      price: "$1,110,500",
      total: "$6,663,000.00",
    },
    {
      name: "Graphic design for emails",
      description: "Tsit voluptatem accusantium",
      quantity: 7,
      price: "$2,750",
      total: "$19,250.00",
    },
    {
      name: "Video looping effect",
      description: "",
      quantity: 6,
      price: "$1,110,500",
      total: "$6,663,000.00",
    },
  ],
  subtotal: "$6,697,200.00",
  discount: "$167,430.00",
  total: "$6,529,770.00",
  payment_information: {
    account_name: "1023902390",
    account_number: "March 30th, 2023",
    routing_number: "May 19th, 2023",
    bank_name: "USD ($)",
    bank_address: "1023902390",
  },
  note: "Thank you for your patronage",
  status: "overdue",
};

export const invoiceActivity = {
  title: "Invoice creation",
  time: "Yesterday, 12:05 PM",
  action: "Created invoice",
  user: "00239434/Olaniyi Ojo Adewale",
};
