declare module 'framer-motion' {
  import * as React from 'react';

  export const motion: {
    div: React.ForwardRefExoticComponent<any>;
    form: React.ForwardRefExoticComponent<any>;
    button: React.ForwardRefExoticComponent<any>;
  };
  export const AnimatePresence: React.FC<any>;
  export function useInView(ref: React.RefObject<Element>, options?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
    root?: React.RefObject<Element>;
  }): boolean;
}

declare module 'swiper/react' {
  import * as React from 'react';
  
  export const Swiper: React.FC<any>;
  export const SwiperSlide: React.FC<any>;
}

declare module 'swiper/modules' {
  export const Pagination: any;
  export const Autoplay: any;
}

declare module 'swiper/css';
declare module 'swiper/css/pagination';

declare module '@heroicons/react/24/solid' {
  import * as React from 'react';
  
  export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '@heroicons/react/24/outline' {
  import * as React from 'react';
  
  export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>>;
} 