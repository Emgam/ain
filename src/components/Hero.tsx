import React from 'react';
import { MessageSquare, Mic, FileText, Smartphone, Clock, Users } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Clock, value: '7.2s', label: 'متوسط وقت الرد عبر SMS' },
    { icon: Users, value: '92%', label: 'رضا المستخدمين في المناطق الريفية' },
    { icon: FileText, value: '81%', label: 'دقة الاستدلال القانوني' },
  ];

  const channels = [
    { icon: MessageSquare, title: 'رسائل نصية', desc: 'استشارات قانونية عبر SMS' },
    { icon: Mic, title: 'الصوت', desc: 'تحدث بالدارجة التونسية' },
    { icon: FileText, title: 'المستندات', desc: 'تحليل الوثائق بتقنية OCR' },
    { icon: Smartphone, title: 'الويب', desc: 'واجهة تفاعلية متطورة' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            المساعد القانوني الذكي
            <span className="block text-red-600 mt-2">للشعب التونسي</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            نظام ذكي يتحدث الدارجة التونسية ويقدم المساعدة القانونية عبر النص والصوت والرسائل النصية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              ابدأ استشارتك المجانية
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200">
              شاهد كيف يعمل
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            اختر الطريقة المناسبة لك
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-200 cursor-pointer group">
                <div className="text-center">
                  <div className="bg-red-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <channel.icon className="h-8 w-8 text-red-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 text-sm">{channel.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            احصل على المساعدة القانونية الآن
          </h2>
          <p className="text-xl mb-6 opacity-90">
            24/7 - مجاني - بالدارجة التونسية
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
            ابدأ الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;