"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const SYPF = () => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ref1.current,
            start: "top 50%"
        }
      });

      tl.to(ref2.current, {
        x: -1100,
        duration: 2.5,
        ease: "none"
      },1.1);

      tl.set(".clothes", {
        x: 1550,
        opacity: 1
      }, 0)

      tl.to(ref3.current, {
        x: -1100,
        duration: 5.5,
        repeat: -1,
        ease: "none"
      } , 1);

      tl.to(ref4.current, {
        x: -1100,
        duration: 5.5,
        repeat: -1,
        ease: "none"
      } , 3.8)

    },
    {
      dependencies: [],
    }
  );

  return (
    <div className="fullwh relative flex flex-col justify-center items-center overflow-x-hidden" ref={ref1}>
      <div className="text-9xl absolute top-20 left-50">
        Sell
      </div>
      <div className="text-[140px] absolute" ref={ref2}>
        Clothes
      </div>
      <div className="text-[140px] absolute clothes opacity-0" ref={ref3}>
        Clothes
      </div>
      <div className="text-[140px] absolute clothes opacity-0" ref={ref4}>
        Clothes
      </div>
      <div className="text-9xl absolute top-125 right-60">
        Faster
      </div>
    </div>
  );
};

export default SYPF;
