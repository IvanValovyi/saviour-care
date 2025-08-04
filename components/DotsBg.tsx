import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

interface Props {
  className?: string;
}

export default function DotsBg({ className }: Props) {
  return (
    <div
      className={`absolute pointer-events-none select-none ${className || ""}`}
    >
      <ScrollAnimation
        el={
          <Image
            src="/images/dots-bg.png"
            alt="Dots background"
            width={130}
            height={115}
            loading="lazy"
          />
        }
        gsapOptions={{
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 0.4,
        }}
        resetOnEnd={true}
        style={{
          transform: "translateX(-75px) scale(0)",
          opacity: 0,
        }}
      />
    </div>
  );
}
