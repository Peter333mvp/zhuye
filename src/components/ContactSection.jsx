// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
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
    setSubmitStatus('');

    // 模拟提交过程
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // 3秒后清除状态
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1500);
  };
  const contactInfo = [{
    icon: <Mail size={20} />,
    label: '邮箱',
    value: 'example@email.com',
    href: 'mailto:example@email.com'
  }, {
    icon: <Phone size={20} />,
    label: '电话',
    value: '+86 138 0000 0000',
    href: 'tel:+8613800000000'
  }, {
    icon: <MapPin size={20} />,
    label: '地址',
    value: '北京市朝阳区',
    href: '#'
  }];
  const socialLinks = [{
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:bg-gray-900'
  }, {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:bg-blue-600'
  }, {
    icon: <Twitter size={20} />,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:bg-sky-500'
  }, {
    icon: <MessageCircle size={20} />,
    label: '微信',
    href: '#',
    color: 'hover:bg-green-500'
  }];
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            联系我
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            有项目想法或合作机会？欢迎通过以下方式联系我，期待与您的交流
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                联系信息
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => <a key={index} href={info.href} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="text-gray-900 font-medium">{info.value}</div>
                    </div>
                  </a>)}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                社交媒体
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${social.color} hover:text-white group`}>
                    <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center">
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>)}
              </div>
            </div>

            {/* 额外信息 */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                响应时间
              </h4>
              <p className="text-gray-700 mb-3">
                我通常会在24小时内回复您的消息。如果是紧急事项，请直接通过电话联系我。
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>当前在线</span>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              发送消息
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="您的姓名" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱 *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="您的邮箱" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  主题 *
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="消息主题" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  消息 *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="请输入您的消息..."></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105'}`}>
                {isSubmitting ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> 发送中...</> : <><Send size={20} /> 发送消息</>}
              </button>
            </form>

            {/* 提交状态 */}
            {submitStatus === 'success' && <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">消息发送成功！</span>
                </div>
                <p className="text-sm mt-1">我会尽快回复您的消息。</p>
              </div>}
          </div>
        </div>
      </div>
    </section>;
}