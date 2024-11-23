import { useInView } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ScrollAnimationHook {
  ref: RefObject<HTMLElement>;
  isInView: boolean;
}

export const useScrollAnimation = (): ScrollAnimationHook => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-100px"
  });

  return { ref, isInView };
}; 