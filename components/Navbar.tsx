"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import TransitionLink from "./TransitionLink";

const Navbar = () => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleClickMenuOptions = (section: string) => {
    router.push(section);
  };
  return (
    <>
      <div className="w-full flex justify-between sticky top-5 md:top-14 z-10">
        <Link href="/">
          <Image
            src="/creatorslove.svg"
            alt="CreatorLove"
            width={35}
            height={35}
          />
        </Link>
        <AnimatePresence mode="wait">
          {!isOpenMenu ? (
            <motion.img
              src="/menu-line.svg"
              alt="Menu"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={() => handleMenuClick()}
              key="menuopen"
              layoutId="menu1"
              initial="false"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <motion.img
              src="/close-large-line.svg"
              alt="Menu"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={() => handleMenuClick()}
              key="menuclose"
              layoutId="menu1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            />
          )}
        </AnimatePresence>
      </div>

      {isOpenMenu ? (
        <motion.div
          key="menu"
          className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0, 0, 0, 0.7)] backdrop-blur-sm z-9 flex flex-col justify-center items-center"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <motion.a
            className="text-5xl mb-9 cursor-pointer"
            onClick={handleMenuClick}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            Home
          </motion.a>
          <TransitionLink
            className="text-5xl mb-9 cursor-pointer"
            href="/projects"
          >
            Projects
          </TransitionLink>
          <TransitionLink
            className="text-5xl mb-9 cursor-pointer"
            href="/contact"
          >
            Contact
          </TransitionLink>
        </motion.div>
      ) : null}
    </>
  );
};

export default Navbar;
