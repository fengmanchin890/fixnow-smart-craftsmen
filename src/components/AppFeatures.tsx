
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Globe,
  Download,
  QrCode,
  Apple,
  Play,
  Monitor,
  TabletSmartphone
} from 'lucide-react';

const AppFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            多平台體驗
          </h2>
          <p className="text-xl text-gray-600">
            網頁版與行動應用程式，隨時隨地使用FixNow服務
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Web Version */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                網頁版
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-blue-600" />
                FixNow 網站平台
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <Monitor className="h-8 w-8 text-gray-600 mb-2" />
                  <h4 className="font-semibold mb-2">桌面完整體驗</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 大螢幕最佳化介面</li>
                    <li>• 完整工匠管理後台</li>
                    <li>• 詳細數據分析</li>
                    <li>• 多視窗操作</li>
                  </ul>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Globe className="mr-2 h-4 w-4" />
                  立即使用網頁版
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Mobile App Version */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-100 text-green-800">
                行動應用
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-green-600" />
                FixNow 行動App
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <TabletSmartphone className="h-8 w-8 text-gray-600 mb-2" />
                  <h4 className="font-semibold mb-2">行動優先設計</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• GPS定位服務</li>
                    <li>• 即時推播通知</li>
                    <li>• 相機整合診斷</li>
                    <li>• 離線功能支援</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Apple className="h-4 w-4" />
                    iOS App
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Android
                  </Button>
                </div>

                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-3">掃描QR Code下載</p>
                  <div className="flex justify-center">
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <QrCode className="h-16 w-16 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Comparison */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">平台功能比較</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">功能</th>
                      <th className="text-center py-3 px-4">
                        <Globe className="h-5 w-5 mx-auto text-blue-600" />
                        <span className="block text-sm mt-1">網頁版</span>
                      </th>
                      <th className="text-center py-3 px-4">
                        <Smartphone className="h-5 w-5 mx-auto text-green-600" />
                        <span className="block text-sm mt-1">行動App</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4">AI智能媒合</td>
                      <td className="text-center py-3 px-4">✅</td>
                      <td className="text-center py-3 px-4">✅</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">視覺診斷</td>
                      <td className="text-center py-3 px-4">✅</td>
                      <td className="text-center py-3 px-4">✅ 增強版</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">IoT設備整合</td>
                      <td className="text-center py-3 px-4">✅</td>
                      <td className="text-center py-3 px-4">✅</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">即時通訊</td>
                      <td className="text-center py-3 px-4">✅</td>
                      <td className="text-center py-3 px-4">✅ 推播</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">GPS定位</td>
                      <td className="text-center py-3 px-4">⚠️ 有限</td>
                      <td className="text-center py-3 px-4">✅ 精準</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">離線使用</td>
                      <td className="text-center py-3 px-4">❌</td>
                      <td className="text-center py-3 px-4">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
