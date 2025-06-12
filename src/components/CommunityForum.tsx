import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle, Award, CheckCircle, Clock, User } from 'lucide-react';

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل', count: 245 },
    { id: 'labor', name: 'قانون العمل', count: 89 },
    { id: 'property', name: 'العقارات', count: 76 },
    { id: 'family', name: 'الأحوال الشخصية', count: 52 },
    { id: 'commercial', name: 'القانون التجاري', count: 28 },
  ];

  const questions = [
    {
      id: 1,
      title: 'حقوق العامل في حالة الفصل التعسفي',
      content: 'السلام عليكم، اتفصلت من الخدمة بلا سبب واضح بعد 3 سنين خدمة. شنوة حقوقي؟',
      author: 'أحمد المنصوري',
      time: 'منذ ساعتين',
      category: 'قانون العمل',
      votes: 15,
      answers: 3,
      isAnswered: true,
      expert: false,
      governorate: 'تونس'
    },
    {
      id: 2,
      title: 'مشكل في العيوب الخفية - سيارة مستعملة',
      content: 'اشتريت سيارة من عند تاجر، بعد أسبوع اكتشفت عيوب في المحرك. وين نمشي؟',
      author: 'فاطمة الزهراء',
      time: 'منذ 4 ساعات',
      category: 'حماية المستهلك',
      votes: 8,
      answers: 2,
      isAnswered: false,
      expert: false,
      governorate: 'صفاقس'
    },
    {
      id: 3,
      title: 'إجراءات الطلاق بالتراضي',
      content: 'نحب نعرف الإجراءات الكاملة للطلاق بالتراضي والوثائق المطلوبة.',
      author: 'محمد علي',
      time: 'منذ يوم',
      category: 'الأحوال الشخصية',
      votes: 22,
      answers: 5,
      isAnswered: true,
      expert: true,
      governorate: 'سوسة'
    }
  ];

  const expertAnswers = [
    {
      id: 1,
      questionId: 1,
      author: 'د. سمير الفقيه',
      role: 'محامي - نقابة تونس',
      content: `بناءً على مجلة الشغل التونسية:

**حقوقك في حالة الفصل التعسفي:**
1. **تعويض الفصل التعسفي**: شهر أجر لكل سنة خدمة (3 أشهر في حالتك)
2. **تعويض الإشعار**: شهر أجر (حسب أقدميتك)
3. **باقي الإجازات**: المستحقة وغير المأخوذة
4. **شهادة العمل**: إجبارية

**الإجراءات:**
- رفع شكوى لدى مفتش الشغل
- إن لم تنجح المصالحة، رفع قضية لدى المحكمة الابتدائية

**المهلة:** 68 يوم من تاريخ الفصل

**نصيحة:** احتفظ بجميع الوثائق وشهادات الشهود.`,
      time: 'منذ ساعة',
      votes: 18,
      isVerified: true
    }
  ];

  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            منتدى المجتمع القانوني
          </h2>
          <p className="text-lg text-gray-600">
            اسأل الخبراء واحصل على إجابات موثقة من محامين ومختصين
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">التصنيفات</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-red-100 text-red-700 border border-red-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{category.count}</span>
                      <span>{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">خبراء متاحون</span>
                </div>
                <p className="text-sm text-green-700">
                  47 محامي و23 خبير قانوني متاحون للإجابة
                </p>
              </div>
            </div>
          </div>

          {/* Questions Feed */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {questions.map((question) => (
                <div key={question.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                          {question.category}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {question.governorate}
                        </span>
                        {question.isAnswered && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {question.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed" dir="auto">
                        {question.content}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{question.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{question.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{question.votes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{question.answers} إجابات</span>
                      </div>
                    </div>
                  </div>

                  {/* Expert Answer Preview */}
                  {question.id === 1 && (
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="bg-green-100 rounded-full p-1">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="font-semibold text-green-800">إجابة خبير موثقة</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">د. سمير الفقيه</div>
                            <div className="text-sm text-gray-600">محامي - نقابة تونس</div>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed" dir="auto">
                          {expertAnswers[0].content.substring(0, 200)}...
                        </p>
                        <button className="mt-2 text-green-600 text-sm font-medium hover:text-green-700">
                          قراءة الإجابة كاملة ←
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Ask Question Button */}
            <div className="mt-8 text-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                اطرح سؤالك القانوني
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForum;