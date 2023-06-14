import Image from "next/image";
import { roboto } from "@/helpers/fonts";
import DotsBg from "./DotsBg";

export default function Intro() {
  return (
    <div className="container relative flex items-center justify-between gap-[12px] pt-[48px] sm:pt-[80px] lg:pt-[125px] flex-col-reverse lg:flex-row">
      <div className="flex flex-col flex-1">
        <h1 className="text-3xl min-[350px]:text-4xl sm:text-5xl leading-[1.2] font-bold mb-[24px] sm:mb-[28px] xl:mb-[48px] text-grayBlue">
          Virtual healthcare Saviour for you
        </h1>
        <p
          className={`text-sm min-[350px]:text-base sm:text-lg font-medium mb-[48px] sm:mb-[80px] xl:mb-[130px] text-blueLight ${roboto.className}`}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <button className="px-[38px] py-[19px] bg-bluePrimary text-white w-max leading-none rounded-[55px] transition-all border-[1px] border-bluePrimary hover:bg-white hover:text-bluePrimary active:bg-blueDark active:bg-opacity-[0.07]">
          Consult today
        </button>
      </div>
      <div className="flex-[1.1]">
        <Image
          src="/images/intro.png"
          alt="Saviour Care intro"
          width={770}
          height={555}
          className="w-auto"
          priority
        />
      </div>
      <DotsBg className="top-[60px] left-[30px] translate-x-[-100%] z-[-1]" />
    </div>
  );
}
