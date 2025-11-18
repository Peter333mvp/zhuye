// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export function ContactSection() {
  return <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            联系方式
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            期待与您的合作，欢迎随时联系我
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              取得联系
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail size={20} className="mr-3 text-blue-600" />
                <span>zhangsan@example.com</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Phone size={20} className="mr-3 text-blue-600" />
                <span>+86 138 0000 0000</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin size={20} className="mr-3 text-blue-600" />
                <span>北京市朝阳区</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                社交媒体
              </h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors duration-200">
                  <Github size={24} className="text-gray-700 hover:text-blue-600" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors duration-200">
                  <Linkedin size={24} className="text-gray-700 hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              发送消息
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200" placeholder="您的姓名" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱
                </label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200" placeholder="您的邮箱" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  消息
                </label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none" placeholder="您想说的话..." />
              </div>
              
              <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                <Send size={20} className="mr-2" />
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}