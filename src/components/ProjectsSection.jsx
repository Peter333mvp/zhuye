// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const projects = [{
    id: 1,
    title: '智能校园导航系统',
    description: '基于React Native开发的校园导航应用，集成AR导航、实时位置追踪、智能路径规划等功能，为新生和访客提供便捷的校园导览服务。',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    tags: ['React Native', 'AR', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }, {
    id: 2,
    title: '在线教育平台',
    description: '全栈在线学习平台，支持视频课程、实时互动、作业管理、成绩分析等功能，已服务超过1000+学生用户。',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }, {
    id: 3,
    title: '智能数据分析工具',
    description: '基于机器学习的数据分析平台，提供数据可视化、预测分析、异常检测等功能，帮助企业快速洞察业务数据。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
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
            我参与开发的一些代表性项目，展示技术能力和创新思维
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
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
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

                      {/* 项目链接 */}
                      <div className="flex gap-4">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                          <Github size={18} />
                          <span>源代码</span>
                        </a>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                          <ExternalLink size={18} />
                          <span>在线演示</span>
                        </a>
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