// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { BookOpen, Monitor, Wrench, Languages, Palette, Brain } from 'lucide-react';

export function SkillsSection() {
  const skills = {
    language: [{
      name: '英语',
      level: 75,
      description: 'CET-4，具备良好的英语阅读和写作能力',
      icon: Languages
    }],
    office: [{
      name: 'Office套件',
      level: 90,
      description: '熟练使用Word、Excel、PowerPoint等办公软件',
      icon: Monitor
    }, {
      name: 'Photoshop',
      level: 70,
      description: '掌握图像处理和设计基础',
      icon: Palette
    }, {
      name: 'Premiere Pro',
      level: 65,
      description: '能够进行视频剪辑和后期制作',
      icon: Monitor
    }, {
      name: 'AI大模型应用',
      level: 80,
      description: '熟悉各类AI工具的应用和集成',
      icon: Brain
    }],
    professional: [{
      name: 'SolidWorks',
      level: 85,
      description: '精通三维建模和装配设计',
      icon: Wrench
    }, {
      name: 'AutoCAD',
      level: 80,
      description: '熟练掌握二维制图和基础三维设计',
      icon: Wrench
    }, {
      name: 'CATIA',
      level: 75,
      description: '掌握复杂曲面设计和装配管理',
      icon: Wrench
    }, {
      name: 'MATLAB',
      level: 85,
      description: '擅长数学建模、仿真和数据分析',
      icon: BookOpen
    }, {
      name: 'Visual Studio',
      level: 80,
      description: '熟悉C++和C#开发环境',
      icon: Monitor
    }]
  };
  const categories = [{
    id: 'language',
    title: '语言能力',
    icon: Languages,
    color: 'blue'
  }, {
    id: 'office',
    title: '办公与软件技能',
    icon: Monitor,
    color: 'green'
  }, {
    id: 'professional',
    title: '专业技能',
    icon: Wrench,
    color: 'purple'
  }];
  const getProgressColor = level => {
    if (level >= 85) return 'bg-green-600';
    if (level >= 75) return 'bg-blue-600';
    if (level >= 65) return 'bg-yellow-600';
    return 'bg-gray-600';
  };
  return <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            技能专长
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            语言能力、办公软件技能和专业工程技能的全面展示
          </p>
        </div>

        <div className="space-y-12">
          {categories.map(category => {
          const CategoryIcon = category.icon;
          const categorySkills = skills[category.id] || [];
          return <div key={category.id} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-8">
                  <div className={`p-3 bg-${category.color}-100 rounded-lg mr-4`}>
                    <CategoryIcon size={24} className={`text-${category.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map(skill => {
                const SkillIcon = skill.icon;
                return <div key={skill.name} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <SkillIcon size={18} className="mr-2 text-gray-600" />
                            <span className="font-medium text-gray-800">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className={`${getProgressColor(skill.level)} h-3 rounded-full transition-all duration-1000 ease-out`} style={{
                      width: `${skill.level}%`
                    }} />
                        </div>
                        
                        <p className="text-sm text-gray-600">
                          {skill.description}
                        </p>
                      </div>;
              })}
                </div>
              </div>;
        })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-lg">
            <BookOpen size={20} className="mr-2 text-blue-600" />
            <span className="text-blue-800 font-medium">
              持续学习新技术，不断提升专业能力
            </span>
          </div>
        </div>
      </div>
    </section>;
}