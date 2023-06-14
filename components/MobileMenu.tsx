import Link from "next/link";
import { LinkItem } from "./Header";

interface Props {
  headerHeight: number;
  links: LinkItem[];
  show: boolean;
}

export default function MobileMenu({ headerHeight, links, show }: Props) {
  return (
    <div
      style={{
        height: `calc(100vh - ${headerHeight}px)`,
        top: `${headerHeight}px`,
      }}
      className={`flex pt-[20px] sm:pt-[30px] md:pt-[40px] lg:pt-[50px] fixed w-full bg-white left-0 transition-all z-50 ${
        show ? "translate-x-[0%] opacity-[1]" : "translate-x-[100%] opacity-[0]"
      }`}
    >
      <div className="flex flex-col container">
        {links.map((link, i) => {
          return (
            <Link
              href={link.href}
              className="py-[15px] px-[10px] border-b-[1px] border-black font-bold text-[20px]"
              key={i}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
