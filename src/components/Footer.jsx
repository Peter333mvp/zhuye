// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: <Github size={20} />,
    href: 'https://github.com',
    label: 'GitHub'
  }, {
    icon: <Linkedin size={20} />,
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  }, {
    icon: <Mail size={20} />,
    href: 'mailto:example@email.com',
    label: 'Email'
  }];
  const quickLinks = [{
    href: '#about',
    label: '关于我'
  }, {
    href: '#skills',
    label: '技能点'
  }, {
    href: '#projects',
    label: '项目'
  }, {
    href: '#experience',
    label: '经历'
  }, {
    href: '#contact',
    label: '联系'
  }];
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              张三
            </h3>
            <p className="text-gray-400 mb-6">
              全栈开发工程师，专注于创造优雅的数字体验。
            </p>
            
            {/* 社交链接 */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300" aria-label={link.label}>
                  {link.icon}
                </a>)}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* 服务内容 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">服务内容</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  前端开发
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  后端开发
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  UI/UX 设计
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  技术咨询
                </a>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:example@email.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  example@email.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-400">可接受项目</span>
              </div>
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* 版权信息 */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} 张三. 保留所有权利.
            </div>

            {/* 额外链接 */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                服务条款
              </a>
              <button onClick={scrollToTop} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <ArrowUp size={16} />
                回到顶部
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 装饰元素 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>;
}