import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NotificationBing } from "iconsax-react";
import { ChevronDown } from "lucide-react";

const dropdownItems = [
  { label: "Profile" },
  { label: "Billing" },
  { label: "Team" },
  { label: "Subscription" },
  { label: "Log Out" },
];

const Header = () => {
  return (
    <header className="border-b pb-4 mb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[#373B47] text-3xl font-bold tracking-widest">INVOICE</h1>
        <div className="flex items-center gap-6">
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full py-6 bg-white text-[#373B47] hover:bg-white hover:opacity-50"
          >
            <NotificationBing size={24} variant="TwoTone" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full py-6 bg-white text-[#373B47] hover:bg-white hover:opacity-50"
              >
                <span className="h-8 w-8 rounded-full text-sm font-bold text-white bg-[#003EFF] flex items-center justify-center">
                  KO
                </span>
                <ChevronDown size={15} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="shadow-none min-w-64 border border-[#E3E6EF] rounded-3xl mt-1 mr-4">
              <DropdownMenuLabel className="p-4">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dropdownItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="p-4 text-sm font-medium cursor-pointer text-[#697598]"
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
