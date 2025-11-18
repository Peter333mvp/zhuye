// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [{
    id: 1,
    title: '机械设计实习生',
    company: '某某机械制造有限公司',
    location: '上海市',
    period: '2023年7月 - 2023年9月',
    type: '实习',
    description: '参与公司新产品的机械结构设计，使用SolidWorks进行3D建模和工程图绘制。协助完成产品原型制作和测试工作。',
    achievements: ['完成3个零部件的3D建模和工程图绘制', '参与产品装配工艺优化，提高装配效率15%', '协助编写技术文档和用户手册']
  }, {
    id: 2,
    title: '机械工程助理',
    company: '某某科技有限公司',
    location: '北京市',
    period: '2022年7月 - 2022年8月',
    type: '实习',
    description: '负责协助工程师进行设备维护和技术支持，参与生产线自动化改造项目。',
    achievements: ['协助完成2条生产线的自动化改造', '参与设备故障诊断和维修工作', '整理技术资料，建立设备档案']
  }];
  return <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            实习经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我的实习经历和专业成长
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => <div key={experience.id} className="relative">
              {/* 时间线 */}
              {index < experiences.length - 1 && <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-300"></div>}
              
              <div className="relative flex items-start mb-12">
                {/* 圆点 */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Briefcase size={24} className="text-white" />
                </div>
                
                {/* 内容 */}
                <div className="ml-6 flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full mb-2">
                        {experience.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">主要成就：</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}