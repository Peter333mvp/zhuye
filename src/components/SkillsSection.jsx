// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { BookOpen, Monitor, Wrench, Languages, Palette, Brain, Code, Cpu, GitBranch, Circle, CheckCircle2, Lock, User, Star } from 'lucide-react';

export function SkillsSection() {
  const skillTreeData = {
    center: {
      name: 'Peter Zhao',
      title: '技能体系',
      icon: User,
      color: 'indigo'
    },
    branches: [{
      name: '语言技能',
      icon: Languages,
      color: 'blue',
      position: 'top',
      skills: [{
        name: '英语CET-4',
        level: 75,
        description: '具备良好的英语阅读和写作能力',
        unlocked: true
      }]
    }, {
      name: '办公技能',
      icon: Monitor,
      color: 'green',
      position: 'left',
      skills: [{
        name: 'Office系列',
        level: 90,
        description: '熟练使用Word、Excel、PowerPoint等办公软件',
        unlocked: true
      }, {
        name: 'PS/PR',
        level: 70,
        description: '掌握图像处理和视频剪辑基础',
        unlocked: true
      }, {
        name: 'AI大模型应用',
        level: 80,
        description: '熟悉各类AI工具的应用和集成',
        unlocked: true
      }]
    }, {
      name: '技术技能',
      icon: Wrench,
      color: 'purple',
      position: 'right',
      skills: [{
        name: 'SolidWorks',
        level: 85,
        description: '精通三维建模和装配设计',
        unlocked: true
      }, {
        name: 'AutoCAD',
        level: 80,
        description: '熟练掌握二维制图和基础三维设计',
        unlocked: true
      }, {
        name: 'CATIA',
        level: 75,
        description: '掌握复杂曲面设计和装配管理',
        unlocked: true
      }, {
        name: 'MATLAB',
        level: 85,
        description: '擅长数学建模、仿真和数据分析',
        unlocked: true
      }, {
        name: 'Visual Studio',
        level: 80,
        description: '熟悉C++和C#开发环境',
        unlocked: true
      }]
    }]
  };
  const getBranchColor = color => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          border: 'border-blue-300',
          line: 'stroke-blue-400',
          node: 'bg-blue-500',
          hover: 'hover:bg-blue-200',
          gradient: 'from-blue-400 to-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          border: 'border-green-300',
          line: 'stroke-green-400',
          node: 'bg-green-500',
          hover: 'hover:bg-green-200',
          gradient: 'from-green-400 to-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-800',
          border: 'border-purple-300',
          line: 'stroke-purple-400',
          node: 'bg-purple-500',
          hover: 'hover:bg-purple-200',
          gradient: 'from-purple-400 to-purple-600'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-100',
          text: 'text-indigo-800',
          border: 'border-indigo-300',
          line: 'stroke-indigo-400',
          node: 'bg-indigo-500',
          hover: 'hover:bg-indigo-200',
          gradient: 'from-indigo-400 to-indigo-600'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-300',
          line: 'stroke-gray-400',
          node: 'bg-gray-500',
          hover: 'hover:bg-gray-200',
          gradient: 'from-gray-400 to-gray-600'
        };
    }
  };
  const getProgressColor = level => {
    if (level >= 85) return 'bg-gradient-to-r from-green-400 to-green-600';
    if (level >= 75) return 'bg-gradient-to-r from-blue-400 to-blue-600';
    if (level >= 65) return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
    return 'bg-gradient-to-r from-gray-400 to-gray-600';
  };
  const CenterNode = () => {
    const colors = getBranchColor(skillTreeData.center.color);
    const CenterIcon = skillTreeData.center.icon;
    return <div className="relative z-20">
        <div className={`w-36 h-36 bg-gradient-to-br ${colors.gradient} rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-white`}>
          <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center">
            <CenterIcon size={36} className={colors.text + ' mb-2'} />
            <div className={`text-sm font-bold ${colors.text} text-center`}>
              {skillTreeData.center.name}
            </div>
            <div className={`text-xs ${colors.text} opacity-75`}>
              {skillTreeData.center.title}
            </div>
          </div>
        </div>
        
        {/* 装饰性星星 */}
        <div className="absolute -top-2 -right-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>;
  };
  const BranchNode = ({
    branch,
    index
  }) => {
    const colors = getBranchColor(branch.color);
    const BranchIcon = branch.icon;
    const getPositionClasses = () => {
      switch (branch.position) {
        case 'top':
          return 'absolute -top-32 left-1/2 transform -translate-x-1/2';
        case 'left':
          return 'absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-40';
        case 'right':
          return 'absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-40';
        default:
          return 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      }
    };
    return <div className={getPositionClasses()}>
        <div className={`relative group cursor-pointer`}>
          <div className={`w-28 h-28 bg-gradient-to-br ${colors.gradient} rounded-full flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-3 border-white`}>
            <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center">
              <BranchIcon size={24} className={colors.text + ' mb-1'} />
              <div className={`text-xs font-bold ${colors.text} text-center px-1`}>
                {branch.name}
              </div>
              <div className={`text-xs ${colors.text} opacity-60`}>
                {branch.skills.length} 项
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-36 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
            <div className="font-semibold mb-2">{branch.name}</div>
            <div className="text-center mb-2">{branch.skills.length} 项技能</div>
            <div className="space-y-1">
              {branch.skills.map(skill => <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-xs">{skill.name}</span>
                  <span className="text-xs font-bold">{skill.level}%</span>
                </div>)}
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>;
  };
  const SkillLeaf = ({
    skill,
    branch,
    index,
    total
  }) => {
    const colors = getBranchColor(branch.color);
    const getLeafPosition = () => {
      let angle, distance;
      if (branch.position === 'top') {
        angle = -30 + index * 20;
        distance = 100;
      } else if (branch.position === 'left') {
        angle = 150 + index * 15;
        distance = 120;
      } else if (branch.position === 'right') {
        angle = -30 + index * 15;
        distance = 120;
      }
      const x = Math.cos(angle * Math.PI / 180) * distance;
      const y = Math.sin(angle * Math.PI / 180) * distance;
      return {
        transform: `translate(${x}px, ${y}px)`,
        x: x,
        y: y
      };
    };
    const position = getLeafPosition();
    return <div className="absolute" style={{
      transform: position.transform,
      left: '50%',
      top: '50%',
      marginLeft: '-45px',
      marginTop: '-25px',
      zIndex: 15
    }}>
        <div className="relative group cursor-pointer">
          <div className={`w-24 h-20 bg-white ${colors.border} border-2 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1`}>
            <div className={`text-xs font-bold ${colors.text} text-center px-1 mb-1`}>
              {skill.name.length > 8 ? skill.name.substring(0, 7) + '..' : skill.name}
            </div>
            <div className="w-16 bg-gray-200 rounded-full h-1.5 mb-1">
              <div className={`${getProgressColor(skill.level)} h-1.5 rounded-full transition-all duration-500`} style={{
              width: `${skill.level}%`
            }} />
            </div>
            <div className="text-xs font-bold text-gray-600">
              {skill.level}%
            </div>
          </div>
          
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
            <div className="font-semibold mb-2 text-sm">{skill.name}</div>
            <div className="mb-2 text-xs">{skill.description}</div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs">熟练度: {skill.level}%</span>
              {skill.unlocked ? <CheckCircle2 size={12} className="text-green-400" /> : <Lock size={12} className="text-gray-400" />}
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div className={`${getProgressColor(skill.level)} h-2 rounded-full transition-all duration-500`} style={{
              width: `${skill.level}%`
            }} />
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>;
  };
  return <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            技能树
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从中心发散的技能树，全面展示我的技术能力体系
          </p>
        </div>

        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-white/50" style={{
        minHeight: '700px'
      }}>
          <div className="relative w-full h-full flex items-center justify-center" style={{
          minHeight: '600px'
        }}>
            {/* 背景装饰 */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl" />
              <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl" />
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl" />
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20 blur-xl" />
            </div>

            {/* 连接线 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
            zIndex: 1
          }}>
              {/* 中心到各分支的连接线 */}
              {skillTreeData.branches.map((branch, index) => {
              const getBranchPosition = () => {
                switch (branch.position) {
                  case 'top':
                    return {
                      x: '50%',
                      y: '12%'
                    };
                  case 'left':
                    return {
                      x: '12%',
                      y: '50%'
                    };
                  case 'right':
                    return {
                      x: '88%',
                      y: '50%'
                    };
                  default:
                    return {
                      x: '50%',
                      y: '50%'
                    };
                }
              };
              const branchPos = getBranchPosition();
              const colors = getBranchColor(branch.color);
              return <g key={branch.name}>
                  <line x1="50%" y1="50%" x2={branchPos.x} y2={branchPos.y} stroke="currentColor" strokeWidth="4" className={colors.line + ' opacity-60'} strokeLinecap="round" />
                  <circle cx={branchPos.x} cy={branchPos.y} r="6" fill="currentColor" className={colors.line + ' opacity-80'} />
                </g>;
            })}
              
              {/* 分支到技能的连接线 */}
              {skillTreeData.branches.map(branch => {
              const getBranchPosition = () => {
                switch (branch.position) {
                  case 'top':
                    return {
                      x: '50%',
                      y: '12%'
                    };
                  case 'left':
                    return {
                      x: '12%',
                      y: '50%'
                    };
                  case 'right':
                    return {
                      x: '88%',
                      y: '50%'
                    };
                  default:
                    return {
                      x: '50%',
                      y: '50%'
                    };
                }
              };
              const branchPos = getBranchPosition();
              const colors = getBranchColor(branch.color);
              return branch.skills.map((skill, index) => {
                let angle, distance;
                if (branch.position === 'top') {
                  angle = -30 + index * 20;
                  distance = 100;
                } else if (branch.position === 'left') {
                  angle = 150 + index * 15;
                  distance = 120;
                } else if (branch.position === 'right') {
                  angle = -30 + index * 15;
                  distance = 120;
                }
                const x = parseFloat(branchPos.x) + Math.cos(angle * Math.PI / 180) * distance / 5;
                const y = parseFloat(branchPos.y) + Math.sin(angle * Math.PI / 180) * distance / 5;
                return <g key={`${branch.name}-${skill.name}`}>
                    <line x1={branchPos.x} y1={branchPos.y} x2={`${x}%`} y2={`${y}%`} stroke="currentColor" strokeWidth="2" className={colors.line + ' opacity-40'} strokeLinecap="round" />
                    <circle cx={`${x}%`} cy={`${y}%`} r="4" fill="currentColor" className={colors.line + ' opacity-60'} />
                  </g>;
              });
            })}
            </svg>

            {/* 中心节点 */}
            <CenterNode />

            {/* 分支节点 */}
            {skillTreeData.branches.map((branch, index) => <BranchNode key={branch.name} branch={branch} index={index} />)}

            {/* 技能叶子节点 */}
            {skillTreeData.branches.map(branch => branch.skills.map((skill, index) => <SkillLeaf key={`${branch.name}-${skill.name}`} skill={skill} branch={branch} index={index} total={branch.skills.length} />))}
          </div>
        </div>

        {/* 统计信息卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {skillTreeData.branches.length}
              </div>
              <div className="text-sm text-gray-600 font-medium">技能分支</div>
              <div className="mt-2 flex justify-center">
                <GitBranch size={16} className="text-indigo-500" />
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {skillTreeData.branches.reduce((total, branch) => total + branch.skills.filter(s => s.unlocked).length, 0)}
              </div>
              <div className="text-sm text-gray-600 font-medium">已掌握技能</div>
              <div className="mt-2 flex justify-center">
                <CheckCircle2 size={16} className="text-green-500" />
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {Math.round(skillTreeData.branches.reduce((total, branch) => total + branch.skills.reduce((sum, skill) => sum + skill.level, 0), 0) / skillTreeData.branches.reduce((total, branch) => total + branch.skills.length, 0))}%
              </div>
              <div className="text-sm text-gray-600 font-medium">平均熟练度</div>
              <div className="mt-2 flex justify-center">
                <Star size={16} className="text-blue-500" />
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {Math.max(...skillTreeData.branches.map(branch => Math.max(...branch.skills.map(skill => skill.level))))}%
              </div>
              <div className="text-sm text-gray-600 font-medium">最高熟练度</div>
              <div className="mt-2 flex justify-center">
                <Star size={16} className="text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border border-indigo-200 shadow-lg">
            <GitBranch size={24} className="mr-3 text-indigo-600" />
            <span className="text-indigo-800 font-medium text-lg">
              从中心发散的技能树，展示全面的技术能力体系
            </span>
          </div>
        </div>
      </div>
    </section>;
}