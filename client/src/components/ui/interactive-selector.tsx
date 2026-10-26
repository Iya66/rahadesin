import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaUtensils, FaDoorClosed, FaCouch, FaGem } from 'react-icons/fa';

export interface SelectorOption {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface InteractiveSelectorProps {
  options?: SelectorOption[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const defaultOptions: SelectorOption[] = [
  {
    title: "Ceiling & Lighting",
    description: "Cove lighting & architectural ceilings",
    image: "/images/ceiling-lighting.jpg",
    icon: <FaLightbulb size={22} className="text-white" />
  },
  {
    title: "Modular Kitchen",
    description: "Ergonomic designs & sleek modern finishes",
    image: "/images/modular-kitchen.jpg",
    icon: <FaUtensils size={22} className="text-white" />
  },
  {
    title: "Storage & Joinery",
    description: "Floor-to-ceiling wardrobes & smart woodwork",
    image: "/images/wardrobe-joinery.jpg",
    icon: <FaDoorClosed size={22} className="text-white" />
  },
  {
    title: "Living Spaces",
    description: "Tailored drapery & warm ambient corners",
    image: "/images/room-drapery.jpg",
    icon: <FaCouch size={22} className="text-white" />
  },
  {
    title: "Dining & Natural Wood",
    description: "Bespoke solid timber & cane furniture",
    image: "/images/dining-room-details.jpg",
    icon: <FaGem size={22} className="text-white" />
  }
];

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({
  options = defaultOptions,
  title = "A Glimpse of the Details",
  subtitle = "Explore our signature interior design concepts and craftsmanship across Puducherry.",
  className = ""
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 150 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options]);

  return (
    <div className={`relative flex flex-col items-center justify-center py-12 px-4 bg-[#1f221a] font-sans text-white rounded-xl overflow-hidden my-8 ${className}`}> 
      {/* Header Section */}
      <div className="w-full max-w-2xl px-6 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#fbf7ee] mb-3 tracking-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-sm md:text-base text-[#cfccc2] max-w-xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[1080px] h-[440px] mx-auto items-stretch overflow-hidden relative rounded-lg border border-[rgba(255,255,255,0.12)]">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-40px)',
              minWidth: '70px',
              cursor: 'pointer',
              backgroundColor: '#1b1d16',
              borderRight: index < options.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.60)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '6 1 0%' : '1.2 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Dark gradient overlay */}
            <div 
              className="shadow absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out"
              style={{
                background: activeIndex === index
                  ? 'linear-gradient(to top, rgba(20,22,16,0.92) 0%, rgba(20,22,16,0.4) 40%, rgba(20,22,16,0.1) 100%)'
                  : 'linear-gradient(to top, rgba(20,22,16,0.85) 0%, rgba(20,22,16,0.6) 100%)'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-6 flex items-center justify-start h-14 z-10 pointer-events-none px-4 gap-3.5 w-full">
              <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(53,59,45,0.9)] backdrop-blur-md shadow-lg border border-[rgba(255,255,255,0.25)] flex-shrink-0 transition-transform duration-300">
                {option.icon}
              </div>
              <div className="info text-white overflow-hidden whitespace-nowrap">
                <div 
                  className="main font-serif text-lg md:text-xl font-medium tracking-wide transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-xs md:text-sm text-[#e0ddd4] transition-all duration-700 ease-in-out font-sans mt-0.5"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { InteractiveSelector };
export default InteractiveSelector;
