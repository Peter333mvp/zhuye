// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ExternalLink, Github, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const filters = [{
    id: 'all',
    name: '全部',
    color: 'bg-gray-500'
  }, {
    id: 'competition',
    name: '竞赛',
    color: 'bg-red-500'
  }, {
    id: 'research',
    name: '科研',
    color: 'bg-blue-500'
  }, {
    id: 'coursework',
    name: '课程',
    color: 'bg-green-500'
  }];
  const projects = [{
    id: 1,
    title: '全国大学生机械创新设计大赛',
    description: '设计并制造了一种新型的智能助残康复设备，获得了全国二等奖。项目涉及机械结构设计、传感器集成、控制系统开发等多个技术领域。',
    category: 'competition',
    image: 'https://picsum.photos/seed/mechanical-innovation/600/400.jpg',
    tags: ['机械设计', '智能控制', '康复设备'],
    date: '2023年8月',
    award: '全国二等奖',
    details: {
      role: '机械设计师 & 控制系统开发',
      technologies: ['SolidWorks', 'Arduino', '传感器技术', 'PID控制'],
      achievements: ['完成设备整体结构设计', '开发智能控制系统', '实现人机交互界面', '通过国家级竞赛评审'],
      challenges: '在有限时间内完成从概念设计到实物制作的全过程，确保设备的稳定性和安全性。',
      solution: '采用模块化设计理念，分阶段验证各个子系统，最终集成测试确保整体性能。'
    },
    links: {
      demo: '#',
      github: '#',
      report: '#'
    }
  }, {
    id: 2,
    title: '智能制造生产线优化研究',
    description: '参与校企合作项目，针对某汽车零部件生产线进行效率优化，通过数据分析和仿真技术，将生产效率提升了15%。',
    category: 'research',
    image: 'https://picsum.photos/seed/manufacturing-optimization/600/400.jpg',
    tags: ['智能制造', '数据分析', '产线优化'],
    date: '2023年6月',
    award: '优秀实习生',
    details: {
      role: '数据分析助理',
      technologies: ['Python', 'MATLAB', '仿真技术', '统计分析'],
      achievements: ['收集并分析生产数据', '建立产线仿真模型', '提出优化方案', '验证优化效果'],
      challenges: '处理大量生产数据，识别瓶颈环节，提出可行的优化方案。',
      solution: '运用数据挖掘技术识别关键影响因素，通过仿真验证优化方案的有效性。'
    },
    links: {
      demo: '#',
      github: '#',
      report: '#'
    }
  }, {
    id: 3,
    title: '机械原理课程设计 - 齿轮传动系统',
    description: '独立完成齿轮传动系统的设计计算、结构设计和三维建模，包括强度校核、运动仿真等完整设计流程。',
    category: 'coursework',
    image: 'https://picsum.photos/seed/gear-system/600/400.jpg',
    tags: ['机械设计', '齿轮传动', 'CAD建模'],
    date: '2023年5月',
    award: '课程优秀设计',
    details: {
      role: '独立设计师',
      technologies: ['AutoCAD', 'SolidWorks', 'ANSYS', '机械设计手册'],
      achievements: ['完成传动方案设计', '进行强度校核计算', '建立三维模型', '编写设计说明书'],
      challenges: '在满足设计要求的前提下，优化传动系统的结构紧凑性和效率。',
      solution: '采用多目标优化方法，平衡各项性能指标，最终获得最优设计方案。'
    },
    links: {
      demo: '#',
      github: '#',
      report: '#'
    }
  }, {
    id: 4,
    title: '智能仓储机器人路径规划算法',
    description: '研究并实现了基于A*算法的智能仓储机器人路径规划，通过改进算法提高了路径规划的效率和准确性。',
    category: 'research',
    image: 'https://picsum.photos/seed/warehouse-robot/600/400.jpg',
    tags: ['机器人', '路径规划', '算法优化'],
    date: '2023年4月',
    award: '校级优秀论文',
    details: {
      role: '算法研究员',
      technologies: ['Python', 'ROS', 'A*算法', '机器学习'],
      achievements: ['改进传统A*算法', '实现动态避障功能', '开发仿真测试平台', '发表学术论文'],
      challenges: '在复杂仓储环境下实现实时、高效的路径规划。',
      solution: '结合机器学习技术预测动态障碍物，提前规划备选路径，提高系统的鲁棒性。'
    },
    links: {
      demo: '#',
      github: '#',
      report: '#'
    }
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  const minSwipeDistance = 50;
  const onTouchStart = e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNextProject();
    }
    if (isRightSwipe) {
      handlePrevProject();
    }
  };
  const handlePrevProject = () => {
    setCurrentProjectIndex(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };
  const handleNextProject = () => {
    setCurrentProjectIndex(prev => (prev + 1) % filteredProjects.length);
  };
  const openProjectModal = project => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            项目经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            展示我在机械工程领域的竞赛、科研和课程项目经历
          </p>
        </div>

        {/* 项目分类筛选 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => <button key={filter.id} onClick={() => {
          setActiveFilter(filter.id);
          setCurrentProjectIndex(0);
        }} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id ? `${filter.color} text-white shadow-lg transform scale-105` : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:shadow-md'}`}>
              {filter.name}
            </button>)}
        </div>

        {/* 项目展示轮播 */}
        <div className="relative">
          {filteredProjects.length > 0 ? <div className="bg-white rounded-2xl shadow-xl overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
              {/* 项目图片 */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img src={filteredProjects[currentProjectIndex].image} alt={filteredProjects[currentProjectIndex].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* 项目标题和日期 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">
                      {filteredProjects[currentProjectIndex].title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span className="text-sm">
                        {filteredProjects[currentProjectIndex].date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-yellow-400" />
                    <span className="text-sm text-yellow-400">
                      {filteredProjects[currentProjectIndex].award}
                    </span>
                  </div>
                </div>
              </div>

              {/* 项目信息 */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {filteredProjects[currentProjectIndex].description}
                </p>
                
                {/* 项目标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {filteredProjects[currentProjectIndex].tags.map(tag => <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      {tag}
                    </span>)}
                </div>

                {/* 操作按钮 */}
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => openProjectModal(filteredProjects[currentProjectIndex])} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                    查看详情
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                    <Github size={16} className="mr-2" />
                    源码
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink size={16} className="mr-2" />
                    演示
                  </button>
                </div>
              </div>

              {/* 轮播控制按钮 */}
              <button onClick={handlePrevProject} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300">
                <ChevronLeft size={20} />
              </button>
              <button onClick={handleNextProject} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300">
                <ChevronRight size={20} />
              </button>
            </div> : <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="text-gray-500 text-lg">
                该分类下暂无项目
              </div>
            </div>}

          {/* 轮播指示器 */}
          {filteredProjects.length > 1 && <div className="flex justify-center mt-6 space-x-2">
              {filteredProjects.map((_, index) => <button key={index} onClick={() => setCurrentProjectIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentProjectIndex ? 'bg-indigo-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`} />)}
            </div>}
        </div>

        {/* 项目详情模态框 */}
        {isModalOpen && selectedProject && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              {/* 模态框头部 */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button onClick={closeModal} className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                  ×
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{selectedProject.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award size={16} className="text-yellow-400" />
                      <span className="text-yellow-400">{selectedProject.award}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 模态框内容 */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 左侧：项目信息 */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        项目描述
                      </h4>
                      <p className="text-gray-600">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        我的角色
                      </h4>
                      <p className="text-gray-600">
                        {selectedProject.details.role}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        技术栈
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                            {tech}
                          </span>)}
                      </div>
                    </div>
                  </div>

                  {/* 右侧：成果和挑战 */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        主要成果
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.details.achievements.map((achievement, index) => <li key={index} className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>)}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        挑战与解决方案
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-1">
                            挑战
                          </h5>
                          <p className="text-gray-600 text-sm">
                            {selectedProject.details.challenges}
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 mb-1">
                            解决方案
                          </h5>
                          <p className="text-gray-600 text-sm">
                            {selectedProject.details.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 底部链接 */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                      <Github size={16} className="mr-2" />
                      查看源码
                    </button>
                    <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink size={16} className="mr-2" />
                      在线演示
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                      查看报告
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </section>;
}