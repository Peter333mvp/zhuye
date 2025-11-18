// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [{
    id: 1,
    title: '高级全栈开发工程师',
    company: '科技创新有限公司',
    location: '北京',
    period: '2022年3月 - 至今',
    description: ['负责公司核心产品的架构设计和开发', '领导5人开发团队，推动技术栈升级', '优化系统性能，提升响应速度40%', '建立CI/CD流程，提高开发效率'],
    technologies: ['React', 'Node.js', 'AWS', 'Docker']
  }, {
    id: 2,
    title: '全栈开发工程师',
    company: '互联网科技公司',
    location: '上海',
    period: '2020年1月 - 2022年2月',
    description: ['参与多个Web应用的开发和维护', '实现RESTful API和GraphQL接口', '负责前端性能优化和用户体验提升', '参与代码审查和技术分享'],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis']
  }, {
    id: 3,
    title: '前端开发工程师',
    company: '初创科技公司',
    location: '深圳',
    period: '2018年7月 - 2019年12月',
    description: ['开发响应式Web应用', '实现组件库和设计系统', '与UI/UX团队紧密合作', '参与敏捷开发流程'],
    technologies: ['React', 'TypeScript', 'Sass', 'Webpack']
  }];
  return <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            工作经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我的职业发展历程和主要成就
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-2 text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {experience.period}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center mb-4 text-gray-600">
                      <Briefcase size={16} className="mr-1" />
                      <span className="font-medium">{experience.company}</span>
                      <MapPin size={16} className="ml-4 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                    
                    <ul className="text-gray-600 mb-4 space-y-1">
                      {experience.description.map((item, itemIndex) => <li key={itemIndex} className="text-sm">
                          • {item}
                        </li>)}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map(tech => <span key={tech} className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                          {tech}
                        </span>)}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}