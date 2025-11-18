// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp, Code, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const contactInfo = [{
    icon: <Mail size={18} />,
    label: '邮箱',
    value: 'zptynl@163.com',
    href: 'mailto:zptynl@163.com'
  }, {
    icon: <Phone size={18} />,
    label: '电话',
    value: '（+86）18391796623',
    href: 'tel:+8618391796623'
  }, {
    icon: <MapPin size={18} />,
    label: '地址',
    value: '上海市宝山区上海大学',
    href: '#'
  }];
  const socialLinks = [{
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/yourusername'
  }, {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername'
  }, {
    icon: <Twitter size={20} />,
    label: 'Twitter',
    href: 'https://twitter.com/yourusername'
  }];
  const quickLinks = [{
    name: '首页',
    href: '#home'
  }, {
    name: '专业技能',
    href: '#skills'
  }, {
    name: '我的项目',
    href: '#projects'
  }, {
    name: '经历与成就',
    href: '#experience'
  }];
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
      </div>
      
      {/* 主要内容区域 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Peter Zhao</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              专注于机械电子工程与人工智能技术的交叉领域，致力于创新设计与技术突破。
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 group transform hover:scale-110" title={social.label}>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>)}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">快速导航</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => <a key={index} href={link.href} className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  {link.name}
                </a>)}
            </nav>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">联系方式</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => <a key={index} href={info.href} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                  <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 group-hover:bg-indigo-600 transition-colors duration-300">
                    <div className="text-indigo-400 group-hover:text-white transition-colors duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                </a>)}
            </div>
          </div>

          {/* 操作区域 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">更多操作</h4>
            <div className="space-y-3">
              <button onClick={scrollToTop} className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <ArrowUp size={16} />
                <span>返回顶部</span>
              </button>
              <a href="mailto:zptynl@163.com" className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl hover:bg-gray-700 transition-all duration-300">
                <Mail size={16} />
                <span>发送邮件</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权信息 */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Peter Zhao. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}