"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react"

export const HelloTexts = () => {

  const texts = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(texts.current, {
      duration: 3,
      // y: 500,
      autoAlpha: 0,
      opacity: 0,
      ease: "power4.out",
      delay: 2.1,
      // stagger: {
      //   amount: 1
      // },
      // repeat: -1
    })
  }, [])
  return (
    <div className="mt-12 max-w-sm">
      <span ref={(el) => {texts.current[0] = el}} className="text-2xl font-medium">A bit about me</span>
      <div className="space-y-2 mt-4 text-[15px] lg:text-base leading-6 text-neutral-600">
        <p ref={(el) => {texts.current[1] = el}}>Hi, I’m Dot Dager! I’m a full-stack programmer and youtuber who loves to code by day and rock out on my guitar by night. My cats and cucumbers are my trusty sidekicks.</p>
        <p ref={(el) => {texts.current[2] = el}}>Yes, you read well, I munch on cucumbers while coding—don’t judge!</p>
        {/* <p>When it comes to video games, I’m all about League of Legends. My favorite champion? Jhin. Just like him, I strive for precision and a bit of flair in everything I do. And yes, I’m probably planning my next pentakill while enjoying a cucumber snack.</p> */}
      </div>
    </div>
  )
}