import React, { useState } from 'react';
import { Send, Mic, Upload, MessageCircle, FileText, Volume2, Copy } from 'lucide-react';

const QueryInterface = () => {
  const [query, setQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setCurrentResponse('');

    // Simulate AI response
    setTimeout(() => {
      setCurrentResponse(`
بناءً على استفسارك حول العيوب الخفية في البيع، إليك التوضيح القانوني:

**المادة 117-124 من مجلة الالتزامات والعقود:**

العيوب الخفية هي العيوب التي:
• لا تظهر عند الفحص العادي
• تنقص من قيمة المبيع أو تجعله غير صالح للغرض المقصود
• يجب أن تكون موجودة وقت البيع

**حقوقك كمشتري:**
1. إرجاع المبيع واسترداد الثمن (دعوى الإبطال)
2. الاحتفاظ بالمبيع مع تخفيض الثمن (دعوى تخفيض الثمن)

**المهلة القانونية:**
• 30 يوم من اكتشاف العيب للمنقول
• سنة واحدة للعقار

**نصيحة عملية:**
احتفظ بجميع الوثائق والإثباتات، واستشر محامٍ إذا كانت القيمة كبيرة.

هل تريد المزيد من التفاصيل حول إجراءات الدعوى؟
      `);
      setIsLoading(false);
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setQuery(`تم رفع الملف: ${file.name} - يرجى تحليل هذا المستند قانونياً`);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setQuery('أش الحل متاع العيوب الخفية في البيع؟');
      }, 3000);
    }
  };

  const playAudio = () => {
    // Simulate TTS playback
    alert('تشغيل الصوت... (محاكاة)');
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(currentResponse);
    alert('تم نسخ الرد');
  };

  return (
    <section id="query" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            اسأل سؤالك القانوني
          </h2>
          <p className="text-lg text-gray-600">
            اكتب بالعربية أو الدارجة التونسية، أو استخدم الصوت أو رفع الملفات
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Query Input */}
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="اكتب سؤالك القانوني هنا... مثال: شنوة حقوقي في حالة العيوب الخفية؟"
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none resize-none text-lg"
                dir="auto"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  type="button"
                  onClick={toggleRecording}
                  className={`p-2 rounded-lg transition-colors ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'}`}
                >
                  <Mic className="h-5 w-5" />
                </button>
                <label className="p-2 bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 rounded-lg cursor-pointer transition-colors">
                  <Upload className="h-5 w-5" />
                  <input type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.jpg,.png,.doc,.docx" />
                </label>
              </div>
            </div>

            {/* Input Methods */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-blue-500" />
                <span>نص</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mic className="h-4 w-4 text-green-500" />
                <span>صوت (دارجة تونسية)</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-purple-500" />
                <span>مستندات (OCR)</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!query.trim() || isLoading}
              className="w-full bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>إرسال السؤال</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Response */}
        {(currentResponse || isLoading) && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>الرد القانوني</span>
              </h3>
              {currentResponse && (
                <div className="flex space-x-2">
                  <button
                    onClick={playAudio}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="استمع للرد"
                  >
                    <Volume2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={copyResponse}
                    className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                    title="نسخ الرد"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {isLoading ? (
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-red-600 border-t-transparent"></div>
                <span>جاري البحث في قاعدة البيانات القانونية...</span>
              </div>
            ) : (
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-gray-800 leading-relaxed" dir="auto">
                  {currentResponse}
                </div>
              </div>
            )}

            {currentResponse && (
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>تنبيه قانوني:</strong> هذا الرد إرشادي فقط. يُنصح بالتشاور مع محامٍ مختص للحالات المعقدة.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default QueryInterface;