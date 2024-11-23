'use client'
import { onHover } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"
import { useEffect, useRef } from "react"
import { BsMouse } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export const BigImage = () => {
  const imageContainer = useRef(null);
  const image = useRef<(HTMLElement | null)[]>([]);
  // const image = useRef(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    let refreshedAt40 = false;
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline();
    tl.from(image.current, {
      duration: 3,
      autoAlpha: 0,
      opacity: 0,
      ease: "power4.out",
      delay: 2.1,
      stagger: {
        amount: 0.6
      }
    })
    gsap.fromTo(imageContainer.current, {
      width: "15%",
      borderRadius: "60px",
    }, {
      width: "100%",
      // y: 100,
      borderRadius: "0px",
      ease: "power1.out",
      scrollTrigger: {
        trigger: image.current[1],
        start: 'top center',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if(progress >= 0.4 && !refreshedAt40)
          {
            ScrollTrigger.refresh();
            refreshedAt40 = true;
          }
        }
        // markers: true,
      }
    })
    }) 
    

  }, [])
  return (
    <>
      <div ref={imageContainer} className="mt-12 mx-auto w-full rounded-full h-2/3">
        <div ref={(el) => {image.current[0] = el}}>
          <BsMouse data-cursor-text="Scroll" className="mx-auto size-6 text-neutral-500 hidden lg:block" />
        </div>
        <Image
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
          ref={(el) => {image.current[1] = el}}
          className="mt-4 lg:mt-24 mx-auto rounded-none lg:rounded-[3rem] w-full"
          priority
          height={1200}
          width={1200}
          src="/images/hero.jpg"
          alt="Dager navideño comiendo !pepino"
        />
      </div>
    </>
  )
}