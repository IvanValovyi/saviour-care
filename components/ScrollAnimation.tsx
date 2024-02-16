"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactNode, useRef } from "react";

interface Props {
  el: ReactNode;
  style: object;
  gsapOptions: object;
  className?: string;
}

export default function ScrollAnimation({ el, style, gsapOptions, className }: Props) {
  const animBlockWrapper = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(animBlockWrapper.current, {
      scrollTrigger: {
        trigger: animBlockWrapper.current,
        start: "top 90%",
        scrub: true,
        onToggle: ({ isActive }) => {
          if (isActive) {
            gsap.to(animBlockWrapper.current, {
              ...gsapOptions,
            });
          }
        },
      },
    });
  }, []);

  return (
    <div className={className} ref={animBlockWrapper} style={style}>
      {el}
    </div>
  );
}
