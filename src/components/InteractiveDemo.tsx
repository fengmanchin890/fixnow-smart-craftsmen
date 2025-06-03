
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Camera, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star,
  Wifi,
  Shield,
  Zap
} from 'lucide-react';

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
            <Card 
              key={feature.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                activeFeature === feature.id ? 'ring-2 ring-primary-500 bg-primary-50' : ''
              }`}
              onClick={() => triggerFeature(feature.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-primary-100 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{feature.description}</p>
                {activeFeature === feature.id && (
                  <div className="animate-fade-in">
                    <Badge variant="secondary" className="animate-pulse">
                      {feature.demo}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Matching Results */}
        {(activeFeature === 'ai-matching' || isMatching) && (
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
                    <div 
                      key={index}
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Action Buttons */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button 
              size="lg" 
              className="bg-primary-600 hover:bg-primary-700 h-16"
              onClick={() => triggerFeature('ai-matching')}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              立即叫修
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-16"
              onClick={() => triggerFeature('visual-diagnosis')}
            >
              <Camera className="mr-2 h-5 w-5" />
              視覺診斷
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-16"
              onClick={() => triggerFeature('iot-integration')}
            >
              <Wifi className="mr-2 h-5 w-5" />
              IoT監控
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
