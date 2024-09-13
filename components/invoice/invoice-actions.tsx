import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Profile2User, Setting } from "iconsax-react";
import moneySvg from "@/public/svgs/money.svg";
import Image from "next/image";

const actions = [
  {
    title: "Create New Invoice",
    subtitle: "Create new invoices easily",
    icon: () => (
      <Image
        src={moneySvg.src}
        width={80}
        height={80}
        className="mb-4"
        alt="Create New Invoice"
        priority
      />
    ),
    active: true,
  },
  {
    title: "Change Invoice settings",
    subtitle: "Customise your invoices",
    icon: (active: boolean) => (
      <Setting
        size={80}
        variant="TwoTone"
        className={`mb-4 ${active ? "text-white" : "group-hover:text-white"}`}
      />
    ),
    active: false,
  },
  {
    title: "Manage Customer list",
    subtitle: "Add and remove customers",
    icon: (active: boolean) => (
      <Profile2User
        size={80}
        variant="TwoTone"
        className={`mb-4 ${active ? "text-white" : "group-hover:text-white"}`}
      />
    ),
    active: false,
  },
];

const InvoiceActions = () => {
  return (
    <div className="mb-6">
      <h3 className="font-black text-[#1F1F23] text-xl mb-6">
        Invoice Actions
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {actions.map((action) => (
          <Card
            key={action.title}
            className={cn(
              action.active && "bg-[#003EFF]",
              "border-none rounded-3xl shadow-sm cursor-pointer hover:bg-[#003EFF] group"
            )}
          >
            <CardContent className="py-8 px-10">
              {action.icon(action.active)}
              <div>
                <p
                  className={cn(
                    action.active ? "text-white" : "text-[#373B47]",
                    "group-hover:text-white text-xl font-black mb-2"
                  )}
                >
                  {action.title}
                </p>
                <p
                  className={cn(
                    action.active ? "text-white" : "text-[#697598]",
                    "group-hover:text-white text-sm"
                  )}
                >
                  {action.subtitle}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvoiceActions;
