
import React, { useState } from 'react';
import { 
  Camera, 
  Wifi,
  Shield,
  Zap
} from 'lucide-react';
import FeatureCard from './FeatureCard';
import MatchingResults from './MatchingResults';
import QuickActions from './QuickActions';

const InteractiveDemo = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [isMatching, setIsMatching] = useState(false);

  const features = [
    {
      id: 'ai-matching',
      title: 'AI智能媒合',
      icon: <Zap className="h-6 w-6" />,
      description: '3秒內找到最適合的工匠',
      demo: '正在分析您的需求...'
    },
    {
      id: 'visual-diagnosis',
      title: '視覺診斷',
      icon: <Camera className="h-6 w-6" />,
      description: 'AR技術即時問題檢測',
      demo: '啟動相機進行智能診斷...'
    },
    {
      id: 'iot-integration',
      title: 'IoT整合',
      icon: <Wifi className="h-6 w-6" />,
      description: '智能設備狀態監控',
      demo: '連接中... 檢測到3個IoT設備'
    },
    {
      id: 'blockchain-security',
      title: '區塊鏈安全',
      icon: <Shield className="h-6 w-6" />,
      description: '交易透明化保障',
      demo: '建立安全交易通道...'
    }
  ];

  const craftsmen = [
    {
      name: '張師傅',
      specialty: '水電維修',
      rating: 4.9,
      distance: '0.8km',
      price: '$500-800',
      available: true
    },
    {
      name: '李師傅',
      specialty: '冷氣維修',
      rating: 4.8,
      distance: '1.2km',
      price: '$600-900',
      available: true
    },
    {
      name: '王師傅',
      specialty: '家電維修',
      rating: 4.7,
      distance: '1.5km',
      price: '$400-700',
      available: false
    }
  ];

  const triggerFeature = (featureId: string) => {
    setActiveFeature(featureId);
    if (featureId === 'ai-matching') {
      setIsMatching(true);
      setTimeout(() => setIsMatching(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            體驗所有功能
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            點擊下方按鈕體驗FixNow的完整功能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isActive={activeFeature === feature.id}
              onTrigger={triggerFeature}
            />
          ))}
        </div>

        {(activeFeature === 'ai-matching' || isMatching) && (
          <MatchingResults craftsmen={craftsmen} />
        )}

        <QuickActions onFeatureTrigger={triggerFeature} />
      </div>
    </section>
  );
};

export default InteractiveDemo;
