import Image from "next/image";
import { roboto } from "@/helpers/fonts";
import Link from "next/link";
import DotsBg from "./DotsBg";

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
    <footer className="mt-[210px] bg-[linear-gradient(183.41deg,_#6888C8_-8.57%,_#5A98F2_82.96%)] pt-[110px] pb-[90px] relative overflow-hidden w-full box-border">
      <div className="container text-white flex justify-between">
        <div className="flex flex-col max-w-[404px]">
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
        <div className="flex gap-[160px]">
          {linkBlocks.map((linkBlock, i) => {
            return (
              <div className="flex flex-col" key={i}>
                <h3 className="mb-[28px] leading-none text-[20px] font-bold">
                  {linkBlock.label}
                </h3>
                {linkBlock.links.map((link, i) => {
                  return (
                    <Link
                      href={link.href}
                      className="leading-none text-[18px] font-light mb-[20px] last:mb-0 relative before:absolute before:bottom-[-1px] before:left-0 before:w-[0%] before:h-[1px] before:bg-white before:transition-all hover:before:w-[100%] w-max active:opacity-[0.7]"
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
      <DotsBg bottom="-35px" left="-47px" floor={true} />
    </footer>
  );
}
