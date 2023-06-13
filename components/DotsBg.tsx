import Image from "next/image";

interface Props {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  translate?: string;
  floor?: boolean;
}

export default function DotsBg({
  top,
  left,
  bottom,
  right,
  translate,
  floor,
}: Props) {
  return (
    <div
      className={`absolute pointer-events-none select-none ${
        floor ? "z-[1]" : "z-[-1]"
      }`}
      style={{
        top: `${top || "initial"}`,
        left: `${left || "initial"}`,
        bottom: `${bottom || "initial"}`,
        right: `${right || "initial"}`,
        transform: `${translate ? `translate(${translate})` : "none"}`,
      }}
    >
      <Image
        src="/images/dots-bg.png"
        alt="Dots background"
        width={130}
        height={115}
        loading="lazy"
      />
    </div>
  );
}
