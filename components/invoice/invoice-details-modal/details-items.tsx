import { Invoice } from "@/__types__/invoice";
import { Card, CardContent } from "@/components/ui/card";

interface DetailsItemsProps {
  invoice: Invoice;
}

const DetailsItems = ({ invoice }: DetailsItemsProps) => {
  const items = invoice.items;
  return (
    <div>
      <div className="flex gap-10 items-center mb-6">
        <p className="text-[#1F1F23] font-black text-xl">Items</p>
        <hr className="w-full border-[#E3E6EF]" />
      </div>

      <div className="mb-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center p-4"
          >
            <div className="w-full">
              <p className="text-[#1F1F23] mb-1">{item.name}</p>
              <p className="text-xs text-[#666F77]">{item.description}</p>
            </div>

            <p className="text-[#1F1F23] text-right w-full">{item.quantity}</p>
            <p className="text-[#1F1F23] text-right w-full">{item.price}</p>
            <p className="text-[#1F1F23] text-right w-full">{item.total}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end mb-6">
        <div>
          <div className="flex justify-between items-center mb-5">
            <p className="text-[#B7BDCF] text-sm">SUBTOTAL</p>
            <p className="text-[#373B47] text-xl font-bold">
              {invoice.subtotal}
            </p>
          </div>

          <div className="flex justify-between items-center mb-5">
            <p className="text-[#B7BDCF] text-sm">Discount (2.5%)</p>
            <p className="text-[#373B47] text-xl font-bold">
              {invoice.discount}
            </p>
          </div>

          <div className="flex justify-between items-center gap-14">
            <p className="text-[#373B47] text-lg font-bold uppercase">
              Total amount due
            </p>
            <p className="text-[#373B47] text-2xl font-black">
              {invoice.total}
            </p>
          </div>
        </div>
      </div>

      <Card className="shadow-none rounded-3x mb-6">
        <CardContent className="py-4 px-6">
          <p className="text-[#697598] text-xs font-black uppercase mb-2">
            Payment information
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-11 mb-4">
            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">
                Account name
              </p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.payment_information.account_name}
              </p>
            </div>

            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">
                account number
              </p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.payment_information.account_number}
              </p>
            </div>

            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">
                Ach routing no
              </p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.payment_information.routing_number}
              </p>
            </div>

            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">Bank Name</p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.payment_information.bank_name}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-11">
            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">
                bank address
              </p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.payment_information.bank_address}
              </p>
            </div>

            <div>
              <p className="uppercase text-xs text-[#666F77] mb-1">
                account number
              </p>
              <p className="text-xs tex-[#1F1F23] font-black">
                {invoice.payment_information.account_number}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="rounded-3xl py-4 px-6 bg-[#F6F8FA]">
        <p className="text-sm text-[#B7BDCF] mb-1">NOTE</p>
        <p className="text-[#666F77]">Thank you for your patronage</p>
      </div>
    </div>
  );
};

export default DetailsItems;
