"use client";
import Image from "next/image";
import { roboto } from "@/helpers/fonts";
import Link from "next/link";
import DotsBg from "./DotsBg";
import ScrollAnimation from "./ScrollAnimation";

interface Link {
  text: string;
  href: string;
}

interface LinkBlock {
  label: string;
  links: Link[];
}

const linkBlocks: LinkBlock[] = [
  {
    label: "Company",
    links: [
      {
        text: "About",
        href: "#",
      },
      {
        text: "Testimonials",
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
    ],
  },
  {
    label: "Region",
    links: [
      {
        text: "Cities",
        href: "#",
      },
      {
        text: "Population centers",
        href: "#",
      },
      {
        text: "Countries",
        href: "#",
      },
      {
        text: "Continents",
        href: "#",
      },
    ],
  },
  {
    label: "Help",
    links: [
      {
        text: "Help center",
        href: "#",
      },
      {
        text: "Contact support",
        href: "#",
      },
      {
        text: "Instructions",
        href: "#",
      },
      {
        text: "How it works",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <ScrollAnimation
      el={
        <footer className="mt-[80px] sm:mt-[120px] md:mt-[150px] lg:mt-[170px] xl:mt-[210px] bg-[linear-gradient(183.41deg,_#6888C8_-8.57%,_#5A98F2_82.96%)] pt-[70px] pb-[50px] sm:pt-[80px] sm:pb-[60px] md:pt-[90px] md:pb-[70px] lg:pt-[100px] lg:pb-[80px] xl:pt-[110px] xl:pb-[90px] relative overflow-hidden w-full box-border">
          <div className="container text-white flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col mb-[64px] lg:mb-0 lg:max-w-[320px] xl:max-w-[404px]">
              <Image
                src="/images/footer-logo.png"
                alt="Saviour Care footer logo"
                width={230}
                height={40}
                className="mb-[16px]"
              />
              <p
                className={`${roboto.className} font-medium text-[18px] leading-[27px] tracking-[0.01em] mb-[30px]`}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
              <p className="font-light text-[18px] leading-[28px]">
                ©AK PVT LTD 2021. All rights reserved
              </p>
            </div>
            <div className="flex flex-wrap gap-[58px] min-[350px]:gap-[48px] justify-between lg:justify-start lg:gap-[70px] xl:gap-[160px] text-center min-[350px]:text-start">
              {linkBlocks.map((linkBlock, i) => {
                return (
                  <div
                    className="flex flex-col w-full min-[350px]:w-max"
                    key={i}
                  >
                    <h3 className="mb-[32px] sm:mb-[28px] leading-none text-[20px] font-bold">
                      {linkBlock.label}
                    </h3>
                    {linkBlock.links.map((link, i) => {
                      return (
                        <Link
                          href={link.href}
                          className="leading-none text-[18px] font-light mb-[24px] sm:mb-[20px] last:mb-0 relative before:absolute before:bottom-[-1px] before:left-0 before:w-[0%] before:h-[1px] before:bg-white before:transition-all hover:before:w-[100%] mx-auto min-[350px]:mx-0 w-max active:opacity-[0.7]"
                          key={i}
                        >
                          {link.text}
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <DotsBg className="bottom-[-35px] left-[-47px] z-[1]" />
        </footer>
      }
      gsapOptions={{
        scale: 1,
        opacity: 1,
        duration: 0.5,
      }}
      style={{
        transform: "scale(0.95)",
        opacity: 0,
      }}
    />
  );
}
