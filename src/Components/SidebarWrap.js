"use client";

import { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import { Menu } from "lucide-react";

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50"
      >
        <Menu />
      </button>

      {/* SIDEBAR */}
       {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`
          fixed md:static top-0 left-0 z-99 h-full
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar />
      </div>
    </>
  );
}