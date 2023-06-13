import Image from "next/image";
import BlueButton from "./BlueButton";
import DotsBg from "./DotsBg";
import SpotBg from "./SpotBg";

interface Icon {
  path: string;
  width: number;
  height: number;
}

interface Option {
  icon: Icon;
  label: string;
  text: string;
  btnText: string;
}

const optionsList: Option[] = [
  {
    label: "Leading healthcare providers",
    text: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    icon: {
      path: "/images/options/1.png",
      width: 665,
      height: 491,
    },
    btnText: "Learn more",
  },
  {
    label: "Download our Saviour Care mobile app",
    text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    icon: {
      path: "/images/options/2.png",
      width: 626,
      height: 463,
    },
    btnText: "Download",
  },
  {
    label: "Find a Doctor near you",
    text: "Our  app and web portal allows you to find the doctor to your nearest location.",
    icon: {
      path: "/images/options/3.png",
      width: 665,
      height: 474,
    },
    btnText: "Find now",
  },
];

export default function OptionsList() {
  return (
    <div className="flex flex-col mt-[210px]">
      {optionsList.map((option, i) => {
        return (
          <div
            className="relative w-full overflow-hidden pb-[210px] last:pb-0"
            key={i}
          >
            <div
              className={`flex items-center gap-[90px] container ${
                (i + 1) % 2 == 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Image
                src={option.icon.path}
                alt={option.label}
                width={option.icon.width}
                height={option.icon.height}
                loading="lazy"
              />
              <div className="flex flex-col">
                <h3 className="text-violetDark max-w-[490px] font-bold text-[36px] leading-[56px] pb-[28px] mb-[28px] relative before:absolute before:bottom-0 before:left-0 before:w-[56px] before:h-[2px] before:bg-black">
                  {option.label}
                </h3>
                <p className="max-w-[450px] mb-[40px] text-greyDark text-[18px] leading-[30px] font-light">
                  {option.text}
                </p>
                <BlueButton text={option.btnText} />
              </div>
            </div>
            {i == 0 ? <DotsBg bottom="120px" right="-65px" /> : ""}
            {i == 1 ? <SpotBg reverse={true} bottom="0" right="-270px" /> : ""}
          </div>
        );
      })}
    </div>
  );
}
