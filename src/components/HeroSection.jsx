// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

export function HeroSection() {
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="https://picsum.photos/seed/avatar123/200/200.jpg" alt="个人头像" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            你好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">张三</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            机械设计制造及其自动化专业
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            热衷于机械设计、CAD制图、产品开发和技术创新，具备扎实的专业基础和实践经验
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <Download size={20} className="mr-2" />
            下载简历
          </button>
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-500 transform hover:scale-105 transition-all duration-300">
            联系我
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>;
}