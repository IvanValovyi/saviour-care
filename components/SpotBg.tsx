import Image from "next/image";

interface Props {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  translate?: string;
  reverse?: boolean;
}

export default function SpotBg({
  top,
  left,
  bottom,
  right,
  reverse,
  translate,
}: Props) {
  return (
    <div
      className="absolute z-[-1] pointer-events-none select-none"
      style={{
        top: `${top || "initial"}`,
        left: `${left || "initial"}`,
        bottom: `${bottom || "initial"}`,
        right: `${right || "initial"}`,
        transform: `${translate ? `translate(${translate})` : "none"}`,
      }}
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
