import { Sidebar } from "@/components/admin/Sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" md:block">
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-8">
            <Sidebar className="hidden lg:block" />
            <div className="col-span-6 lg:col-span-7 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8 flex">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
