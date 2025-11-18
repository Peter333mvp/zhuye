// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projects = [{
    id: 1,
    title: '电商平台',
    description: '基于React和Node.js的全栈电商解决方案，支持用户认证、支付集成和实时库存管理。',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    date: '2024年1月'
  }, {
    id: 2,
    title: '任务管理系统',
    description: '企业级任务管理平台，支持团队协作、进度跟踪和数据分析功能。',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    date: '2023年11月'
  }, {
    id: 3,
    title: '数据可视化工具',
    description: '交互式数据可视化平台，支持多种图表类型和实时数据更新。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    tags: ['D3.js', 'React', 'WebSocket'],
    category: 'frontend',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    date: '2023年9月'
  }, {
    id: 4,
    title: 'API网关服务',
    description: '微服务架构的API网关，提供路由、认证、限流和监控功能。',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    tags: ['Go', 'Docker', 'Kubernetes'],
    category: 'backend',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    date: '2023年7月'
  }];
  const categories = [{
    id: 'all',
    label: '全部'
  }, {
    id: 'fullstack',
    label: '全栈'
  }, {
    id: 'frontend',
    label: '前端'
  }, {
    id: 'backend',
    label: '后端'
  }];
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);
  return <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                项目作品
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                展示我参与开发的一些代表性项目
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
                {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}`}>
                    {category.label}
                  </button>)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={16} className="mr-1" />
                      {project.date}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>)}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        <Github size={20} className="mr-1" />
                        源码
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        <ExternalLink size={20} className="mr-1" />
                        演示
                      </a>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>;
}