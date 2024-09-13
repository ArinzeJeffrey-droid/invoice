"use client";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Home2,
  Category2,
  ReceiptItem,
  Profile2User,
  MessageQuestion,
  Setting,
} from "iconsax-react";

const links = [
  {
    name: "Getting Started",
    href: "#",
    icon: <Home2 size={24} variant="TwoTone" />,
    active: false,
  },
  {
    name: "Overview",
    href: "#",
    icon: <Category2 size={24} variant="TwoTone" />,
    active: false,
  },
  {
    name: "Accounts",
    href: "#",
    icon: <Home2 size={24} variant="TwoTone" />,
    active: false,
  },
  {
    name: "Invoice",
    href: "#",
    icon: <ReceiptItem size={24} variant="TwoTone" />,
    active: true,
  },
  {
    name: "Beneficiary Management",
    href: "#",
    icon: <Profile2User size={24} variant="TwoTone" />,
    active: false,
  },
  {
    name: "Help Center",
    href: "#",
    icon: <MessageQuestion size={24} variant="TwoTone" />,
    active: false,
  },
  {
    name: "Settings",
    href: "#",
    icon: <Setting size={24} variant="TwoTone" />,
    active: false,
  },
];

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  return (
    <aside
      className={cn(
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "fixed top-0 bottom-0 left-0 overflow-auto h-full w-72 bg-white shadow-sm p-5 z-50 transition-transform duration-300 ease-in-out md:static md:translate-x-0"
      )}
      id="app-sidebar"
    >
      <button
        className="md:hidden p-2 text-gray-600 z-[999]"
        onClick={toggleSidebar}
      >
        <X size={24} />
      </button>
      <h2 className="text-2xl font-semibold mb-20"></h2>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={cn(
                  link.active
                    ? "border-[#F8F8FB] text-[#4F4F4F]"
                    : "border-transparent text-[#697598] ",
                  "py-3 px-4 font-normal text-sm rounded-[32px] flex items-center gap-2 border-8 hover:border-8 hover:border-[#F8F8FB]"
                )}
              >
                {link.icon} {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
