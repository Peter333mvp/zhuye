// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [{
    title: '本科',
    degree: '机械电子工程',
    school: '上海大学（SHU）',
    period: '2022.09 - 2026.06',
    location: '上海',
    description: '主修机械电子工程专业，深入学习机械设计、电子技术、控制理论等核心课程，参与多个实践项目。',
    achievements: ['GPA: 3.7/4.0', '优秀学生奖学金', '机械设计竞赛二等奖']
  }, {
    title: '高中',
    degree: '理科',
    school: '上海市向明中学',
    period: '2019.09 - 2022.06',
    location: '上海',
    description: '理科重点班学生，系统学习数理化生等基础学科，培养扎实的科学基础和逻辑思维能力。',
    achievements: ['高考成绩优异', '数学竞赛三等奖', '优秀毕业生']
  }];
  return <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            教育经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我的学术背景和教育历程
          </p>
        </div>

        <div className="relative">
          {/* 时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* 时间线节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg z-10" />

                {/* 内容卡片 */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center mb-3 justify-end">
                      <GraduationCap className="text-indigo-600 mr-2" size={20} />
                      <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                        {exp.title}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.degree}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-2 justify-end">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{exp.school}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4 justify-end">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-end">
                      {exp.achievements.map((achievement, idx) => <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-800">
                          <Award size={12} className="mr-1" />
                          {achievement}
                        </span>)}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}