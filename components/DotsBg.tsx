import Image from "next/image";

interface Props {
  className?: string;
}

export default function DotsBg({ className }: Props) {
  return (
    <div
      className={`absolute pointer-events-none select-none ${className || ""}`}
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
