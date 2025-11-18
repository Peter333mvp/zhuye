// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Calendar, MapPin, Briefcase, GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react';

export function ExperienceSection() {
  const [expandedItem, setExpandedItem] = useState(null);
  const experiences = [{
    id: 1,
    type: 'work',
    title: '高级前端工程师',
    company: '科技创新有限公司',
    location: '北京',
    period: '2022年3月 - 至今',
    description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目的交付。优化系统性能，提升用户体验。',
    achievements: ['主导重构公司核心产品，性能提升60%', '建立前端开发规范和最佳实践', '指导初级开发人员，提升团队整体技术水平', '参与技术选型和架构设计'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Webpack', 'Docker'],
    current: true
  }, {
    id: 2,
    type: 'work',
    title: '前端开发工程师',
    company: '互联网科技公司',
    location: '上海',
    period: '2020年6月 - 2022年2月',
    description: '参与多个Web应用的开发和维护，与产品经理、设计师紧密合作，确保项目按时高质量交付。',
    achievements: ['完成10+个大型项目的前端开发', '优化页面加载速度，提升用户体验', '参与移动端适配和响应式设计', '编写技术文档和单元测试'],
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Git', 'Jenkins'],
    current: false
  }, {
    id: 3,
    type: 'education',
    title: '计算机科学与技术学士',
    company: '某知名大学',
    location: '北京',
    period: '2016年9月 - 2020年6月',
    description: '系统学习计算机科学基础理论，参与多个实践项目，培养扎实的编程基础和问题解决能力。',
    achievements: ['GPA: 3.8/4.0，专业排名前10%', '获得校级奖学金3次', '参与ACM程序设计竞赛', '毕业设计获得优秀等级'],
    technologies: ['C++', 'Java', '数据结构', '算法', '数据库'],
    current: false
  }, {
    id: 4,
    type: 'award',
    title: '最佳技术创新奖',
    company: '行业技术大会',
    location: '深圳',
    period: '2023年11月',
    description: '因在AI智能助手项目中的创新性技术方案和卓越表现，获得行业技术创新大奖。',
    achievements: ['技术创新方案获得行业认可', '项目成果被多家媒体报道', '受邀在技术大会上分享经验'],
    technologies: ['AI', 'NLP', '机器学习'],
    current: false
  }];
  const toggleExpanded = id => {
    setExpandedItem(expandedItem === id ? null : id);
  };
  const getIcon = type => {
    switch (type) {
      case 'work':
        return <Briefcase size={20} className="text-blue-600" />;
      case 'education':
        return <GraduationCap size={20} className="text-green-600" />;
      case 'award':
        return <Award size={20} className="text-yellow-600" />;
      default:
        return <Briefcase size={20} className="text-gray-600" />;
    }
  };
  const getTypeColor = type => {
    switch (type) {
      case 'work':
        return 'border-blue-200 bg-blue-50';
      case 'education':
        return 'border-green-200 bg-green-50';
      case 'award':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };
  return <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            工作经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我的专业成长历程，包括工作经验、教育背景和获得的荣誉
          </p>
        </div>

        {/* 时间线 */}
        <div className="relative">
          {/* 时间线主轴 */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          {/* 经历列表 */}
          <div className="space-y-8">
            {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;
            return <div key={experience.id} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* 时间线节点 */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>

                {/* 内容卡片 */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className={`p-6 rounded-xl border-2 ${getTypeColor(experience.type)} shadow-lg hover:shadow-xl transition-all duration-300 ${experience.current ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                    {/* 头部信息 */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          {getIcon(experience.type)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-gray-700 font-medium">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      {experience.current && <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                          当前
                        </span>}
                    </div>

                    {/* 时间和地点 */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* 描述 */}
                    <p className="text-gray-700 mb-4">
                      {experience.description}
                    </p>

                    {/* 技术标签 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map(tech => <span key={tech} className="px-2 py-1 bg-white bg-opacity-70 text-gray-700 text-xs rounded-full border border-gray-300">
                          {tech}
                        </span>)}
                    </div>

                    {/* 展开/收起按钮 */}
                    <button onClick={() => toggleExpanded(experience.id)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                      {expandedItem === experience.id ? <><ChevronUp size={16} /> 收起详情</> : <><ChevronDown size={16} /> 查看详情</>}
                    </button>

                    {/* 展开的详细内容 */}
                    {expandedItem === experience.id && <div className="mt-4 pt-4 border-t border-gray-300">
                        <h4 className="font-bold text-gray-900 mb-2">
                          主要成就：
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              {achievement}
                            </li>)}
                        </ul>
                      </div>}
                  </div>
                </div>
              </div>;
          })}
          </div>
        </div>

        {/* 统计信息 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-700">年工作经验</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
            <div className="text-gray-700">完成项目</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-700">技术栈</div>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
            <div className="text-gray-700">获得奖项</div>
          </div>
        </div>
      </div>
    </section>;
}