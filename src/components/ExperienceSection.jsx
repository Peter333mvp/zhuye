// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [{
    title: '本科学习',
    organization: '上海大学（SHU）',
    period: '2022.09 - 2026.06',
    location: '上海',
    type: 'education',
    description: '主修机械电子工程，系统学习机械设计、电子技术、控制理论等专业知识，培养工程实践能力和创新思维。',
    achievements: ['GPA: 3.7/4.0', '获得校级奖学金', '参与多个创新项目']
  }, {
    title: '机械设计实习',
    organization: '精密机械有限公司',
    period: '2024.07 - 2024.09',
    location: '上海',
    type: 'work',
    description: '参与产品结构设计，使用SolidWorks进行三维建模和工程图绘制，协助完成产品原型制作。',
    achievements: ['独立完成3个零件设计', '优化装配工艺', '参与产品测试']
  }, {
    title: '机器人项目开发',
    organization: '创新实验室',
    period: '2023.10 - 2024.05',
    location: '上海',
    type: 'project',
    description: '负责机器人控制系统设计，编写控制算法，实现路径规划和运动控制功能。',
    achievements: ['完成控制系统架构设计', '实现PID控制算法', '获得校级创新奖']
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
          gradient: 'from-blue-400 to-blue-600'
        };
      case 'work':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          border: 'border-green-300',
          gradient: 'from-green-400 to-green-600'
        };
      case 'project':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-800',
          border: 'border-purple-300',
          gradient: 'from-purple-400 to-purple-600'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-300',
          gradient: 'from-gray-400 to-gray-600'
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
            学术背景与实践经验，构建扎实的专业基础
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
                  <div className="absolute inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full" />
                </div>

                {/* 内容卡片 */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100">
                    <div className={`absolute top-0 ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>

                    <div className="mb-4">
                      <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                        {exp.title}
                      </h3>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-2`}>
                        <Icon size={14} className="mr-1" />
                        {exp.organization}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar size={14} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mr-2" />
                          {achievement}
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* 统计信息 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">学术背景</h3>
            <p className="text-gray-600">
              上海大学（SHU）机械电子工程专业
              <br />
              系统的专业知识体系
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">实践经验</h3>
            <p className="text-gray-600">
              多个实习和项目经历
              <br />
              丰富的工程实践经验
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MapPin size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">地理位置</h3>
            <p className="text-gray-600">
              位于上海
              <br />
              优越的学习和发展环境
            </p>
          </div>
        </div>
      </div>
    </section>;
}