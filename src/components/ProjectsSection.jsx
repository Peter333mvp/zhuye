// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ExternalLink, Github, Calendar, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showProjectDetail, setShowProjectDetail] = useState(null);
  const filters = [{
    id: 'all',
    name: '全部',
    color: 'bg-gray-500'
  }, {
    id: 'competition',
    name: '竞赛',
    color: 'bg-blue-500'
  }, {
    id: 'research',
    name: '科研',
    color: 'bg-green-500'
  }, {
    id: 'course',
    name: '课程',
    color: 'bg-purple-500'
  }];
  const projects = [{
    id: 1,
    title: '全国大学生机械创新设计大赛',
    description: '设计并制作了一种新型的智能助残轮椅，具备自动避障、语音控制、健康监测等功能，获得全国二等奖。',
    category: 'competition',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    tags: ['机械设计', '智能控制', '人机交互'],
    date: '2023.08',
    award: '全国二等奖',
    team: '5人团队',
    details: {
      role: '机械结构设计组长',
      tech: ['SolidWorks', 'Arduino', '传感器融合'],
      achievements: ['设计新型传动机构', '实现多模态控制', '优化用户体验']
    }
  }, {
    id: 2,
    title: '基于机器学习的零件缺陷检测系统',
    description: '开发了一套基于深度学习的工业零件表面缺陷检测系统，能够实时识别和分类多种缺陷类型，检测准确率达到95%以上。',
    category: 'research',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    tags: ['机器学习', '计算机视觉', '工业检测'],
    date: '2023.12',
    award: '优秀科研项目',
    team: '3人团队',
    details: {
      role: '算法工程师',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      achievements: ['构建数据集', '优化模型性能', '部署到产线']
    }
  }, {
    id: 3,
    title: '智能仓储机器人系统',
    description: '设计并实现了一套智能仓储机器人系统，包括路径规划、货物识别、自动搬运等功能，提高了仓储效率30%。',
    category: 'course',
    image: 'https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?w=600',
    tags: ['机器人学', '路径规划', '自动化'],
    date: '2023.06',
    award: '课程设计优秀',
    team: '4人团队',
    details: {
      role: '控制系统设计',
      tech: ['ROS', 'SLAM', 'PID控制'],
      achievements: ['实现自主导航', '多机器人协作', '实时监控']
    }
  }, {
    id: 4,
    title: '新型环保材料制备工艺研究',
    description: '研究了一种新型的生物降解材料制备工艺，通过优化反应条件和配方，显著提升了材料的力学性能和降解性能。',
    category: 'research',
    image: 'https://images.unsplash.com/photo-1532187863486-abf98db72687?w=600',
    tags: ['材料科学', '环保技术', '工艺优化'],
    date: '2023.10',
    award: '创新成果奖',
    team: '2人团队',
    details: {
      role: '实验设计与分析',
      tech: ['材料表征', '数据分析', '工艺优化'],
      achievements: ['优化配方', '提升性能', '申请专利']
    }
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  const handleProjectClick = project => {
    setShowProjectDetail(project);
  };
  const handlePrevProject = () => {
    setCurrentProjectIndex(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };
  const handleNextProject = () => {
    setCurrentProjectIndex(prev => (prev + 1) % filteredProjects.length);
  };
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            项目经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            参与各类竞赛、科研和课程项目，涵盖机械设计、智能控制、机器学习等多个领域
          </p>
        </div>

        {/* 项目分类筛选 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => <button key={filter.id} onClick={() => {
          setActiveFilter(filter.id);
          setCurrentProjectIndex(0);
        }} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id ? `${filter.color} text-white shadow-lg transform scale-105` : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'}`}>
              {filter.name}
            </button>)}
        </div>

        {/* 项目展示轮播 */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            <button onClick={handlePrevProject} className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" disabled={filteredProjects.length <= 1}>
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            
            <div className="w-full max-w-4xl mx-12">
              {filteredProjects.length > 0 && <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500" onMouseEnter={() => setHoveredProject(filteredProjects[currentProjectIndex].id)} onMouseLeave={() => setHoveredProject(null)}>
                  <div className="relative h-64 overflow-hidden">
                    <img src={filteredProjects[currentProjectIndex].image} alt={filteredProjects[currentProjectIndex].title} className="w-full h-full object-cover transition-transform duration-700" style={{
                  transform: hoveredProject === filteredProjects[currentProjectIndex].id ? 'scale(1.1)' : 'scale(1)'
                }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {filteredProjects[currentProjectIndex].title}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <Calendar size={16} className="mr-1" />
                        <span className="mr-4">{filteredProjects[currentProjectIndex].date}</span>
                        <Award size={16} className="mr-1" />
                        <span className="mr-4">{filteredProjects[currentProjectIndex].award}</span>
                        <Users size={16} className="mr-1" />
                        <span>{filteredProjects[currentProjectIndex].team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {filteredProjects[currentProjectIndex].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {filteredProjects[currentProjectIndex].tags.map(tag => <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>)}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <button onClick={() => handleProjectClick(filteredProjects[currentProjectIndex])} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium">
                          查看详情
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-300 font-medium">
                          <Github size={20} />
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">
                        {currentProjectIndex + 1} / {filteredProjects.length}
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
            
            <button onClick={handleNextProject} className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" disabled={filteredProjects.length <= 1}>
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* 项目详情弹窗 */}
        {showProjectDetail && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowProjectDetail(null)}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="relative h-48 overflow-hidden">
                <img src={showProjectDetail.image} alt={showProjectDetail.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button onClick={() => setShowProjectDetail(null)} className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300">
                  ×
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {showProjectDetail.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Calendar size={20} className="mx-auto mb-2 text-gray-600" />
                    <div className="text-sm text-gray-600">项目时间</div>
                    <div className="font-semibold">{showProjectDetail.date}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Award size={20} className="mx-auto mb-2 text-gray-600" />
                    <div className="text-sm text-gray-600">获得奖项</div>
                    <div className="font-semibold">{showProjectDetail.award}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users size={20} className="mx-auto mb-2 text-gray-600" />
                    <div className="text-sm text-gray-600">团队规模</div>
                    <div className="font-semibold">{showProjectDetail.team}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">项目描述</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {showProjectDetail.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">担任角色</h4>
                  <p className="text-gray-600">{showProjectDetail.details.role}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">技术栈</h4>
                  <div className="flex flex-wrap gap-2">
                    {showProjectDetail.details.tech.map(tech => <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                        {tech}
                      </span>)}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">主要成果</h4>
                  <ul className="space-y-2">
                    {showProjectDetail.details.achievements.map((achievement, index) => <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>)}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium">
                    <ExternalLink size={20} className="inline mr-2" />
                    查看项目
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-300 font-medium">
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </section>;
}