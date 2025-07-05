"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";

import TreeOne from './TreeOne';
import TreeTwo from './TreeTwo';
import TreeThree from './TreeThree';
import TreeFour from './TreeFour';

export default function Trees() {
  useGSAP(() => {
    gsap.from(".main-branch", {
      overflowX: 0,
      opacity: 0,
      transformOrigin: "bottom",
      duration: 2,
      ease: "power2.out"
    });


    // gsap.from(".branch", {
    //   height: 0,
    //   duration: 2,
    //   stagger: {
    //     each: 0.3,
    //     from: "start"
    //   },
    //   ease: "power2.out"
    // });

    // // Animate branches spreading out
    // gsap.to(".branch", {
    //   rotate: "random(-45, 45)",
    //   width: "random(2, 6)",
    //   duration: 2,
    //   delay: 2,
    //   stagger: 0.2,
    //   ease: "elastic.out(1, 0.3)"
    // });

    // // Animate leaves appearing and blooming
    // gsap.from(".rounded-full", {
    //   scale: 0,
    //   opacity: 0,
    //   duration: 1.5,
    //   delay: 3,
    //   stagger: {
    //     each: 0.2,
    //     from: "random"
    //   },
    //   ease: "back.out(1.7)"
    // });
  }, []);

  const treeRef = useRef(null);

  return (
    <div ref={treeRef} className="absolute  min-w-[1919px] w-[1919px] min-h-[943px] h-[943px] z-10" >
      <div className='tree-one fixed right-0 bottom-0 w-[600px] h-full z-[11]'>
        <TreeOne />
      </div>

      <div className='tree-two fixed right-[300px] bottom-0 w-[600px] h-full z-[12]'>
        <TreeTwo />
      </div>

      <div className='tree-three fixed left-[300px] bottom-0 w-[600px] h-full z-[12]'>
        <TreeThree />
      </div>

      <div className='tree-four fixed right-[300px] bottom-0 w-[600px] h-full z-[12]'>
        <TreeFour />
      </div>

      {/* <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="xMidYMax meet"> */}
      {/* Main trunk */}
      {/* <path
          className="branch"
          d="M450,800 C200,600 440,400 130,180"
          stroke="#713f12"
          strokeWidth="20"
          fill="none"
        /> */}

      {/* Lower branches */}
      {/* <path
          className="branch"
          d="M290,400 C250,350 200,330 150,320"
          stroke="#854d0e"
          strokeWidth="12"
          fill="none"
        />
        <path
          className="branch"
          d="M310,450 C350,400 400,380 450,370"
          stroke="#854d0e"
          strokeWidth="12"
          fill="none"
        /> */}

      {/* Middle branches */}
      {/* <path
          className="branch"
          d="M285,300 C230,280 180,240 160,200"
          stroke="#92400e"
          strokeWidth="8"
          fill="none"
        />
        <path
          className="branch"
          d="M315,320 C370,300 420,260 440,220"
          stroke="#92400e"
          strokeWidth="8"
          fill="none"
        /> */}

      {/* Decorative flowers/leaves */}
      {/* <circle className="rounded-full" cx="150" cy="200" r="40" fill="#fbcfe8" fillOpacity="0.8" />
        <circle className="rounded-full" cx="440" cy="220" r="35" fill="#f9a8d4" fillOpacity="0.8" />
        <circle className="rounded-full" cx="200" cy="150" r="45" fill="#fce7f3" fillOpacity="0.7" />
        <circle className="rounded-full" cx="380" cy="180" r="40" fill="#fbcfe8" fillOpacity="0.7" />
        <circle className="rounded-full" cx="290" cy="100" r="50" fill="#f9a8d4" fillOpacity="0.8" /> */}
      {/* </svg> */}
    </div>
  )
}