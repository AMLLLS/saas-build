declare module 'gsap' {
  export function registerPlugin(...args: any[]): void;
  export const gsap: any;
}

declare module 'gsap/dist/ScrollTrigger' {
  const ScrollTrigger: any;
  export default ScrollTrigger;
}

declare module 'clsx' {
  export default function clsx(...args: any[]): string;
  export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;
  export interface ClassDictionary {
    [id: string]: any;
  }
  export interface ClassArray extends Array<ClassValue> {}
}

declare module 'tailwind-merge' {
  export function twMerge(...args: string[]): string;
} 