// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ExternalLink, Github, Calendar, Users, Award, BookOpen, Target, Code, Calculator, Rocket } from 'lucide-react';

export function ProjectsSection() {
  const projects = [{
    title: '太空蜘蛛机器人系统',
    description: '针对太空特殊环境航天器维护和星体探索等多任务应用场景，设计并实现适应太空微重力等特殊环境要求的六足机器人系统',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
    tags: ['机器人设计', '运动学建模', '智能控制', '太空应用'],
    features: ['D-H参数法运动学建模', '六足协同控制策略', 'ESP32双核主控', 'Arduino+ROS架构'],
    award: '全国三等奖、华东赛区一等奖',
    competition: '中国大学生机械工程创新创意大赛',
    year: '2025',
    icon: <Rocket className="text-purple-500" />
  }, {
    title: '篮球机器人系统',
    description: '参与篮球机器人组比赛，机器人具备自动拾球、路径规划、多任务并行处理、定点投篮等功能',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=300&fit=crop',
    tags: ['机器人竞赛', '机械设计', '自动控制'],
    features: ['自动拾球系统', '路径规划算法', '多任务并行处理', '精准投篮控制'],
    award: '亚军（国赛二等奖）',
    competition: '中国机器人大赛暨ROBOTCUP世界杯中国赛',
    year: '2024',
    icon: <Award className="text-yellow-500" />
  }, {
    title: '一维伺服工作平台',
    description: '基于功能设想与草图，选用电机、丝杠导轨等标准件，完成非标零件与整体平台设计',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
    tags: ['机械设计', 'SolidWorks', '课程设计'],
    features: ['零件选型计算', 'SolidWorks建模', '装配图绘制', '优秀课程设计'],
    award: '优秀',
    competition: '课程设计',
    year: '2024',
    icon: <Code className="text-blue-500" />
  }, {
    title: '五大湖水资源调控模型',
    description: '针对五大湖水资源调控问题，建立模型平衡水位与利益相关者需求，设计算法并分析敏感性',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop',
    tags: ['数学建模', '算法设计', 'MATLAB'],
    features: ['水资源平衡模型', '利益相关者分析', '敏感性分析', '算法优化'],
    award: 'M奖（国赛二等奖）',
    competition: '美国大学生数学建模竞赛（MCM）',
    year: '2024',
    icon: <Calculator className="text-green-500" />
  }];
  const ProjectCard = ({
    project,
    index
  }) => {
    return <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200">
        {/* 项目图片 */}
        <div className="relative h-48 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* 奖项标签 */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
              <span className="text-xs font-bold text-yellow-600 flex items-center">
                <Award size={12} className="mr-1" />
                {project.award}
              </span>
            </div>
          </div>

          {/* 年份标签 */}
          <div className="absolute top-4 left-4">
            <div className="bg-indigo-600/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
              <span className="text-xs font-bold text-white">
                {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* 项目内容 */}
        <div className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* 竞赛名称 */}
          <div className="text-xs font-semibold text-indigo-600 mb-3">
            {project.competition}
          </div>

          {/* 技术标签 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {tag}
              </span>)}
          </div>

          {/* 项目特点 */}
          <div className="space-y-2">
            {project.features.slice(0, 2).map((feature, idx) => <div key={idx} className="flex items-center text-xs text-gray-600">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" />
                {feature}
              </div>)}
          </div>
        </div>
      </div>;
  };
  return <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我的项目
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            展示我在机器人设计、数学建模等领域的代表性项目成果
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
        </div>

        {/* 项目统计 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4+</div>
              <div className="text-sm text-gray-600">获奖项目</div>
            </div>
            <div className="w-px h-12 bg-indigo-200 mx-8" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
              <div className="text-sm text-gray-600">国家级奖项</div>
            </div>
            <div className="w-px h-12 bg-indigo-200 mx-8" />
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">项目完成率</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}