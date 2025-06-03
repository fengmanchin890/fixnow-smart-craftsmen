
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Camera, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickActionsProps {
  onFeatureTrigger: (featureId: string) => void;
}

const QuickActions = ({ onFeatureTrigger }: QuickActionsProps) => {
  return (
    <div className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <Link to="/service-request">
          <Button 
            size="lg" 
            className="bg-primary-600 hover:bg-primary-700 h-16 w-full"
          >
            <Smartphone className="mr-2 h-5 w-5" />
            立即叫修
          </Button>
        </Link>
        <Button 
          variant="outline" 
          size="lg" 
          className="h-16"
          onClick={() => onFeatureTrigger('visual-diagnosis')}
        >
          <Camera className="mr-2 h-5 w-5" />
          視覺診斷
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="h-16"
          onClick={() => onFeatureTrigger('iot-integration')}
        >
          <Wifi className="mr-2 h-5 w-5" />
          IoT監控
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
