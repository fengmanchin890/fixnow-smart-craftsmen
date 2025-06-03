
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              智慧化
              <span className="block text-secondary-400">工匠媒合</span>
              <span className="block">即時到家</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              運用 AI、IoT、區塊鏈技術，為您提供最專業、最快速的維修服務體驗
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 text-lg">
                立即體驗
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 text-lg">
                了解更多
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary-400">5分鐘</div>
                <div className="text-sm text-white/80">平均響應時間</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-400">98%</div>
                <div className="text-sm text-white/80">客戶滿意度</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-400">1000+</div>
                <div className="text-sm text-white/80">認證師傅</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="glass-effect p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">智慧媒合引擎</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow"></div>
                  <span>AI 分析中...</span>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm text-white/80 mb-2">問題類型</div>
                  <div className="font-semibold">水管漏水 - 緊急</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm text-white/80 mb-2">匹配師傅</div>
                  <div className="font-semibold">王師傅 (評分 4.9) - 3分鐘到達</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm text-white/80 mb-2">預估費用</div>
                  <div className="font-semibold">NT$ 800 - 1,200</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
