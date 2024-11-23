import { FC, useState } from 'react';
import { cn } from '@/lib/utils';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Gratuit",
    description: "Pour les petites équipes voulant plus de structure sur les chantiers et au bureau.",
    buttonText: "Commencer",
    buttonLink: "/register"
  },
  {
    name: "Pro",
    price: "17,- €",
    description: "Pour les entreprises de taille moyenne voulant dynamiser l'efficacité sur leurs multiples projets.",
    buttonText: "Commencer",
    buttonLink: "/register/pro"
  },
  {
    name: "Enterprise",
    price: "Individuel",
    description: "Pour les grandes entreprises gérant des projets de construction avec plusieurs acteurs.",
    buttonText: "Contacter",
    buttonLink: "/contact/enterprise"
  }
];

const PricingToggle: FC<{ isAnnual: boolean; onToggle: () => void }> = ({ isAnnual, onToggle }) => (
  <div className="inline-flex items-center bg-[#F3F3F3] rounded-full p-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200">
    <button
      className={cn(
        "px-7 py-2.5 rounded-full text-[15px] font-medium transition-all",
        !isAnnual ? "bg-white shadow-sm text-gray-900 cursor-default" : "text-[#8A8A8A] hover:text-gray-900 cursor-pointer"
      )}
      onClick={() => isAnnual && onToggle()}
    >
      Mensuel
    </button>
    <button
      className={cn(
        "px-7 py-2.5 rounded-full text-[15px] font-medium transition-all flex items-center space-x-2",
        isAnnual ? "bg-white shadow-sm text-gray-900 cursor-default" : "text-[#8A8A8A] hover:text-gray-900 cursor-pointer"
      )}
      onClick={() => !isAnnual && onToggle()}
    >
      <span>Annuel</span>
      <span className="bg-[#FDB241] text-white text-xs px-1.5 py-0.5 rounded-full font-medium ml-1">-12%</span>
    </button>
  </div>
);

const PricingCard: FC<PricingPlan> = ({ name, price, description, buttonText, buttonLink }) => (
  <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-200/80 h-[480px] flex flex-col justify-between">
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{name}</h3>
      <div className="flex items-baseline mb-6 flex-wrap">
        <span className="text-6xl font-bold text-gray-900 min-w-[180px]">{price}</span>
        {price !== "Gratuit" && price !== "Individuel" && (
          <span className="ml-3 text-gray-500 text-xl whitespace-nowrap">par ut. / mois</span>
        )}
      </div>
      <p className="text-gray-500 text-2xl leading-relaxed">{description}</p>
    </div>
    <a
      href={buttonLink}
      className="block w-full py-4 px-6 text-center rounded-full border border-gray-200 text-lg font-medium hover:border-gray-300 transition-colors"
    >
      {buttonText}
    </a>
  </div>
);

const Pricing: FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="pt-0 md:pt-24 pb-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-[1580px]">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-6">
            <span className="text-[#8A8A8A] text-sm font-bold">TARIFS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <div className="md:hidden">
              Ça vaut le coup pour vous
              et votre équipe.
            </div>
            <div className="hidden md:block">
              Ça vaut le coup pour vous et
              votre équipe.
            </div>
          </h2>
          
          <p className="text-xl text-gray-500 font-normal">
            Des tarifs simples et transparents. Essayez
            Benetics gratuitement.
          </p>
        </div>

        <div className="text-center mb-16">
          <PricingToggle isAnnual={isAnnual} onToggle={() => setIsAnnual(!isAnnual)} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/pricing"
            className="inline-block py-3 px-8 bg-[#FDB241] rounded-full text-lg font-semibold w-full text-white hover:bg-[#fca822] transition-colors"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 