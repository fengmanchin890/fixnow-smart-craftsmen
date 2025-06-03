
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Star,
  Upload,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CraftsmanRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    specialty: '',
    experience: '',
    description: '',
    certifications: ''
  });

  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const specialties = [
    '水電維修', '冷氣維修', '家電維修', '木工裝潢',
    '油漆粉刷', '防水工程', '鐵工焊接', '玻璃安裝',
    '管線疏通', '門窗維修', '地板施工', '磁磚工程'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev =>
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('師傅註冊資料:', { ...formData, specialties: selectedSpecialties });
    alert('註冊申請已提交！我們會在3個工作天內審核並聯繫您。');
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
                  <p className="text-xs text-gray-600">師傅註冊</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            加入FixNow師傅團隊
          </h1>
          <p className="text-xl text-gray-600">
            成為認證工匠，接收更多工作機會，提升收入
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">提升知名度</h3>
              <p className="text-sm text-gray-600">透過平台評價系統建立專業聲譽</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Wrench className="h-10 w-10 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">更多工作</h3>
              <p className="text-sm text-gray-600">AI智能媒合，精準推送適合案件</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">安全保障</h3>
              <p className="text-sm text-gray-600">平台保障交易安全，按時收款</p>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-6 w-6" />
              師傅資料註冊
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">姓名 *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="請輸入真實姓名"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">聯絡電話 *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0912-345-678"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">電子信箱 *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="experience">工作經驗 (年)</Label>
                  <Input
                    id="experience"
                    name="experience"
                    type="number"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">服務地區 *</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="台北市信義區"
                  required
                />
              </div>

              {/* Specialties */}
              <div>
                <Label>專業技能 * (可複選)</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
                      className="cursor-pointer justify-center py-2"
                      onClick={() => toggleSpecialty(specialty)}
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="description">自我介紹</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="請簡述您的專業背景、服務特色等..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="certifications">相關證照</Label>
                <Textarea
                  id="certifications"
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleInputChange}
                  placeholder="請列出相關技術證照、執照等..."
                  rows={3}
                />
              </div>

              {/* File Upload Section */}
              <div>
                <Label>證照文件上傳</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">點擊上傳或拖拽檔案至此處</p>
                  <p className="text-xs text-gray-500 mt-1">支援 JPG, PNG, PDF 格式</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t">
                <p className="text-sm text-gray-600">
                  提交後我們會在3個工作天內審核
                </p>
                <Button type="submit" size="lg" className="bg-primary-600 hover:bg-primary-700">
                  提交註冊申請
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CraftsmanRegister;
