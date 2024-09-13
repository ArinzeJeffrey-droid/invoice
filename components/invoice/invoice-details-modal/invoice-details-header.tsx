import { Invoice } from "@/__types__/invoice";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dropdownItems = [
  { label: "Duplicate invoice" },
  { label: "get sharable link" },
];

interface InvoiceDetailsHeaderProps {
  invoice: Invoice;
}

const InvoiceDetailsHeader = ({ invoice }: InvoiceDetailsHeaderProps) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8">
      <div className="mb-7 md:mb-0">
        <h2 className="text-[#1F1F23] text-3xl font-black mb-2">
          {invoice.id}
        </h2>
        <p className="text-[#697598] mb-6">
          View the details and activity of this invoice
        </p>

        <span className="text-[#003EFF] bg-[#F2FBFF] border border-[#003EFF] rounded-3xl font-bold p-4">
          PARTIAL PAYMENT
        </span>
      </div>

      <div className="flex items-center flex-wrap md:flex-nowrap gap-6 self-start">
        <Button
          variant="ghost"
          className="rounded-full tracking-widest font-black text-base border border-[#E3E6EF] uppercase py-6 px-12 bg-white text-[#003EFF] hover:bg-white hover:opacity-50"
        >
          Download as pdf
        </Button>

        <Button
          variant="ghost"
          className="rounded-full tracking-widest font-black text-base border uppercase py-6 px-12 text-white bg-[#003EFF] hover:text-white hover:bg-[#003EFF] hover:opacity-50"
        >
          Send invoice
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="rounded-full tracking-widest font-black text-base border border-[#E3E6EF] uppercase py-7 px-5 bg-white text-[#373B47] hover:bg-white hover:opacity-50"
            >
              More
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="shadow-none w-64 border border-[#E3E6EF] rounded-3xl mt-1 mr-2">
            {dropdownItems.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className="p-6 text-sm uppercase font-bold cursor-pointer text-[#697598] hover:rounded-3xl"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default InvoiceDetailsHeader;
