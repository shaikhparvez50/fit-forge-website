
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  className
}) => {
  return (
    <div 
      className={`relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(26, 31, 44, 0.9), rgba(139, 92, 246, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gym-dark/80 to-gym-purple/40 z-10"></div>
      <div className="text-center text-white px-4 z-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in animation-delay-100 opacity-90 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
