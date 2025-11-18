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

  // 检测两个气泡之间的碰撞
  const checkCollision = (bubble1, bubble2) => {
    const dx = bubble1.x - bubble2.x;
    const dy = bubble1.y - bubble2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = bubble1.radius + bubble2.radius;
    return distance < minDistance;
  };

  // 处理碰撞弹开效果
  const resolveCollision = (bubble1, bubble2) => {
    const dx = bubble1.x - bubble2.x;
    const dy = bubble1.y - bubble2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance === 0) return; // 避免除零错误

    // 计算碰撞法向量
    const nx = dx / distance;
    const ny = dy / distance;

    // 计算相对速度
    const dvx = bubble1.vx - bubble2.vx;
    const dvy = bubble1.vy - bubble2.vy;

    // 计算相对速度在碰撞法向量上的投影
    const dvn = dvx * nx + dvy * ny;

    // 如果气泡正在分离，不处理
    if (dvn > 0) return;

    // 计算碰撞冲量（缓慢弹开效果）
    const impulse = 0.5 * dvn;

    // 更新速度
    bubble1.vx -= impulse * nx;
    bubble1.vy -= impulse * ny;
    bubble2.vx += impulse * nx;
    bubble2.vy += impulse * ny;

    // 分离重叠的气泡
    const overlap = bubble1.radius + bubble2.radius - distance;
    const separationX = nx * overlap * 0.5;
    const separationY = ny * overlap * 0.5;
    bubble1.x += separationX;
    bubble1.y += separationY;
    bubble2.x -= separationX;
    bubble2.y -= separationY;
  };

  // 气泡漂浮动画和碰撞检测
  useEffect(() => {
    const animate = () => {
      setBubblePositions(prev => {
        const newPositions = {
          ...prev
        };
        const bubbles = Object.values(newPositions);

        // 更新位置
        bubbles.forEach(bubble => {
          // 更新位置
          bubble.x += bubble.vx;
          bubble.y += bubble.vy;

          // 边界检测和反弹
          if (bubble.x <= 10 || bubble.x >= 90) {
            bubble.vx = -bubble.vx * 0.8; // 添加阻尼效果
            bubble.x = Math.max(10, Math.min(90, bubble.x));
          }
          if (bubble.y <= 10 || bubble.y >= 90) {
            bubble.vy = -bubble.vy * 0.8; // 添加阻尼效果
            bubble.y = Math.max(10, Math.min(90, bubble.y));
          }

          // 添加随机扰动
          if (Math.random() < 0.005) {
            bubble.vx += (Math.random() - 0.5) * 0.05;
            bubble.vy += (Math.random() - 0.5) * 0.05;
            // 限制速度
            bubble.vx = Math.max(-0.3, Math.min(0.3, bubble.vx));
            bubble.vy = Math.max(-0.3, Math.min(0.3, bubble.vy));
          }

          // 添加速度阻尼
          bubble.vx *= 0.99;
          bubble.vy *= 0.99;
        });

        // 碰撞检测和响应
        for (let i = 0; i < bubbles.length; i++) {
          for (let j = i + 1; j < bubbles.length; j++) {
            if (checkCollision(bubbles[i], bubbles[j])) {
              resolveCollision(bubbles[i], bubbles[j]);
            }
          }
        }
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
          <div ref={containerRef} className="relative bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl w-full max-w-5xl h-[600px] overflow-hidden">
            {skills.map(skill => {
            const position = bubblePositions[skill.id] || {
              x: 50,
              y: 50,
              radius: 60
            };
            const isHovered = hoveredSkill === skill.id;
            const bubbleSize = isHovered ? 140 : 120; // 增大气泡尺寸
            return <div key={skill.id} className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${getSkillColor(skill)} border-2 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl ${isHovered ? 'scale-110 z-10' : 'scale-100'}`} style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: `${bubbleSize}px`,
              height: `${bubbleSize}px`
            }} onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)}>
                  <div className="text-center px-2">
                    <div className="text-sm font-bold leading-tight">
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