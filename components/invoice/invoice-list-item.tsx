"use client";
import { Invoice, InvoiceStatus } from "@/__types__/invoice";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface InvoiceListItemProps {
  invoice: Invoice;
  handleInvoiceClick: (invoice: Invoice) => void;
}

const getRandomStatus = () => {
  const statuses = ["paid", "overdue", "draft", "pending payment"];
  return statuses[Math.floor(Math.random() * statuses.length)] as InvoiceStatus;
};

const statusColors: Record<
  InvoiceStatus,
  { backgroundColor: string; color: string }
> = {
  paid: {
    backgroundColor: "#E6FFF0",
    color: "#129043",
  },
  overdue: {
    backgroundColor: "#FFF4F5",
    color: "#FF5663",
  },
  draft: {
    backgroundColor: "#F6F8FA",
    color: "#373B47",
  },
  "pending payment": {
    backgroundColor: "#FFF8EB",
    color: "#D98F00",
  },
};
const InvoiceListItem = ({
  invoice,
  handleInvoiceClick,
}: InvoiceListItemProps) => {
  const [status, setStatus] = useState<InvoiceStatus | null>(null);

  useEffect(() => {
    setStatus(getRandomStatus());
  }, []);

  if (!status) {
    return null;
  }

  const invoiceWithStatus: Invoice = {
    ...invoice,
    status,
  };

  return (
    <div
      className="flex justify-between items-center py-4 px-4 cursor-pointer"
      onClick={() => handleInvoiceClick(invoiceWithStatus)}
    >
      <p className="text-sm font-black text-[#373B47] w-[50%]">
        {invoiceWithStatus.id}
      </p>
      <div className="flex justify-center w-full">
        <div>
          <p className="uppercase tracking-wider text-xs text-[#666F77] mb-1">
            Due date
          </p>
          <p className="font-black text-sm text-[#697598]">
            {invoiceWithStatus.due_date}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <p className="text-[#373B47] self-end font-black mb-3 tracking-wide">
          {invoiceWithStatus.total}
        </p>
        <span
          className={cn(
            status === "paid" ? "py-2 px-3" : "py-2 px-3 md:px-7",
            "text-xs self-end uppercase font-black rounded-2xl border tracking-wide"
          )}
          style={{
            color: statusColors[invoiceWithStatus.status].color,
            backgroundColor:
              statusColors[invoiceWithStatus.status].backgroundColor,
            borderColor: statusColors[invoiceWithStatus.status].color,
          }}
        >
          {invoiceWithStatus.status}
        </span>
      </div>
    </div>
  );
};

export default InvoiceListItem;
