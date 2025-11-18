// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore;
import { Lock, CheckCircle, Star } from 'lucide-react';

export function SkillsSection() {
  const [skills, setSkills] = useState([{
    id: 1,
    name: '英语CET-4',
    description: '大学英语四级证书',
    unlocked: true,
    level: 1
  }, {
    id: 2,
    name: 'Office系列',
    description: 'Word, Excel, PowerPoint等办公软件',
    unlocked: true,
    level: 2
  }, {
    id: 3,
    name: 'PS/PR',
    description: 'Photoshop和Premiere Pro图像视频处理',
    unlocked: true,
    level: 1
  }, {
    id: 4,
    name: 'AI大模型应用',
    description: 'ChatGPT, Claude等AI工具应用',
    unlocked: false,
    level: 0
  }, {
    id: 5,
    name: 'SolidWorks',
    description: '三维机械设计软件',
    unlocked: true,
    level: 3
  }, {
    id: 6,
    name: 'AutoCAD',
    description: '二维制图软件',
    unlocked: true,
    level: 2
  }, {
    id: 7,
    name: 'CATIA',
    description: '高端CAD/CAE/CAM软件',
    unlocked: false,
    level: 0
  }, {
    id: 8,
    name: 'MATLAB',
    description: '数值计算与仿真软件',
    unlocked: true,
    level: 1
  }, {
    id: 9,
    name: 'Visual Studio',
    description: '集成开发环境',
    unlocked: false,
    level: 0
  }]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [bubblePositions, setBubblePositions] = useState({});
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // 初始化气泡位置
  useEffect(() => {
    const initialPositions = {};
    skills.forEach(skill => {
      initialPositions[skill.id] = {
        x: Math.random() * 80 + 10,
        // 10% - 90%
        y: Math.random() * 80 + 10,
        // 10% - 90%
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      };
    });
    setBubblePositions(initialPositions);
  }, []);

  // 气泡漂浮动画
  useEffect(() => {
    const animate = () => {
      setBubblePositions(prev => {
        const newPositions = {
          ...prev
        };
        Object.keys(newPositions).forEach(skillId => {
          const pos = newPositions[skillId];

          // 更新位置
          pos.x += pos.vx;
          pos.y += pos.vy;

          // 边界检测和反弹
          if (pos.x <= 5 || pos.x >= 95) {
            pos.vx = -pos.vx;
            pos.x = Math.max(5, Math.min(95, pos.x));
          }
          if (pos.y <= 5 || pos.y >= 95) {
            pos.vy = -pos.vy;
            pos.y = Math.max(5, Math.min(95, pos.y));
          }

          // 添加随机扰动
          if (Math.random() < 0.01) {
            pos.vx += (Math.random() - 0.5) * 0.1;
            pos.vy += (Math.random() - 0.5) * 0.1;
            // 限制速度
            pos.vx = Math.max(-0.5, Math.min(0.5, pos.vx));
            pos.vy = Math.max(-0.5, Math.min(0.5, pos.vy));
          }
        });
        return newPositions;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  const handleSkillClick = skill => {
    if (skill.unlocked) {
      setSelectedSkill(skill);
    } else {
      // 显示解锁提示
      alert(`技能 "${skill.name}" 尚未解锁，完成相关任务后即可解锁！`);
    }
  };
  const handleUpgradeSkill = skillId => {
    setSkills(prev => prev.map(skill => skill.id === skillId ? {
      ...skill,
      level: Math.min(skill.level + 1, 5)
    } : skill));
  };
  const getSkillColor = skill => {
    if (!skill.unlocked) {
      return 'bg-gray-300 border-gray-400 text-gray-600';
    }
    const levelColors = ['bg-green-200 border-green-300 text-green-800', 'bg-blue-200 border-blue-300 text-blue-800', 'bg-purple-200 border-purple-300 text-purple-800', 'bg-orange-200 border-orange-300 text-orange-800', 'bg-red-200 border-red-300 text-red-800'];
    return levelColors[skill.level - 1] || levelColors[0];
  };
  return <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            技能点
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            互动式技能气泡图，点击气泡解锁和升级技能
          </p>
        </div>

        {/* 统一气泡容器 */}
        <div className="flex justify-center">
          <div ref={containerRef} className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200 w-full max-w-4xl h-96 overflow-hidden">
            {skills.map(skill => {
            const position = bubblePositions[skill.id] || {
              x: 50,
              y: 50
            };
            const isHovered = hoveredSkill === skill.id;
            return <div key={skill.id} className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${getSkillColor(skill)} border-2 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl ${isHovered ? 'scale-110 z-10' : 'scale-100'}`} style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: isHovered ? '120px' : '100px',
              height: isHovered ? '60px' : '50px'
            }} onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)} onClick={() => handleSkillClick(skill)}>
                  <div className="text-center">
                    <div className="text-xs font-bold truncate px-1">
                      {skill.name}
                    </div>
                    {skill.unlocked ? skill.level >= 3 ? <Star size={12} className="text-yellow-600 mx-auto mt-1" /> : <CheckCircle size={12} className="text-green-600 mx-auto mt-1" /> : <Lock size={12} className="text-gray-600 mx-auto mt-1" />}
                  </div>
                  
                  {/* 悬停工具提示 */}
                  {isHovered && <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-20">
                      <div className="font-bold">{skill.name}</div>
                      <div>{skill.description}</div>
                      <div className="text-yellow-300">
                        {skill.unlocked ? `等级 ${skill.level}/5` : '未解锁'}
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>}
                </div>;
          })}
          </div>
        </div>

        {/* 技能详情弹窗 */}
        {selectedSkill && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedSkill(null)}>
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedSkill.name}</h3>
                <button onClick={() => setSelectedSkill(null)} className="text-gray-500 hover:text-gray-700">
                  ×
                </button>
              </div>
              
              <p className="text-gray-600 mb-4">{selectedSkill.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700">技能等级</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => <div key={i} className={`w-6 h-6 rounded-full ${i < selectedSkill.level ? 'bg-yellow-400' : 'bg-gray-300'}`} />)}
                  <span className="ml-2 text-sm text-gray-600">{selectedSkill.level}/5</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                {selectedSkill.level < 5 && <button onClick={() => handleUpgradeSkill(selectedSkill.id)} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    升级技能
                  </button>}
                <button onClick={() => setSelectedSkill(null)} className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  关闭
                </button>
              </div>
            </div>
          </div>}
      </div>
    </section>;
}