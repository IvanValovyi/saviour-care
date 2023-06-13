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
    <div className="flex items-center flex-col mt-[210px] container relative">
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
      <div className="flex items-center justify-center mt-[48px]">
        <div
          className="text-bluePrimary w-max cursor-pointer transition-all hover:scale-[1.1] hover:opacity-[0.7] active:opacity-[0.9] active:scale-[1]"
          id="prev-customer-btn"
        >
          <Arrow />
        </div>
        <div className="flex mx-[90px] gap-[20px]">
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
          <Arrow />
        </div>
      </div>
      <DotsBg bottom="115px" left="45px" />
      <DotsBg bottom="-252px" right="70px" />
    </div>
  );
}
