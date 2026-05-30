"use client";

import { useState } from "react";
import Sidebar from "@/Components/Sidebar"; // Path check kar lijiyega
import { Menu, X } from "lucide-react";

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-zinc-900 border border-white/10 text-white"
        aria-label="Toggle Menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop for Mobile */}
      {open && (
        <div
          className="fixed inset-0 h-screen bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full z-40
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar />
      </div>
    </>
  );
}