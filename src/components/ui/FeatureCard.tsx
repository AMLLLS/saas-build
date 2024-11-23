import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 mb-4">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-secondary-light">{description}</p>
    </motion.div>
  );
};

export default FeatureCard; 