declare module 'gsap' {
  interface GSAPTweenVars {
    [key: string]: any;
    duration?: number;
    delay?: number;
    ease?: string | Function;
    repeat?: number;
    repeatDelay?: number;
    yoyo?: boolean;
    yoyoEase?: string | Function;
    immediateRender?: boolean;
    scrollTrigger?: {
      trigger: Element | string;
      start?: string;
      end?: string;
      scrub?: boolean | number;
      toggleActions?: string;
      markers?: boolean;
      [key: string]: any;
    };
  }

  interface GSAPStatic {
    to(target: Element | Element[] | string, vars: GSAPTweenVars): GSAPAnimation;
    from(target: Element | Element[] | string, vars: GSAPTweenVars): GSAPAnimation;
    fromTo(target: Element | Element[] | string, fromVars: GSAPTweenVars, toVars: GSAPTweenVars): GSAPAnimation;
    registerPlugin(...args: any[]): void;
    set(target: Element | Element[] | string, vars: GSAPTweenVars): void;
    timeline(vars?: GSAPTweenVars): GSAPTimeline;
  }

  interface GSAPAnimation {
    pause(): this;
    play(): this;
    progress(): number;
    progress(value: number): this;
    reverse(): this;
    restart(): this;
    resume(): this;
    seek(time: number): this;
    timeScale(value: number): this;
  }

  interface GSAPTimeline extends GSAPAnimation {
    add(child: GSAPAnimation, position?: string | number): this;
    to(target: Element | Element[] | string, vars: GSAPTweenVars): this;
    from(target: Element | Element[] | string, vars: GSAPTweenVars): this;
    fromTo(target: Element | Element[] | string, fromVars: GSAPTweenVars, toVars: GSAPTweenVars): this;
  }

  const gsap: GSAPStatic;
  export { gsap };
  export const ScrollTrigger: any;
}

declare module 'gsap/ScrollTrigger' {
  export { ScrollTrigger as default } from 'gsap';
} 