import React from 'react';

interface LogoProps {
  type: 'main' | 'hotel' | 'bungalow';
}

const GreenParadiseLogo: React.FC<LogoProps> = ({ type }) => {
  if (type === 'hotel') {
    return (
  <img
    src="0L/GPH.svg"
    alt="Green Paradise Hotel Logo"
  className="hidden sm:block lg:block w-full max-w-[120px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[240px] mx-auto my-auto origin-center object-contain max-h-full self-center transition-all"
  />
    );
  }

  if (type === 'bungalow') {
    return (
  <img
    src="0L/GPB.svg"
    alt="Green Paradise Bungalows Logo"
  className="hidden sm:block lg:block w-full max-w-[120px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[240px] mx-auto my-auto origin-center object-contain max-h-full self-center transition-all"
  />
    );
  }

  // Default 'main' logo
  return (
    <img src="0L/GP.svg" alt="Green Paradise Logo" className="h-10" />
  );
};

export default GreenParadiseLogo;