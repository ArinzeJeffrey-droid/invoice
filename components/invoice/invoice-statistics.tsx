import { Card, CardContent } from "@/components/ui/card";
import { Category2 } from "iconsax-react";

const stats = [
  {
    title: "TOTAL PAID",
    value: "1,289",
    color: "bg-[#B6FDD3]",
    amount: "$4,120,102",
    cent: ".76",
  },
  {
    title: "TOTAL OVERDUE",
    value: "13",
    color: "bg-[#FFB7BD]",
    amount: "$23,000",
    cent: ".13",
  },
  {
    title: "TOTAL DRAFT",
    value: "08",
    color: "bg-[#D9D9E0]",
    amount: "$12,200",
    cent: ".00",
  },
  {
    title: "TOTAL UNPAID",
    value: "06",
    color: "bg-[#F8E39B]",
    amount: "$87,102",
    cent: ".00",
  },
];

const InvoiceStatistics = () => {
  return (
    <div className="grid md:grid-cols-4 gap-8 mb-10">
      {stats.map((statistic) => (
        <Card key={statistic.title} className="border-none rounded-3xl shadow-sm">
          <CardContent className="py-8 px-10">
            <Category2 size={40} className="mb-4 text-[#697598]" variant="TwoTone" />

            <div>
              <p className="text-xs text-[#697598] mb-4">
                {statistic.title}
                <span
                  className={`${statistic.color} text-sm ml-2 font-medium text-[#373B47] rounded-full py-3 px-4`}
                >
                  {statistic.value}
                </span>
              </p>
              <p className="text-[#1F1F23] font-black text-3xl tracking-wide">
                {statistic.amount}
                <span className="text-sm font-medium text-[#697598]">
                  {statistic.cent}
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InvoiceStatistics;
