// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { ChevronLeft, ChevronRight, ExternalLink, Github, Trophy, Target, TrendingUp, Bot } from 'lucide-react';

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const projects = [{
    id: 1,
    title: '中国机器人大赛暨ROBOTCUP世界杯中国赛 2024',
    subtitle: '亚军（国赛二等奖）',
    description: '参与篮球机器人组比赛，机器人具备自动拾球、路径规划、多任务并行处理、定点投篮等功能',
    responsibilities: ['机械结构设计', '零件加工', '现场改装'],
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&h=600&fit=crop',
    tags: ['机器人技术', '机械设计', '自动控制', '竞赛项目'],
    icon: Trophy,
    color: 'bg-yellow-100 text-yellow-800'
  }, {
    id: 2,
    title: '一维伺服工作平台设计',
    subtitle: '课程设计 - 优秀',
    description: '基于功能设想与草图，选用电机、丝杠导轨等标准件，完成非标零件与整体平台设计',
    responsibilities: ['零件选型计算', 'SolidWorks 建模', '装配图绘制'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    tags: ['机械设计', 'SolidWorks', '课程设计', '工程设计'],
    icon: Target,
    color: 'bg-blue-100 text-blue-800'
  }, {
    id: 3,
    title: '美国大学生数学建模竞赛（MCM）2024',
    subtitle: 'M奖（国赛二等奖）',
    description: '针对五大湖水资源调控问题，建立模型平衡水位与利益相关者需求，设计算法并分析敏感性',
    responsibilities: ['模型推导与建立', 'MATLAB 求解与检验', '论文撰写'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['数学建模', 'MATLAB', '算法设计', '数据分析'],
    icon: TrendingUp,
    color: 'bg-green-100 text-green-800'
  }, {
    id: 4,
    title: '太空蜘蛛机器人系统设计',
    subtitle: '中国大学生机械工程创新创意大赛第八届"精雕杯"毕业设计大赛',
    description: '时间：2025年6月\n获得了全国三等奖、华东赛区一等奖\n\n针对太空特殊环境航天器维护和星体探索等多任务应用场景，提出并实现了一种适应太空微重力等特殊环境要求的六足机器人系统设计。通过融合机械设计、运动学建模、智能控制与仿真验证等多学科技术，研究了机器人运动稳定性、环境适应性和系统可靠性等关键技术问题，完成了原型样机的研制与性能测试，达到了设计要求。',
    responsibilities: ['机械系统设计（基于SolidWorks进行轻量化优化与仿真）', '运动学建模（使用D-H参数法建立正逆运动学模型及足端轨迹控制）', '控制策略开发（设计多步态协同控制与容错算法）', 'MATLAB仿真验证（二步态前进与转弯仿真）', '硬件系统集成（ESP32主控、传感器与舵机驱动）', '实验测试（样机运动性能与模拟太空环境适应性）'],
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
    tags: ['机器人系统', '太空技术', '运动学建模', '智能控制', 'MATLAB仿真', '机械工程创新'],
    icon: Bot,
    color: 'bg-purple-100 text-purple-800'
  }];
  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % projects.length);
      setIsAnimating(false);
    }, 300);
  };
  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 300);
  };
  const goToProject = index => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'ArrowRight') nextProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating]);

  // 自动播放
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            项目展示
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我的学术竞赛、课程设计和研究项目经历
          </p>
        </div>

        {/* 单卡片滑动展示 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 主卡片容器 */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-300 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {projects.map(project => {
              const IconComponent = project.icon;
              return <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* 项目图片 */}
                    <div className="relative h-64 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent size={20} className="text-white" />
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.color}`}>
                            {project.subtitle}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* 项目内容 */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                        {project.description}
                      </p>

                      {/* 职责部分 */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">主要职责：</h4>
                        <ul className="space-y-2">
                          {project.responsibilities.map((responsibility, index) => <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{responsibility}</span>
                            </li>)}
                        </ul>
                      </div>

                      {/* 技术标签 */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {tag}
                          </span>)}
                      </div>
                    </div>
                  </div>
                </div>;
            })}
            </div>
          </div>

          {/* 左右导航按钮 */}
          <button onClick={prevProject} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 z-10" disabled={isAnimating}>
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button onClick={nextProject} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 z-10" disabled={isAnimating}>
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* 指示器 */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => <button key={index} onClick={() => goToProject(index)} className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? 'w-8 bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to project ${index + 1}`} />)}
          </div>

          {/* 项目计数器 */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {projects.length}
            </span>
          </div>
        </div>
      </div>
    </section>;
}