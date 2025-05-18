"use client";

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type TransitionLinkProps = {

    children: React.ReactNode,
    href: string,
    className: string,
    
} & LinkProps;

const sleep = (ms: number = 500) => {
    return new Promise((resolve) => setTimeout(resolve,ms));
}

const TransitionLink = ({ children, href, className, ...props } : TransitionLinkProps) => {

  const router = useRouter();
  const ref = useRef<HTMLAnchorElement | null>(null);
  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

    e.preventDefault();

    let tl = gsap.timeline();

    tl.to("body",{
        opacity: 0.3,
        scale: 0.5,
        y: -40,
        duration: 0.5
    },0);

    tl.set("body",{
        y:-1000,
        scale: 1,
        opacity: 0
    });
    
    tl.to("body", {
        y: 0,
        opacity: 1,
        duration: 0.4
    },"+=0.25");

    await sleep();
    router.push(href);

  }

  useGSAP(() => {

    gsap.fromTo(ref.current,{
        opacity: 0,
        scale: 0.5
    },{
        opacity: 1,
        scale: 1,
        duration: 0.4
    });

  },{dependencies: []})

  return (
    <Link
    ref={ref}
    href={href}
    onClick={(e)=>handleTransition(e)}
    className={className}
    {...props}
    >
        {children}
    </Link>
  );

}

export default TransitionLink;