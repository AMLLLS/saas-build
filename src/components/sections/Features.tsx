import { FC } from 'react';
import dynamic from 'next/dynamic';
import AnimatedElement from '@/components/ui/AnimatedElement';
import Link from 'next/link';

// Import Lottie dynamiquement avec SSR désactivé
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

// Import your Lottie animations
import dailyReportAnimation from '@/assets/animations/daily-report.json';
import teamAnimation from '@/assets/animations/team.json';
import documentsAnimation from '@/assets/animations/documents.json';

const features = [
  {
    title: "Rapports de travail par la voix",
    description: "Les travaux en régie valent de l'argent. C'est dommage s'ils ne sont pas reportés. Désormais, notre assistant vocal s'en charge pour vous. Parlez à votre téléphone de manière naturelle dans la langue de votre choix. En quelques secondes, le rapport de régie sera prêt.",
    animation: dailyReportAnimation,
    isReversed: false,
  },
  {
    title: "Gestion d'équipe simplifiée",
    description: "Les travaux en régie valent de l'argent. C'est dommage s'ils ne sont pas reportés. Désormais, notre assistant vocal s'en charge pour vous. Parlez à votre téléphone de manière naturelle dans la langue de votre choix. En quelques secondes, le rapport de régie sera prêt.",
    animation: teamAnimation,
    isReversed: true,
  },
  {
    title: "Documents centralisés",
    description: "Les travaux en régie valent de l'argent. C'est dommage s'ils ne sont pas reportés. Désormais, notre assistant vocal s'en charge pour vous. Parlez à votre téléphone de manière naturelle dans la langue de votre choix. En quelques secondes, le rapport de régie sera prêt.",
    animation: documentsAnimation,
    isReversed: false,
  },
];

const Features: FC = () => {
  return (
    <section className="pt-0 md:pt-24 pb-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-[1580px]">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <span className="text-[#8A8A8A] text-sm font-bold">AVANTAGES</span>
          </div>
        </div>

        <h2 className="text-[44px] font-bold text-center mb-4">
          Pour vos projets de construction
        </h2>

        <p className="text-[#8A8A8A] text-center text-lg max-w-3xl mx-auto mb-16">
          Weltneuheit gefällig? Unser Sprach-Assistent! Hört Dir zu, denkt für Dich mit und erledigt die Schreibarbeit für Dich. Erlebe diesen und weitere Vorteile von Benetics für die Macher am Bau.
        </p>

        <div className="space-y-8 md:space-y-24">
          {features.map((feature, index) => (
            <AnimatedElement key={index} delay={index * 0.2}>
              <div className="bg-white rounded-[32px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden h-auto md:h-[900px]">
                <div className="flex flex-col md:flex-row h-full">
                  <div className={`w-full md:w-2/5 flex items-center justify-center order-1 md:order-none ${feature.isReversed ? 'md:order-2' : ''}`}>
                    <div className="px-6 md:px-24 py-12 md:py-0 text-center">
                      <div className="max-w-lg mx-auto">
                        <h3 className="text-[28px] md:text-[34px] leading-tight font-bold mb-4 md:mb-8 text-[#2D2D2D]">
                          {feature.title}
                        </h3>
                        <p className="text-[18px] md:text-[20px] text-[#8A8A8A] mb-6 md:mb-12 leading-relaxed">
                          {feature.description}
                        </p>
                        <a href="#" className="text-[#FDB241] text-lg font-semibold hover:text-[#fca822] transition-colors inline-block">
                          En savoir plus
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`w-full md:w-3/5 relative order-2 md:order-none h-[400px] md:h-auto ${feature.isReversed ? 'md:order-1' : ''}`}
                  >
                    <div className={`absolute inset-0 flex items-center justify-center 
                      ${feature.isReversed ? 'md:pl-20 md:pr-12' : 'md:pl-12 md:pr-20'}`}
                    >
                      {typeof window !== 'undefined' && (
                        <Lottie 
                          animationData={feature.animation}
                          className="w-[90%]"
                          style={{ height: '800px' }}
                          loop={true}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link 
            href="/demo"
            className="bg-[#FDB241] hover:bg-[#fca822] text-white px-9 py-3 rounded-full text-lg font-bold transition-colors"
          >
            Découvrez plus d’avantages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features; 