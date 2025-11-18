// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

export function ProjectsSection() {
  const projects = [{
    id: 1,
    title: '机械臂设计项目',
    description: '设计并制造了一台六轴机械臂，用于自动化装配线。项目包括机械结构设计、控制系统开发和运动学算法实现。',
    image: 'https://picsum.photos/seed/project1/400/300.jpg',
    tags: ['SolidWorks', 'Arduino', 'C++', '机械设计'],
    date: '2023年6月',
    team: '团队项目',
    github: '#',
    demo: '#'
  }, {
    id: 2,
    title: '智能仓储系统',
    description: '开发了一套智能仓储管理系统，包括自动化立体仓库、AGV小车调度系统和库存管理软件。',
    image: 'https://picsum.photos/seed/project2/400/300.jpg',
    tags: ['AutoCAD', 'PLC', 'Python', '数据库'],
    date: '2023年3月',
    team: '团队项目',
    github: '#',
    demo: '#'
  }, {
    id: 3,
    title: '3D打印机改装',
    description: '对现有3D打印机进行改装升级，提升了打印精度和速度。设计了新的挤出机构和热端系统。',
    image: 'https://picsum.photos/seed/project3/400/300.jpg',
    tags: ['3D打印', '机械改装', 'CAD', '电子'],
    date: '2022年12月',
    team: '个人项目',
    github: '#',
    demo: '#'
  }];
  return <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            项目展示
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我参与和主导的机械设计与开发项目
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                      {tag}
                    </span>)}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {project.team}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a href={project.github} className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center">
                    <Github size={16} className="mr-2" />
                    源码
                  </a>
                  <a href={project.demo} className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink size={16} className="mr-2" />
                    演示
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}