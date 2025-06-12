import React from 'react';
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const links = {
    platform: [
      { name: 'الرئيسية', href: '#home' },
      { name: 'استشارة قانونية', href: '#query' },
      { name: 'المجتمع', href: '#community' },
      { name: 'قاعدة المعرفة', href: '#knowledge' }
    ],
    legal: [
      { name: 'سياسة الخصوصية', href: '#privacy' },
      { name: 'شروط الاستخدام', href: '#terms' },
      { name: 'إخلاء المسؤولية', href: '#disclaimer' },
      { name: 'حقوق الطبع والنشر', href: '#copyright' }
    ],
    support: [
      { name: 'مركز المساعدة', href: '#help' },
      { name: 'اتصل بنا', href: '#contact' },
      { name: 'الأسئلة الشائعة', href: '#faq' },
      { name: 'التقارير والبحوث', href: '#reports' }
    ]
  };

  const contacts = [
    { icon: Mail, text: 'info@ainslegal.tn', href: 'mailto:info@ainslegal.tn' },
    { icon: Phone, text: '+216 70 123 456', href: 'tel:+21670123456' },
    { icon: MapPin, text: 'تونس، الجمهورية التونسية' }
  ];

  const socials = [
    { icon: Facebook, href: '#', label: 'فيسبوك' },
    { icon: Twitter, href: '#', label: 'تويتر' },
    { icon: Linkedin, href: '#', label: 'لينكدإن' },
    { icon: Github, href: '#', label: 'جيتهاب' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <h3 className="text-xl font-bold">AINS LegalHackers</h3>
                <p className="text-sm text-gray-400">المساعد القانوني الذكي</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              نظام ذكي لتقديم المساعدة القانونية بالدارجة التونسية، يهدف لتسهيل الوصول للعدالة لجميع المواطنين.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">المنصة</h4>
            <ul className="space-y-2">
              {links.platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">قانوني</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <contact.icon className="h-5 w-5 text-red-500 flex-shrink-0" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-red-400 transition-colors"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AINS LegalHackers. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>دقة الاستدلال: 81%</span>
              <span>متوسط الرد: 7.2s</span>
              <span>رضا المستخدمين: 92%</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            <strong>إخلاء مسؤولية:</strong> المعلومات المقدمة عبر هذه المنصة هي للأغراض الإرشادية فقط ولا تشكل استشارة قانونية رسمية. 
            يُنصح بالتشاور مع محامٍ مختص للحصول على مشورة قانونية شخصية. 
            AINS LegalHackers غير مسؤول عن أي قرارات تُتخذ بناءً على المعلومات المقدمة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;