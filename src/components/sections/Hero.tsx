import { FC } from 'react';
import Link from 'next/link';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

const Hero: FC = () => {
  return (
    <section className="pt-40 pb-16 bg-[#F9F9F9]">
      <div className="container">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-8">
            <div className="flex items-center space-x-1 font-poppins font-bold text-[#8A8A8A]">
              <span className="flex items-center">
                MISES À JOUR DE L'APP <StarIcon className="w-4 h-4 ml-1 text-yellow-400" />
              </span>
              <Link 
                href="/nouveautes" 
                className="text-[15px] text-gray-700 hover:text-primary font-bold flex items-center"
              >
                NOUVEAUTÉS <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <h1 className="font-poppins text-[40px] leading-tight md:text-6xl font-extrabold mb-6">
            <div className="flex flex-col items-center md:hidden">
              <span className="inline-block">
                Prêt à <span className="text-[#FDB241]">économiser</span>
              </span>
              <span className="inline-block">
                <span className="text-[#FDB241]">du temps</span> sur vos
              </span>
              <span className="inline-block">chantiers?</span>
            </div>

            <div className="hidden md:flex md:flex-col md:items-center">
              <span className="inline-block">
                Prêt à <span className="text-[#FDB241]">économiser du temps</span>
              </span>
              <span className="inline-block">sur vos chantiers?</span>
            </div>
          </h1>
          
          <p className="font-poppins text-[#8A8A8A] text-lg md:text-xl font-normal mb-8 md:mb-12">
            La construction, c'est du travail d'équipe.<br className="md:hidden" /> 
            Collaborez mieux, terminez plus vite et<br className="md:hidden" /> 
            économisez. L'application Benetics vous<br className="md:hidden" /> 
            soutient à chaque étape.
          </p>
          
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-6">
            <Link 
              href="/demo"
              className="bg-[#FDB241] hover:bg-[#fca822] text-white px-9 py-3 rounded-full text-lg font-bold transition-colors w-full md:w-auto"
            >
              Demander une démo
            </Link>
            <Link 
              href="/essai"
              className="bg-white text-gray-900 hover:bg-gray-50 px-9 py-3 rounded-full text-lg font-bold transition-colors shadow-sm border border-gray-200 w-full md:w-auto"
            >
              Essayer gratuitement
            </Link>
          </div>
          
          <div className="mt-16 md:mt-20 relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/images/video-poster.jpg"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 