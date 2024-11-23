import { ReactNode, ButtonHTMLAttributes, FormEvent, ChangeEvent } from 'react';

declare global {
  interface LayoutProps {
    children: ReactNode;
  }

  interface TestimonialProps {
    author: {
      name: string;
      role: string;
      company: string;
      image: string;
    };
    content: string;
  }

  interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
    delay?: number;
  }

  interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
  }

  interface FaqItem {
    question: string;
    answer: string;
  }

  interface IconProps {
    className?: string;
    color?: string;
  }

  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
  }

  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }

  interface ContactFormEvents {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
}

export {}; 