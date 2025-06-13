"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import Trees from "./_components/Trees";

export default function Home() {
  const boxRef = useRef(null);

  useGSAP(() => {
    // Your existing animation
    gsap.to(boxRef.current, { x: 200, duration: 2, rotation: 360 });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] overflow-hidden max-h-screen max-w-screen items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className='absolute top-0 left-0 -z-10 overflow-clip'>
        <Trees />
      </div>
      {/* Your existing content */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start z-0">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-[-.01em] text-center sm:text-left">
          Larissa Justen
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-.01em] text-center sm:text-left">
          Software Engineer
        </h2>
        <p className="text-sm sm:text-base text-center sm:text-left max-w-[600px]">
          I’m a software engineer with a passion for building beautiful and
          functional web applications. I love working with modern technologies
          and frameworks to create seamless user experiences. I’m always
          looking for new challenges and opportunities to learn and grow in my
          career. In my free time, I enjoy exploring new places, reading books,
          and spending time with my family and friends.
        </p>
      </main>
      {/* ... rest of your existing code ... */}
    </div>
  );
}
