import Image from "next/image";
import BlueButton from "./BlueButton";
import DotsBg from "./DotsBg";
import SpotBg from "./SpotBg";
import ScrollAnimation from "./ScrollAnimation";

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
    <div className="flex flex-col mt-[80px] sm:mt-[120px] md:mt-[150px] lg:mt-[170px] xl:mt-[210px]">
      {optionsList.map((option, i) => {
        return (
          <>
            <ScrollAnimation
              el={
                <div
                  className={`relative w-full overflow-hidden last:pb-0 ${
                    (i + 1) % 2 == 0
                      ? "py-[80px] sm:py-[120px] md:py-[150px] lg:py-[170px] xl:py-[210px]"
                      : ""
                  }`}
                  key={i}
                >
                  <div
                    className={`flex items-center lg:gap-[70px] xl:gap-[90px] container flex-col ${
                      (i + 1) % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    <div
                      className="flex-1"
                      style={{ aspectRatio: `${option.icon.width} / ${option.icon.height}` }}
                    >
                      <Image
                        src={option.icon.path}
                        alt={option.label}
                        width={option.icon.width}
                        height={option.icon.height}
                        style={{ width: "100%", height: "auto" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="text-violetDark max-w-[490px] font-bold text-[24px] leading-[32px] min-[350px]:text-[28px] min-[350px]:leading-[42px] sm:text-[36px] sm:leading-[56px] pb-[24px] mb-[24px] lg:pb-[28px] lg:mb-[28px] relative before:absolute before:bottom-0 before:left-0 before:w-[56px] before:h-[2px] before:bg-black">
                        {option.label}
                      </h3>
                      <p className="max-w-[450px] mb-[40px] text-greyDark text-[14px] leading-[24px] lg:text-[18px] lg:leading-[30px] font-light">
                        {option.text}
                      </p>
                      <BlueButton text={option.btnText} />
                    </div>
                  </div>
                  {i == 0 ? (
                    <DotsBg className="bottom-[50%] translate-y-[50%] lg:bottom-[120px] lg:translate-y-0 right-[-65px] z-[-1]" />
                  ) : (
                    ""
                  )}
                  {i == 1 ? (
                    <SpotBg
                      className="bottom-[100%] translate-y-[100%] lg:bottom-[0px] lg:translate-y-0 right-[-270px]"
                      reverse={true}
                    />
                  ) : (
                    ""
                  )}
                </div>
              }
              gsapOptions={{
                opacity: 1,
                scale: 1,
                delay: 0.3,
                duration: 0.7,
              }}
              style={{
                transform: `scale(0.9)`,
                opacity: 0,
              }}
            />
          </>
        );
      })}
    </div>
  );
}
