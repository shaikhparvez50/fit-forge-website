
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Users, Award, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  icon: 'Dumbbell' | 'Users' | 'Award' | 'Clock';
  title: string;
  description: string;
  featureId: string;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  featureId,
  className 
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'Dumbbell':
        return <Dumbbell size={32} className="text-white" />;
      case 'Users':
        return <Users size={32} className="text-white" />;
      case 'Award':
        return <Award size={32} className="text-white" />;
      case 'Clock':
        return <Clock size={32} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <Link 
      to={`/features/${featureId}`} 
      className={cn(
        "block bg-white p-8 rounded-lg shadow-lg text-center card-hover transform transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="w-16 h-16 bg-gym-purple rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
        {renderIcon()}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gym-gray">
        {description}
      </p>
      <div className="mt-4 text-gym-purple text-sm font-medium hover:underline">
        Learn More →
      </div>
    </Link>
  );
};

export default FeatureCard;
