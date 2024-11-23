import { ReactNode } from 'react';

declare global {
  interface MenuItemProps {
    href: string;
    label: string;
  }

  interface HeaderProps {
    className?: string;
  }

  interface LayoutProps {
    children: ReactNode;
  }

  interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    className?: string;
    onClick?: () => void;
  }
}

export {}; 