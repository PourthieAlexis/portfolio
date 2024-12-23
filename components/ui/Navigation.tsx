import Link from "next/link";
import { NavLink } from "@/components/ui/NavLink";
import { NavItem } from "@/components/ui/NavLink";
import { MdOutlineFileDownload } from "react-icons/md";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export const Navigation = ({ isOpen, onClose, items }: NavigationProps) => (
  <nav
    className={`
      fixed top-0 right-0 h-screen w-64 md:w-auto md:h-auto md:static
      bg-gray-900 md:bg-transparent
      transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0
      transition-transform duration-300 ease-in-out
      flex flex-col items-center justify-center
      z-40 md:z-auto
    `}
  >
    <ul className="flex flex-col md:flex-row gap-8 md:gap-4 mb-8 md:mb-0">
      {items.map(({ href, label }) => (
        <li key={href}>
          <NavLink href={href} onClick={onClose}>
            {label}
          </NavLink>
        </li>
      ))}
      <li className="md:hidden">
        <Link
          href="/CV/Alexis_Pourthie_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 p-2 rounded-lg flex items-center gap-2 w-fit text-sm"
        >
          CV <MdOutlineFileDownload size="1.5rem" />
        </Link>
      </li>
    </ul>
  </nav>
);
