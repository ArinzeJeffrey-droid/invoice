"use client";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-72 p-5 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
