// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Calendar, MapPin, Briefcase, GraduationCap, Trophy, Users } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [{
    id: 1,
    title: '机械电子工程 学士学位',
    company: '上海大学机电工程与自动化学院',
    location: '上海',
    period: '2020年9月 - 2024年6月',
    type: 'education',
    description: ['主修课程：机械设计基础、电路分析、自动控制原理、单片机原理与应用', '专业课程：机器人技术基础、机电一体化系统设计、传感器与检测技术', '实践课程：工程制图、金工实习、电子工艺实习、机电系统综合实验'],
    technologies: ['机械设计', '自动控制', '电路分析', '机器人技术'],
    icon: GraduationCap
  }, {
    id: 2,
    title: '中国机器人大赛',
    company: '篮球机器人组 亚军',
    location: '全国',
    period: '2023年8月',
    type: 'competition',
    description: ['负责机器人自动拾球系统设计与实现', '开发路径规划算法，优化运动轨迹', '实现多任务并行处理控制系统', '设计定点投篮机构，提高命中率'],
    technologies: ['机器人控制', '路径规划', '多任务处理', '机械设计'],
    icon: Trophy
  }, {
    id: 3,
    title: '美国大学生数学建模竞赛',
    company: 'M奖（一等奖）',
    location: '国际',
    period: '2023年2月',
    type: 'competition',
    description: ['建立水资源调控数学模型', '进行算法分析与优化', '运用MATLAB进行数据仿真', '撰写英文技术论文'],
    technologies: ['数学建模', 'MATLAB', '数据分析', '算法优化'],
    icon: Trophy
  }, {
    id: 4,
    title: '一维伺服工作平台设计',
    company: '课程设计项目',
    location: '上海大学',
    period: '2022年12月',
    type: 'project',
    description: ['完成零件选型计算与参数设计', '使用SolidWorks进行三维建模', '进行运动学仿真与性能分析', '完成工程图纸绘制与技术文档'],
    technologies: ['SolidWorks', '机械设计', '运动学分析', '工程制图'],
    icon: Briefcase
  }, {
    id: 5,
    title: '学生创新创业指导中心主任',
    company: '上海大学',
    location: '上海',
    period: '2022年9月 - 2023年6月',
    type: 'practice',
    description: ['组织创新创业活动与培训', '指导学生团队参加各类竞赛', '协调校内外资源对接', '管理日常运营与团队建设'],
    technologies: ['项目管理', '团队协作', '活动策划', '资源协调'],
    icon: Users
  }, {
    id: 6,
    title: '志愿者负责人',
    company: '各类志愿服务活动',
    location: '上海',
    period: '2021年3月 - 2023年12月',
    type: 'practice',
    description: ['组织校内外志愿服务活动', '协调志愿者团队分工合作', '负责活动策划与执行', '建立志愿者培训体系'],
    technologies: ['活动策划', '团队管理', '志愿服务', '培训体系'],
    icon: Users
  }];
  const getTypeColor = type => {
    switch (type) {
      case 'education':
        return 'bg-blue-100 text-blue-800';
      case 'competition':
        return 'bg-green-100 text-green-800';
      case 'project':
        return 'bg-purple-100 text-purple-800';
      case 'practice':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getTypeLabel = type => {
    switch (type) {
      case 'education':
        return '教育背景';
      case 'competition':
        return '竞赛经历';
      case 'project':
        return '项目经历';
      case 'practice':
        return '实践经历';
      default:
        return '其他经历';
    }
  };
  return <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            教育与经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我的教育背景、竞赛项目经历和实践经验
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-1" />
                          {experience.period}
                        </div>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getTypeColor(experience.type)}`}>
                          {getTypeLabel(experience.type)}
                        </span>
                      </div>
                      
                      <div className="flex items-center mb-2">
                        <IconComponent size={20} className="mr-2 text-blue-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {experience.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center mb-4 text-gray-600">
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
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}