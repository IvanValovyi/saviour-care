import Image from "next/image";

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
      <Image
        src={reverse ? "/images/spot-reverse.png" : "/images/spot.png"}
        alt="Spot background"
        width={950}
        height={620}
        loading="lazy"
      />
    </div>
  );
}
