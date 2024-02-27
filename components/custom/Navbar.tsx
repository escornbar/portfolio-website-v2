"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface Link {
  label: string;
  href: {
    pathname: string;
    id: string;
  };
}

const links = [
  {
    label: "home",
    href: {
      pathname: "/",
      id: "#",
    },
  },
  {
    label: "experience",
    href: {
      pathname: "/",
      id: "#experience",
    },
  },
  {
    label: "projects",
    href: {
      pathname: "/",
      id: "#projects",
    },
  },
  {
    label: "stack",
    href: {
      pathname: "/",
      id: "#stack",
    },
  },
  {
    label: "resume",
    href: {
      pathname: "/resume",
      id: "#",
    },
  },
];

function pathCheck(pathname: string, obj: Link) {
  return pathname === obj.href.pathname
    ? obj.href.id
    : obj.href.pathname + obj.href.id;
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className={`min-w-screen sticky top-0 z-20 backdrop-blur-lg backdrop-filter`}>
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 items-center py-6">
          <Logo />
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {links.map((link, idx) => (
                <NavigationMenuItem key={idx}>
                  <Link
                    href={pathCheck(pathname, link)}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-1 justify-self-end">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div className="font-black hover:text-primary text-2xl transition-colors ease-linear duration-300">
        syaamilfaiq
      </div>
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant={"ghost"} size={"icon"} onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-48 pt-10">
        <div className="flex flex-col gap-1">
          {links.map((link, idx) => (
            <Button
              variant={"ghost"}
              size={"lg"}
              key={idx}
              className={cn("justify-start px-0 font-bold")}
              onClick={() => setOpen(false)}
              asChild
            >
              <Link href={pathCheck(pathname, link)}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
