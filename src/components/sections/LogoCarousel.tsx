import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const LogoCarousel = () => {
  const logos = [
    { src: '/images/logos/logo1.svg', alt: 'Client 1' },
    { src: '/images/logos/logo2.svg', alt: 'Client 2' },
    { src: '/images/logos/logo3.svg', alt: 'Client 3' },
    { src: '/images/logos/logo4.svg', alt: 'Client 4' },
    { src: '/images/logos/logo5.svg', alt: 'Client 5' },
    { src: '/images/logos/logo6.svg', alt: 'Client 6' },
    { src: '/images/logos/logo7.svg', alt: 'Client 7' },
    { src: '/images/logos/logo8.svg', alt: 'Client 8' },
  ];

  return (
    <section className="pt-0 md:pt-24 pb-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-[44px] md:text-[56px] font-bold text-center">
          Quelques-uns de nos clients
        </h2>
      </div>

      <Marquee
        gradient={false}
        speed={60}
        className="overflow-hidden w-full"
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-6">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={70}
              className="h-[60px] w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default LogoCarousel; 