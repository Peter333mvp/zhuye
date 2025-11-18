// @ts-ignore;
import React from 'react';

export function SkillsSection() {
  const skills = [{
    name: 'React',
    level: 90,
    category: 'Frontend'
  }, {
    name: 'TypeScript',
    level: 85,
    category: 'Frontend'
  }, {
    name: 'Node.js',
    level: 80,
    category: 'Backend'
  }, {
    name: 'Python',
    level: 75,
    category: 'Backend'
  }, {
    name: 'Docker',
    level: 70,
    category: 'DevOps'
  }, {
    name: 'AWS',
    level: 65,
    category: 'Cloud'
  }, {
    name: 'MongoDB',
    level: 80,
    category: 'Database'
  }, {
    name: 'PostgreSQL',
    level: 75,
    category: 'Database'
  }];
  const categories = ['Frontend', 'Backend', 'DevOps', 'Cloud', 'Database'];
  return <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                技能专长
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                掌握现代Web开发技术栈，具备全栈开发能力
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map(category => <div key={category} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map(skill => <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{
                  width: `${skill.level}%`
                }} />
                          </div>
                        </div>)}
                  </div>
                </div>)}
            </div>
          </div>
        </section>;
}