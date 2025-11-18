// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { GraduationCap, Trophy, Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export function ExperienceSection() {
  const education = [{
    title: '上海电机学院',
    degree: '机械电子工程',
    period: '2021.09 - 2025.06',
    location: '上海',
    description: '主修机械电子工程专业，系统学习机械设计、自动控制、电子技术等相关课程，GPA 3.2/4.0。',
    details: ['机械设计基础', '自动控制原理', '电子技术', '单片机原理与应用', '机器人技术基础'],
    type: 'education'
  }];
  const competitions = [{
    title: '中国机器人大赛',
    category: '篮球机器人组',
    period: '2023.08',
    location: '全国',
    description: '负责篮球机器人自动拾球系统设计与实现，开发路径规划算法优化运动轨迹，实现多任务并行处理控制系统。',
    details: ['自动拾球系统设计', '路径规划算法开发', '多任务并行处理', '定点投篮机构设计'],
    award: '全国亚军',
    type: 'competition'
  }, {
    title: '美国大学生数学建模竞赛',
    category: 'MCM/ICM',
    period: '2023.02',
    location: '国际',
    description: '建立水资源调控数学模型，进行算法分析与优化，运用MATLAB进行数据仿真，撰写英文技术论文。',
    details: ['水资源调控模型建立', '算法分析与优化', 'MATLAB数据仿真', '英文技术论文撰写'],
    award: 'M奖（一等奖）',
    type: 'competition'
  }];
  const practices = [{
    title: '一维伺服工作平台设计',
    category: '课程设计',
    period: '2022.12',
    location: '上海电机学院',
    description: '完成零件选型计算与参数设计，使用SolidWorks进行三维建模，进行运动学仿真与性能分析。',
    details: ['零件选型计算', 'SolidWorks三维建模', '运动学仿真分析', '工程图纸绘制'],
    award: '课程设计优秀项目',
    type: 'practice'
  }, {
    title: '机械设计基础课程设计',
    category: '课程实践',
    period: '2022.06',
    location: '上海电机学院',
    description: '参与机械结构设计项目，完成从概念设计到详细设计的全过程，掌握机械设计的基本方法和流程。',
    details: ['概念设计方案', '详细结构设计', '工程图纸绘制', '设计文档编写'],
    type: 'practice'
  }, {
    title: '单片机应用实践',
    category: '实验项目',
    period: '2021.12',
    location: '上海电机学院',
    description: '基于51单片机开发智能控制系统，实现传感器数据采集、处理和控制输出，掌握嵌入式系统开发。',
    details: ['51单片机编程', '传感器接口设计', '控制算法实现', '系统集成调试'],
    type: 'practice'
  }];
  const timelineConfig = [{
    id: 'education',
    title: '教育经历',
    icon: GraduationCap,
    color: 'blue',
    items: education
  }, {
    id: 'competition',
    title: '竞赛经历',
    icon: Trophy,
    color: 'green',
    items: competitions
  }, {
    id: 'practice',
    title: '实践经历',
    icon: Briefcase,
    color: 'purple',
    items: practices
  }];
  const getTimelineColor = color => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          border: 'border-blue-200',
          line: 'bg-blue-200',
          dot: 'bg-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          border: 'border-green-200',
          line: 'bg-green-200',
          dot: 'bg-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-800',
          border: 'border-purple-200',
          line: 'bg-purple-200',
          dot: 'bg-purple-600'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-200',
          line: 'bg-gray-200',
          dot: 'bg-gray-600'
        };
    }
  };
  return <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            个人经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            教育背景、竞赛荣誉和实践经历的全面展示
          </p>
        </div>

        <div className="space-y-16">
          {timelineConfig.map(timeline => {
          const TimelineIcon = timeline.icon;
          const colors = getTimelineColor(timeline.color);
          return <div key={timeline.id} className="relative">
                <div className="flex items-center mb-8">
                  <div className={`p-3 ${colors.bg} rounded-lg mr-4`}>
                    <TimelineIcon size={24} className={colors.text} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {timeline.title}
                  </h3>
                  <div className="ml-4 px-3 py-1 bg-gray-100 rounded-full">
                    <span className="text-sm text-gray-600">
                      {timeline.items.length} 项经历
                    </span>
                  </div>
                </div>

                <div className="relative">
                  {timeline.items.length > 1 && <div className={`absolute left-8 top-8 bottom-8 w-0.5 ${colors.line}`} />}

                  <div className="space-y-8">
                    {timeline.items.map((item, index) => <div key={index} className="relative flex items-start">
                        <div className={`relative z-10 w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center border-4 border-white shadow-md`}>
                          <TimelineIcon size={20} className={colors.text} />
                        </div>

                        <div className={`ml-6 flex-1 bg-white border ${colors.border} rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200`}>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                                {item.title}
                              </h4>
                              {item.category && <p className={`text-sm ${colors.text} font-medium`}>
                                  {item.category}
                                </p>}
                            </div>
                            {item.award && <div className="flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                                <Award size={14} className="mr-1" />
                                {item.award}
                              </div>}
                          </div>

                          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {item.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {item.location}
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4">
                            {item.description}
                          </p>

                          {item.details && item.details.length > 0 && <div>
                              <h5 className="text-sm font-semibold text-gray-900 mb-2">
                                主要内容：
                              </h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {item.details.map((detail, detailIndex) => <li key={detailIndex} className="flex items-start">
                                    <span className={`inline-block w-1.5 h-1.5 ${colors.dot} rounded-full mr-2 mt-1.5 flex-shrink-0`} />
                                    {detail}
                                  </li>)}
                              </ul>
                            </div>}
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>;
        })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-lg">
            <Briefcase size={20} className="mr-2 text-blue-600" />
            <span className="text-blue-800 font-medium">
              通过多元化的经历，培养综合能力
            </span>
          </div>
        </div>
      </div>
    </section>;
}