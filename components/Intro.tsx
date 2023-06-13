import Image from "next/image";
import { roboto } from "@/helpers/fonts";
import DotsBg from "./DotsBg";

export default function Intro() {
  return (
    <div className="container relative flex items-center justify-between gap-[12px] pt-[125px] z-10">
      <div className="flex flex-col flex-1">
        <h1 className="text-5xl leading-[1.2] font-bold mb-[48px] text-grayBlue">
          Virtual healthcare Saviour for you
        </h1>
        <p
          className={`text-lg font-medium mb-[130px] text-blueLight ${roboto.className}`}
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
      <DotsBg top="60px" left="30px" translate="-100%, 0" />
    </div>
  );
}
