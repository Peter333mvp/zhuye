// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="mb-8">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="Profile" className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white/20 shadow-2xl" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                张三
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-200 mb-6">
                全栈开发工程师
              </p>
              
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                热衷于创建优雅的解决方案，专注于现代Web技术栈，拥有5年以上的开发经验。
                擅长React、Node.js、云原生架构设计。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                  联系我
                </button>
                
                <button className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg flex items-center justify-center gap-2">
                  <Download size={20} />
                  下载简历
                </button>
              </div>
              
              <div className="flex justify-center space-x-6 mb-12">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-300">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-300">
                  <Linkedin size={28} />
                </a>
                <a href="mailto:example@email.com" className="text-white hover:text-blue-200 transition-colors duration-300">
                  <Mail size={28} />
                </a>
              </div>
              
              <button onClick={() => scrollToSection('about')} className="animate-bounce text-white hover:text-blue-200 transition-colors duration-300">
                <ArrowDown size={32} />
              </button>
            </div>
          </div>
        </section>;
}