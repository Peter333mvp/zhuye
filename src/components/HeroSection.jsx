// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* 头像 */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="个人头像" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
          </div>

          {/* 标题和描述 */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              你好，我是
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                张三
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              全栈开发工程师 | UI/UX 设计师
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              热衷于创造优雅的数字体验，专注于前端开发和用户界面设计。
              拥有5年+的开发经验，擅长React、Vue、Node.js等技术栈。
            </p>
          </div>

          {/* 社交链接 */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:example@email.com" className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg">
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>

          {/* CTA按钮 */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-xl font-medium">
              联系我
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl font-medium">
              <Download size={20} />
              下载简历
            </button>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('skills')} className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors">
            <span className="text-sm mb-2">了解更多</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>;
}