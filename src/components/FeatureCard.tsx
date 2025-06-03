
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    demo: string;
  };
  isActive: boolean;
  onTrigger: (featureId: string) => void;
}

const FeatureCard = ({ feature, isActive, onTrigger }: FeatureCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isActive ? 'ring-2 ring-primary-500 bg-primary-50' : ''
      }`}
      onClick={() => onTrigger(feature.id)}
    >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-3 p-3 bg-primary-100 rounded-full w-fit">
          {feature.icon}
        </div>
        <CardTitle className="text-lg">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 mb-4">{feature.description}</p>
        {isActive && (
          <div className="animate-fade-in">
            <Badge variant="secondary" className="animate-pulse">
              {feature.demo}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
