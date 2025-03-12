'use client'

import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="heroSection">
      <Image
        src="/hero-bg.jpg"
        alt="Destiny 2 Forsaken Pack"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default HeroSection;
