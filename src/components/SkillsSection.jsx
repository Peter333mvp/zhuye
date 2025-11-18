// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { User, Star, CheckCircle2, Lock, Move } from 'lucide-react';

export function SkillsSection() {
  const [skills, setSkills] = useState([{
    id: 1,
    name: '英语CET-4',
    level: 75,
    description: '具备良好的英语阅读和写作能力',
    unlocked: true,
    color: 'blue'
  }, {
    id: 2,
    name: 'Office系列',
    level: 90,
    description: '熟练使用Word、Excel、PowerPoint等办公软件',
    unlocked: true,
    color: 'green'
  }, {
    id: 3,
    name: 'PS/PR',
    level: 70,
    description: '掌握图像处理和视频剪辑基础',
    unlocked: true,
    color: 'purple'
  }, {
    id: 4,
    name: 'AI大模型应用',
    level: 80,
    description: '熟悉各类AI工具的应用和集成',
    unlocked: true,
    color: 'indigo'
  }, {
    id: 5,
    name: 'SolidWorks',
    level: 85,
    description: '精通三维建模和装配设计',
    unlocked: true,
    color: 'pink'
  }, {
    id: 6,
    name: 'AutoCAD',
    level: 80,
    description: '熟练掌握二维制图和基础三维设计',
    unlocked: true,
    color: 'yellow'
  }, {
    id: 7,
    name: 'CATIA',
    level: 75,
    description: '掌握复杂曲面设计和装配管理',
    unlocked: true,
    color: 'red'
  }, {
    id: 8,
    name: 'MATLAB',
    level: 85,
    description: '擅长数学建模、仿真和数据分析',
    unlocked: true,
    color: 'orange'
  }, {
    id: 9,
    name: 'Visual Studio',
    level: 80,
    description: '熟悉C++和C#开发环境',
    unlocked: true,
    color: 'teal'
  }]);
  const [draggingSkill, setDraggingSkill] = useState(null);
  const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0
  });
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0
  });
  const containerRef = useRef(null);

  // 获取容器尺寸
  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({
          width: rect.width,
          height: rect.height
        });
      }
    };
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    return () => window.removeEventListener('resize', updateContainerSize);
  }, []);

  // 初始化技能位置为围绕画布中心的圆形排列
  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return;
    const radius = Math.min(containerSize.width, containerSize.height) * 0.35; // 根据容器大小动态调整半径
    const centerX = containerSize.width / 2; // 画布中心X
    const centerY = containerSize.height / 2; // 画布中心Y
    const updatedSkills = skills.map((skill, index) => {
      const angle = index * 2 * Math.PI / skills.length - Math.PI / 2; // 从顶部开始排列
      const x = centerX + radius * Math.cos(angle) - 68; // 68是技能节点宽度的一半
      const y = centerY + radius * Math.sin(angle) - 56; // 56是技能节点高度的一半

      return {
        ...skill,
        x: x,
        y: y
      };
    });
    setSkills(updatedSkills);
  }, [containerSize]);
  const getSkillColor = color => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          border: 'border-blue-300',
          gradient: 'from-blue-400 to-blue-600',
          line: 'stroke-blue-400'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          border: 'border-green-300',
          gradient: 'from-green-400 to-green-600',
          line: 'stroke-green-400'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-800',
          border: 'border-purple-300',
          gradient: 'from-purple-400 to-purple-600',
          line: 'stroke-purple-400'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-100',
          text: 'text-indigo-800',
          border: 'border-indigo-300',
          gradient: 'from-indigo-400 to-indigo-600',
          line: 'stroke-indigo-400'
        };
      case 'pink':
        return {
          bg: 'bg-pink-100',
          text: 'text-pink-800',
          border: 'border-pink-300',
          gradient: 'from-pink-400 to-pink-600',
          line: 'stroke-pink-400'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-800',
          border: 'border-yellow-300',
          gradient: 'from-yellow-400 to-yellow-600',
          line: 'stroke-yellow-400'
        };
      case 'red':
        return {
          bg: 'bg-red-100',
          text: 'text-red-800',
          border: 'border-red-300',
          gradient: 'from-red-400 to-red-600',
          line: 'stroke-red-400'
        };
      case 'orange':
        return {
          bg: 'bg-orange-100',
          text: 'text-orange-800',
          border: 'border-orange-300',
          gradient: 'from-orange-400 to-orange-600',
          line: 'stroke-orange-400'
        };
      case 'teal':
        return {
          bg: 'bg-teal-100',
          text: 'text-teal-800',
          border: 'border-teal-300',
          gradient: 'from-teal-400 to-teal-600',
          line: 'stroke-teal-400'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-300',
          gradient: 'from-gray-400 to-gray-600',
          line: 'stroke-gray-400'
        };
    }
  };
  const getProgressColor = level => {
    if (level >= 85) return 'bg-gradient-to-r from-green-400 to-green-600';
    if (level >= 75) return 'bg-gradient-to-r from-blue-400 to-blue-600';
    if (level >= 65) return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
    return 'bg-gradient-to-r from-gray-400 to-gray-600';
  };
  const handleMouseDown = (e, skill) => {
    const rect = containerRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left - skill.x,
      y: e.clientY - rect.top - skill.y
    });
    setDraggingSkill(skill.id);
    e.preventDefault();
  };
  const handleMouseMove = e => {
    if (draggingSkill === null) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;

    // 限制在容器内
    const maxX = rect.width - 136; // 136是技能节点宽度
    const maxY = rect.height - 112; // 112是技能节点高度
    const constrainedX = Math.max(0, Math.min(newX, maxX));
    const constrainedY = Math.max(0, Math.min(newY, maxY));
    setSkills(prevSkills => prevSkills.map(skill => skill.id === draggingSkill ? {
      ...skill,
      x: constrainedX,
      y: constrainedY
    } : skill));
  };
  const handleMouseUp = () => {
    setDraggingSkill(null);
  };
  useEffect(() => {
    if (draggingSkill !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggingSkill, dragOffset]);
  const CenterNode = () => {
    return <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-44 h-44 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white">
          <div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center">
            <div className="text-xl font-bold text-indigo-800 text-center mb-2">
              技能体系
            </div>
            <User size={36} className="text-indigo-600 mb-2" />
            <div className="text-sm text-indigo-600 opacity-75">
              Peter Zhao
            </div>
          </div>
        </div>
        
        {/* 装饰性星星 */}
        <div className="absolute -top-3 -right-3">
          <Star size={20} className="text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute -bottom-3 -left-3">
          <Star size={20} className="text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
          <Star size={16} className="text-yellow-300 fill-yellow-300 opacity-60" />
        </div>
        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
          <Star size={16} className="text-yellow-300 fill-yellow-300 opacity-60" />
        </div>
      </div>;
  };
  const SkillNode = ({
    skill
  }) => {
    const colors = getSkillColor(skill.color);
    const isDragging = draggingSkill === skill.id;
    return <div className={`absolute z-10 cursor-move transition-all duration-200 ${isDragging ? 'z-30' : 'hover:z-25'}`} style={{
      left: `${skill.x}px`,
      top: `${skill.y}px`,
      transform: isDragging ? 'scale(1.15)' : 'scale(1)',
      transition: isDragging ? 'none' : 'transform 0.2s, box-shadow 0.2s'
    }} onMouseDown={e => handleMouseDown(e, skill)}>
        <div className={`relative group w-36 h-28 bg-white ${colors.border} border-2 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl ${isDragging ? 'shadow-2xl rotate-3' : ''}`}>
          {/* 拖动指示器 */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Move size={14} className="text-gray-400" />
          </div>
          
          <div className={`text-sm font-bold ${colors.text} text-center px-2 mb-2`}>
            {skill.name.length > 10 ? skill.name.substring(0, 9) + '..' : skill.name}
          </div>
          <div className="w-24 bg-gray-200 rounded-full h-2 mb-2">
            <div className={`${getProgressColor(skill.level)} h-2 rounded-full transition-all duration-500`} style={{
            width: `${skill.level}%`
          }} />
          </div>
          <div className="text-sm font-bold text-gray-600">
            {skill.level}%
          </div>
        </div>
        
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-44 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
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
      </div>;
  };
  return <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            技能树
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            拖动技能节点来自由排列，展示我的技术能力体系
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Move size={16} />
            <span>提示：可以拖动技能节点调整位置，让它们围绕中心排列</span>
          </div>
        </div>

        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-white/50">
          <div ref={containerRef} className="relative w-full h-[500px] select-none" style={{
          minHeight: '500px'
        }}>
            {/* 背景装饰 */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl" />
              <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl" />
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl" />
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20 blur-xl" />
              {/* 中心光晕效果 - 动态定位到画布中心 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-30 blur-3xl" />
            </div>

            {/* 连接线 - 从画布中心到各个技能 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
            zIndex: 1
          }}>
              {skills.map(skill => {
              const centerX = containerSize.width / 2; // 画布中心X
              const centerY = containerSize.height / 2; // 画布中心Y
              const skillCenterX = skill.x + 68; // 技能节点中心 (136宽度的一半)
              const skillCenterY = skill.y + 56; // 技能节点中心 (112高度的一半)
              const colors = getSkillColor(skill.color);
              return <g key={skill.id}>
                    <line x1={centerX} y1={centerY} x2={skillCenterX} y2={skillCenterY} stroke="currentColor" strokeWidth="2" className={`${colors.line} opacity-40 transition-all duration-300`} strokeDasharray="5,5" />
                    <circle cx={skillCenterX} cy={skillCenterY} r="4" fill="currentColor" className={`${colors.line} opacity-60`} />
                  </g>;
            })}
            </svg>

            {/* 中心节点 - 定位到画布中心 */}
            <CenterNode />

            {/* 技能节点 */}
            {skills.map(skill => <SkillNode key={skill.id} skill={skill} />)}
          </div>
        </div>

        {/* 统计信息卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {skills.length}
              </div>
              <div className="text-sm text-gray-600 font-medium">技能总数</div>
              <div className="mt-2 flex justify-center">
                <Star size={16} className="text-indigo-500" />
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {skills.filter(s => s.unlocked).length}
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
                {Math.round(skills.reduce((total, skill) => total + skill.level, 0) / skills.length)}%
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
                {Math.max(...skills.map(skill => skill.level))}%
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
            <Move size={24} className="mr-3 text-indigo-600" />
            <span className="text-indigo-800 font-medium text-lg">
              自由拖动的技能节点，创建个性化的技能展示
            </span>
          </div>
        </div>
      </div>
    </section>;
}