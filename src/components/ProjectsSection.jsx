// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const projects = [{
    id: 1,
    title: '智能校园导航系统',
    description: '基于React Native开发的校园导航应用，集成AR导航、实时位置追踪、智能路径规划等功能，为新生和访客提供便捷的校园导览服务。',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    tags: ['React Native', 'AR', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }, {
    id: 2,
    title: '在线教育平台',
    description: '全栈在线学习平台，支持视频课程、实时互动、作业管理、成绩分析等功能，已服务超过1000+学生用户。',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }, {
    id: 3,
    title: '智能数据分析工具',
    description: '基于机器学习的数据分析平台，提供数据可视化、预测分析、异常检测等功能，帮助企业做出数据驱动的决策。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }, {
    id: 4,
    title: '社交媒体管理工具',
    description: '一站式社交媒体管理平台，支持多平台内容发布、数据分析、用户互动等功能，提升社交媒体运营效率。',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['Next.js', 'GraphQL', 'AWS', 'Redis'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }, {
    id: 5,
    title: '智能家居控制系统',
    description: 'IoT智能家居控制平台，支持设备管理、场景自动化、远程控制等功能，打造智能化生活体验。',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    tags: ['React', 'MQTT', 'Arduino', 'Firebase'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }];
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev === 0 ? totalPages - 1 : prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev === totalPages - 1 ? 0 : prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const goToSlide = index => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // 自动播放
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const getVisibleProjects = () => {
    const start = currentIndex * projectsPerPage;
    const end = start + projectsPerPage;
    return projects.slice(start, end);
  };
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            项目展示
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            左右滑动查看更多项目作品，每个项目都体现了我的技术能力和创新思维
          </p>
        </div>

        {/* 滑动容器 */}
        <div className="relative">
          {/* 左右箭头 */}
          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors -translate-x-4" disabled={isAnimating}>
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors translate-x-4" disabled={isAnimating}>
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* 项目卡片容器 */}
          <div className="overflow-hidden mx-12">
            <div ref={sliderRef} className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? '' : ''}`} style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {Array.from({
              length: totalPages
            }).map((_, pageIndex) => <div key={pageIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(pageIndex * projectsPerPage, (pageIndex + 1) * projectsPerPage).map(project => <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                {tag}
                              </span>)}
                          </div>
                          <div className="flex gap-3">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                              <Github className="w-4 h-4" />
                              <span className="text-sm">源码</span>
                            </a>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              <ExternalLink className="w-4 h-4" />
                              <span className="text-sm">演示</span>
                            </a>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>)}
            </div>
          </div>

          {/* 指示器 */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({
            length: totalPages
          }).map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to slide ${index + 1}`}></button>)}
          </div>
        </div>
      </div>
    </section>;
}