'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AccordionFinal } from "../sectionThree/AccordionFinal";


gsap.registerPlugin(ScrollTrigger);

interface Props {
  label: string,
  title: string[],
  paragraphText: string,
  showAccordion?: boolean,
}

export const SectionTitle: React.FC<Props> = ({
  label,
  title,
  paragraphText,
  showAccordion = false
}) => {
  const spans = useRef<(HTMLSpanElement | null)[]>([]);
  const paragraph = useRef(null);

  useEffect(() => {
    if (spans.current.length > 0) {
      const firstSpan = spans.current[0];
      const tl = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: firstSpan,
          start: 'top 40%',
          toggleActions: 'play none none none'
        }
      })
      
      tl.from(spans.current, {
        duration: 1.2,
        y: 100,
        autoAlpha: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.2,
        },
        // repeat: -1,
      }).from(paragraph.current, {
        duration: 1.2,
        y: 100,
        autoAlpha: 0,
        ease: "power4.out",
        // repeat: -1,
      }, "-=1");
    }
  }, [])
  return (
    <div className="lg:flex lg:justify-between">
      <span className="uppercase text-[14px] text-neutral-600  lg:text-base mr-20 lg:border lg:h-fit lg:px-8 lg:rounded-full lg:py-4 lg:border-neutral-700">
        {label}
      </span>

      <div className="mt-2 lg:mt-0 max-w-4xl">
        {
          title.map((text, i) => (
            <div key={i} className="relative overflow-hidden text-4xl font-medium tracking-tight lg:text-7xl">
              <span ref={(el) => { spans.current[i] = el; }} className="inline-block lg:h-20">
                {text}
              </span>
            </div>
          ))
        }
        <div className="overflow-hidden">
          <p ref={paragraph} className="mt-4 text-[15px] leading-6 lg:text-base text-neutral-600 max-w-2xl">
            {paragraphText}
          </p>
        </div>
        {
          showAccordion && <AccordionFinal />
        }
        
      </div>

    </div>
  )
}