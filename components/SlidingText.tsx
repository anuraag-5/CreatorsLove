import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SlidingText = () => {

  const mainRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        pin: true,
        scrub: 2,
        end: 'top -300%'
      },
    });

    tl.to(textRef.current, {
      x: -4250,
      duration: 3
    });

  }, {});

  return (
    <div
      className="min-h-screen min-w-[400vw] hidden xl:flex justify-center items-center "
      ref={mainRef}
    >
      <div
        className="text-[15vw] text-nowrap text-[#ff66c4] w-full text-center"
        ref={textRef}
      >
        Sell your products or anything Faster
      </div>
    </div>
  );
};

export default SlidingText;
