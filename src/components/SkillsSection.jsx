// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Code, Database, Cpu, Plus, Edit2, Trash2, Save, X, Globe, Briefcase, Bot, ChevronRight, Circle } from 'lucide-react';

export function SkillsSection() {
  const [skills, setSkills] = useState({
    language: [{
      id: 1,
      name: '英语CET-4',
      level: 85,
      description: '大学英语四级证书'
    }],
    office: [{
      id: 2,
      name: 'Office系列',
      level: 90,
      description: 'Word, Excel, PowerPoint等办公软件'
    }, {
      id: 3,
      name: 'PS/PR',
      level: 75,
      description: 'Photoshop和Premiere Pro图像视频处理'
    }, {
      id: 4,
      name: 'AI大模型应用',
      level: 80,
      description: 'ChatGPT, Claude等AI工具应用'
    }],
    technical: [{
      id: 5,
      name: 'SolidWorks',
      level: 85,
      description: '三维机械设计软件'
    }, {
      id: 6,
      name: 'AutoCAD',
      level: 80,
      description: '二维制图软件'
    }, {
      id: 7,
      name: 'CATIA',
      level: 70,
      description: '高端CAD/CAE/CAM软件'
    }, {
      id: 8,
      name: 'MATLAB',
      level: 75,
      description: '数值计算与仿真软件'
    }, {
      id: 9,
      name: 'Visual Studio',
      level: 70,
      description: '集成开发环境'
    }]
  });
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 50,
    category: 'language',
    description: ''
  });
  const categories = [{
    key: 'language',
    name: '语言技能',
    icon: <Globe size={24} />,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  }, {
    key: 'office',
    name: '办公技能',
    icon: <Briefcase size={24} />,
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  }, {
    key: 'technical',
    name: '技术技能',
    icon: <Bot size={24} />,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  }];
  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      const skill = {
        id: Date.now(),
        name: newSkill.name,
        level: newSkill.level,
        description: newSkill.description
      };
      setSkills({
        ...skills,
        [newSkill.category]: [...skills[newSkill.category], skill]
      });
      setNewSkill({
        name: '',
        level: 50,
        category: 'language',
        description: ''
      });
      setIsAddingSkill(false);
    }
  };
  const handleEditSkill = (category, skill) => {
    setEditingSkill({
      category,
      skill
    });
    setNewSkill({
      name: skill.name,
      level: skill.level,
      category: category,
      description: skill.description
    });
  };
  const handleUpdateSkill = () => {
    if (editingSkill && newSkill.name.trim()) {
      const updatedSkills = {
        ...skills,
        [editingSkill.category]: skills[editingSkill.category].map(skill => skill.id === editingSkill.skill.id ? {
          ...skill,
          name: newSkill.name,
          level: newSkill.level,
          description: newSkill.description
        } : skill)
      };
      setSkills(updatedSkills);
      setEditingSkill(null);
      setNewSkill({
        name: '',
        level: 50,
        category: 'language',
        description: ''
      });
    }
  };
  const handleDeleteSkill = (category, skillId) => {
    setSkills({
      ...skills,
      [category]: skills[category].filter(skill => skill.id !== skillId)
    });
  };
  const cancelEdit = () => {
    setEditingSkill(null);
    setIsAddingSkill(false);
    setNewSkill({
      name: '',
      level: 50,
      category: 'language',
      description: ''
    });
  };
  return <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            专业技能
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            全方位技能树展示，涵盖语言、办公和技术三大领域
          </p>
        </div>

        {/* 添加技能按钮 */}
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsAddingSkill(true)} className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
            <Plus size={20} />
            <span>添加技能</span>
          </button>
        </div>

        {/* 添加/编辑技能表单 */}
        {(isAddingSkill || editingSkill) && <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {editingSkill ? '编辑技能' : '添加新技能'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  技能名称
                </label>
                <input type="text" value={newSkill.name} onChange={e => setNewSkill({
              ...newSkill,
              name: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="输入技能名称" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  熟练程度 ({newSkill.level}%)
                </label>
                <input type="range" min="0" max="100" value={newSkill.level} onChange={e => setNewSkill({
              ...newSkill,
              level: parseInt(e.target.value)
            })} className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  技能类别
                </label>
                <select value={newSkill.category} onChange={e => setNewSkill({
              ...newSkill,
              category: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  {categories.map(cat => <option key={cat.key} value={cat.key}>
                      {cat.name}
                    </option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  技能描述
                </label>
                <input type="text" value={newSkill.description} onChange={e => setNewSkill({
              ...newSkill,
              description: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="输入技能描述" />
              </div>
            </div>
            <div className="flex space-x-3 mt-4">
              <button onClick={editingSkill ? handleUpdateSkill : handleAddSkill} className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                <Save size={20} />
                <span>{editingSkill ? '更新' : '保存'}</span>
              </button>
              <button onClick={cancelEdit} className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <X size={20} />
                <span>取消</span>
              </button>
            </div>
          </div>}

        {/* 技能树发散展示 */}
        <div className="relative">
          {/* 中心节点 */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <Code size={40} className="mx-auto mb-2" />
                  <p className="text-sm font-bold">技能树</p>
                </div>
              </div>
              {/* 连接线 */}
              <div className="absolute top-16 left-32 w-64 h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
              <div className="absolute top-16 right-32 w-64 h-0.5 bg-gradient-to-l from-indigo-300 to-transparent"></div>
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-indigo-300 to-transparent"></div>
            </div>
          </div>

          {/* 分支节点 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, categoryIndex) => {
            const categorySkills = skills[category.key];
            return <div key={category.key} className="relative">
                {/* 分类主节点 */}
                <div className={`relative mb-6 ${categoryIndex === 0 ? 'lg:mr-auto lg:ml-0' : categoryIndex === 1 ? 'lg:mx-auto' : 'lg:ml-auto lg:mr-0'}`}>
                  <div className={`w-24 h-24 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-xl mx-auto ${category.bgColor} border-4 ${category.borderColor}`}>
                    <div className="text-center text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-center mt-3 text-lg font-semibold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-center text-sm text-gray-500">
                    {categorySkills.length} 项技能
                  </p>
                </div>

                {/* 技能分支 */}
                <div className="space-y-3">
                  {categorySkills.map((skill, skillIndex) => {
                  const angle = skillIndex * 30 - 30; // 计算分支角度
                  return <div key={skill.id} className={`relative ${category.bgColor} ${category.borderColor} border rounded-lg p-4 hover:shadow-lg transition-all duration-300 group`}>
                      {/* 连接线装饰 */}
                      <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b ${category.color.replace('from-', 'from-').replace('to-', 'to-')}`}></div>
                      
                      {/* 操作按钮 */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-1">
                        <button onClick={() => handleEditSkill(category.key, skill)} className="p-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                          <Edit2 size={12} />
                        </button>
                        <button onClick={() => handleDeleteSkill(category.key, skill.id)} className="p-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300">
                          <Trash2 size={12} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 text-sm">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            {skill.description}
                          </p>
                        </div>
                        <div className="ml-3 text-right">
                          <div className="text-lg font-bold text-gray-700">
                            {skill.level}%
                          </div>
                          <div className="w-12 h-1 bg-gray-200 rounded-full mt-1">
                            <div className={`h-1 rounded-full bg-gradient-to-r ${category.color}`} style={{
                            width: `${skill.level}%`
                          }}></div>
                          </div>
                        </div>
                      </div>
                    </div>;
                })}
                </div>
              </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}