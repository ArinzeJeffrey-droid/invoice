import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const reminders = [
  {
    label: "14 days before due date",
    active: true,
  },
  {
    label: "7 days before due date",
    active: true,
  },
  {
    label: "3 days before due date",
    active: false,
  },
  {
    label: "24 hrs before due date",
    active: false,
  },
  {
    label: "On the due date",
    active: false,
  },
];

const Reminders = () => {
  return (
    <Card className="shadow-none rounded-3xl inline-block mb-8">
      <CardContent className="p-4 flex flex-wrap items-center gap-3">
        <p className="text-xs text-[#666F77]">Reminders</p>
        {reminders.map((reminder) => (
          <div
            key={reminder.label}
            className={cn(
              "text-sm text-[#373B47] font-bold py-3 px-4 rounded-3xl flex items-center",
              reminder.active ? "bg-[#E6FFF0]" : "border border-[#E3E6EF]"
            )}
          >
            {reminder.label}
            {reminder.active && (
              <Check className="text-[#2DB260] ml-2" size={12} />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Reminders;
