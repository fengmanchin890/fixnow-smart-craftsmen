
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Clock,
  Camera,
  DollarSign,
  ArrowLeft,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceRequest = () => {
  const [requestData, setRequestData] = useState({
    category: '',
    description: '',
    location: '',
    urgency: '',
    budget: '',
    phone: '',
    preferredTime: ''
  });

  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'plumbing', name: '水電維修', icon: '🔧' },
    { id: 'ac', name: '冷氣維修', icon: '❄️' },
    { id: 'appliance', name: '家電維修', icon: '📺' },
    { id: 'carpentry', name: '木工裝潢', icon: '🔨' },
    { id: 'painting', name: '油漆粉刷', icon: '🎨' },
    { id: 'cleaning', name: '清潔服務', icon: '🧽' }
  ];

  const urgencyLevels = [
    { id: 'urgent', name: '緊急 (2小時內)', color: 'red' },
    { id: 'today', name: '今日內', color: 'orange' },
    { id: 'week', name: '一週內', color: 'blue' },
    { id: 'flexible', name: '時間彈性', color: 'green' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRequestData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('服務請求:', { ...requestData, category: selectedCategory });
    alert('您的請求已提交！我們正在為您媒合最適合的師傅，請稍候。');
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
                  <p className="text-xs text-gray-600">立即叫修</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            立即叫修服務
          </h1>
          <p className="text-xl text-gray-600">
            3步驟快速找到專業師傅，解決您的問題
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">描述問題</h3>
              <p className="text-sm text-gray-600">詳細說明您遇到的問題</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">AI智能媒合</h3>
              <p className="text-sm text-gray-600">系統自動推薦最適合的師傅</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">確認服務</h3>
              <p className="text-sm text-gray-600">師傅聯繫並安排服務時間</p>
            </CardContent>
          </Card>
        </div>

        {/* Service Request Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6" />
              服務需求表單
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection */}
              <div>
                <Label>服務類別 *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className={`cursor-pointer transition-all ${
                        selectedCategory === category.id
                          ? 'ring-2 ring-primary-500 bg-primary-50'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl mb-2">{category.icon}</div>
                        <p className="text-sm font-medium">{category.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Problem Description */}
              <div>
                <Label htmlFor="description">問題描述 *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={requestData.description}
                  onChange={handleInputChange}
                  placeholder="請詳細描述您遇到的問題，包括症狀、何時發生等..."
                  rows={4}
                  required
                />
              </div>

              {/* Location and Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="location">服務地址 *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={requestData.location}
                    onChange={handleInputChange}
                    placeholder="台北市信義區..."
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">聯絡電話 *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={requestData.phone}
                    onChange={handleInputChange}
                    placeholder="0912-345-678"
                    required
                  />
                </div>
              </div>

              {/* Urgency */}
              <div>
                <Label>緊急程度 *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {urgencyLevels.map((level) => (
                    <Badge
                      key={level.id}
                      variant={requestData.urgency === level.id ? "default" : "outline"}
                      className="cursor-pointer justify-center py-2"
                      onClick={() => setRequestData(prev => ({ ...prev, urgency: level.id }))}
                    >
                      {level.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Budget and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="budget">預算範圍</Label>
                  <Input
                    id="budget"
                    name="budget"
                    value={requestData.budget}
                    onChange={handleInputChange}
                    placeholder="$1000-2000"
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">希望時間</Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    value={requestData.preferredTime}
                    onChange={handleInputChange}
                    placeholder="平日下午、假日等"
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <Label>問題照片 (選擇性)</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">上傳問題照片幫助師傅更好理解</p>
                  <p className="text-xs text-gray-500 mt-1">支援 JPG, PNG 格式</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">AI智能媒合，3分鐘內找到師傅</span>
                </div>
                <Button type="submit" size="lg" className="bg-primary-600 hover:bg-primary-700">
                  <Zap className="mr-2 h-5 w-5" />
                  立即提交需求
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceRequest;
