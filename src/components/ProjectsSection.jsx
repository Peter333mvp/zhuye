// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { ChevronLeft, ChevronRight, ExternalLink, Github, Award, Trophy, Target } from 'lucide-react';

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const projects = [{
    id: 1,
    title: '中国大学生机械工程创新创意大赛',
    year: '2025',
    awards: ['全国三等奖', '华东赛区一等奖'],
    description: '针对太空特殊环境航天器维护和星体探索等多任务应用场景，提出并实现了一种适应太空微重力等特殊环境要求的六足机器人系统设计。通过融合机械设计、运动学建模、智能控制与仿真验证等多学科技术，研究了面向太空极端环境多任务应用场景仿生机器人运动稳定性、环境适应性和系统可靠性等关键技术问题。',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
    tags: ['机械系统设计与优化', '运动学建模与仿真', '样机制作与性能测试', '太空环境适应性实验'],
    icon: <Award size={24} />,
    type: 'competition'
  }, {
    id: 2,
    title: '中国机器人大赛暨ROBOTCUP世界杯中国赛',
    year: '2024',
    awards: ['亚军（国赛二等奖）'],
    description: '参与篮球机器人组比赛，机器人具备自动拾球、路径规划、多任务并行处理、定点投篮等功能。通过机械结构设计、零件加工、现场改装等环节，展现了扎实的工程实践能力和创新思维。',
    image: 'https://images.unsplash.com/photo-1561557944-689478ad7312?w=800&h=600&fit=crop',
    tags: ['机械结构设计', '零件加工', '现场改装', '自动控制系统'],
    icon: <Trophy size={24} />,
    type: 'competition'
  }, {
    id: 3,
    title: '美国大学生数学建模竞赛（MCM）',
    year: '2024',
    awards: ['M奖（国赛二等奖）'],
    description: '针对五大湖水资源调控问题，建立模型平衡水位与利益相关者需求，设计算法并分析敏感性。通过模型推导与建立、MATLAB求解与检验、论文撰写等环节，展现了优秀的数学建模能力和问题解决能力。',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=600&fit=crop',
    tags: ['模型推导与建立', 'MATLAB求解与检验', '论文撰写', '数据分析'],
    icon: <Target size={24} />,
    type: 'competition'
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
            竞赛获奖
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            参与的重要竞赛项目，展示学术能力和创新成果
          </p>
        </div>

        {/* 单卡片滑动展示 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 主卡片容器 */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-300 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {projects.map(project => <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* 项目图片 */}
                    <div className="relative h-64 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-yellow-400">
                            {project.icon}
                          </div>
                          <span className="text-white/90 text-sm font-medium">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.awards.map((award, index) => <span key={index} className="px-2 py-1 bg-yellow-500/90 text-white text-xs rounded-full font-medium">
                              {award}
                            </span>)}
                        </div>
                      </div>
                    </div>

                    {/* 项目内容 */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* 技术标签 */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {tag}
                          </span>)}
                      </div>

                      {/* 项目链接 - 竞赛项目可能没有在线链接，改为查看详情 */}
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                          <ExternalLink size={18} />
                          <span>查看详情</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200">
                          <Award size={18} />
                          <span>获奖证书</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>)}
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