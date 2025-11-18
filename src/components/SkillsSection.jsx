// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore;
import { Lock, CheckCircle, Star } from 'lucide-react';

export function SkillsSection() {
  const [skills] = useState([{
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
  const getSkillColor = skill => {
    if (!skill.unlocked) {
      return 'bg-gray-300 bg-opacity-50 border-gray-400 text-gray-600';
    }
    const levelColors = ['bg-green-300 bg-opacity-60 border-green-400 text-green-900', 'bg-blue-300 bg-opacity-60 border-blue-400 text-blue-900', 'bg-purple-300 bg-opacity-60 border-purple-400 text-purple-900', 'bg-orange-300 bg-opacity-60 border-orange-400 text-orange-900', 'bg-red-300 bg-opacity-60 border-red-400 text-red-900'];
    return levelColors[skill.level - 1] || levelColors[0];
  };
  return <section id="skills" className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            技能点
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            互动式技能气泡图，悬停查看技能详情
          </p>
        </div>

        {/* 统一气泡容器 */}
        <div className="flex justify-center">
          <div ref={containerRef} className="relative bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl w-full max-w-5xl h-[500px] overflow-hidden">
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
              height: isHovered ? '120px' : '100px'
            }} onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)}>
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
      </div>
    </section>;
}