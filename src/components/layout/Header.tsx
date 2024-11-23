import React, { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('#apercu');

  const menuItems = [
    { href: '#apercu', label: 'Aperçu' },
    { href: '#avantages', label: 'Avantages' },
    { href: '#tarifs', label: 'Tarifs' },
    { href: '#qui-sommes-nous', label: 'Qui sommes-nous' },
    { href: '#blog', label: 'Blog' },
  ];

  return (
    <div className="fixed w-full top-0 z-50 px-3 md:px-8 lg:px-16">
      <header className="max-w-[1580px] mx-auto bg-white rounded-b-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
        {/* Version Mobile */}
        <div className="flex items-center justify-between px-4 py-4 md:hidden">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo.svg"
              alt="Benetics" 
              width={120} 
              height={32}
              className="h-8 w-auto" 
              priority
            />
          </Link>

          <div className="flex items-center space-x-4">
            <select className="bg-transparent text-base font-medium border-none focus:ring-0 py-1 px-2">
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 px-4 py-1.5 rounded-full text-[15px] font-medium"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Version Desktop avec ajustements responsives */}
        <div className="hidden md:block px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4 lg:space-x-8">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/images/logo.svg"
                  alt="Benetics" 
                  width={120} 
                  height={32}
                  className="h-8 w-auto" 
                  priority
                />
              </Link>

              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-3 lg:px-4 py-2 text-[15px] transition-all duration-200 rounded-full font-montserrat whitespace-nowrap',
                      activeItem === item.href 
                        ? 'bg-white border border-gray-200 font-medium' 
                        : 'hover:bg-gray-50'
                    )}
                    onClick={() => setActiveItem(item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <div className="flex items-center mr-2 lg:mr-3">
                <button className="flex items-center space-x-1 px-2 py-1 hover:bg-gray-50 rounded-full transition-colors">
                  <span className="text-[15px] font-medium text-gray-700">FR</span>
                  <svg 
                    className="w-4 h-4 text-gray-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </button>
              </div>

              <Link 
                href="/connexion"
                className="bg-white border border-gray-200 hover:border-gray-300 text-gray-900 px-4 lg:px-6 py-[7px] rounded-full text-[16px] lg:text-[18px] font-bold leading-normal transition-colors whitespace-nowrap"
              >
                Connexion
              </Link>
              
              <Link 
                href="/demo"
                className="bg-[#FDB241] hover:bg-[#fca822] text-white px-4 lg:px-6 py-[7px] rounded-full text-[16px] lg:text-[18px] font-bold leading-normal transition-colors whitespace-nowrap"
              >
                Demander une démo
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Menu Mobile Déroulant */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Header fixe qui reste au-dessus */}
            <div className="fixed inset-x-0 top-0 z-50 px-3 md:px-8 lg:px-16">
              <header className="max-w-[1580px] mx-auto bg-white rounded-b-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
                {/* Copie du contenu du header mobile */}
                <div className="flex items-center justify-between px-4 py-4 md:hidden">
                  <Link href="/" className="flex-shrink-0">
                    <Image 
                      src="/images/logo.svg"
                      alt="Benetics" 
                      width={120} 
                      height={32}
                      className="h-8 w-auto" 
                      priority
                    />
                  </Link>

                  <div className="flex items-center space-x-4">
                    <select className="bg-transparent text-base font-medium border-none focus:ring-0 py-1 px-2">
                      <option value="fr">FR</option>
                      <option value="en">EN</option>
                    </select>

                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="bg-gray-100 px-4 py-1.5 rounded-full text-[15px] font-medium"
                    >
                      Menu
                    </button>
                  </div>
                </div>
              </header>
            </div>

            {/* Menu déroulant */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-x-0 top-0 bg-white md:hidden z-40"
              style={{ height: '100vh' }}
            >
              <div className="h-full pt-[140px]"> {/* Augmenté de 120px à 140px */}
                <div className="px-6 h-full flex flex-col">
                  <nav className="flex-1">
                    <div className="space-y-4 mb-8">
                      {menuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-[34px] font-bold font-poppins text-[#2D2D2D] hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-3 mt-8">
                      <Link 
                        href="/connexion"
                        className="block w-full text-center bg-white border border-gray-200 hover:border-gray-300 text-gray-900 px-7 py-[7px] rounded-full text-[18px] font-bold leading-normal transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Connexion
                      </Link>
                      
                      <Link 
                        href="/demo"
                        className="block w-full text-center bg-[#FDB241] hover:bg-[#fca822] text-white px-7 py-[7px] rounded-full text-[18px] font-bold leading-normal transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Demander une démo
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header; 