"use client";
import { Button } from "@/components/ui/button";
import Header from "../components/header";
import InvoiceStatistics from "../components/invoice-statistics";
import InvoiceActions from "../components/invoice-actions";
import { Card, CardContent } from "@/components/ui/card";
import { invoiceData } from "@/invoiceData";
import InvoiceListItem from "@/components/invoice-list-item";

export default function Home() {
  return (
    <main className="px-10">
      <Header />
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-black text-3xl text-[#1F1F23]">Invoice</h2>
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

      <div className="flex gap-8">
        <Card className="shadow-sm border-none rounded-[40px] w-[60%]">
          <CardContent className="py-8 px-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-xl text-[#1F1F23]">
                Recent Invoices
              </h3>
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
                  />
                ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-none rounded-[40px] w-[40%]">
          <CardContent className="py-8 px-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-xl text-[#1F1F23]">
                Recent Activities
              </h3>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full tracking-widest font-black text-sm border uppercase py-6 px-5 bg-white text-[#003EFF] hover:bg-white hover:opacity-50"
              >
                view all
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
