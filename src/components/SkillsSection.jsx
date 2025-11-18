// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Code, Database, Cpu, Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export function SkillsSection() {
  const [skills, setSkills] = useState([{
    id: 1,
    name: 'Python',
    level: 90,
    category: 'programming',
    icon: <Code size={24} />,
    color: 'bg-blue-500'
  }, {
    id: 2,
    name: 'C++',
    level: 85,
    category: 'programming',
    icon: <Code size={24} />,
    color: 'bg-purple-500'
  }, {
    id: 3,
    name: 'MATLAB',
    level: 80,
    category: 'programming',
    icon: <Database size={24} />,
    color: 'bg-green-500'
  }, {
    id: 4,
    name: 'SolidWorks',
    level: 75,
    category: 'design',
    icon: <Cpu size={24} />,
    color: 'bg-orange-500'
  }, {
    id: 5,
    name: 'AutoCAD',
    level: 70,
    category: 'design',
    icon: <Cpu size={24} />,
    color: 'bg-red-500'
  }, {
    id: 6,
    name: '机器学习',
    level: 85,
    category: 'ai',
    icon: <Database size={24} />,
    color: 'bg-indigo-500'
  }]);
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 50,
    category: 'programming',
    color: 'bg-blue-500'
  });
  const categories = [{
    value: 'programming',
    label: '编程语言',
    icon: <Code size={20} />
  }, {
    value: 'design',
    label: '设计软件',
    icon: <Cpu size={20} />
  }, {
    value: 'ai',
    label: '人工智能',
    icon: <Database size={20} />
  }];
  const colors = [{
    value: 'bg-blue-500',
    label: '蓝色'
  }, {
    value: 'bg-purple-500',
    label: '紫色'
  }, {
    value: 'bg-green-500',
    label: '绿色'
  }, {
    value: 'bg-orange-500',
    label: '橙色'
  }, {
    value: 'bg-red-500',
    label: '红色'
  }, {
    value: 'bg-indigo-500',
    label: '靛蓝'
  }];
  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      const categoryInfo = categories.find(cat => cat.value === newSkill.category);
      const skill = {
        id: Date.now(),
        name: newSkill.name,
        level: newSkill.level,
        category: newSkill.category,
        icon: categoryInfo.icon,
        color: newSkill.color
      };
      setSkills([...skills, skill]);
      setNewSkill({
        name: '',
        level: 50,
        category: 'programming',
        color: 'bg-blue-500'
      });
      setIsAddingSkill(false);
    }
  };
  const handleEditSkill = skill => {
    setEditingSkill(skill);
    setNewSkill({
      name: skill.name,
      level: skill.level,
      category: skill.category,
      color: skill.color
    });
  };
  const handleUpdateSkill = () => {
    if (editingSkill && newSkill.name.trim()) {
      const categoryInfo = categories.find(cat => cat.value === newSkill.category);
      const updatedSkills = skills.map(skill => skill.id === editingSkill.id ? {
        ...skill,
        name: newSkill.name,
        level: newSkill.level,
        category: newSkill.category,
        icon: categoryInfo.icon,
        color: newSkill.color
      } : skill);
      setSkills(updatedSkills);
      setEditingSkill(null);
      setNewSkill({
        name: '',
        level: 50,
        category: 'programming',
        color: 'bg-blue-500'
      });
    }
  };
  const handleDeleteSkill = id => {
    setSkills(skills.filter(skill => skill.id !== id));
  };
  const cancelEdit = () => {
    setEditingSkill(null);
    setIsAddingSkill(false);
    setNewSkill({
      name: '',
      level: 50,
      category: 'programming',
      color: 'bg-blue-500'
    });
  };
  return <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            专业技能
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            掌握多项专业技能，涵盖编程、设计和人工智能领域
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
                  {categories.map(cat => <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  颜色主题
                </label>
                <select value={newSkill.color} onChange={e => setNewSkill({
              ...newSkill,
              color: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  {colors.map(color => <option key={color.value} value={color.value}>
                      {color.label}
                    </option>)}
                </select>
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

        {/* 技能分类展示 */}
        <div className="space-y-12">
          {categories.map(category => {
          const categorySkills = skills.filter(skill => skill.category === category.value);
          if (categorySkills.length === 0) return null;
          return <div key={category.value}>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 text-indigo-600">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.label}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map(skill => <div key={skill.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative group">
                      {/* 操作按钮 */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                        <button onClick={() => handleEditSkill(skill)} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDeleteSkill(skill.id)} className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mr-4 text-white`}>
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            熟练程度: {skill.level}%
                          </p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className={`${skill.color} h-3 rounded-full transition-all duration-500`} style={{
                    width: `${skill.level}%`
                  }}></div>
                      </div>
                    </div>)}
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}