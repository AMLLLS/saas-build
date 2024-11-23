import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import LogoCarousel from '@/components/sections/LogoCarousel';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Faq from '../components/sections/Faq';
import Contact from '../components/sections/Contact';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <LogoCarousel />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Contact />
    </Layout>
  );
};

export default Home; 