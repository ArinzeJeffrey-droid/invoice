"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { invoiceData } from "@/invoiceData";
import InvoiceListItem from "./invoice-list-item";
import { useState } from "react";
import { Invoice } from "@/__types__/invoice";
import InvoiceDetailsModal from "./invoice-details-modal";

const RecentInvoices = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice>();
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState<boolean>(false);

  const handleInvoiceClick = (invoice: Invoice) => {
    setIsInvoiceModalOpen(true);
    setSelectedInvoice(invoice);
  };

  return (
    <Card className="shadow-sm border-none rounded-[40px] md:w-[60%]">
      <CardContent className="py-8 px-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-black text-xl text-[#1F1F23]">Recent Invoices</h3>
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full tracking-widest font-black text-sm border uppercase py-6 px-12 bg-white text-[#003EFF] hover:bg-white hover:opacity-50"
          >
            View All invoices
          </Button>
        </div>

        <div className="mb-9">
          <p className="uppercase text-xs font-black text-[#1F1F23] tracking-widest">
            today - 27th November, 2022
          </p>
          {Array(2)
            .fill(invoiceData)
            .map((invoice, index) => (
              <InvoiceListItem
                key={`${invoice.id}-${index}`}
                invoice={invoice}
                handleInvoiceClick={handleInvoiceClick}
              />
            ))}
        </div>

        <div>
          <p className="uppercase text-xs font-black text-[#1F1F23] tracking-widest">
            8th december, 2022
          </p>
          {Array(3)
            .fill(invoiceData)
            .map((invoice, index) => (
              <InvoiceListItem
                key={`${invoice.id}-${index}`}
                invoice={invoice}
                handleInvoiceClick={handleInvoiceClick}
              />
            ))}
        </div>
      </CardContent>

      <InvoiceDetailsModal
        open={isInvoiceModalOpen}
        onOpenChange={setIsInvoiceModalOpen}
        invoice={selectedInvoice}
      />
    </Card>
  );
};

export default RecentInvoices;
