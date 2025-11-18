// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [{
    title: '本科',
    degree: '机械电子工程专业',
    school: '上海大学（SHU）',
    location: '上海',
    period: '2022.09 - 2026.06',
    type: 'education',
    description: '主修机械电子工程，专注于机械设计、电子技术和自动化控制的学习与研究。',
    achievements: ['GPA: 3.7/4.0', '优秀学生奖学金', '机械设计竞赛二等奖']
  }, {
    title: '机械设计实习生',
    company: '上海智能制造有限公司',
    location: '上海',
    period: '2024.07 - 2024.09',
    type: 'work',
    description: '参与自动化设备的设计与优化，负责机械结构建模和工程图纸绘制。',
    achievements: ['完成3个自动化项目设计', '优化设备结构，降低成本15%', '获得优秀实习生称号']
  }, {
    title: '校园项目组长',
    company: '机器人创新实验室',
    location: '上海大学（SHU）',
    period: '2023.10 - 2024.05',
    type: 'project',
    description: '带领团队完成智能机器人项目，负责机械结构设计和系统集成。',
    achievements: ['获得校级创新大赛一等奖', '申请专利1项', '发表论文1篇']
  }];
  const getExperienceIcon = type => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'work':
        return Award;
      case 'project':
        return Award;
      default:
        return GraduationCap;
    }
  };
  const getExperienceColor = type => {
    switch (type) {
      case 'education':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          border: 'border-blue-300',
          iconBg: 'bg-blue-500'
        };
      case 'work':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          border: 'border-green-300',
          iconBg: 'bg-green-500'
        };
      case 'project':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-800',
          border: 'border-purple-300',
          iconBg: 'bg-purple-500'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-300',
          iconBg: 'bg-gray-500'
        };
    }
  };
  return <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            教育经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我的学术背景和实习经历，展现了在机械电子工程领域的专业成长
          </p>
        </div>

        <div className="relative">
          {/* 时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full" />

          {experiences.map((exp, index) => {
          const Icon = getExperienceIcon(exp.type);
          const colors = getExperienceColor(exp.type);
          const isLeft = index % 2 === 0;
          return <div key={index} className={`relative flex items-center mb-12 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                {/* 时间线节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-400 rounded-full z-10 shadow-lg">
                  <div className="absolute inset-1 bg-blue-400 rounded-full" />
                </div>

                {/* 内容卡片 */}
                <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100">
                    <div className={`absolute top-0 ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} transform -translate-y-1/2 w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>

                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} mb-3 ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                      {exp.type === 'education' ? '教育' : exp.type === 'work' ? '工作' : '项目'}
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    
                    {exp.type === 'education' ? <div className={`text-lg font-semibold ${colors.text} mb-1`}>
                        {exp.degree}
                      </div> : <div className={`text-lg font-semibold ${colors.text} mb-1`}>
                        {exp.company}
                      </div>}
                    
                    <div className={`text-sm ${colors.text} font-medium mb-2`}>
                      {exp.school || exp.location}
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* 统计信息 */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <GraduationCap size={36} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">3.7/4.0</div>
            <div className="text-gray-600">GPA成绩</div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award size={36} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">5+</div>
            <div className="text-gray-600">获奖荣誉</div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MapPin size={36} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">上海</div>
            <div className="text-gray-600">学习地点</div>
          </div>
        </div>
      </div>
    </section>;
}