import React, { useState } from 'react';
import { Menu, X, Scale, MessageCircle, Search, User, Bell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="bg-white shadow-lg border-b-2 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-red-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">AINS LegalHackers</h1>
              <p className="text-xs text-gray-600">المساعد القانوني الذكي</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              الرئيسية
            </a>
            <a href="#query" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              استشارة قانونية
            </a>
            <a href="#community" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              المجتمع
            </a>
            <a href="#knowledge" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              قاعدة المعرفة
            </a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-red-600 transition-colors">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              <User className="h-4 w-4" />
              <span>تسجيل الدخول</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                الرئيسية
              </a>
              <a href="#query" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                استشارة قانونية
              </a>
              <a href="#community" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                المجتمع
              </a>
              <a href="#knowledge" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                قاعدة المعرفة
              </a>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                  تسجيل الدخول
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;