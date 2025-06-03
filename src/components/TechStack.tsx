
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const categories = [
    {
      title: "人工智慧 & 機器學習",
      icon: "🧠",
      technologies: [
        { name: "TensorFlow", desc: "深度學習框架" },
        { name: "PyTorch", desc: "神經網路訓練" },
        { name: "OpenAI GPT-4", desc: "自然語言處理" },
        { name: "YOLO v8", desc: "物體檢測" },
        { name: "OpenCV", desc: "電腦視覺" }
      ]
    },
    {
      title: "區塊鏈 & 加密技術",
      icon: "⛓️",
      technologies: [
        { name: "Ethereum", desc: "智能合約平台" },
        { name: "Solidity", desc: "智能合約開發" },
        { name: "IPFS", desc: "分散式儲存" },
        { name: "Polygon", desc: "Layer 2 解決方案" },
        { name: "Web3.js", desc: "區塊鏈互動" }
      ]
    },
    {
      title: "物聯網 & 邊緣運算",
      icon: "📡",
      technologies: [
        { name: "MQTT", desc: "IoT 通訊協定" },
        { name: "AWS IoT Core", desc: "雲端 IoT 服務" },
        { name: "Edge AI", desc: "邊緣智能運算" },
        { name: "InfluxDB", desc: "時序資料庫" },
        { name: "CoAP", desc: "受限網路協定" }
      ]
    },
    {
      title: "大數據 & 分析",
      icon: "📊",
      technologies: [
        { name: "Apache Kafka", desc: "即時數據流" },
        { name: "Spark MLlib", desc: "分散式機器學習" },
        { name: "Redis", desc: "記憶體資料庫" },
        { name: "Apache Airflow", desc: "工作流管理" },
        { name: "Elasticsearch", desc: "搜尋引擎" }
      ]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">技術架構</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            採用業界領先的技術堆棧，確保平台的穩定性、擴展性和創新性
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-600">{tech.desc}</div>
                      </div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
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

export default TechStack;
