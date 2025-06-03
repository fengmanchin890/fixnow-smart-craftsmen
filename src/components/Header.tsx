
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FixNow</h1>
              <p className="text-xs text-gray-600">工匠即時媒合平台</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">核心功能</a>
            <a href="#technology" className="text-gray-700 hover:text-primary-600 transition-colors">技術特色</a>
            <Link to="/experience" className="text-gray-700 hover:text-primary-600 transition-colors">立即體驗</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/craftsman-register">
              <Button variant="outline" className="hidden sm:flex">
                師傅註冊
              </Button>
            </Link>
            <Link to="/service-request">
              <Button className="bg-primary-600 hover:bg-primary-700">
                立即叫修
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
