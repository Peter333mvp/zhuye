// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { BookOpen, Monitor, Wrench, Languages, Palette, Brain, Code, Cpu, GitBranch, Circle, CheckCircle2, Lock } from 'lucide-react';

export function SkillsSection() {
  const skillTree = {
    language: {
      name: '语言能力',
      icon: Languages,
      color: 'blue',
      skills: [{
        name: '英语',
        level: 75,
        description: 'CET-4，具备良好的英语阅读和写作能力',
        unlocked: true
      }]
    },
    technical: {
      name: '技术技能',
      icon: Cpu,
      color: 'purple',
      branches: [{
        name: '工程设计软件',
        icon: Wrench,
        skills: [{
          name: 'SolidWorks',
          level: 85,
          description: '精通三维建模和装配设计',
          unlocked: true,
          prerequisites: []
        }, {
          name: 'AutoCAD',
          level: 80,
          description: '熟练掌握二维制图和基础三维设计',
          unlocked: true,
          prerequisites: []
        }, {
          name: 'CATIA',
          level: 75,
          description: '掌握复杂曲面设计和装配管理',
          unlocked: true,
          prerequisites: ['SolidWorks']
        }]
      }, {
        name: '编程与开发',
        icon: Code,
        skills: [{
          name: 'MATLAB',
          level: 85,
          description: '擅长数学建模、仿真和数据分析',
          unlocked: true,
          prerequisites: []
        }, {
          name: 'Visual Studio',
          level: 80,
          description: '熟悉C++和C#开发环境',
          unlocked: true,
          prerequisites: []
        }]
      }, {
        name: '办公与创意软件',
        icon: Monitor,
        skills: [{
          name: 'Office套件',
          level: 90,
          description: '熟练使用Word、Excel、PowerPoint等办公软件',
          unlocked: true,
          prerequisites: []
        }, {
          name: 'Photoshop',
          level: 70,
          description: '掌握图像处理和设计基础',
          unlocked: true,
          prerequisites: []
        }, {
          name: 'Premiere Pro',
          level: 65,
          description: '能够进行视频剪辑和后期制作',
          unlocked: true,
          prerequisites: ['Photoshop']
        }, {
          name: 'AI大模型应用',
          level: 80,
          description: '熟悉各类AI工具的应用和集成',
          unlocked: true,
          prerequisites: ['Office套件']
        }]
      }]
    }
  };
  const getSkillNodeColor = (level, unlocked) => {
    if (!unlocked) return 'bg-gray-200 border-gray-300';
    if (level >= 85) return 'bg-green-100 border-green-400 text-green-800';
    if (level >= 75) return 'bg-blue-100 border-blue-400 text-blue-800';
    if (level >= 65) return 'bg-yellow-100 border-yellow-400 text-yellow-800';
    return 'bg-gray-100 border-gray-400 text-gray-800';
  };
  const getProgressColor = level => {
    if (level >= 85) return 'bg-green-500';
    if (level >= 75) return 'bg-blue-500';
    if (level >= 65) return 'bg-yellow-500';
    return 'bg-gray-500';
  };
  const SkillNode = ({
    skill,
    isPrerequisite = false,
    showConnection = false
  }) => {
    const nodeColor = getSkillNodeColor(skill.level, skill.unlocked);
    return <div className="relative">
        {showConnection && <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-300" />}
        
        <div className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 ${isPrerequisite ? 'scale-95 opacity-75' : ''}`}>
          <div className={`w-20 h-20 rounded-full border-2 ${nodeColor} flex flex-col items-center justify-center mx-auto mb-2 shadow-md hover:shadow-lg transition-shadow duration-200`}>
            {skill.unlocked ? <CheckCircle2 size={20} className="mb-1" /> : <Lock size={20} className="mb-1" />}
            <div className="text-xs font-semibold text-center px-1">
              {skill.name.length > 8 ? skill.name.substring(0, 6) + '...' : skill.name}
            </div>
          </div>
          
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            <div className="font-semibold mb-1">{skill.name}</div>
            <div className="mb-1">{skill.description}</div>
            <div className="flex items-center justify-between">
              <span>熟练度: {skill.level}%</span>
              {skill.unlocked ? <CheckCircle2 size={12} /> : <Lock size={12} />}
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className={`${getProgressColor(skill.level)} h-1.5 rounded-full transition-all duration-1000 ease-out`} style={{
            width: `${skill.level}%`
          }} />
          </div>
        </div>
      </div>;
  };
  const SkillBranch = ({
    branch
  }) => {
    const BranchIcon = branch.icon;
    return <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-purple-100 rounded-lg mr-3">
            <BranchIcon size={20} className="text-purple-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900">
            {branch.name}
          </h4>
          <div className="ml-auto">
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
              {branch.skills.length} 项技能
            </span>
          </div>
        </div>
        
        <div className="space-y-8">
          {branch.skills.map((skill, index) => {
          const hasPrerequisites = skill.prerequisites && skill.prerequisites.length > 0;
          const prerequisiteSkills = hasPrerequisites ? branch.skills.filter(s => skill.prerequisites.includes(s.name)) : [];
          return <div key={skill.name} className="relative">
              {hasPrerequisites && <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-2">
                    {prerequisiteSkills.map((prereq, prereqIndex) => <div key={prereq.name} className="relative">
                        <SkillNode skill={prereq} isPrerequisite={true} />
                        {prereqIndex < prerequisiteSkills.length - 1 && <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gray-300" />}
                      </div>)}
                    <div className="w-8 h-0.5 bg-gray-300" />
                    <GitBranch size={16} className="text-gray-400" />
                    <div className="w-8 h-0.5 bg-gray-300" />
                  </div>
                </div>}
              
              <div className="flex justify-center">
                <SkillNode skill={skill} showConnection={hasPrerequisites} />
              </div>
              
              {index < branch.skills.length - 1 && <div className="flex justify-center mt-4">
                  <div className="w-0.5 h-8 bg-gray-200" />
                </div>}
            </div>;
        })}
        </div>
      </div>;
  };
  return <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            技能树
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            通过技能树展示我的技术能力成长路径和专业技能掌握程度
          </p>
        </div>

        <div className="space-y-12">
          {/* 语言能力部分 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <Languages size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {skillTree.language.name}
              </h3>
            </div>

            <div className="flex justify-center">
              {skillTree.language.skills.map(skill => <div key={skill.name} className="text-center">
                  <div className={`w-24 h-24 rounded-full border-2 ${getSkillNodeColor(skill.level, skill.unlocked)} flex flex-col items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <CheckCircle2 size={24} className="mb-2" />
                    <div className="text-sm font-bold">{skill.name}</div>
                  </div>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className={`${getProgressColor(skill.level)} h-2 rounded-full transition-all duration-1000 ease-out`} style={{
                  width: `${skill.level}%`
                }} />
                  </div>
                  <div className="mt-2 text-sm text-gray-600 font-medium">
                    {skill.level}%
                  </div>
                  <p className="mt-2 text-sm text-gray-500 max-w-xs">
                    {skill.description}
                  </p>
                </div>)}
            </div>
          </div>

          {/* 技术技能部分 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-purple-100 rounded-lg mr-4">
                <Cpu size={24} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {skillTree.technical.name}
              </h3>
              <div className="ml-auto">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Circle size={12} className="text-green-500 mr-1" />
                    <span className="text-sm text-gray-600">已掌握</span>
                  </div>
                  <div className="flex items-center">
                    <Lock size={12} className="text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">待解锁</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {skillTree.technical.branches.map((branch, index) => <SkillBranch key={branch.name} branch={branch} />)}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
            <GitBranch size={20} className="mr-2 text-purple-600" />
            <span className="text-purple-800 font-medium">
              技能树展示了技能之间的关联关系和学习路径
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">
              {skillTree.technical.branches.reduce((total, branch) => total + branch.skills.filter(s => s.unlocked).length, 0)}
            </div>
            <div className="text-sm text-green-800">已掌握技能</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(skillTree.technical.branches.reduce((total, branch) => total + branch.skills.reduce((sum, skill) => sum + skill.level, 0), 0) / skillTree.technical.branches.reduce((total, branch) => total + branch.skills.length, 0))}%
            </div>
            <div className="text-sm text-blue-800">平均熟练度</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">
              {skillTree.technical.branches.length}
            </div>
            <div className="text-sm text-purple-800">技能分支</div>
          </div>
        </div>
      </div>
    </section>;
}