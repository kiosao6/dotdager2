import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const onHover = (isHovering: boolean) => {
  const mouse = document.querySelector('.mf-cursor') as HTMLElement;
  if (mouse) {
    if (isHovering) {
      mouse.style.setProperty('--cursor-before-background', 'white');
    } else {
      mouse.style.setProperty('--cursor-before-background', 'black');
    }
  }
};