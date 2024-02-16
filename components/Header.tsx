"use client";
import { Close, Menu } from "@/helpers/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import ScrollAnimation from "./ScrollAnimation";

export interface LinkItem {
  text: string;
  href: string;
}

const links: LinkItem[] = [
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
  const [menuOpened, setMenuOpened] = useState(false);
  const header = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      header?.current && setHeaderHeight(header.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (header.current) {
      setHeaderHeight(header.current.clientHeight);
    }
  }, [header]);

  useEffect(() => {
    if (menuOpened) {
      window.scrollTo(0, 0);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpened]);

  return (
    <header
      ref={header}
      className="container flex items-center justify-between pt-[20px] sm:pt-[30px] md:pt-[40px] lg:pt-[50px]"
    >
      <ScrollAnimation
        el={
          <Image
            src="/images/logo.png"
            alt="Saviour Care logo"
            width={200}
            height={40}
            priority
          />
        }
        gsapOptions={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        style={{
          transform: "translateX(25px) scale(0.7, 1)",
          opacity: 0,
        }}
      />
      <ScrollAnimation
        el={
          <div className="flex items-center gap-[40px]">
            {links.map((link, i) => {
              return (
                <Link
                  href={link.href}
                  className={`relative transition-all text-[18px] font-bold leading-none cursor-pointer before:absolute before:w-[0%] before:h-[2px] before:bg-blueDark before:bottom-[-12px] before:left-[50%] before:translate-x-[-50%] before:transition-all hover:before:w-[100%] before:pointer-events-none active:opacity-[0.8] active:before:opacity-[0.8] active:before:w-[90%] ${
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
        }
        gsapOptions={{
          scale: 1,
          opacity: 1,
        }}
        style={{
          transform: "translateX(-25px) scale(0.7, 1)",
          opacity: 0,
        }}
        className={"hidden xl:block"}
      />
      <ScrollAnimation
        el={
          <div
            className="flex items-center justify-center text-black"
            onClick={() => {
              setMenuOpened(!menuOpened);
            }}
          >
            <Menu
              className={`h-[32px] transition-all ${
                !menuOpened
                  ? "opacity-[1] scale-1 w-[32px]"
                  : "opacity-0 scale-0 w-0"
              }`}
            />
            <Close
              className={`h-[32px] transition-all ${
                menuOpened
                  ? "opacity-[1] scale-1 w-[32px]"
                  : "opacity-0 scale-0 w-0"
              }`}
            />
          </div>
        }
        gsapOptions={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        style={{
          transform: "translateX(-25px) scale(0.7, 1)",
          opacity: 0,
        }}
        className={"block xl:hidden"}
      />
      <MobileMenu headerHeight={headerHeight} links={links} show={menuOpened} />
    </header>
  );
}
