import { useEffect, useState } from 'react'

export default function useWindow() {
  const [dimension, setDimension] = useState({width: 0, height: 0})

  const resize = () => {
    setDimension({
      width: document.body.offsetWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [])

  return { dimension }
}