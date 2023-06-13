import Image from "next/image";
import { Customer } from "./CustomersSlider";
import { roboto } from "@/helpers/fonts";
import DotsBg from "./DotsBg";

interface Props {
  customer: Customer;
}

export default function CustomerSlide({ customer }: Props) {
  return (
    <div className="flex flex-col items-center px-[125px] py-[75px] bg-[linear-gradient(183.41deg,_#6888C8_-8.57%,_#5A98F2_82.96%)] relative overflow-hidden h-full">
      <h3 className="text-white font-bold text-[36px] leading-[48px] pb-[30px] relative before:absolute before:w-[59px] before:h-[2px] before:rounded-[100%] before:bg-white before:bottom-0 before:left-[50%] before:translate-x-[-50%]">
        What our customers are saying
      </h3>
      <div className="flex mt-[88px] justify-between">
        <div className="flex items-center gap-[50px] flex-1">
          <Image
            src={customer.icon}
            alt={customer.name}
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-[18px]">
            <p className="font-bold text-[22px] leading-none text-white">
              {customer.name}
            </p>
            <p className="text-[18px] leading-none text-white opacity-[0.85]">
              {customer.position}
            </p>
          </div>
        </div>
        <p
          className={`text-white ${roboto.className} font-medium text-[22px] leading-[50px] flex-1`}
        >
          “{customer.text}”
        </p>
      </div>
      <DotsBg top="-10px" right="-40px" floor={true} />
    </div>
  );
}
