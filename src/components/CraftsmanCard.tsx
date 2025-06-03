
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, DollarSign } from 'lucide-react';

interface CraftsmanCardProps {
  craftsman: {
    name: string;
    specialty: string;
    rating: number;
    distance: string;
    price: string;
    available: boolean;
  };
}

const CraftsmanCard = ({ craftsman }: CraftsmanCardProps) => {
  return (
    <div 
      className={`flex items-center justify-between p-4 rounded-lg border ${
        craftsman.available ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
          {craftsman.name[0]}
        </div>
        <div>
          <h4 className="font-semibold">{craftsman.name}</h4>
          <p className="text-sm text-gray-600">{craftsman.specialty}</p>
          <div className="flex items-center gap-2 mt-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm">{craftsman.rating}</span>
            <MapPin className="h-4 w-4 text-gray-400 ml-2" />
            <span className="text-sm text-gray-600">{craftsman.distance}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-4 w-4 text-green-600" />
          <span className="font-semibold text-green-600">{craftsman.price}</span>
        </div>
        <Badge variant={craftsman.available ? "default" : "secondary"}>
          {craftsman.available ? '立即可用' : '忙碌中'}
        </Badge>
      </div>
    </div>
  );
};

export default CraftsmanCard;
