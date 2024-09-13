import { invoiceActivity } from "@/invoiceData";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import InvoiceActivityItem from "./invoice-activity-item";

const InvoiceActivities = () => {
  return (
    <Card className="shadow-sm border-none rounded-[40px] md:w-[40%]">
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

        {Array(4)
          .fill(invoiceActivity)
          .map((invoiceActivity) => (
            <InvoiceActivityItem
              key={invoiceActivity.title}
              activity={invoiceActivity}
            />
          ))}
      </CardContent>
    </Card>
  );
};

export default InvoiceActivities;
