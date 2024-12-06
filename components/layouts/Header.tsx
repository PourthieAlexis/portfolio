"use client";
import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { NavItem } from "../ui/NavLink";
import { Navigation } from "../ui/Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems: NavItem[] = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "A propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#portfolio", label: "Portfolio" },
  ];

  return (
    <header
      className="flex items-center justify-between h-20 px-6 md:px-12 relative"
      id="home"
    >
      <div className="w-28 md:w-40" />

      <Navigation
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={navItems}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <IoClose size="24" /> : <IoMenu size="24" />}
      </button>

      <Link
        href="/CV/Alexis_Pourthie_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex bg-blue-500 p-3 rounded-lg items-center gap-2 w-fit"
      >
        CV <MdOutlineFileDownload size="1.5rem" />
      </Link>
    </header>
  );
}
