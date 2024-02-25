"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Link {
  label: string;
  href: {
    pathname: string;
    id: string;
  };
}

const links = [
  {
    label: "Home",
    href: {
      pathname: "/",
      id: "#",
    },
  },
  {
    label: "About",
    href: {
      pathname: "/",
      id: "#about",
    },
  },
  {
    label: "Experience",
    href: {
      pathname: "/",
      id: "#experience",
    },
  },
  {
    label: "Projects",
    href: {
      pathname: "/",
      id: "#projects",
    },
  },
  {
    label: "Stack",
    href: {
      pathname: "/",
      id: "#stack",
    },
  },
  {
    label: "Contact",
    href: {
      pathname: "/",
      id: "#contact",
    },
  },
  {
    label: "Resume",
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
      <div
        className={`container mx-auto flex justify-between items-center py-8 sticky`}
      >
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link, idx) => (
              <NavigationMenuItem key={idx}>
                <Link href={pathCheck(pathname, link)} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div className="font-black hover:text-primary dark:hover:text-primary-foreground text-2xl">
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
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
