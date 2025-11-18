// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ExternalLink, Github, Calendar, Users, Award, BookOpen, Target, Code, Calculator, Rocket, Plus, X, Tag, Image as ImageIcon } from 'lucide-react';

export function ProjectsSection() {
  const [projects, setProjects] = useState([{
    id: 1,
    title: '太空蜘蛛机器人系统',
    description: '针对太空特殊环境航天器维护和星体探索等多任务应用场景，设计并实现适应太空微重力等特殊环境要求的六足机器人系统。通过融合机械设计、运动学建模、智能控制与仿真验证等多学科技术，研究了面向太空极端环境多任务应用场景仿生机器人运动稳定性、环境适应性和系统可靠性等关键技术问题。',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
    tags: ['机器人设计', '运动学建模', '智能控制', '太空应用', 'D-H参数法', 'ESP32控制'],
    features: ['D-H参数法运动学建模', '六足协同控制策略', 'ESP32双核主控', 'Arduino+ROS架构', '太空环境适应性实验', '样机性能测试'],
    award: '全国三等奖、华东赛区一等奖',
    competition: '中国大学生机械工程创新创意大赛',
    year: '2025',
    icon: <Rocket className="text-purple-500" />
  }, {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: '五大湖水资源调控模型',
    description: '针对五大湖水资源调控问题，建立模型平衡水位与利益相关者需求，设计算法并分析敏感性',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop',
    tags: ['数学建模', '算法设计', 'MATLAB'],
    features: ['水资源平衡模型', '利益相关者分析', '敏感性分析', '算法优化'],
    award: 'M奖（国赛二等奖）',
    competition: '美国大学生数学建模竞赛（MCM）',
    year: '2024',
    icon: <Calculator className="text-green-500" />
  }]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    features: '',
    award: '',
    competition: '',
    year: new Date().getFullYear().toString()
  });
  const [formErrors, setFormErrors] = useState({});

  // 表单验证
  const validateForm = () => {
    const errors = {};
    if (!newProject.title.trim()) {
      errors.title = '项目标题不能为空';
    }
    if (newProject.title.length > 50) {
      errors.title = '项目标题不能超过50个字符';
    }
    if (!newProject.description.trim()) {
      errors.description = '项目描述不能为空';
    }
    if (newProject.description.length > 500) {
      errors.description = '项目描述不能超过500个字符';
    }
    if (!newProject.image.trim()) {
      errors.image = '项目图片URL不能为空';
    }
    if (!newProject.competition.trim()) {
      errors.competition = '竞赛/活动名称不能为空';
    }
    if (!newProject.year.trim()) {
      errors.year = '年份不能为空';
    }
    if (newProject.year && (isNaN(newProject.year) || newProject.year.length !== 4 || parseInt(newProject.year) < 2000 || parseInt(newProject.year) > 2030)) {
      errors.year = '请输入有效的年份（2000-2030）';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // 添加新项目
  const handleAddProject = () => {
    if (!validateForm()) return;
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    const tagsArray = newProject.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const featuresArray = newProject.features.split(',').map(feature => feature.trim()).filter(feature => feature);
    const projectToAdd = {
      id: newId,
      title: newProject.title.trim(),
      description: newProject.description.trim(),
      image: newProject.image.trim(),
      tags: tagsArray.length > 0 ? tagsArray : ['未分类'],
      features: featuresArray.length > 0 ? featuresArray : ['项目特点'],
      award: newProject.award.trim() || '无奖项',
      competition: newProject.competition.trim(),
      year: newProject.year.trim(),
      icon: <Code className="text-indigo-500" />
    };
    setProjects([...projects, projectToAdd]);
    resetForm();
  };

  // 重置表单
  const resetForm = () => {
    setNewProject({
      title: '',
      description: '',
      image: '',
      tags: '',
      features: '',
      award: '',
      competition: '',
      year: new Date().getFullYear().toString()
    });
    setFormErrors({});
    setShowAddModal(false);
  };
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

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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
            {project.features.slice(0, 3).map((feature, idx) => <div key={idx} className="flex items-center text-xs text-gray-600">
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            展示我在机器人设计、数学建模等领域的代表性项目成果
          </p>
          
          {/* 添加项目按钮 */}
          <button onClick={() => setShowAddModal(true)} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Plus size={20} className="mr-2" />
            添加新项目
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>

        {/* 项目统计 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{projects.length}+</div>
              <div className="text-sm text-gray-600">项目总数</div>
            </div>
            <div className="w-px h-12 bg-indigo-200 mx-8" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{projects.filter(p => p.award && p.award !== '无奖项').length}+</div>
              <div className="text-sm text-gray-600">获奖项目</div>
            </div>
            <div className="w-px h-12 bg-indigo-200 mx-8" />
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">项目完成率</div>
            </div>
          </div>
        </div>
      </div>

      {/* 添加项目模态框 */}
      {showAddModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">添加新项目</h3>
                <button onClick={resetForm} className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                {/* 项目标题 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    项目标题 <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={newProject.title} onChange={e => setNewProject({
                ...newProject,
                title: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.title ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入项目标题" maxLength={50} />
                  {formErrors.title && <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>}
                  <p className="mt-1 text-xs text-gray-500">{newProject.title.length}/50 字符</p>
                </div>

                {/* 项目描述 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    项目描述 <span className="text-red-500">*</span>
                  </label>
                  <textarea value={newProject.description} onChange={e => setNewProject({
                ...newProject,
                description: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none ${formErrors.description ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入项目描述" rows={4} maxLength={500} />
                  {formErrors.description && <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>}
                  <p className="mt-1 text-xs text-gray-500">{newProject.description.length}/500 字符</p>
                </div>

                {/* 项目图片 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    项目图片URL <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <input type="url" value={newProject.image} onChange={e => setNewProject({
                  ...newProject,
                  image: e.target.value
                })} className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.image ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入图片URL" />
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <ImageIcon size={20} className="text-gray-500" />
                    </div>
                  </div>
                  {formErrors.image && <p className="mt-1 text-sm text-red-600">{formErrors.image}</p>}
                  {newProject.image && <div className="mt-2">
                      <img src={newProject.image} alt="预览" className="w-full h-32 object-cover rounded-lg" onError={e => {
                  e.target.style.display = 'none';
                }} />
                    </div>}
                </div>

                {/* 技术标签 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    技术标签
                  </label>
                  <div className="flex space-x-2">
                    <input type="text" value={newProject.tags} onChange={e => setNewProject({
                  ...newProject,
                  tags: e.target.value
                })} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" placeholder="请输入技术标签，用逗号分隔" />
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Tag size={20} className="text-gray-500" />
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">例如：机器人设计,运动学建模,智能控制</p>
                </div>

                {/* 项目特点 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    项目特点
                  </label>
                  <textarea value={newProject.features} onChange={e => setNewProject({
                ...newProject,
                features: e.target.value
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none" placeholder="请输入项目特点，用逗号分隔" rows={3} />
                  <p className="mt-1 text-xs text-gray-500">例如：D-H参数法运动学建模,六足协同控制策略,ESP32双核主控</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 竞赛/活动名称 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      竞赛/活动名称 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newProject.competition} onChange={e => setNewProject({
                  ...newProject,
                  competition: e.target.value
                })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.competition ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入竞赛或活动名称" />
                    {formErrors.competition && <p className="mt-1 text-sm text-red-600">{formErrors.competition}</p>}
                  </div>

                  {/* 年份 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      年份 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newProject.year} onChange={e => setNewProject({
                  ...newProject,
                  year: e.target.value
                })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.year ? 'border-red-500' : 'border-gray-300'}`} placeholder="例如：2024" maxLength={4} />
                    {formErrors.year && <p className="mt-1 text-sm text-red-600">{formErrors.year}</p>}
                  </div>
                </div>

                {/* 奖项 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    奖项
                  </label>
                  <input type="text" value={newProject.award} onChange={e => setNewProject({
                ...newProject,
                award: e.target.value
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" placeholder="请输入获得的奖项（可选）" />
                </div>
              </div>

              {/* 按钮组 */}
              <div className="flex space-x-3 mt-6">
                <button onClick={resetForm} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  取消
                </button>
                <button onClick={handleAddProject} className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                  添加项目
                </button>
              </div>
            </div>
          </div>
        </div>}
    </section>;
}