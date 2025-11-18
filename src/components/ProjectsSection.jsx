// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Github, ExternalLink, Calendar, Users, Code } from 'lucide-react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: '电商平台重构',
    description: '使用React和Node.js重构大型电商平台，提升性能50%，优化用户体验。采用微服务架构，支持百万级并发访问。',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://example.com',
    date: '2024年1月',
    team: '5人团队',
    featured: true
  }, {
    id: 2,
    title: 'AI智能助手',
    description: '基于GPT的智能对话系统，集成自然语言处理技术，为企业提供24/7客户服务支持，提升客户满意度40%。',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['Python', 'TensorFlow', 'NLP'],
    category: 'ai',
    github: 'https://github.com',
    demo: 'https://example.com',
    date: '2023年11月',
    team: '3人团队',
    featured: true
  }, {
    id: 3,
    title: '移动社交应用',
    description: '跨平台社交应用开发，支持实时聊天、动态发布、位置分享等功能。累计用户10万+，日活跃用户2万+。',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
    github: 'https://github.com',
    demo: 'https://example.com',
    date: '2023年9月',
    team: '4人团队',
    featured: false
  }, {
    id: 4,
    title: '数据可视化平台',
    description: '企业级数据分析和可视化平台，支持多维度数据分析，实时报表生成，帮助企业做出数据驱动的决策。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'D3.js', 'ECharts'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://example.com',
    date: '2023年7月',
    team: '2人团队',
    featured: false
  }, {
    id: 5,
    title: 'IoT智能家居系统',
    description: '基于物联网的智能家居控制系统，支持设备联动、场景模式、远程控制等功能，提升生活便利性。',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    tags: ['Arduino', 'MQTT', 'React'],
    category: 'iot',
    github: 'https://github.com',
    demo: 'https://example.com',
    date: '2023年5月',
    team: '3人团队',
    featured: false
  }, {
    id: 6,
    title: '区块链投票系统',
    description: '基于区块链技术的安全投票系统，确保投票过程的透明性和不可篡改性，适用于各种选举场景。',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    tags: ['Solidity', 'Web3.js', 'Ethereum'],
    category: 'blockchain',
    github: 'https://github.com',
    demo: 'https://example.com',
    date: '2023年3月',
    team: '2人团队',
    featured: false
  }];
  const filters = [{
    id: 'all',
    name: '全部项目',
    icon: <Code size={16} />
  }, {
    id: 'web',
    name: 'Web应用',
    icon: <Code size={16} />
  }, {
    id: 'mobile',
    name: '移动应用',
    icon: <Code size={16} />
  }, {
    id: 'ai',
    name: 'AI项目',
    icon: <Code size={16} />
  }, {
    id: 'iot',
    name: '物联网',
    icon: <Code size={16} />
  }, {
    id: 'blockchain',
    name: '区块链',
    icon: <Code size={16} />
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精选项目
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            展示我最引以为豪的作品，每个项目都体现了技术创新和实用价值的完美结合
          </p>
        </div>

        {/* 项目筛选器 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}>
              {filter.icon}
              {filter.name}
            </button>)}
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${project.featured ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
              {/* 项目图片 */}
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 特色标签 */}
                {project.featured && <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                    精选
                  </div>}
                
                {/* 悬停操作按钮 */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors">
                    <Github size={18} className="text-gray-900" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors">
                    <ExternalLink size={18} className="text-gray-900" />
                  </a>
                </div>
              </div>

              {/* 项目信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* 项目元信息 */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>

        {/* 查看更多按钮 */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg font-medium">
            查看更多项目
          </button>
        </div>
      </div>
    </section>;
}