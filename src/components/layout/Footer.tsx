import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9F9F9] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/logo.svg" 
                alt="Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto" 
              />
            </Link>
            <p className="text-secondary-light mb-4">
              Optimisez la gestion de vos chantiers avec notre solution complète et intuitive.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-secondary-light hover:text-primary transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-secondary-light hover:text-primary transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-light hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-secondary-light">
                123 Rue Example
              </li>
              <li className="text-secondary-light">
                75000 Paris, France
              </li>
              <li>
                <a href="tel:+33123456789" className="text-secondary-light hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@example.com" className="text-secondary-light hover:text-primary transition-colors">
                  contact@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-light text-sm mb-4 md:mb-0">
              © {currentYear} Votre Entreprise. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-secondary-light hover:text-primary transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-secondary-light hover:text-primary transition-colors text-sm">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 