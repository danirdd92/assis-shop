"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Fruits", href: "/fruits" },
  { name: "Vegetables", href: "/vegetables" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <div className="text-2xl md:text-4xl font-bold">
            Assis <span className="text-primary">Shop</span>
          </div>
        </Link>

        <nav>
          <ul className="hidden gap-12 lg:flex lg:ml-auto 2xl:ml-16">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-lg font-semibold uppercase",
                    pathname === link.href
                      ? "text-primary"
                      : "text-gray-600 transition duration-100 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant="outline"
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBagIcon />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
