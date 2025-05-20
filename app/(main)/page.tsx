"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import SlidingInOut from "@/components/SlidingInOut";
import SlidingText from "@/components/SlidingText";
import SYPF from "@/components/SYPF";

gsap.registerPlugin(useGSAP);

const Page = () => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<SVGSVGElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(500);

  useGSAP(
    (_, contextSafe) => {
      gsap.to(ref3.current, {
        y: -15,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
      });

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
        const currentWidth = ref1.current!.offsetWidth || 0;

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
      };
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
      <motion.div
        className="flex flex-col justify-between p-4 md:p-14 fullwh bg-conic"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
      >
        <Navbar />
        <motion.div className="relative" key="front">
          <div
            className=" text-[24px] md:text-[45px] xl:text-[84px] w-fit tracking-wider"
            ref={ref1}
          >
            Creatorslove
          </div>
          <svg
            className={`absolute top-[-49px] md:top-[-16px] xl:top-9`}
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
            className="flex justify-between items-center w-fit pl-3 border-[#ff66c4] border-[1px] mt-16 cursor-pointer"
            onClick={() => {}}
          >
            <div className=" text-[12px] text-[#ff66c4] mr-5 tracking-wider md:text-[16px]">
              Get Started
            </div>
            <Image
              src="/arrow-right-s-line.svg"
              alt="Click"
              width={30}
              height={30}
            />
          </div>
        </motion.div>
        <div
          ref={ref3}
          className="text-[#ff66c4] flex flex-col items-center md:text-[18px]"
          key="username"
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            Scroll Down
          </motion.div>
          <motion.img
            src="/arrow-down-pink.svg"
            alt="arrow"
            width={100}
            height={100}
          />
        </div>
      </motion.div>
      <SlidingText />
      <SlidingInOut />
      <SYPF />
    </>
  );
};

export default Page;
