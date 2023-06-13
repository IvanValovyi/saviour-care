import { roboto } from "@/helpers/fonts";
import Image from "next/image";
import BlueButton from "./BlueButton";
import SpotBg from "./SpotBg";
import DotsBg from "./DotsBg";

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
    <div className="relative overflow-hidden mt-[210px]">
      <div className="container flex items-center flex-col text-center relative">
        <h2 className="text-[45px] leading-[56px] font-bold text-violetDark w-max pb-[28px] mb-[30px] relative before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:h-[2px] before:rounded-[5px] before:w-[56px] before:bg-black">
          Services we Offer
        </h2>
        <p
          className={`text-greyLight ${roboto.className} font-medium text-[19px] leading-[27px] tracking-[0.02em] w-max max-w-[952px] mb-[85px]`}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <div className="grid grid-cols-3 gap-[34px] mb-[72px]">
          {allServices.map((service, i) => {
            return (
              <div
                className="flex flex-col items-center p-[38px] rounded-[20px] shadow-md bg-white"
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
                <h3 className="text-black text-[24px] font-bold">
                  {service.label}
                </h3>
                <p className="text-greyDark text-[16px] leading-[28px]">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
        <BlueButton text="Load more" />
        <DotsBg right="50px" top="50%" translate="0, -20%" />
      </div>
      <SpotBg left="-170px" top="50%" translate="0, -50%" />
    </div>
  );
}
