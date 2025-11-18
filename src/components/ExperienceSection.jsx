// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { GraduationCap, Calendar, MapPin, Award, Trophy, Briefcase, Users, BookOpen, Target, Code, Calculator, ChevronDown, ChevronUp, Robot, Rocket, Cpu, Settings } from 'lucide-react';

export function ExperienceSection() {
  const [expandedProject, setExpandedProject] = useState(null);
  const education = {
    school: '上海大学',
    college: '机电工程与自动化学院',
    major: '机械电子工程',
    tags: ['211工程', '双一流建设高校', '双一流优势学科'],
    courses: ['高等数学', 'C语言', '机械设计', '机械原理', '工程力学', '材料力学', '自动控制原理', '数字电路技术', '电子技术基础', '机器人工学', '深度学习与人工智能']
  };
  const competitions = [{
    title: '中国大学生机械工程创新创意大赛',
    subtitle: '第八届"精雕杯"毕业设计大赛',
    award: '全国三等奖、华东赛区一等奖',
    year: '2025',
    period: '2025年6月',
    content: '针对太空特殊环境航天器维护和星体探索等多任务应用场景，设计并实现了适应太空微重力等特殊环境要求的六足机器人系统',
    icon: <Robot className="text-blue-500" />,
    details: {
      overview: '本研究提出并实现了一种适应太空微重力等特殊环境要求的六足机器人系统设计。通过融合机械设计、运动学建模、智能控制与仿真验证等多学科技术，研究了面向太空极端环境多任务应用场景仿生机器人运动稳定性、环境适应性和系统可靠性等关键技术问题。',
      kinematics: {
        title: '运动学建模',
        content: '基于D-H参数法建立单腿运动学模型，并建立了正运动学和逆运动学解算模型，进一步分析了足端速度，实现了高精度足端轨迹控制。提出六足协同控制策略，包括太空蜘蛛机器人步态模式（二步态、四步态、六步态）和全向运动与转弯等运动状态，显著提升了系统的容错能力。',
        icon: <Calculator className="text-green-500" />
      },
      mechanical: {
        title: '机械系统设计',
        content: '采用蜘蛛式对称构型与三自由度单腿结构，结合SolidWorks仿真优化，实现了轻量化机械本体，满足航天发射轻量化要求，降低了制作成本。',
        icon: <Settings className="text-purple-500" />
      },
      hardware: {
        title: '硬件系统',
        content: '采用ESP32芯片双核主控与冗余电源架构，集成多模态传感器和PCA9685舵机驱动模块，确保实时控制与高可靠性通信。',
        icon: <Cpu className="text-orange-500" />
      },
      software: {
        title: '软件系统',
        content: '构建Arduino+ROS分层架构，底层实现舵机PWM控制，通过多线程同步机制提升系统响应效率。',
        icon: <Code className="text-blue-500" />
      },
      experiments: {
        title: '样机实验',
        content: '分别测试了机器人二步态和六步态下的前进和后退运动，并通过数据分析给出了在各个运动状态中机器人各关节舵机的运动数据变化，相关测试性能达到了设计要求。同时，设计了模拟太空实验来测试舱壁攀爬与微重力步态适应性，以及失重环境定向喷气运动实验来检测其在太空特种环境下的工作能力。',
        icon: <Rocket className="text-red-500" />
      },
      future: {
        title: '未来展望',
        content: '本研究成果为太空特殊环境航天器维护等多任务应用场景提供了技术储备，未来可通过无刷电机驱动、深度视觉感知及无线充电和人工智能等技术进一步拓展应用场景。',
        icon: <Target className="text-indigo-500" />
      }
    }
  }];
  const practices = [{
    title: '上海大学学生创新创业指导中心',
    position: '中心主任',
    period: '2021.09 - 2024.06',
    description: '负责组织创新创业活动与项目指导',
    icon: <Users className="text-purple-500" />
  }, {
    title: '全国第十六届精密工程学术研讨会暨青年学者创新论坛',
    position: '志愿者负责人',
    period: '2023.06',
    description: '协调志愿者团队，保障会议顺利进行',
    icon: <Briefcase className="text-indigo-500" />
  }, {
    title: '上海大学第十三期青年马克思主义者工程',
    position: '学员',
    period: '2023.03 - 2024.03',
    description: '青年马克思主义者培养工程学员',
    icon: <BookOpen className="text-red-500" />
  }, {
    title: '上海大学第十七期人才学院',
    position: '学员',
    period: '2023.04 - 2024.04',
    description: '人才学院培养计划学员',
    icon: <Target className="text-orange-500" />
  }, {
    title: '沃顿青年领导力项目',
    position: '学员',
    period: '2024.03 - 2024.06',
    description: '沃顿商学院青年领导力培养项目',
    icon: <Award className="text-teal-500" />
  }];
  const TimelineItem = ({
    item,
    isLast = false,
    isCompetition = false
  }) => {
    const isExpanded = expandedProject === item.title;
    return <div className="relative flex items-start group">
        {/* 时间线节点 */}
        <div className="flex flex-col items-center mr-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-indigo-200 group-hover:border-indigo-400 transition-colors duration-300 z-10">
            {item.icon}
          </div>
          {!isLast && <div className="w-0.5 h-16 bg-gradient-to-b from-indigo-200 to-transparent mt-2" />}
        </div>

        {/* 内容 */}
        <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-indigo-200">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                {item.title}
              </h3>
              {item.year && <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                  {item.year}
                </span>}
            </div>
            
            {item.subtitle && <p className="text-sm font-medium text-gray-700 mb-2">
                {item.subtitle}
              </p>}
            
            {item.award && <div className="text-sm font-semibold text-yellow-600 mb-2">
                🏆 {item.award}
              </div>}
            
            {item.position && <div className="text-sm font-semibold text-indigo-600 mb-2">
                {item.position}
              </div>}
            
            {item.period && <div className="flex items-center text-gray-500 mb-3">
                <Calendar size={14} className="mr-1" />
                <span className="text-sm">{item.period}</span>
              </div>}
            
            <p className="text-gray-600 text-sm mb-3">
              {item.content || item.description}
            </p>

            {isCompetition && item.details && <div className="mt-3">
                <button onClick={() => setExpandedProject(isExpanded ? null : item.title)} className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200">
                  {isExpanded ? <ChevronUp size={16} className="mr-1" /> : <ChevronDown size={16} className="mr-1" />}
                  {isExpanded ? '收起详情' : '查看详情'}
                </button>
                
                {isExpanded && <div className="mt-4 space-y-4 border-t pt-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item.details.overview}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(item.details).filter(([key]) => key !== 'overview').map(([key, detail]) => <div key={key} className="bg-white border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center mb-2">
                            {detail.icon}
                            <h4 className="text-sm font-semibold text-gray-800 ml-2">
                              {detail.title}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {detail.content}
                          </p>
                        </div>)}
                    </div>
                  </div>}
              </div>}
          </div>
        </div>
      </div>;
  };
  return <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            教育与实践经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            教育背景、竞赛项目与实践经历的全面展示
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 教育背景 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">教育背景</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {education.school}
                </h4>
                <p className="text-indigo-600 font-semibold mb-1">
                  {education.college}
                </p>
                <p className="text-gray-700 font-medium mb-3">
                  {education.major}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {education.tags.map((tag, idx) => <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      {tag}
                    </span>)}
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">主修课程：</h5>
                  <div className="flex flex-wrap gap-1">
                    {education.courses.map((course, idx) => <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {course}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 竞赛项目 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                <Trophy size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">竞赛项目</h3>
            </div>

            <div className="space-y-6">
              {competitions.map((competition, index) => <TimelineItem key={index} item={competition} isLast={index === competitions.length - 1} isCompetition={true} />)}
            </div>
          </div>

          {/* 实践经历 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mr-3">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">实践经历</h3>
            </div>

            <div className="space-y-6">
              {practices.map((practice, index) => <TimelineItem key={index} item={practice} isLast={index === practices.length - 1} />)}
            </div>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">11+</div>
            <div className="text-sm text-gray-600">核心课程</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1</div>
            <div className="text-sm text-gray-600">竞赛奖项</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
            <div className="text-sm text-gray-600">实践项目</div>
          </div>
        </div>
      </div>
    </section>;
}