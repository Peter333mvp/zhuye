// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { GraduationCap, Calendar, MapPin, Award, Trophy, Briefcase, Users, BookOpen, Target, Code, Calculator, Rocket, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const education = {
    school: '上海大学',
    college: '机电工程与自动化学院',
    major: '机械电子工程',
    tags: ['211工程', '双一流建设高校', '双一流优势学科'],
    courses: ['高等数学', 'C语言', '机械设计', '机械原理', '工程力学', '材料力学', '自动控制原理', '数字电路技术', '电子技术基础', '机器人工学', '深度学习与人工智能']
  };
  const competitions = [{
    title: '中国大学生机械工程创新创意大赛',
    award: '全国三等奖、华东赛区一等奖',
    year: '2025',
    content: '针对太空特殊环境航天器维护和星体探索等多任务应用场景，提出并实现了一种适应太空微重力等特殊环境要求的六足机器人系统设计。通过融合机械设计、运动学建模、智能控制与仿真验证等多学科技术，研究了面向太空极端环境多任务应用场景仿生机器人运动稳定性、环境适应性和系统可靠性等关键技术问题。',
    responsibilities: ['机械系统设计与优化', '运动学建模与仿真', '样机制作与性能测试', '太空环境适应性实验'],
    icon: <Rocket className="text-purple-500" />
  }, {
    title: '中国机器人大赛暨ROBOTCUP世界杯中国赛',
    award: '亚军（国赛二等奖）',
    year: '2024',
    content: '参与篮球机器人组比赛，机器人具备自动拾球、路径规划、多任务并行处理、定点投篮等功能',
    responsibilities: ['机械结构设计', '零件加工', '现场改装'],
    icon: <Trophy className="text-yellow-500" />
  }, {
    title: '美国大学生数学建模竞赛（MCM）',
    award: 'M奖（国赛二等奖）',
    year: '2024',
    content: '针对五大湖水资源调控问题，建立模型平衡水位与利益相关者需求，设计算法并分析敏感性',
    responsibilities: ['模型推导与建立', 'MATLAB 求解与检验', '论文撰写'],
    icon: <Calculator className="text-green-500" />
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
  const tabs = [{
    id: 0,
    name: '教育背景',
    icon: <GraduationCap size={20} />
  }, {
    id: 1,
    name: '竞赛项目',
    icon: <Trophy size={20} />
  }, {
    id: 2,
    name: '实践经历',
    icon: <Briefcase size={20} />
  }];

  // 自动播放功能
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % 3);
    }, 4000); // 每4秒切换一次

    return () => clearInterval(interval);
  }, [isAutoPlay]);
  const TimelineItem = ({
    item,
    isLast = false
  }) => {
    return <div className="relative flex items-start group">
        {/* 时间线节点 */}
        <div className="flex flex-col items-center mr-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-indigo-200 group-hover:border-indigo-400 transition-colors duration-300 z-10">
            {item.icon}
          </div>
          {!isLast && <div className="w-0.5 h-16 bg-gradient-to-b from-indigo-200 to-transparent mt-2" />}
        </div>

        {/* 内容 */}
        <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 group-hover:border-indigo-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              {item.title}
            </h3>
            {item.year && <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                {item.year}
              </span>}
            {item.period && <span className="text-sm text-gray-500">
                {item.period}
              </span>}
          </div>
          
          {item.award && <div className="text-sm font-semibold text-yellow-600 mb-2">
              {item.award}
            </div>}
          
          {item.position && <div className="text-sm font-semibold text-indigo-600 mb-2">
              {item.position}
            </div>}
          
          <p className="text-gray-600 text-sm mb-3">
            {item.content || item.description}
          </p>
          
          {item.responsibilities && <div className="flex flex-wrap gap-2">
              {item.responsibilities.map((resp, idx) => <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  {resp}
                </span>)}
            </div>}
        </div>
      </div>;
  };
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        // 教育背景
        return <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
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
          </div>;
      case 1:
        // 竞赛项目
        return <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                <Trophy size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">竞赛项目</h3>
            </div>

            <div className="space-y-6">
              {competitions.map((competition, index) => <TimelineItem key={index} item={competition} isLast={index === competitions.length - 1} />)}
            </div>
          </div>;
      case 2:
        // 实践经历
        return <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mr-3">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">实践经历</h3>
            </div>

            <div className="space-y-6">
              {practices.map((practice, index) => <TimelineItem key={index} item={practice} isLast={index === practices.length - 1} />)}
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            经历与成就
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            教育背景、竞赛项目与实践经历的全面展示
          </p>
        </div>

        {/* 轮播控制区域 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center space-x-2">
            {/* 播放/暂停按钮 */}
            <button onClick={() => setIsAutoPlay(!isAutoPlay)} className="p-2 rounded-full hover:bg-indigo-100 transition-colors duration-200" title={isAutoPlay ? "暂停播放" : "自动播放"}>
              {isAutoPlay ? <Pause size={18} className="text-indigo-600" /> : <Play size={18} className="text-indigo-600" />}
            </button>

            {/* 左切换按钮 */}
            <button onClick={() => setActiveTab(prev => (prev - 1 + 3) % 3)} className="p-2 rounded-full hover:bg-indigo-100 transition-colors duration-200" title="上一个">
              <ChevronLeft size={18} className="text-indigo-600" />
            </button>

            {/* Tab按钮 */}
            <div className="flex space-x-1">
              {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}>
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.name}</span>
                </button>)}
            </div>

            {/* 右切换按钮 */}
            <button onClick={() => setActiveTab(prev => (prev + 1) % 3)} className="p-2 rounded-full hover:bg-indigo-100 transition-colors duration-200" title="下一个">
              <ChevronRight size={18} className="text-indigo-600" />
            </button>
          </div>
        </div>

        {/* 内容展示区域 */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {renderContent()}
          </div>
        </div>

        {/* 进度指示器 */}
        <div className="flex justify-center mt-6 space-x-2">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`transition-all duration-300 ${activeTab === tab.id ? 'w-8 h-2 bg-indigo-600 rounded-full' : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'}`} />)}
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
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
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