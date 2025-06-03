
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Smartphone,
  Camera,
  Wifi,
  Shield,
  Zap,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const features = [
    {
      id: 'ai-matching',
      title: 'AI智能媒合',
      icon: <Zap className="h-8 w-8" />,
      description: '3秒內找到最適合的工匠',
      simulation: '正在分析您的需求...\n✓ 地理位置分析完成\n✓ 技能匹配完成\n✓ 找到3位合適師傅'
    },
    {
      id: 'visual-diagnosis',
      title: 'AR視覺診斷',
      icon: <Camera className="h-8 w-8" />,
      description: '拍照即可智能檢測問題',
      simulation: '正在啟動相機...\n✓ 偵測到水管破裂\n✓ 問題嚴重程度：中等\n✓ 建議立即維修'
    },
    {
      id: 'iot-monitoring',
      title: 'IoT智能監控',
      icon: <Wifi className="h-8 w-8" />,
      description: '即時監控設備狀態',
      simulation: '正在連接設備...\n✓ 冷氣：正常運作\n✓ 熱水器：溫度異常\n⚠️ 建議檢修'
    },
    {
      id: 'blockchain-security',
      title: '區塊鏈交易',
      icon: <Shield className="h-8 w-8" />,
      description: '安全透明的交易保障',
      simulation: '建立安全通道...\n✓ 智能合約部署\n✓ 託管機制啟動\n✓ 交易安全保障'
    }
  ];

  const demoScenarios = [
    {
      id: 'emergency',
      title: '緊急維修情境',
      description: '水管突然爆裂，需要緊急處理',
      steps: [
        '用戶拍照上傳問題',
        'AI視覺診斷分析',
        '緊急狀況媒合',
        '15分鐘內師傅到達'
      ]
    },
    {
      id: 'routine',
      title: '定期保養情境',
      description: '冷氣定期清潔保養',
      steps: [
        '預約保養服務',
        '系統推薦師傅',
        '確認服務時間',
        '完成保養評價'
      ]
    },
    {
      id: 'smart-home',
      title: '智慧家居整合',
      description: 'IoT設備異常自動通知',
      steps: [
        'IoT設備監控',
        '異常自動偵測',
        '推送維修通知',
        '一鍵呼叫師傅'
      ]
    }
  ];

  const simulateFeature = (featureId: string) => {
    setActiveDemo(featureId);
    setIsSimulating(true);
    
    setTimeout(() => {
      setIsSimulating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">FixNow</h1>
                  <p className="text-xs text-gray-600">立即體驗</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            體驗FixNow完整功能
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            透過互動式演示了解平台所有核心功能
          </p>
        </div>

        {/* Feature Demos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                activeDemo === feature.id ? 'ring-2 ring-primary-500 bg-primary-50' : ''
              }`}
              onClick={() => simulateFeature(feature.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-4 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button variant="outline" size="sm">
                  <Play className="mr-2 h-4 w-4" />
                  體驗功能
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Simulation */}
        {activeDemo && (
          <Card className="mb-12 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary-600" />
                功能演示：{features.find(f => f.id === activeDemo)?.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                {isSimulating ? (
                  <div className="animate-pulse">
                    {features.find(f => f.id === activeDemo)?.simulation.split('\n').map((line, index) => (
                      <div key={index} className="mb-1">
                        {line}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {features.find(f => f.id === activeDemo)?.simulation.split('\n').map((line, index) => (
                      <div key={index} className="mb-1">
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Scenario Demos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">實際使用情境演示</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoScenarios.map((scenario) => (
              <Card key={scenario.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{scenario.title}</CardTitle>
                  <p className="text-gray-600">{scenario.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {scenario.steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    查看完整演示
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="text-center">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">準備開始使用？</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              <Link to="/service-request">
                <Button size="lg" className="w-full bg-primary-600 hover:bg-primary-700">
                  <Smartphone className="mr-2 h-5 w-5" />
                  立即叫修
                </Button>
              </Link>
              <Link to="/craftsman-register">
                <Button variant="outline" size="lg" className="w-full">
                  <Star className="mr-2 h-5 w-5" />
                  師傅註冊
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
