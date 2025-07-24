import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

interface Props {
  className: string;
  reverse?: boolean;
}

export default function SpotBg({ className, reverse }: Props) {
  return (
    <div
      className={`absolute z-[-1] pointer-events-none select-none ${
        className || ""
      }`}
    >
      <ScrollAnimation
        el={
          <Image
            src={reverse ? "/images/spot-reverse.png" : "/images/spot.png"}
            alt="Spot background"
            width={950}
            height={620}
            loading="lazy"
          />
        }
        gsapOptions={{
          x: 0,
          scale: 1,
          opacity: 1,
          delay: 0.2,
          duration: 0.5,
        }}
        style={{
          transform: "translateX(-75px) scale(0)",
          opacity: 0,
        }}
      />
    </div>
  );
}
