'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './gallery.module.css'
import Image from 'next/image';
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import { onHover } from '@/lib/utils';

const images = [
  "1.jpg",
  "2.jpg",
  "3.png",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.png",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

export default function Gallery() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {

    const raf = () => {
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}

interface ColumnProps {
  images: string[],
  y: MotionValue<number>;
}

const Column:React.FC<ColumnProps> = ({images, y}) => {
     

  return (
    <motion.div 
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}