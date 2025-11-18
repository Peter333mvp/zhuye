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
        x: Math.random() * 70 + 15,
        // 15% - 85%
        y: Math.random() * 70 + 15,
        // 15% - 85%
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 60 // 气泡半径
      };
    });
    setBubblePositions(initialPositions);
  }, []);

  // 检测气泡碰撞
  const checkCollision = (pos1, pos2, radius1, radius2) => {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (radius1 + radius2) / 10; // 转换为百分比距离
  };

  // 处理碰撞弹开
  const handleCollision = (pos1, pos2, radius1, radius2) => {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 0.001) return; // 避免除零

    // 计算弹开方向
    const nx = dx / distance;
    const ny = dy / distance;

    // 弹开力度（缓慢弹开）
    const force = 0.05;

    // 更新速度
    pos1.vx += nx * force;
    pos1.vy += ny * force;
    pos2.vx -= nx * force;
    pos2.vy -= ny * force;

    // 限制最大速度
    const maxSpeed = 0.3;
    pos1.vx = Math.max(-maxSpeed, Math.min(maxSpeed, pos1.vx));
    pos1.vy = Math.max(-maxSpeed, Math.min(maxSpeed, pos1.vy));
    pos2.vx = Math.max(-maxSpeed, Math.min(maxSpeed, pos2.vx));
    pos2.vy = Math.max(-maxSpeed, Math.min(maxSpeed, pos2.vy));
  };

  // 气泡漂浮动画
  useEffect(() => {
    const animate = () => {
      setBubblePositions(prev => {
        const newPositions = {
          ...prev
        };
        const positionsArray = Object.keys(newPositions).map(id => ({
          id,
          ...newPositions[id]
        }));

        // 检测并处理碰撞
        for (let i = 0; i < positionsArray.length; i++) {
          for (let j = i + 1; j < positionsArray.length; j++) {
            const pos1 = positionsArray[i];
            const pos2 = positionsArray[j];
            if (checkCollision(pos1, pos2, pos1.radius, pos2.radius)) {
              handleCollision(pos1, pos2, pos1.radius, pos2.radius);
            }
          }
        }

        // 更新位置
        Object.keys(newPositions).forEach(skillId => {
          const pos = newPositions[skillId];

          // 更新位置
          pos.x += pos.vx;
          pos.y += pos.vy;

          // 边界检测和反弹
          const margin = pos.radius / 10; // 边界边距
          if (pos.x <= margin || pos.x >= 100 - margin) {
            pos.vx = -pos.vx * 0.8; // 碰撞边界时减速
            pos.x = Math.max(margin, Math.min(100 - margin, pos.x));
          }
          if (pos.y <= margin || pos.y >= 100 - margin) {
            pos.vy = -pos.vy * 0.8; // 碰撞边界时减速
            pos.y = Math.max(margin, Math.min(100 - margin, pos.y));
          }

          // 添加随机扰动
          if (Math.random() < 0.005) {
            pos.vx += (Math.random() - 0.5) * 0.05;
            pos.vy += (Math.random() - 0.5) * 0.05;
          }

          // 速度衰减
          pos.vx *= 0.99;
          pos.vy *= 0.99;
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
            const bubbleSize = isHovered ? 140 : 120; // 增加气泡大小
            return <div key={skill.id} className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${getSkillColor(skill)} border-2 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl ${isHovered ? 'scale-110 z-10' : 'scale-100'}`} style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: `${bubbleSize}px`,
              height: `${bubbleSize}px`
            }} onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)}>
                  <div className="text-center">
                    <div className="text-sm font-bold truncate px-2">
                      {skill.name}
                    </div>
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