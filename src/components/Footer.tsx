
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">FixNow</h3>
                <p className="text-sm text-gray-400">工匠即時媒合平台</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              運用最先進的 AI、區塊鏈、IoT 技術，為您提供最專業、最快速的維修服務體驗。讓科技改變生活，讓服務更有溫度。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LINE</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">服務項目</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">水電維修</a></li>
              <li><a href="#" className="hover:text-white transition-colors">家電維修</a></li>
              <li><a href="#" className="hover:text-white transition-colors">冷氣保養</a></li>
              <li><a href="#" className="hover:text-white transition-colors">裝潢木工</a></li>
              <li><a href="#" className="hover:text-white transition-colors">清潔服務</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">關於我們</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">公司介紹</a></li>
              <li><a href="#" className="hover:text-white transition-colors">技術團隊</a></li>
              <li><a href="#" className="hover:text-white transition-colors">合作夥伴</a></li>
              <li><a href="#" className="hover:text-white transition-colors">媒體報導</a></li>
              <li><a href="#" className="hover:text-white transition-colors">聯絡我們</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FixNow. All rights reserved. | 智慧化工匠即時媒合平台
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">隱私政策</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">服務條款</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie 政策</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
