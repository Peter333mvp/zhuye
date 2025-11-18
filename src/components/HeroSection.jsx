// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <img src="https://test-8gpj9zlw85dcc92a-1387284530.tcloudbaseapp.com/resources/2025-11/lowcode-2396664" alt="Profile" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white/30 shadow-2xl" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Peter Zhao
        </h1>
        
        <h2 className="text-xl md:text-2xl text-blue-100 mb-6">
          机械电子工程专业 | 机器人技术爱好者
        </h2>
        
        <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
          热衷于机器人技术、自动控制和机械设计，拥有丰富的竞赛经验和项目实践。
          致力于将理论知识转化为实际工程应用，追求技术创新和卓越品质。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
            <Mail size={20} className="mr-2" />
            联系我
          </a>
          
          <a href="#projects" className="px-8 py-3 bg-transparent text-white border-2 border-white/50 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center backdrop-blur-sm">
            查看项目
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:zptynl@163.com" className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </div>
    </section>;
}