import React, { useState } from 'react';
import { BarChart, TrendingUp, Clock, CheckCircle, AlertCircle, MessageSquare, Users, FileText } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      icon: MessageSquare,
      title: 'إجمالي الاستشارات',
      value: '1,247',
      change: '+12%',
      changeType: 'increase'
    },
    {
      icon: Clock,
      title: 'متوسط وقت الرد',
      value: '7.2s',
      change: '-23%',
      changeType: 'decrease'
    },
    {
      icon: CheckCircle,
      title: 'معدل الرضا',
      value: '92%',
      change: '+5%',
      changeType: 'increase'
    },
    {
      icon: Users,
      title: 'المستخدمين النشطين',
      value: '456',
      change: '+18%',
      changeType: 'increase'
    }
  ];

  const recentQueries = [
    {
      id: 1,
      question: 'حقوق العامل في حالة الفصل التعسفي',
      status: 'مكتملة',
      time: '2 دقائق',
      channel: 'SMS',
      governorate: 'تونس'
    },
    {
      id: 2,
      question: 'إجراءات الطلاق بالتراضي',
      status: 'قيد المعالجة',
      time: '5 دقائق',
      channel: 'ويب',
      governorate: 'صفاقس'
    },
    {
      id: 3,
      question: 'مشكل في العيوب الخفية',
      status: 'مكتملة',
      time: '3 دقائق',
      channel: 'صوت',
      governorate: 'سوسة'
    }
  ];

  const governorateStats = [
    { name: 'تونس', queries: 245, percentage: 28 },
    { name: 'صفاقس', queries: 189, percentage: 22 },
    { name: 'سوسة', queries: 156, percentage: 18 },
    { name: 'المنستير', queries: 134, percentage: 15 },
    { name: 'أخرى', queries: 146, percentage: 17 }
  ];

  const TabButton = ({ id, label, isActive, onClick }: any) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
        isActive
          ? 'bg-red-600 text-white'
          : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            لوحة تحكم النظام
          </h2>
          <p className="text-lg text-gray-600">
            مراقبة الأداء والإحصائيات في الوقت الفعلي
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <TabButton
              id="overview"
              label="نظرة عامة"
              isActive={activeTab === 'overview'}
              onClick={setActiveTab}
            />
            <TabButton
              id="queries"
              label="الاستشارات"
              isActive={activeTab === 'queries'}
              onClick={setActiveTab}
            />
            <TabButton
              id="community"
              label="المجتمع"
              isActive={activeTab === 'community'}
              onClick={setActiveTab}
            />
            <TabButton
              id="analytics"
              label="التحليلات"
              isActive={activeTab === 'analytics'}
              onClick={setActiveTab}
            />
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-red-100 rounded-lg p-3">
                      <stat.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div className={`flex items-center space-x-1 text-sm font-medium ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendingUp className={`h-4 w-4 ${stat.changeType === 'decrease' ? 'rotate-180' : ''}`} />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">الاستشارات الأخيرة</h3>
                <div className="space-y-4">
                  {recentQueries.map((query) => (
                    <div key={query.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 mb-1">{query.question}</div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{query.channel}</span>
                          <span>{query.governorate}</span>
                          <span>{query.time}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        query.status === 'مكتملة'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {query.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">التوزيع الجغرافي</h3>
                <div className="space-y-4">
                  {governorateStats.map((gov, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="font-medium text-gray-900">{gov.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-600 h-2 rounded-full"
                            style={{ width: `${gov.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-left">{gov.queries}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <BarChart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">التحليلات المتقدمة</h3>
              <p className="text-gray-600">
                تحليل مفصل للأداء والاتجاهات - قريباً
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;