"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Link {
  text: string;
  href: string;
}

const links: Link[] = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "Find a doctor",
    href: "#",
  },
  {
    text: "Apps",
    href: "#",
  },
  {
    text: "Testimonials",
    href: "#",
  },
  {
    text: "About us",
    href: "#",
  },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="container flex items-center justify-between pt-[50px]">
      <Image
        src="/images/logo.png"
        alt="Saviour Care logo"
        width={200}
        height={40}
        priority
      />
      <div className="flex items-center gap-[40px]">
        {links.map((link, i) => {
          return (
            <Link
              href={link.href}
              className={`relative transition-all text-[18px] font-bold leading-none cursor-pointer before:absolute before:w-[0%] before:h-[2px] before:rounded-[100%] before:bg-blueDark before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:transition-all hover:before:w-[100%] before:pointer-events-none active:opacity-[0.8] active:before:opacity-[0.8] active:before:w-[90%] ${
                activeIndex == i
                  ? "before:w-[120%] text-blueDark pointer-events-none"
                  : "text-violetLight before:bg-violetLight before:rounded-[0%] opacity-[0.5] hover:opacity-[1]"
              }`}
              key={i}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
