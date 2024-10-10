"use client";
import {
  ActivityIcon,
  PhoneCallIcon,
  PhoneIcon,
  HeadsetIcon,
  ViewIcon,
  VoicemailIcon,
  DollarSignIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import LogInButton from "./login-btn";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = React.useState(false); // Dodanie stanu do kontrolowania widoczności navbaru

  const navItems = [
    { href: "/dashboard", icon: ViewIcon, label: "Overview" },
    { href: "/assistants", icon: ActivityIcon, label: "Assistants" },
    { href: "/billing", icon: DollarSignIcon, label: "Billing" },
    { href: "/support", icon: HeadsetIcon, label: "Support" },
  ];

  return (
    <div>
      {/* Przycisk do otwierania navbaru na mniejszych ekranach */}
      <button
        className="text-white md:hidden" // Ukryj na większych ekranach
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <MenuIcon className="h-6 w-6" /> {/* Ikona menu (hamburger) */}
      </button>

      {/* Nawigacja - ukryj na małych ekranach, pokaż na większych */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-black text-white transform ${navbarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:translate-x-0 md:block`}>
        <header className="text-white px-6 py-4 pb-0 flex items-center bg-[#0e0e0e]">
          <Link href={"/"}>
            <span className="text-2xl font-bold">Memory Walk</span>
          </Link>
        </header>
        <aside className="flex flex-col w-64 py-8 px-4">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <li
                    className={`p-2 my-4 rounded-lg font-bold ${
                      isActive ? "bg-[#18282a] text-[#63beb7]" : ""
                    }`}
                  >
                    <item.icon className="h-5 w-5 inline-block mr-2" />
                    {item.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </aside>
        <div className="flex items-center m-4 ">
          <LogInButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
