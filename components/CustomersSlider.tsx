"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomerSlide from "./CustomerSlide";
import { Navigation } from "swiper";
import { Arrow } from "@/helpers/icons";
import { useState } from "react";
import DotsBg from "./DotsBg";
import ScrollAnimation from "./ScrollAnimation";

export interface Customer {
  icon: string;
  name: string;
  position: string;
  text: string;
}

const allCustomers: Customer[] = [
  {
    name: "Jane Doe",
    icon: "/images/customers/1.png",
    position: "Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna purus. Proin augue odio, mollis et facilisis id, tristique eu tellus.",
  },
  {
    name: "John Doe",
    icon: "/images/customers/2.png",
    position: "Designer",
    text: "Aenean maximus justo magna, id blandit orci venenatis sed. Aliquam eget elementum lorem, vel laoreet nulla. Donec fermentum sed lorem  in bibe.",
  },
  {
    name: "Alex Guf",
    icon: "/images/customers/3.png",
    position: "Founder",
    text: "Fusce in posuere dui, sit amet bibendum sem. Ut finibus ante nunc, at convallis urna congue non. Duis faucibus lectus ut imperdiet dena un pulvinar.",
  },
  {
    name: "Phil Monte",
    icon: "/images/customers/4.png",
    position: "Developer",
    text: "Suspendisse in risus feugiat, ornare massa at, scelerisque magna. Cras tincidunt auctor quam id iaculis. Nam cursus leo, interdum tempor del velit.",
  },
];

export default function CustomersSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <ScrollAnimation
      el={
        <div className="flex items-center flex-col mt-[80px] sm:mt-[120px] md:mt-[150px] lg:mt-[170px] xl:mt-[210px] container relative">
          <Swiper
            onSwiper={(swiper) => setSwiper(swiper)}
            className="rounded-[24px] w-full"
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: "#prev-customer-btn",
              nextEl: "#next-customer-btn",
            }}
            onSlideChange={(e) => {
              setCurrentSlide(e.realIndex);
            }}
            autoHeight={true}
          >
            {allCustomers.map((customer, i) => {
              return (
                <SwiperSlide className="h-full" key={i}>
                  <CustomerSlide customer={customer} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex items-center justify-center mt-[35px] sm:mt-[48px]">
            <div
              className="text-bluePrimary w-max cursor-pointer transition-all hover:scale-[1.1] hover:opacity-[0.7] active:opacity-[0.9] active:scale-[1]"
              id="prev-customer-btn"
            >
              <Arrow className="w-[28px] sm:w-[35px]" />
            </div>
            <div className="flex mx-[37px] gap-[17px] sm:mx-[90px] sm:gap-[20px]">
              {allCustomers.map((e, i) => {
                return (
                  <div
                    className={`w-[10px] h-[10px] bg-bluePrimary transition-all cursor-pointer opacity-[0.5] hover:opacity-[0.7] active:bg-blueDark rounded-[100%] ${
                      i == currentSlide ? "opacity-[1] pointer-events-none" : ""
                    }`}
                    key={i}
                    onClick={() => {
                      swiper.slideTo(i);
                    }}
                  ></div>
                );
              })}
            </div>
            <div
              className="text-bluePrimary rotate-180 w-max cursor-pointer transition-all hover:scale-[1.1] hover:opacity-[0.7] active:opacity-[0.9] active:scale-[1]"
              id="next-customer-btn"
            >
              <Arrow className="w-[28px] sm:w-[35px]" />
            </div>
          </div>
          <DotsBg className="left-0 top-[-18px] sm:top-[initial] sm:bottom-[115px] sm:left-[10px] md:left-[-26px] lg:left-[0px] xl:left-[45px] z-[-1]" />
          <DotsBg className="bottom-[-162px] md:bottom-[-192px] lg:bottom-[-212px] xl:bottom-[-252px] right-[5px] lg:right-[70px] z-[-1]" />
        </div>
      }
      gsapOptions={{
        scale: 1,
        opacity: 1,
        duration: 0.7,
      }}
      resetOnEnd={true}
      style={{
        transform: "scale(0.8)",
        opacity: 0,
      }}
    />
  );
}
