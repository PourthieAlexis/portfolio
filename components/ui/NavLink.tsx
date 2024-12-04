import Link from "next/link";
export interface NavItem {
  href: string;
  label: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavLink = ({
  href,
  children,
  onClick,
  className = "",
}: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={`relative inline-block transition-transform active:scale-95 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${className}`}
  >
    {children}
  </Link>
);
