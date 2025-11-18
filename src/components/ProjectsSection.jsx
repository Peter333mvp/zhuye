// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ExternalLink, Github, Calendar, Tag, Trophy, Cpu, Calculator, Wrench } from 'lucide-react';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projects = [{
    id: 1,
    title: '中国机器人大赛 - 篮球机器人',
    description: '负责篮球机器人自动拾球系统设计与实现，开发路径规划算法优化运动轨迹，实现多任务并行处理控制系统，设计定点投篮机构提高命中率。',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    tags: ['机器人控制', '路径规划', '多任务处理', '机械设计'],
    category: 'competition',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    date: '2023年8月',
    award: '全国亚军',
    icon: Trophy,
    details: {
      technical: ['自动拾球系统设计与实现', '路径规划算法开发', '多任务并行处理控制系统', '定点投篮机构设计'],
      achievements: ['获得全国亚军荣誉', '实现高精度自动拾球', '优化运动轨迹提升效率', '投篮命中率显著提高']
    }
  }, {
    id: 2,
    title: '一维伺服工作平台设计',
    description: '完成零件选型计算与参数设计，使用SolidWorks进行三维建模，进行运动学仿真与性能分析，完成工程图纸绘制与技术文档编写。',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    tags: ['SolidWorks', '机械设计', '运动学分析', '工程制图'],
    category: 'project',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    date: '2022年12月',
    award: '课程设计优秀项目',
    icon: Wrench,
    details: {
      technical: ['零件选型计算与参数设计', 'SolidWorks三维建模', '运动学仿真与性能分析', '工程图纸绘制'],
      achievements: ['完成完整的设计方案', '通过性能验证测试', '获得优秀项目评价', '技术文档完整规范']
    }
  }, {
    id: 3,
    title: '美国大学生数学建模竞赛',
    description: '建立水资源调控数学模型，进行算法分析与优化，运用MATLAB进行数据仿真，撰写英文技术论文，解决实际水资源分配问题。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    tags: ['数学建模', 'MATLAB', '数据分析', '算法优化'],
    category: 'competition',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    date: '2023年2月',
    award: 'M奖（一等奖）',
    icon: Calculator,
    details: {
      technical: ['水资源调控数学模型建立', '算法分析与优化', 'MATLAB数据仿真', '英文技术论文撰写'],
      achievements: ['获得M奖（一等奖）', '模型创新性强', '算法效率高', '论文质量优秀']
    }
  }];
  const categories = [{
    id: 'all',
    label: '全部项目'
  }, {
    id: 'competition',
    label: '竞赛项目'
  }, {
    id: 'project',
    label: '课程项目'
  }];
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);
  const getCategoryColor = category => {
    switch (category) {
      case 'competition':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'project':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            竞赛与项目经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            展示我在机器人设计、工程建模和数学建模方面的代表性项目成果
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}`}>
                {category.label}
              </button>)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {filteredProjects.map(project => {
          const ProjectIcon = project.icon;
          return <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="md:flex">
                <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  {project.award && <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.award}
                    </div>}
                </div>
                
                <div className="md:w-3/5 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <ProjectIcon size={24} className="mr-3 text-blue-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-1" />
                          {project.date}
                        </div>
                      </div>
                    </div>
                    
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(project.category)}`}>
                      {project.category === 'competition' ? '竞赛项目' : '课程项目'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">技术要点：</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">核心技术：</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.details.technical.slice(0, 2).map((item, index) => <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {item}
                          </li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">主要成果：</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.details.achievements.slice(0, 2).map((item, index) => <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            {item}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4 border-t border-gray-100">
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
              </div>
            </div>;
        })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-lg">
            <Cpu size={20} className="mr-2 text-blue-600" />
            <span className="text-blue-800 font-medium">
              通过项目实践，将理论知识转化为实际工程能力
            </span>
          </div>
        </div>
      </div>
    </section>;
}