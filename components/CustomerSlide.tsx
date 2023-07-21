import Image from "next/image";
import { Customer } from "./CustomersSlider";
import { roboto } from "@/helpers/fonts";
import DotsBg from "./DotsBg";

interface Props {
  customer: Customer;
}

export default function CustomerSlide({ customer }: Props) {
  return (
    <div className="flex flex-col items-center px-[20px] py-[20px] min-[375px]:px-[48px] min-[375px]:py-[32px] sm:px-[90px] sm:py-[55px] xl:px-[125px] xl:py-[75px] bg-[linear-gradient(183.41deg,_#6888C8_-8.57%,_#5A98F2_82.96%)] relative overflow-hidden h-full">
      <h3 className="text-white text-center font-bold text-[20px] leading-[26px] min-[375px]:text-[24px] min-[375px]:leading-[28px] md:text-[28px] md:leading-[34px] lg:text-[36px] lg:leading-[48px] pb-[18px] md:pb-[24px] lg:pb-[30px] relative before:absolute before:w-[59px] before:h-[2px] before:bg-white before:bottom-0 before:left-[50%] before:translate-x-[-50%]">
        What our customers are saying
      </h3>
      <div className="flex mt-[32px] md:mt-[60px] xl:mt-[88px] justify-between gap-[24px] lg:gap-0 flex-col lg:flex-row">
        <div className="flex items-center flex-col lg:flex-row gap-[18px] lg:gap-[32px] xl:gap-[50px] lg:flex-[0.7] xl:flex-1">
          <Image
            src={customer.icon}
            alt={customer.name}
            width={100}
            height={100}
          />
          <div className="flex flex-col items-center lg:items-start gap-[12px] xl:gap-[18px]">
            <p className="font-bold text-[18px] min-[375px]:text-[22px] leading-none text-white">
              {customer.name}
            </p>
            <p className="text-[16px] min-[375px]:text-[18px] leading-none text-white opacity-[0.85]">
              {customer.position}
            </p>
          </div>
        </div>
        <p
          className={`text-white ${roboto.className} font-medium text-center lg:text-start text-[16px] leading-[24px] min-[375px]:text-[18px] min-[375px]:leading-[32px] xl:text-[22px] xl:leading-[50px] lg:flex-1`}
        >
          “{customer.text}”
        </p>
      </div>
      <DotsBg className="top-[-10px] right-[-40px] z-[1] hidden sm:block" />
    </div>
  );
}
