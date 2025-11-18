// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { BookOpen, Monitor, Wrench, Languages, Palette, Brain, Code, Cpu, GitBranch, Circle, CheckCircle2, Lock, User } from 'lucide-react';

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
          hover: 'hover:bg-blue-200'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          border: 'border-green-300',
          line: 'stroke-green-400',
          node: 'bg-green-500',
          hover: 'hover:bg-green-200'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-800',
          border: 'border-purple-300',
          line: 'stroke-purple-400',
          node: 'bg-purple-500',
          hover: 'hover:bg-purple-200'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-100',
          text: 'text-indigo-800',
          border: 'border-indigo-300',
          line: 'stroke-indigo-400',
          node: 'bg-indigo-500',
          hover: 'hover:bg-indigo-200'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-300',
          line: 'stroke-gray-400',
          node: 'bg-gray-500',
          hover: 'hover:bg-gray-200'
        };
    }
  };
  const getProgressColor = level => {
    if (level >= 85) return 'bg-green-500';
    if (level >= 75) return 'bg-blue-500';
    if (level >= 65) return 'bg-yellow-500';
    return 'bg-gray-500';
  };
  const CenterNode = () => {
    const colors = getBranchColor(skillTreeData.center.color);
    const CenterIcon = skillTreeData.center.icon;
    return <div className="relative z-20">
        <div className={`w-32 h-32 ${colors.bg} ${colors.border} border-4 rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300`}>
          <CenterIcon size={32} className={colors.text + ' mb-2'} />
          <div className={`text-sm font-bold ${colors.text} text-center`}>
            {skillTreeData.center.name}
          </div>
          <div className={`text-xs ${colors.text} opacity-75`}>
            {skillTreeData.center.title}
          </div>
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
          return 'absolute -top-24 left-1/2 transform -translate-x-1/2';
        case 'left':
          return 'absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-32';
        case 'right':
          return 'absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-32';
        default:
          return 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      }
    };
    return <div className={getPositionClasses()}>
        <div className={`relative group cursor-pointer`}>
          <div className={`w-24 h-24 ${colors.bg} ${colors.border} border-2 rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${colors.hover}`}>
            <BranchIcon size={20} className={colors.text + ' mb-1'} />
            <div className={`text-xs font-bold ${colors.text} text-center px-1`}>
              {branch.name}
            </div>
          </div>
          
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
            <div className="font-semibold mb-1">{branch.name}</div>
            <div className="text-center">{branch.skills.length} 项技能</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>;
  };
  const SkillLeaf = ({
    skill,
    branchColor,
    index,
    total
  }) => {
    const colors = getBranchColor(branchColor);
    const getLeafPosition = () => {
      const angleStep = 30;
      const startAngle = -15;
      const angle = startAngle + index * angleStep;
      const distance = 120;
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
      marginLeft: '-40px',
      marginTop: '-30px'
    }}>
        <div className="relative group cursor-pointer">
          <div className={`w-20 h-16 ${colors.bg} ${colors.border} border rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${colors.hover}`}>
            <div className={`text-xs font-bold ${colors.text} text-center px-1`}>
              {skill.name.length > 8 ? skill.name.substring(0, 6) + '...' : skill.name}
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {skill.level}%
            </div>
          </div>
          
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-36 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
            <div className="font-semibold mb-1">{skill.name}</div>
            <div className="mb-1">{skill.description}</div>
            <div className="flex items-center justify-between">
              <span>熟练度: {skill.level}%</span>
              {skill.unlocked ? <CheckCircle2 size={10} /> : <Lock size={10} />}
            </div>
            <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
              <div className={`${getProgressColor(skill.level)} h-1 rounded-full`} style={{
              width: `${skill.level}%`
            }} />
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>;
  };
  const ConnectionLine = ({
    from,
    to,
    color
  }) => {
    const colors = getBranchColor(color);
    return <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
      zIndex: 1
    }}>
        <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="currentColor" strokeWidth="2" className={colors.line + ' opacity-50'} />
      </svg>;
  };
  return <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            技能树
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从中心发散的技能树展示我的技术能力体系
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl p-8 mb-12" style={{
        minHeight: '600px'
      }}>
          <div className="relative w-full h-full flex items-center justify-center" style={{
          minHeight: '500px'
        }}>
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
                      y: '15%'
                    };
                  case 'left':
                    return {
                      x: '15%',
                      y: '50%'
                    };
                  case 'right':
                    return {
                      x: '85%',
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
              return <line key={branch.name} x1="50%" y1="50%" x2={branchPos.x} y2={branchPos.y} stroke="currentColor" strokeWidth="3" className={colors.line + ' opacity-60'} />;
            })}
              
              {/* 分支到技能的连接线 */}
              {skillTreeData.branches.map(branch => {
              const getBranchPosition = () => {
                switch (branch.position) {
                  case 'top':
                    return {
                      x: '50%',
                      y: '15%'
                    };
                  case 'left':
                    return {
                      x: '15%',
                      y: '50%'
                    };
                  case 'right':
                    return {
                      x: '85%',
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
                const angleStep = branch.position === 'top' ? 25 : 20;
                const startAngle = branch.position === 'top' ? -25 : -10;
                const angle = startAngle + index * angleStep;
                const distance = 80;
                const x = parseFloat(branchPos.x) + Math.cos(angle * Math.PI / 180) * distance / 5;
                const y = parseFloat(branchPos.y) + Math.sin(angle * Math.PI / 180) * distance / 5;
                return <line key={`${branch.name}-${skill.name}`} x1={branchPos.x} y1={branchPos.y} x2={`${x}%`} y2={`${y}%`} stroke="currentColor" strokeWidth="1.5" className={colors.line + ' opacity-40'} />;
              });
            })}
            </svg>

            {/* 中心节点 */}
            <CenterNode />

            {/* 分支节点 */}
            {skillTreeData.branches.map((branch, index) => <BranchNode key={branch.name} branch={branch} index={index} />)}

            {/* 技能叶子节点 */}
            {skillTreeData.branches.map(branch => {
            const getBranchPosition = () => {
              switch (branch.position) {
                case 'top':
                  return {
                    x: '50%',
                    y: '15%'
                  };
                case 'left':
                  return {
                    x: '15%',
                    y: '50%'
                  };
                case 'right':
                  return {
                    x: '85%',
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
            return branch.skills.map((skill, index) => {
              const angleStep = branch.position === 'top' ? 25 : 20;
              const startAngle = branch.position === 'top' ? -25 : -10;
              const angle = startAngle + index * angleStep;
              const distance = 80;
              const x = parseFloat(branchPos.x) + Math.cos(angle * Math.PI / 180) * distance / 5;
              const y = parseFloat(branchPos.y) + Math.sin(angle * Math.PI / 180) * distance / 5;
              return <div key={`${branch.name}-${skill.name}`} className="absolute" style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10
              }}>
                    <div className="relative group cursor-pointer">
                      <div className={`w-16 h-12 ${getBranchColor(branch.color).bg} ${getBranchColor(branch.color).border} border rounded flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${getBranchColor(branch.color).hover}`}>
                        <div className={`text-xs font-bold ${getBranchColor(branch.color).text} text-center px-1`}>
                          {skill.name.length > 6 ? skill.name.substring(0, 5) + '..' : skill.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {skill.level}%
                        </div>
                      </div>
                      
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                        <div className="font-semibold mb-1">{skill.name}</div>
                        <div className="mb-1">{skill.description}</div>
                        <div className="flex items-center justify-between">
                          <span>熟练度: {skill.level}%</span>
                          {skill.unlocked ? <CheckCircle2 size={10} /> : <Lock size={10} />}
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
                          <div className={`${getProgressColor(skill.level)} h-1 rounded-full`} style={{
                        width: `${skill.level}%`
                      }} />
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                      </div>
                    </div>
                  </div>;
            });
          })}
          </div>
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-2xl font-bold text-indigo-600">
              {skillTreeData.branches.length}
            </div>
            <div className="text-sm text-gray-600">技能分支</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-2xl font-bold text-green-600">
              {skillTreeData.branches.reduce((total, branch) => total + branch.skills.filter(s => s.unlocked).length, 0)}
            </div>
            <div className="text-sm text-gray-600">已掌握技能</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(skillTreeData.branches.reduce((total, branch) => total + branch.skills.reduce((sum, skill) => sum + skill.level, 0), 0) / skillTreeData.branches.reduce((total, branch) => total + branch.skills.length, 0))}%
            </div>
            <div className="text-sm text-gray-600">平均熟练度</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">
              {Math.max(...skillTreeData.branches.map(branch => Math.max(...branch.skills.map(skill => skill.level))))}%
            </div>
            <div className="text-sm text-gray-600">最高熟练度</div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
            <GitBranch size={20} className="mr-2 text-indigo-600" />
            <span className="text-indigo-800 font-medium">
              从中心发散的技能树，展示全面的技术能力体系
            </span>
          </div>
        </div>
      </div>
    </section>;
}