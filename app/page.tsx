"use client";
import { Button } from "@/components/ui/button";
import InvoiceStatistics from "../components/invoice/invoice-statistics";
import InvoiceActions from "../components/invoice/invoice-actions";
import RecentInvoices from "@/components/invoice/recent-invoices";
import InvoiceActivities from "@/components/invoice/invoice-activities";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="font-black text-3xl text-[#1F1F23] mb-4 md:mb-0">
          Invoice
        </h2>
        <div className="flex items-center gap-8">
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full font-black text-sm border uppercase py-6 px-12 bg-white text-[#697598] hover:bg-white hover:opacity-50"
          >
            see what’s new
          </Button>
          <Button
            size="sm"
            className="rounded-full font-black text-base bg-[#003EFF] text-white uppercase py-6 px-16 hover:opacity-50"
          >
            create
          </Button>
        </div>
      </div>

      <InvoiceStatistics />
      <InvoiceActions />

      <div className="flex flex-col md:flex-row gap-8">
        <RecentInvoices />
        <InvoiceActivities />
      </div>
    </>
  );
}
