"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Page = () => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<SVGSVGElement | null>(null);
  const [width, setWidth] = useState(500);

  useGSAP(
    (_, contextSafe) => {

      if (!ref2.current || !contextSafe) return;

      const handleMove = contextSafe((dets: MouseEvent) => {
        const x = dets.offsetX;
        const y = dets.offsetY;
        const currentWidth = ref1.current?.offsetWidth;

        gsap.to("path", {
          attr: { d: `M 0 80 Q ${x} ${y} ${currentWidth} 80` },
          duration: 1,
          ease: "elastic.out(1,0.1)",
        });
        
      });

      const handleLeave = contextSafe(() => {

        const currentWidth = ref1.current?.offsetWidth || 0;

        gsap.to("path", {
          attr: { d: `M 0 80 Q ${currentWidth / 2} 80 ${currentWidth} 80` },
          duration: 1,
          ease: "elastic.out(1,0.2)",
        });

      });

      ref2.current.addEventListener("mousemove", (dets) => handleMove(dets));
      ref2.current.addEventListener("mouseleave", () => handleLeave());

      return () => {

        ref2.current!.removeEventListener("mousemove", (dets) =>
          handleMove(dets)
        );
        ref2.current!.removeEventListener("mouseleave", () => handleLeave());

      }

    },
    { dependencies: [] }
  );

  useEffect(() => {
    if (!ref1.current) {
      console.log("undefined");
      return;
    }

    const creatorsLoveWidth = ref1.current.offsetWidth;
    setWidth(creatorsLoveWidth);
  }, []);
  return (
    <>
      <div className="p-4 md:p-14 fullwh bg-conic">
        <div className="w-full flex justify-between">
          <Image
            src="/creatorslove.svg"
            alt="CreatorLove"
            width={40}
            height={40}
            className=" object-cover"
          />
          <Image src="/menu-line.svg" alt="Menu" width={30} height={30} />
        </div>
        <div className="relative mt-28">
          <div
            className=" uppercase text-[24px] md:text-[45px] xl:text-[84px] w-fit tracking-wider"
            ref={ref1}
          >
            Creatorslove
          </div>
          <svg
            className={`absolute top-[-38px] md:top-[-16px] xl:top-9`}
            style={{ width }}
            ref={ref2}
          >
            <path
              d={`M 0 80 Q ${width / 2} 80 ${width} 80`}
              stroke="white"
              fill="transparent"
            />
          </svg>
          <div
            className="flex justify-between items-center w-fit pl-3 border-[#a03794] border-[1px] mt-24 cursor-pointer"
            onClick={() => {}}
          >
            <div className="uppercase text-[12px] text-[#a03794] mr-5 tracking-wider md:text-[16px]">
              Get Started
            </div>
            <Image
              src="/arrow-right-s-line.svg"
              alt="Click"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="text-[#a03794] w-fit h-fit mt-[215px] sm:mt-[140px]">
          @unknown
        </div>
      </div>
    </>
  );
};

export default Page;
