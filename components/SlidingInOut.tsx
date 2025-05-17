"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SlidingInOut = () => {

  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const globalRef = useRef<HTMLDivElement | null>(null);

  useGSAP((_, contextSafe) => {

    if(!ref1.current || !ref2.current || !ref3.current || !globalRef.current || !contextSafe) return;

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: globalRef.current,
            pin: true,
            start: `top 0%`,
            end: `top -200%`,
            scrub: 2
        }
    });

    const widthOfTestimonial = ref1.current.offsetWidth;

    gsap.set(ref1.current, {
        opacity: 0
    });

    gsap.set(ref2.current, {
        opacity: 0
    });

    gsap.set(ref3.current, {
        opacity: 0
    });

    tl.to(ref1.current, {
        opacity: 1,
        duration: 2
    });

    tl.to(ref2.current, {
        opacity: 1,
        duration: 2
    }, 2.5);

    tl.to(ref3.current, {
        opacity: 1,
        duration: 2
    },5);

    tl.to(
      ref1.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      2
    );

    tl.to(
      ref2.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      4.5
    );

  }, {

  })
  
  return (
    <div className="fullwh flex justify-center items-center" ref={globalRef}>
        <div className="relative h-[350px] w-[250px] border border-[#a03794] rounded-3xl">
            <div className="absolute w-full h-full bg-white rounded-3xl" ref={ref1}></div>
            <div className="absolute w-full h-full bg-white rounded-3xl" ref={ref2}></div>
            <div className="absolute w-full h-full bg-white rounded-3xl" ref={ref3}></div>
        </div>
    </div>
  );
};

export default SlidingInOut;
