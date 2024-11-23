'use client'
import { Pickle } from "@/components";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const Hello = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const spans = useRef<(HTMLSpanElement | null)[]>([]);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loadingRef.current) {
      const tl = gsap.timeline();
      tl.to(loadingRef.current, {
        duration: 0,
        height: 0,
        autoAlpha: 0,
        ease: "power3.out",
        onComplete: () => setIsLoaded(true),
      });
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const tl = gsap.timeline();
      tl.from(spans.current, {
        duration: 1.8,
        y: 500,
        autoAlpha: 0,
        ease: "power4.out",
        // delay: 0.1,
        skewY: 14,
        stagger: {
          amount: 0.3
        },
      });
    }
  }, [isLoaded]);

  return (
    <div className="relative">
      <div ref={loadingRef} className="fixed top-0 left-0 w-full h-full bg-white z-50"></div>
      <div className={`text-6xl font-medium tracking-tight leading-tight lg:text-9xl ${isLoaded ? '' : 'opacity-0'}`}>
        <div className="relative overflow-hidden h-fit lg:h-36">
          <span ref={(el) => { spans.current[0] = el; }} className="inline-block">
            Hello, my name
          </span>
        </div>
        <div className="relative overflow-hidden lg:h-36">
          <span ref={(el) => { spans.current[1] = el; }} className="inline-block">
            is Dot Dager
            <Pickle />
          </span>
        </div>
      </div>
    </div>
  );
};
