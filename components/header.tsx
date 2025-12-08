"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* LOGO / BRAND NAME */}
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Portfolio<span className="text-primary">.</span>
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-2">
          {/* Social Icons (Desktop only usually, but good to have) */}
          <div className="hidden sm:flex items-center gap-1">
            <Link href="https://github.com/yourusername" target="_blank">
              <Button variant="ghost" size="icon">
                <Image
                  src="/images/github-mark.svg"
                  alt="Github Logo"
                  width={32}
                  height={32}
                />
              </Button>
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank">
              <Button variant="ghost" size="icon">
                <Image
                  src="/images/Twitter-X.svg"
                  alt="Twitter Logo"
                  width={32}
                  height={32}
                />
              </Button>
            </Link>
          </div>

          <ModeToggle />

          {/* MOBILE MENU (SHEET) */}
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
                    className="hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Social Links */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href="https://github.com/pradeepreddy999"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Image
                      src="/images/github-mark.svg"
                      alt="Github Logo"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Image
                      src="/images/Twitter-X.svg"
                      alt="Twitter Logo"
                      width={32}
                      height={32}
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
};

export default Header;
