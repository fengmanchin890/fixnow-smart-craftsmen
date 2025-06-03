
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import CraftsmanCard from './CraftsmanCard';

interface MatchingResultsProps {
  craftsmen: Array<{
    name: string;
    specialty: string;
    rating: number;
    distance: string;
    price: string;
    available: boolean;
  }>;
}

const MatchingResults = ({ craftsmen }: MatchingResultsProps) => {
  return (
    <div className="animate-fade-in">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary-600" />
            AI智能媒合結果
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {craftsmen.map((craftsman, index) => (
              <CraftsmanCard key={index} craftsman={craftsman} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchingResults;
