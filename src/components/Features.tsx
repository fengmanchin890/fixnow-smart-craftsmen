
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const features = [
    {
      title: "智慧媒合引擎",
      subtitle: "AI-Powered Matching Engine",
      description: "運用機器學習演算法，考量地理位置、技能匹配度、師傅評級等多重因素，實現最優化的即時媒合。",
      tech: ["TensorFlow", "Redis", "Google Maps API"],
      icon: "🤖",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "視覺化問題診斷",
      subtitle: "Computer Vision Diagnostics",
      description: "用戶上傳問題照片，AI自動識別維修類型和緊急程度，提供精準的解決方案建議。",
      tech: ["YOLO v8", "OpenCV", "Edge AI"],
      icon: "📷",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "智慧定價系統",
      subtitle: "Dynamic Pricing Engine",
      description: "基於需求預測、師傅供給、緊急程度等多維度數據的動態定價機制，確保價格公平透明。",
      tech: ["ARIMA", "Prophet", "Real-time Analytics"],
      icon: "💰",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "預測性師傅調度",
      subtitle: "Predictive Workforce Management",
      description: "運用大數據分析預測需求熱點，智慧安排師傅配置，優化服務路線和效率。",
      tech: ["Apache Kafka", "Spark MLlib", "OR-Tools"],
      icon: "📊",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "對話式服務助手",
      subtitle: "Conversational AI Assistant",
      description: "多語言智能客服，提供24/7問題診斷、維修指導、進度追蹤等全方位服務支援。",
      tech: ["GPT-4", "Rasa", "Multi-platform"],
      icon: "💬",
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "區塊鏈信用系統",
      subtitle: "Blockchain-based Credit System",
      description: "建立去中心化、不可竄改的信用評價體系，智能合約保障交易安全。",
      tech: ["Ethereum", "Solidity", "IPFS"],
      icon: "⛓️",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "物聯網設備整合",
      subtitle: "IoT Integration",
      description: "連接智慧家電，實現預防性維護，設備異常時自動發起維修請求。",
      tech: ["MQTT", "AWS IoT", "InfluxDB"],
      icon: "📡",
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">核心技術特色</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            整合最先進的 AI、區塊鏈、IoT 技術，打造全方位的智慧化服務平台
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`${feature.color} hover:shadow-lg transition-all duration-300 animate-fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                    <p className="text-sm text-gray-600">{feature.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
