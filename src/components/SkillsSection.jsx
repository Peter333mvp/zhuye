
// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { Plus, X, Code, Database, Globe, Cpu, Palette, Shield, Cloud, Smartphone, Settings, ChevronRight, Star, TrendingUp, Award, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { Textarea } from '@/components/ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
const skillSchema = z.object({
  name: z.string().min(1, '技能名称不能为空').max(50, '技能名称不能超过50个字符'),
  proficiency: z.number().min(1, '熟练度至少为1').max(100, '熟练度不能超过100'),
  description: z.string().min(1, '技能描述不能为空').max(200, '技能描述不能超过200个字符'),
  category: z.enum(['编程语言', '框架工具', '设计工具', '云服务', '其他'], {
    required_error: '请选择技能分类'
  })
});
const categoryColors = {
  '编程语言': 'bg-blue-500',
  '框架工具': 'bg-green-500',
  '设计工具': 'bg-purple-500',
  '云服务': 'bg-orange-500',
  '其他': 'bg-gray-500'
};
const categoryIcons = {
  '编程语言': <Code size={16} />,
  '框架工具': <Settings size={16} />,
  '设计工具': <Palette size={16} />,
  '云服务': <Cloud size={16} />,
  '其他': <Globe size={16} />
};
const proficiencyLevels = {
  1: '初学',
  25: '了解',
  50: '熟练',
  75: '精通',
  100: '专家'
};
export function SkillsSection() {
  const [skills, setSkills] = useState([{
    id: 1,
    name: 'Python',
    proficiency: 85,
    description: '熟练使用Python进行数据分析、机器学习和Web开发',
    category: '编程语言',
    icon: <Code size={20} />
  }, {
    id: 2,
    name: 'React',
    proficiency: 80,
    description: '精通React框架，能够构建复杂的单页应用',
    category: '框架工具',
    icon: <Globe size={20} />
  }, {
    id: 3,
    name: 'Node.js',
    proficiency: 75,
    description: '熟练使用Node.js进行后端开发和API设计',
    category: '框架工具',
    icon: <Database size={20} />
  }, {
    id: 4,
    name: 'Figma',
    proficiency: 70,
    description: '能够使用Figma进行UI/UX设计和原型制作',
    category: '设计工具',
    icon: <Palette size={20} />
  }, {
    id: 5,
    name: 'AWS',
    proficiency: 65,
    description: '熟悉AWS云服务，能够部署和管理云应用',
    category: '云服务',
    icon: <Cloud size={20} />
  }, {
    id: 6,
    name: 'Docker',
    proficiency: 60,
    description: '掌握Docker容器化技术，能够构建和部署容器应用',
    category: '框架工具',
    icon: <Cpu size={20} />
  }]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [draggedSkill, setDraggedSkill] = useState(null);
  const form = useForm({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: '',
      proficiency: 50,
      description: '',
      category: '编程语言'
    }
  });
  const onSubmit = data => {
    const newSkill = {
      id: Date.now(),
      name: data.name,
      proficiency: data.proficiency,
      description: data.description,
      category: data.category,
      icon: categoryIcons[data.category]
    };
    setSkills([...skills, newSkill]);
    setIsDialogOpen(false);
    form.reset();
  };
  const handleDragStart = (e, skill) => {
    setDraggedSkill(skill);
    e.dataTransfer.effectAllowed = 'move';
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };
  const handleDrop = (e, targetSkill) => {
    e.preventDefault();
    if (!draggedSkill || draggedSkill.id === targetSkill.id) return;
    const draggedIndex = skills.findIndex(skill => skill.id === draggedSkill.id);
    const targetIndex = skills.findIndex(skill => skill.id === targetSkill.id);
    const newSkills = [...skills];
    newSkills.splice(draggedIndex, 1);
    newSkills.splice(targetIndex, 0, draggedSkill);
    setSkills(newSkills);
    setDraggedSkill(null);
  };
  const handleDragEnd = () => {
    setDraggedSkill(null);
  };
  const getProficiencyColor = proficiency => {
    if (proficiency >= 80) return 'bg-green-500';
    if (proficiency >= 60) return 'bg-blue-500';
    if (proficiency >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  const getProficiencyLevel = proficiency => {
    const levels = Object.keys(proficiencyLevels).map(Number).sort((a, b) => b - a);
    return levels.find(level => proficiency >= level) || 1;
  };
  return <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            专业技能
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            掌握多项技术栈，具备全栈开发能力，持续学习新技术
          </p>
        </div>

        {/* 添加技能按钮 */}
        <div className="flex justify-end mb-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Plus size={20} />
                <span>添加技能</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>添加新技能</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => <FormItem>
                      <FormLabel>技能名称</FormLabel>
                      <FormControl>
                        <Input placeholder="例如：JavaScript" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                  <FormField control={form.control} name="category" render={({ field }) => <FormItem>
                      <FormLabel>技能分类</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="选择技能分类" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="编程语言">编程语言</SelectItem>
                          <SelectItem value="框架工具">框架工具</SelectItem>
                          <SelectItem value="设计工具">设计工具</SelectItem>
                          <SelectItem value="云服务">云服务</SelectItem>
                          <SelectItem value="其他">其他</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>} />
                  <FormField control={form.control} name="proficiency" render={({ field }) => <FormItem>
                      <FormLabel>熟练度 ({field.value}%)</FormLabel>
                      <FormControl>
                        <Input type="range" min="1" max="100" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                      </FormControl>
                      <FormDescription>
                        {proficiencyLevels[getProficiencyLevel(field.value)]}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>} />
                  <FormField control={form.control} name="description" render={({ field }) => <FormItem>
                      <FormLabel>技能描述</FormLabel>
                      <FormControl>
                        <Textarea placeholder="描述你的技能水平和应用场景" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      取消
                    </Button>
                    <Button type="submit">
                      添加技能
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {/* 技能网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => <div key={skill.id} draggable onDragStart={e => handleDragStart(e, skill)} onDragOver={handleDragOver} onDrop={e => handleDrop(e, skill)} onDragEnd={handleDragEnd} className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-move ${draggedSkill?.id === skill.id ? 'opacity-50' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${categoryColors[skill.category]} rounded-lg flex items-center justify-center text-white`}>
                  {skill.icon}
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {skill.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">熟练度</span>
                  <span className="text-sm font-medium text-gray-900">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${getProficiencyColor(skill.proficiency)} h-2 rounded-full transition-all duration-500`} style={{ width: `${skill.proficiency}%` }} />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">
                    {proficiencyLevels[getProficiencyLevel(skill.proficiency)]}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(Math.ceil(skill.proficiency / 20))].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* 技能统计 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {skills.length}
            </h3>
            <p className="text-gray-600">技能总数</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {skills.filter(s => s.proficiency >= 80).length}
            </h3>
            <p className="text-gray-600">精通技能</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {Math.round(skills.reduce((acc, s) => acc + s.proficiency, 0) / skills.length)}%
            </h3>
            <p className="text-gray-600">平均熟练度</p>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {new Set(skills.map(s => s.category)).size}
            </h3>
            <p className="text-gray-600">技能类别</p>
          </div>
        </div>
      </div>
    </section>;
}
