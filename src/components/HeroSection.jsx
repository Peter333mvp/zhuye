// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-5"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img src="https://test-8gpj9zlw85dcc92a-1387284530.tcloudbaseapp.com/resources/2025-11/lowcode-2396664" alt="Profile" className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white/20 shadow-2xl" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Peter Zhao
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
          机械电子工程专业 | 机器人技术爱好者
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          热衷于机器人技术、自动控制和机械设计，拥有丰富的竞赛经验和项目实践。
          致力于将理论知识转化为实际工程应用，追求技术创新和卓越品质。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <Mail size={20} className="mr-2" />
            联系我
          </a>
          
          <a href="#projects" className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
            查看项目
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Linkedin size={24} />
          </a>
          <a href="mailto:zptynl@163.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>;
}