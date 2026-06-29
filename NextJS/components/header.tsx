"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Portfolio<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1">
            <Link
              href="https://github.com/pradeepreddy999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Image
                  src="/images/github-mark.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="dark:invert"
                />
              </Button>
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Image
                  src="/images/Twitter-X.svg"
                  alt="Twitter / X"
                  width={20}
                  height={20}
                  className="dark:invert"
                />
              </Button>
            </Link>
          </div>

          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <div className="grid gap-6 px-4 py-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-4 flex gap-4">
                  <Link
                    href="https://github.com/pradeepreddy999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/github-mark.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/Twitter-X.svg"
                      alt="Twitter / X"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
