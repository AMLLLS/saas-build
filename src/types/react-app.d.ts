/// <reference types="react" />
/// <reference types="react-dom" />

import React from 'react';
import { AppProps } from 'next/app';

declare module 'react' {
  export type FC<P = {}> = React.FunctionComponent<P>;
  export type FormEvent<T = Element> = React.FormEvent<T>;
  export type ChangeEvent<T = Element> = React.ChangeEvent<T>;
  export type ButtonHTMLAttributes<T = Element> = React.ButtonHTMLAttributes<T>;
  export type ReactNode = React.ReactNode;
}

declare module 'next' {
  export type NextPage<P = {}, IP = P> = React.ComponentType<P> & {
    getInitialProps?(context: any): IP | Promise<IP>;
  };
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
}

declare module 'next/link';
declare module 'next/image';
declare module 'next/app';
declare module 'next/document';

declare module '@heroicons/react/24/solid' {
  export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '@heroicons/react/24/outline' {
  export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>>;
} 