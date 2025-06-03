
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState('matching');

  const demos = {
    matching: {
      title: "智慧媒合引擎演示",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">問題分析</h4>
            <p className="text-blue-700">檢測到：水管漏水，緊急程度：高</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">師傅匹配</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-green-700">王師傅 (水電)</span>
                <Badge className="bg-green-100 text-green-800">匹配度 95%</Badge>
              </div>
              <div className="text-sm text-green-600">距離 0.8km • 評分 4.9 ⭐ • 預計 3分鐘到達</div>
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-2">動態定價</h4>
            <p className="text-orange-700">基準價格 NT$800 + 緊急加成 NT$200 = NT$1,000</p>
          </div>
        </div>
      )
    },
    vision: {
      title: "視覺診斷系統演示",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">影像分析</h4>
            <p className="text-purple-700">識別到：洗衣機異常震動，可能原因：軸承磨損</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">緊急程度評估</h4>
            <p className="text-yellow-700">中等緊急程度，建議 24小時內處理</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-900 mb-2">材料預估</h4>
            <p className="text-indigo-700">可能需要：軸承組件、潤滑油、密封圈</p>
          </div>
        </div>
      )
    },
    iot: {
      title: "IoT 設備監控演示",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-2">設備警報</h4>
            <p className="text-red-700">冷氣壓縮機溫度異常 (85°C)，超過安全閾值</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">預防性維護</h4>
            <p className="text-blue-700">建議立即檢查冷媒壓力並清潔散熱器</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">自動派工</h4>
            <p className="text-green-700">已自動派工給附近的空調專業師傅</p>
          </div>
        </div>
      )
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">系統演示</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            體驗 FixNow 平台的核心功能，感受智慧化服務的魅力
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant={activeDemo === 'matching' ? 'default' : 'outline'}
            onClick={() => setActiveDemo('matching')}
            className="flex-1 sm:flex-none"
          >
            智慧媒合引擎
          </Button>
          <Button
            variant={activeDemo === 'vision' ? 'default' : 'outline'}
            onClick={() => setActiveDemo('vision')}
            className="flex-1 sm:flex-none"
          >
            視覺診斷系統
          </Button>
          <Button
            variant={activeDemo === 'iot' ? 'default' : 'outline'}
            onClick={() => setActiveDemo('iot')}
            className="flex-1 sm:flex-none"
          >
            IoT 設備監控
          </Button>
        </div>

        <Card className="max-w-4xl mx-auto animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              {demos[activeDemo as keyof typeof demos].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {demos[activeDemo as keyof typeof demos].content}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;
