import { FC, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid/index.js';

interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

interface DragInfo {
  offset: { x: number; y: number };
  velocity: { x: number; y: number };
}

const testimonials: Testimonial[] = [
  {
    content: "Grâce à Benetics, nos installateurs ont toujours les derniers plans en poche. Les listes des tâches sont toujours synchronisées. Benetics nous fait gagner du temps et de l'argent.",
    author: {
      name: "Beno Stettler",
      role: "Chef électricien",
      company: "Bernauer AG",
      image: "/images/testimonials/beno.jpg"
    }
  },
  {
    content: "Grâce à Benetics, nous avons beaucoup moins de paperasse. Notre équipe à gagner en efficacité, ce qui augmente nos marges.",
    author: {
      name: "Stefano Jutzi",
      role: "Chef de projet",
      company: "Jutzi Construction SA",
      image: "/images/testimonials/stefano.jpg"
    }
  }
];

const Testimonials: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      zIndex: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="container max-w-[1580px]">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-24">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 md:pl-4 text-center md:text-left">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-6 mx-auto md:mx-0">
              <span className="text-[#8A8A8A] text-sm font-bold">AVIS DES CLIENTS</span>
            </div>

            <h2 className="text-[44px] md:text-[56px] font-bold leading-tight mb-6">
              L'auto-publicité, c'est facile. Voici les retours de nos clients.
            </h2>

            <div className="text-xl space-y-6 mb-8">
              <p className="text-[#8A8A8A]">
                De nombreuses entreprises utilisent déjà Benetics. Les compliments nous motivent, les critiques nous font progresser.
              </p>
              <p className="font-bold text-[#2D2D2D]">
                Nous visons l'excellence chaque jour.
              </p>
            </div>
          </div>

          {/* Right Column - Testimonials Slider */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden mb-8">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full"
                  >
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E5E7EB] h-[400px] flex flex-col justify-between">
                      <p className="text-[20px] md:text-[28px] leading-tight text-gray-900 font-bold">
                        {testimonials[currentIndex].content}
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonials[currentIndex].author.image}
                            alt={testimonials[currentIndex].author.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-base md:text-lg font-semibold text-gray-900">{testimonials[currentIndex].author.name}</p>
                          <p className="text-sm md:text-base text-gray-500">
                            {testimonials[currentIndex].author.role}, {testimonials[currentIndex].author.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => paginate(-1)}
                  className="h-14 px-6 rounded-[28px] bg-white border border-[#E5E7EB] flex items-center justify-center hover:border-gray-300 transition-colors"
                >
                  <ArrowLeftIcon className="w-7 h-7 text-gray-600" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="h-14 px-6 rounded-[28px] bg-white border border-[#E5E7EB] flex items-center justify-center hover:border-gray-300 transition-colors"
                >
                  <ArrowRightIcon className="w-7 h-7 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 