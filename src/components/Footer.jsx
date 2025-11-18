// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const contactInfo = [{
    icon: <Mail size={20} />,
    label: '邮箱',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  }, {
    icon: <Phone size={20} />,
    label: '电话',
    value: '+86 123 4567 8900',
    href: 'tel:+8612345678900'
  }, {
    icon: <MapPin size={20} />,
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
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 联系信息 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              联系方式
            </h3>
            <p className="text-gray-300 mb-6">
              欢迎与我联系，期待与您的交流合作
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => <div key={index} className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3 text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    <a href={info.href} className="text-base font-medium text-white hover:text-indigo-400 transition-colors duration-300">
                      {info.value}
                    </a>
                  </div>
                </div>)}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              快速链接
            </h3>
            <nav className="space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors duration-300">
                首页
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors duration-300">
                专业技能
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-300">
                我的项目
              </a>
              <a href="#experience" className="block text-gray-300 hover:text-white transition-colors duration-300">
                经历与成就
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-300">
                联系方式
              </a>
            </nav>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              社交媒体
            </h3>
            <p className="text-gray-300 mb-6">
              在社交媒体上关注我，了解更多动态
            </p>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 group">
                  <div className="text-gray-300 group-hover:text-white">
                    {social.icon}
                  </div>
                </a>)}
            </div>
            
            {/* 返回顶部按钮 */}
            <button onClick={scrollToTop} className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              <ArrowUp size={16} />
              <span>返回顶部</span>
            </button>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>;
}