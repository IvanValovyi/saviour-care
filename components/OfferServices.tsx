import { roboto } from "@/helpers/fonts";
import Image from "next/image";
import BlueButton from "./BlueButton";
import SpotBg from "./SpotBg";
import DotsBg from "./DotsBg";
import ScrollAnimation from "./ScrollAnimation";

interface Icon {
  path: string;
  width: number;
  height: number;
}

interface Service {
  icon: Icon;
  label: string;
  text: string;
}

const allServices: Service[] = [
  {
    icon: {
      path: "/images/services/1.png",
      width: 92,
      height: 90,
    },
    label: "Search doctor",
    text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    icon: {
      path: "/images/services/2.png",
      width: 62,
      height: 85,
    },
    label: "Online pharmacy",
    text: "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    icon: {
      path: "/images/services/3.png",
      width: 67,
      height: 95,
    },
    label: "Consultation",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    icon: {
      path: "/images/services/4.png",
      width: 67,
      height: 95,
    },
    label: "Details info",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    icon: {
      path: "/images/services/5.png",
      width: 80,
      height: 71,
    },
    label: "Emergency care",
    text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    icon: {
      path: "/images/services/6.png",
      width: 74,
      height: 95,
    },
    label: "Tracking",
    text: "Track and save your medical history and health data ",
  },
];

export default function OfferServices() {
  return (
    <div className="relative overflow-hidden mt-[80px] sm:mt-[120px] md:mt-[150px] lg:mt-[170px] xl:mt-[210px]">
      <div className="container flex items-center flex-col text-center relative">
        <ScrollAnimation
          el={
            <h2 className="text-[28px] leading-[32px] min-[350px]:text-[36px] min-[350px]:leading-[43px] sm:text-[45px] sm:leading-[56px] font-bold text-violetDark sm:w-max pb-[24px] mb-[22px] sm:pb-[28px] sm:mb-[30px] relative before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:h-[2px] before:rounded-[5px] before:w-[56px] before:bg-black">
              Services we Offer
            </h2>
          }
          gsapOptions={{
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
          }}
          style={{
            transform: "translateY(25px) scale(0)",
            opacity: 0,
          }}
        />
        <ScrollAnimation
          el={
            <p
              className={`text-greyLight ${roboto.className} font-medium text-[14px] leading-[18px] min-[350px]:text-[16px] min-[350px]:leading-[22px] sm:text-[19px] sm:leading-[27px] tracking-[0.02em] lg:w-max max-w-[952px] mb-[28px] sm:mb-[85px]`}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          }
          gsapOptions={{
            opacity: 1,
            duration: 0.5,
          }}
          style={{
            opacity: 0,
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[18px] md:gap-[34px] mb-[48px] md:mb-[72px]">
          {allServices.map((service, i) => {
            return (
              <ScrollAnimation
                el={
                  <div
                    className="flex flex-col items-center p-[24px] md:p-[38px] rounded-[20px] shadow-md bg-white"
                    key={i}
                  >
                    <div className="flex items-center justify-center h-[100px] mb-[18px]">
                      <Image
                        src={service.icon.path}
                        alt={service.label}
                        width={service.icon.width}
                        height={service.icon.height}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-black text-[20px] md:text-[24px] font-bold">
                      {service.label}
                    </h3>
                    <p className="text-greyDark text-[14px] md:text-[16px] leading-[28px]">
                      {service.text}
                    </p>
                  </div>
                }
                gsapOptions={{
                  scale: 1,
                  opacity: 1,
                  duration: 0.7,
                }}
                style={{
                  transform: `scale(0)`,
                  opacity: 0,
                }}
                key={i}
              />
            );
          })}
        </div>
        <ScrollAnimation
          el={<BlueButton text="Load more" />}
          gsapOptions={{
            scale: 1,
            opacity: 1,
            duration: 0.5,
          }}
          style={{
            transform: `scale(0.8)`,
            opacity: 0,
          }}
        />
        <DotsBg className="top-[50%] right-[50px] translate-y-[-20%] z-[-1]" />
      </div>
      <SpotBg className="left-[-170px] top-[50%] translate-y-[-50%]" />
    </div>
  );
}
