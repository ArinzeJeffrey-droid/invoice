"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <aside className="fixed top-0 left-0 h-full w-72 bg-white shadow-sm p-5 z-50">
      <button className="md:hidden p-2 text-gray-600" onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        ref={sidebarRef}
        className={cn(
          isOpen ? "translate-x-0" : "-translate-x-full",
          "fixed top-0 left-0 h-full w-full transition-transform duration-300 ease-in-out z-50 md:static md:translate-x-0"
        )}
      >
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
      </div>
    </aside>
  );
};

export default Sidebar;
