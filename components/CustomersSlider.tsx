"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomerSlide from "./CustomerSlide";
import { Navigation } from "swiper";
import { Arrow } from "@/helpers/icons";
import { useState } from "react";
import DotsBg from "./DotsBg";

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
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    name: "John Doe",
    icon: "/images/customers/2.png",
    position: "Designer",
    text: "Nam ut leo ullamcorper mauris tempor bibendum. Sed rutrum elit eu justo lobortis congue. Suspendisse posuere.",
  },
  {
    name: "Alex Guf",
    icon: "/images/customers/3.png",
    position: "Founder",
    text: "Integer a iaculis urna. In hac habitasse platea dictumst. Nunc suscipit ut enim id sodales. Nunc eget vulputate nibh.",
  },
  {
    name: "Phil Monte",
    icon: "/images/customers/4.png",
    position: "Developer",
    text: "Duis fringilla diam pharetra sem sagittis malesuada. Nam sed luctus augue. Vivamus nec aliquet erat.",
  },
];

export default function CustomersSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  return (
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
  );
}
