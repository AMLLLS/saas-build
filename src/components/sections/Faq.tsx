import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quelle est la facilité d'installation de Benetics pour moi et mon équipe ?",
    answer: "C'est ultra rapide – Promis. Benetics est prêt à l'emploi en quelques clics sur téléphone et ordinateur. Grâce à son utilisation intuitive, aucune formation longue n'est nécessaire, ni pour toi, ni pour ton équipe."
  },
  {
    question: "En quoi Benetics se distingue-t-il des autres solutions logicielles ?",
    answer: "Notre plateforme se distingue par sa simplicité d'utilisation et son approche centrée sur les besoins réels des équipes de construction. Nous proposons des fonctionnalités innovantes comme la saisie vocale et une synchronisation en temps réel."
  },
  {
    question: "Les coûts par utilisateur incluent-ils vraiment toutes les fonctionnalités répertoriées ?",
    answer: "Oui, absolument. Chaque plan tarifaire donne accès à l'ensemble des fonctionnalités indiquées, sans coûts cachés. Les mises à jour sont également incluses."
  },
  {
    question: "Quelles sont les exigences techniques pour utiliser Benetics ?",
    answer: "Benetics fonctionne sur tous les appareils modernes avec une connexion internet. Aucune installation complexe n'est nécessaire, il suffit d'un navigateur web récent ou de notre application mobile."
  }
];

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1580px]">
        <div className="flex flex-col md:flex-row justify-between md:gap-36">
          <div className="md:w-1/3 mb-12 md:mb-0 text-center md:text-left">
            <h2 className="text-[44px] md:text-[56px] font-bold mb-4 leading-[1.1]">
              Questions<br />
              Fréquemment<br />
              Posées (FAQ)
            </h2>
            <p className="text-[#8A8A8A] text-xl">
              Oui, mais encore une question ? Voici les<br />
              questions et réponses typiques.
            </p>
          </div>

          <div className="md:w-2/3 max-w-[800px]">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 md:px-12 py-6 md:py-8 flex items-start justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl md:text-[28px] font-bold text-gray-900 text-left pr-8">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 ml-4 mt-1 md:mt-2"
                    >
                      {openIndex === index ? (
                        <XMarkIcon className="w-6 h-6 md:w-8 md:h-8" />
                      ) : (
                        <PlusIcon className="w-6 h-6 md:w-8 md:h-8" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-8 md:px-12 pb-6 md:pb-8">
                          <p className="text-lg md:text-xl text-[#8A8A8A] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 