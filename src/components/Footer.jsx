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
  return <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* 主要内容区域 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Code size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Peter Zhao</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              专注于机械电子工程与人工智能技术的交叉领域，致力于创新设计与技术突破。
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 group" title={social.label}>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>)}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">快速导航</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => <a key={index} href={link.href} className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  {link.name}
                </a>)}
            </nav>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">联系方式</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => <a key={index} href={info.href} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                  <div className="w-8 h-8 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-600 transition-colors duration-300">
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
            <h4 className="text-lg font-semibold text-white mb-4">更多操作</h4>
            <div className="space-y-3">
              <button onClick={scrollToTop} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                <ArrowUp size={16} />
                <span>返回顶部</span>
              </button>
              <a href="mailto:zptynl@163.com" className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <Mail size={16} />
                <span>发送邮件</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权信息 */}
      <div className="relative z-10 border-t border-gray-700">
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