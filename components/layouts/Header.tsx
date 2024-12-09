"use client";
import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { NavItem } from "../ui/NavLink";
import { Navigation } from "../ui/Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowSideNav(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <header className="absolute w-full z-50">
        <div className="flex items-center justify-between h-20 px-6 md:px-12 bg-transparent">
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
        </div>
      </header>

      <nav
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 md:block hidden ${
          showSideNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="flex items-center justify-end gap-3 w-full"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span
                className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  hoveredItem === item.href
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
              >
                {item.label}
              </span>
              <div className="w-6 flex justify-center">
                <a
                  href={item.href}
                  className="w-6 h-6 bg-blue-500 rounded-full block hover:scale-150 transition-transform"
                />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
