// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 个人信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4">张三</h3>
            <p className="text-gray-400 mb-4">
              机械设计制造及其自动化专业学生，热衷于机械设计、CAD制图和产品开发。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  首页
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                  技能点
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  项目展示
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
                  实习经历
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  联系我
                </a>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4">联系信息</h3>
            <div className="space-y-2 text-gray-400">
              <p>邮箱: zhangsan@example.com</p>
              <p>电话: +86 138 0000 0000</p>
              <p>地址: 上海市浦东新区</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 张三. 保留所有权利.
          </p>
          <button onClick={scrollToTop} className="mt-4 sm:mt-0 flex items-center text-gray-400 hover:text-white transition-colors duration-300">
            <ArrowUp size={16} className="mr-1" />
            返回顶部
          </button>
        </div>
      </div>
    </footer>;
}