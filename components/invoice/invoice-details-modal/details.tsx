import { Invoice } from "@/__types__/invoice";
import { Card, CardContent } from "@/components/ui/card";
import businessImg from "@/public/images/business.png";
import Image from "next/image";
import DetailsItems from "./details-items";

interface DetailsProps {
  invoice: Invoice;
}

const Details = ({ invoice }: DetailsProps) => {
  return (
    <Card className="shadow-none rounded-[40px] md:w-[60%]">
      <CardContent className="p-6">
        <div className="rounded-[40px] bg-[#FCDDEC] p-6 py-10 mb-6">
          <div className="flex flex-wrap justify-between mb-8">
            <div>
              <p className="font-black text-[#697598] text-xs mb-4">SENDER</p>
              <div className="flex gap-4">
                <Image
                  src={businessImg}
                  className="rounded-md w-14 h-14"
                  width={60}
                  height={60}
                  alt={invoice.id}
                />
                <div>
                  <p className="text-[#1F1F23] font-black mb-2">
                    {invoice.sender.name}
                  </p>
                  <p className="text-xs text-[#697598] mb-2">
                    {invoice.sender.contact}
                  </p>
                  <p className="text-xs text-[#697598] mb-2">
                    {invoice.sender.address}
                  </p>
                  <p className="text-xs text-[#697598] mb-2">
                    {invoice.sender.email}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-black text-[#697598] text-xs text-left mb-4">
                CUSTOMER
              </p>
              <p className="text-[#1F1F23] font-black mb-2">
                {invoice.customer.name}
              </p>
              <p className="text-xs text-[#697598] mb-2">
                {invoice.customer.contact}
              </p>
              <p className="text-xs text-[#697598] mb-2">
                {invoice.customer.email}
              </p>
            </div>
          </div>

          <p className="text-[#697598] text-xs font-black tracking-widest mb-2">
            Invoice details
          </p>

          <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">
                invoice no
              </p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.number}
              </p>
            </div>

            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">
                Issue date
              </p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.issue_date}
              </p>
            </div>

            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">due date</p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.due_date}
              </p>
            </div>

            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">
                Billing currency
              </p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.currency}
              </p>
            </div>
          </div>
        </div>

        <DetailsItems invoice={invoice} />
      </CardContent>
    </Card>
  );
};

export default Details;
