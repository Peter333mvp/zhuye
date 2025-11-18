// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Plus, X, ExternalLink, Github, Calendar, Award, Tag, Image as ImageIcon, Star, TrendingUp, Users, Code, Palette, Zap, Smartphone } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';

import { useForm } from 'react-hook-form';
const projectCategories = {
  'Web应用': {
    icon: <Code size={20} />,
    color: 'bg-blue-500'
  },
  '移动应用': {
    icon: <Smartphone size={20} />,
    color: 'bg-green-500'
  },
  '设计作品': {
    icon: <Palette size={20} />,
    color: 'bg-purple-500'
  },
  '数据分析': {
    icon: <TrendingUp size={20} />,
    color: 'bg-orange-500'
  },
  '其他项目': {
    icon: <Zap size={20} />,
    color: 'bg-gray-500'
  }
};
export function ProjectsSection() {
  const [projects, setProjects] = useState([{
    id: 1,
    title: '智能任务管理系统',
    description: '基于React和Node.js开发的企业级任务管理平台，支持团队协作、进度跟踪和数据分析功能',
    image: 'https://picsum.photos/seed/project1/400/300.jpg',
    category: 'Web应用',
    tags: ['React', 'Node.js', 'MongoDB'],
    awards: ['最佳创新奖', '技术突破奖'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    demoUrl: 'https://demo.taskmanager.com',
    featured: true,
    createdAt: '2024-01-15'
  }, {
    id: 2,
    title: 'AI图像识别应用',
    description: '使用深度学习技术开发的图像识别应用，能够准确识别和分类多种物体，准确率达到95%以上',
    image: 'https://picsum.photos/seed/project2/400/300.jpg',
    category: '数据分析',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
    awards: ['AI创新大赛一等奖'],
    githubUrl: 'https://github.com/yourusername/ai-image-recognition',
    demoUrl: 'https://demo.ai-image.com',
    featured: true,
    createdAt: '2024-02-20'
  }, {
    id: 3,
    title: '移动社交平台',
    description: '跨平台移动应用，支持实时聊天、动态分享、位置服务等功能，用户量突破10万',
    image: 'https://picsum.photos/seed/project3/400/300.jpg',
    category: '移动应用',
    tags: ['React Native', 'Firebase', 'Redux'],
    awards: ['最佳用户体验奖'],
    githubUrl: 'https://github.com/yourusername/social-app',
    demoUrl: 'https://demo.socialapp.com',
    featured: false,
    createdAt: '2024-03-10'
  }]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState('全部');
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: 'Web应用',
      tags: '',
      awards: '',
      githubUrl: '',
      demoUrl: '',
      featured: false,
      imageUrl: ''
    }
  });
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);
  const categories = ['全部', ...Object.keys(projectCategories)];
  const filteredProjects = filter === '全部' ? regularProjects : regularProjects.filter(project => project.category === filter);
  const onSubmit = data => {
    const newProject = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      image: data.imageUrl || `https://picsum.photos/seed/project${Date.now()}/400/300.jpg`,
      category: data.category,
      tags: data.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      awards: data.awards.split(',').map(award => award.trim()).filter(award => award),
      githubUrl: data.githubUrl,
      demoUrl: data.demoUrl,
      featured: data.featured,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProjects([...projects, newProject]);
    setIsDialogOpen(false);
    form.reset();
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredProjects.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };
  const validateUrl = (url, type) => {
    if (!url) return true;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            我的项目
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            展示我在不同领域的技术项目和创意作品，体现技术实力和创新能力
          </p>
        </div>

        {/* 添加项目按钮 */}
        <div className="flex justify-end mb-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Plus size={20} />
                <span>添加项目</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>添加新项目</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="title" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>项目标题</FormLabel>
                        <FormControl>
                          <Input placeholder="输入项目标题" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                    <FormField control={form.control} name="category" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>项目类别</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="选择项目类别" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.keys(projectCategories).map(category => <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>} />
                  </div>
                  <FormField control={form.control} name="description" render={({
                  field
                }) => <FormItem>
                      <FormLabel>项目描述</FormLabel>
                      <FormControl>
                        <Textarea placeholder="详细描述项目内容、功能和技术特点" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                  <FormField control={form.control} name="imageUrl" render={({
                  field
                }) => <FormItem>
                      <FormLabel>项目图片URL</FormLabel>
                      <FormControl>
                        <Input placeholder="输入图片URL（可选）" {...field} />
                      </FormControl>
                      <FormDescription>
                        留空将使用随机图片
                      </FormDescription>
                      <FormMessage />
                    </FormItem>} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="tags" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>技术标签</FormLabel>
                        <FormControl>
                          <Input placeholder="React, Node.js, MongoDB（用逗号分隔）" {...field} />
                        </FormControl>
                        <FormDescription>
                          用逗号分隔多个标签
                        </FormDescription>
                        <FormMessage />
                      </FormItem>} />
                    <FormField control={form.control} name="awards" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>获奖情况</FormLabel>
                        <FormControl>
                          <Input placeholder="最佳创新奖, 技术突破奖（用逗号分隔）" {...field} />
                        </FormControl>
                        <FormDescription>
                          用逗号分隔多个奖项
                        </FormDescription>
                        <FormMessage />
                      </FormItem>} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="githubUrl" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>GitHub链接</FormLabel>
                        <FormControl>
                          <Input placeholder="https://github.com/yourusername/project" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                    <FormField control={form.control} name="demoUrl" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>演示链接</FormLabel>
                        <FormControl>
                          <Input placeholder="https://demo.project.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  </div>
                  <FormField control={form.control} name="featured" render={({
                  field
                }) => <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <input type="checkbox" checked={field.value} onChange={field.onChange} className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                      </FormControl>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        设为精选项目
                      </FormLabel>
                      <FormDescription>
                        精选项目将在轮播中展示
                      </FormDescription>
                      <FormMessage />
                    </FormItem>} />
                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      取消
                    </Button>
                    <Button type="submit">
                      添加项目
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {/* 精选项目轮播 */}
        {featuredProjects.length > 0 && <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              精选项目
            </h3>
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
                  {featuredProjects.map(project => <div key={project.id} className="w-full flex-shrink-0">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/2">
                            <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover" />
                          </div>
                          <div className="md:w-1/2 p-8">
                            <div className="flex items-center mb-4">
                              <div className={`w-10 h-10 ${projectCategories[project.category].color} rounded-lg flex items-center justify-center mr-3 text-white`}>
                                {projectCategories[project.category].icon}
                              </div>
                              <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
                                  {tag}
                                </span>)}
                            </div>
                            {project.awards.length > 0 && <div className="mb-6">
                                <div className="flex items-center mb-2">
                                  <Award size={16} className="text-yellow-500 mr-2" />
                                  <span className="text-sm font-medium text-gray-700">获奖情况</span>
                                </div>
                                <div className="space-y-1">
                                  {project.awards.map((award, index) => <div key={index} className="flex items-center text-sm text-gray-600">
                                      <Star size={12} className="text-yellow-500 mr-2" />
                                      {award}
                                    </div>)}
                                </div>
                              </div>}
                            <div className="flex space-x-4">
                              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
                                  <Github size={16} />
                                  <span>源代码</span>
                                </a>}
                              {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                  <ExternalLink size={16} />
                                  <span>在线演示</span>
                                </a>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              {/* 轮播控制按钮 */}
              {featuredProjects.length > 1 && <>
                  <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>}
              {/* 轮播指示器 */}
              <div className="flex justify-center mt-4 space-x-2">
                {featuredProjects.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300'}`} />)}
              </div>
            </div>
          </div>}

        {/* 项目筛选 */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${filter === category ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                {category}
              </button>)}
          </div>
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 ${projectCategories[project.category].color} text-white text-sm rounded-full`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>)}
                </div>
                {project.awards.length > 0 && <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <Award size={14} className="text-yellow-500 mr-1" />
                      <span className="text-xs font-medium text-gray-700">获奖</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      {project.awards.join(', ')}
                    </div>
                  </div>}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.createdAt}
                  </div>
                  <div className="flex space-x-2">
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
                        <Github size={16} />
                      </a>}
                    {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                        <ExternalLink size={16} />
                      </a>}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* 项目统计 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Code size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {projects.length}
            </h3>
            <p className="text-gray-600">项目总数</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {featuredProjects.length}
            </h3>
            <p className="text-gray-600">精选项目</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Tag size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {[...new Set(projects.flatMap(p => p.tags))].length}
            </h3>
            <p className="text-gray-600">技术标签</p>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {projects.reduce((acc, p) => acc + p.awards.length, 0)}
            </h3>
            <p className="text-gray-600">获得奖项</p>
          </div>
        </div>
      </div>
    </section>;
}