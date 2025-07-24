"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactNode, useRef, useEffect } from "react";

interface Props {
  el: ReactNode;
  style: object;
  gsapOptions: object;
  className?: string;
  resetOnEnd?: boolean;
}

export default function ScrollAnimation({ el, style, gsapOptions, className, resetOnEnd }: Props) {
  const animBlockWrapper = useRef(null);
  const scrollTriggerInstance = useRef<ScrollTrigger | null>(null);

  const hasPlayed = useRef(false);

  useGSAP(() => {
    if (hasPlayed.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(animBlockWrapper.current, { opacity: 0, y: -30 });

    const animation = gsap.to(animBlockWrapper.current, {
      opacity: 1,
      y: 0,
      ...gsapOptions,
      ease: "power1.out",
      paused: true,
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    scrollTriggerInstance.current = ScrollTrigger.create({
      trigger: animBlockWrapper.current,
      start: "top 90%",
      once: true,
      onEnter: () => {
        animation.play();
        if (resetOnEnd) {
          hasPlayed.current = true;
        }
      },
    });

    ScrollTrigger.refresh();
  }, [gsapOptions]);

  useEffect(() => {
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleRefresh);

    return () => {
      window.removeEventListener("resize", handleRefresh);
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill(true);
      }
    };
  }, []);

  return (
    <div className={className} ref={animBlockWrapper} style={style}>
      {el}
    </div>
  );
}