// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';

export function ContactSection() {
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
  return <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            联系方式
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            欢迎与我联系，期待与您的交流合作
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                联系信息
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 text-indigo-600">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <a href={info.href} className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-300">
                        {info.value}
                      </a>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* 社交媒体 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                社交媒体
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-300 group">
                    <div className="text-gray-600 group-hover:text-indigo-600">
                      {social.icon}
                    </div>
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}