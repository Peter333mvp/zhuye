// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';

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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [breathScale, setBreathScale] = useState({});
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // 初始化气泡位置和呼吸缩放
  useEffect(() => {
    const initialPositions = {};
    const initialBreath = {};
    skills.forEach(skill => {
      initialPositions[skill.id] = {
        x: Math.random() * 80 + 10,
        // 10% - 90%
        y: Math.random() * 80 + 10,
        // 10% - 90%
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseX: 0,
        baseY: 0
      };
      initialBreath[skill.id] = {
        scale: 1,
        phase: Math.random() * Math.PI * 2
      };
    });
    setBubblePositions(initialPositions);
    setBreathScale(initialBreath);
  }, []);

  // 鼠标位置追踪
  useEffect(() => {
    const handleMouseMove = e => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width * 100,
          y: (e.clientY - rect.top) / rect.height * 100
        });
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // 气泡动画（漂浮 + 鼠标引力 + 呼吸效果）
  useEffect(() => {
    const animate = () => {
      const time = Date.now() * 0.001;
      setBubblePositions(prev => {
        const newPositions = {
          ...prev
        };
        Object.keys(newPositions).forEach(skillId => {
          const pos = newPositions[skillId];

          // 基础漂浮运动
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

          // 鼠标引力效果
          const dx = mousePosition.x - pos.x;
          const dy = mousePosition.y - pos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 20 && distance > 0) {
            // 在20%范围内产生引力/斥力
            const force = (20 - distance) / 20 * 0.5;
            // 根据技能状态决定是吸引还是推开
            const skill = skills.find(s => s.id == skillId);
            const isRepel = !skill?.unlocked;
            if (isRepel) {
              // 未解锁的技能被推开
              pos.vx -= dx / distance * force;
              pos.vy -= dy / distance * force;
            } else {
              // 已解锁的技能被吸引
              pos.vx += dx / distance * force * 0.3;
              pos.vy += dy / distance * force * 0.3;
            }
          }

          // 添加随机扰动
          if (Math.random() < 0.01) {
            pos.vx += (Math.random() - 0.5) * 0.1;
            pos.vy += (Math.random() - 0.5) * 0.1;
          }

          // 限制速度
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
          breath.scale = 1 + Math.sin(time * 0.5 + breath.phase) * 0.05;
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
  }, [mousePosition, skills]);
  const getSkillColor = skill => {
    if (!skill.unlocked) {
      return 'bg-gray-300 bg-opacity-30 border-gray-400 text-gray-600 backdrop-blur-sm';
    }
    const levelColors = ['bg-green-300 bg-opacity-40 border-green-400 text-green-900 backdrop-blur-sm', 'bg-blue-300 bg-opacity-40 border-blue-400 text-blue-900 backdrop-blur-sm', 'bg-purple-300 bg-opacity-40 border-purple-400 text-purple-900 backdrop-blur-sm', 'bg-orange-300 bg-opacity-40 border-orange-400 text-orange-900 backdrop-blur-sm', 'bg-red-300 bg-opacity-40 border-red-400 text-red-900 backdrop-blur-sm'];
    return levelColors[skill.level - 1] || levelColors[0];
  };
  return <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            技能点
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            互动式技能气泡图，悬停查看技能详情，体验鼠标引力效果
          </p>
        </div>

        {/* 统一气泡容器 - 增大尺寸 */}
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
            const baseSize = 120;
            // 增大基础尺寸
            const hoverSize = 150;
            // 增大悬停尺寸
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
                  {/* 只保留文字，去掉图标 */}
                  <div className="text-center">
                    <div className="text-sm font-bold truncate px-2 drop-shadow-sm">
                      {skill.name}
                    </div>
                  </div>
                  
                  {/* 悬停工具提示 */}
                  {isHovered && <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-gray-900 bg-opacity-90 text-white text-xs rounded-lg whitespace-nowrap z-30 backdrop-blur-sm" style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                      <div className="font-bold mb-1">{skill.name}</div>
                      <div className="mb-1">{skill.description}</div>
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