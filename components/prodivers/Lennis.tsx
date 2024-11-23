'use client';

import { useLayoutEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Lennis() {
  const lenis = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    
    lenis.current = new Lenis({
      smoothWheel: true,
    });

    function onFrame(time: number) {
      lenis.current!.raf(time);
      requestAnimationFrame(onFrame);
    }

    const resize = setInterval(() => {
      lenis.current!.resize();
    }, 150);

    requestAnimationFrame(onFrame);

    return () => {
      clearInterval(resize);
      lenis.current!.destroy();
      lenis.current = null;
    };
  }, []);

  return null;
}
