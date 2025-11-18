// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('消息已发送！我会尽快回复您。');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  return <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            联系我
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            欢迎与我联系，讨论合作机会或技术交流
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">联系信息</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">邮箱</p>
                  <p className="text-gray-900">zhangsan@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">电话</p>
                  <p className="text-gray-900">+86 138 0000 0000</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">地址</p>
                  <p className="text-gray-900">上海市浦东新区</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">社交媒体</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                  <Github size={20} className="text-gray-700" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-300">
                  <Linkedin size={20} className="text-blue-600" />
                </a>
                <a href="#" className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors duration-300">
                  <MessageCircle size={20} className="text-green-600" />
                </a>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  姓名
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300" placeholder="请输入您的姓名" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300" placeholder="请输入您的邮箱" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  主题
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300" placeholder="请输入消息主题" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  消息内容
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none" placeholder="请输入您的消息内容..."></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div> : <Send size={20} className="mr-2" />}
                {isSubmitting ? '发送中...' : '发送消息'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}