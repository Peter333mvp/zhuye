// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';

export function SkillsSection() {
  const [skills] = useState([{
    id: 1,
    name: '英语CET-4',
    description: '大学英语四级证书',
    unlocked: true
  }, {
    id: 2,
    name: 'Office系列',
    description: 'Word, Excel, PowerPoint等办公软件',
    unlocked: true
  }, {
    id: 3,
    name: 'PS/PR',
    description: 'Photoshop和Premiere Pro图像视频处理',
    unlocked: true
  }, {
    id: 4,
    name: 'AI大模型应用',
    description: 'ChatGPT, Claude等AI工具应用',
    unlocked: false
  }, {
    id: 5,
    name: 'SolidWorks',
    description: '三维机械设计软件',
    unlocked: true
  }, {
    id: 6,
    name: 'AutoCAD',
    description: '二维制图软件',
    unlocked: true
  }, {
    id: 7,
    name: 'CATIA',
    description: '高端CAD/CAE/CAM软件',
    unlocked: false
  }, {
    id: 8,
    name: 'MATLAB',
    description: '数值计算与仿真软件',
    unlocked: true
  }, {
    id: 9,
    name: 'Visual Studio',
    description: '集成开发环境',
    unlocked: false
  }]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [bubblePositions, setBubblePositions] = useState({});
  const [breathScale, setBreathScale] = useState({});
  const [bubbleColors, setBubbleColors] = useState({});
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // 随机颜色数组
  const colorOptions = ['bg-red-300 bg-opacity-40 border-red-400 text-red-900', 'bg-blue-300 bg-opacity-40 border-blue-400 text-blue-900', 'bg-green-300 bg-opacity-40 border-green-400 text-green-900', 'bg-yellow-300 bg-opacity-40 border-yellow-400 text-yellow-900', 'bg-purple-300 bg-opacity-40 border-purple-400 text-purple-900', 'bg-pink-300 bg-opacity-40 border-pink-400 text-pink-900', 'bg-indigo-300 bg-opacity-40 border-indigo-400 text-indigo-900', 'bg-orange-300 bg-opacity-40 border-orange-400 text-orange-900'];

  // 初始化气泡位置、呼吸缩放和颜色
  useEffect(() => {
    const initialPositions = {};
    const initialBreath = {};
    const initialColors = {};
    skills.forEach(skill => {
      initialPositions[skill.id] = {
        x: Math.random() * 80 + 10,
        // 10% - 90%
        y: Math.random() * 80 + 10,
        // 10% - 90%
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      };
      initialBreath[skill.id] = {
        scale: 1,
        phase: Math.random() * Math.PI * 2
      };
      // 为每个气泡分配随机颜色
      initialColors[skill.id] = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    });
    setBubblePositions(initialPositions);
    setBreathScale(initialBreath);
    setBubbleColors(initialColors);
  }, []);

  // 气泡动画（随机流动 + 斥力效果 + 呼吸效果）
  useEffect(() => {
    const animate = () => {
      const time = Date.now() * 0.001;
      setBubblePositions(prev => {
        const newPositions = {
          ...prev
        };

        // 计算气泡间的斥力
        Object.keys(newPositions).forEach(skillId => {
          const pos = newPositions[skillId];
          let forceX = 0;
          let forceY = 0;

          // 计算与其他气泡的斥力
          Object.keys(newPositions).forEach(otherId => {
            if (skillId !== otherId) {
              const other = newPositions[otherId];
              const dx = pos.x - other.x;
              const dy = pos.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              // 如果距离太近，产生斥力
              if (distance < 15 && distance > 0) {
                // 斥力强度与距离成反比
                const force = (15 - distance) / 15 * 0.5;
                forceX += dx / distance * force;
                forceY += dy / distance * force;
              }
            }
          });

          // 应用斥力
          pos.vx += forceX;
          pos.vy += forceY;

          // 基础随机流动运动
          pos.x += pos.vx;
          pos.y += pos.vy;

          // 边界检测和反弹
          if (pos.x <= 5 || pos.x >= 95) {
            pos.vx = -pos.vx * 0.9;
            pos.x = Math.max(5, Math.min(95, pos.x));
          }
          if (pos.y <= 5 || pos.y >= 95) {
            pos.vy = -pos.vy * 0.9;
            pos.y = Math.max(5, Math.min(95, pos.y));
          }

          // 增加随机扰动
          if (Math.random() < 0.02) {
            pos.vx += (Math.random() - 0.5) * 0.2;
            pos.vy += (Math.random() - 0.5) * 0.2;
          }

          // 添加正弦波动
          pos.vx += Math.sin(time + parseInt(skillId)) * 0.01;
          pos.vy += Math.cos(time + parseInt(skillId)) * 0.01;

          // 限制速度范围
          pos.vx = Math.max(-0.8, Math.min(0.8, pos.vx));
          pos.vy = Math.max(-0.8, Math.min(0.8, pos.vy));
        });
        return newPositions;
      });

      // 呼吸效果动画
      setBreathScale(prev => {
        const newBreath = {
          ...prev
        };
        Object.keys(newBreath).forEach(skillId => {
          const breath = newBreath[skillId];
          breath.scale = 1 + Math.sin(time * 0.3 + breath.phase) * 0.08;
        });
        return newBreath;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [skills]);
  const getSkillColor = skill => {
    if (!skill.unlocked) {
      return 'bg-gray-300 bg-opacity-30 border-gray-400 text-gray-600 backdrop-blur-sm';
    }
    // 使用随机颜色
    return bubbleColors[skill.id] || 'bg-blue-300 bg-opacity-40 border-blue-400 text-blue-900 backdrop-blur-sm';
  };
  return <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            技能点
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            互动式技能气泡图，悬停查看技能详情
          </p>
        </div>

        {/* 统一气泡容器 */}
        <div className="flex justify-center">
          <div ref={containerRef} className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200 w-full max-w-6xl h-[600px] overflow-hidden">
            {skills.map(skill => {
            const position = bubblePositions[skill.id] || {
              x: 50,
              y: 50
            };
            const breath = breathScale[skill.id] || {
              scale: 1
            };
            const isHovered = hoveredSkill === skill.id;
            const baseSize = 100;
            const hoverSize = 130;
            const currentSize = isHovered ? hoverSize : baseSize;
            const finalSize = currentSize * breath.scale;
            return <div key={skill.id} className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${getSkillColor(skill)} border-2 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl ${isHovered ? 'z-20' : 'z-10'}`} style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: `${finalSize}px`,
              height: `${finalSize}px`,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: isHovered ? '0 8px 32px rgba(0, 0, 0, 0.15), 0 0 20px rgba(99, 102, 241, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.1), 0 0 10px rgba(99, 102, 241, 0.1)',
              transform: `translate(-50%, -50%) scale(${breath.scale})`
            }} onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)}>
                  {/* 只保留文字 */}
                  <div className="text-center">
                    <div className="text-sm font-bold truncate px-2 drop-shadow-sm">
                      {skill.name}
                    </div>
                  </div>
                  
                  {/* 简化悬停工具提示 */}
                  {isHovered && <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-gray-900 bg-opacity-90 text-white text-xs rounded-lg whitespace-nowrap z-30 backdrop-blur-sm" style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                      <div className="font-bold mb-1">{skill.name}</div>
                      <div>{skill.description}</div>
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