// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Plus, X, GraduationCap, Trophy, Briefcase, Calendar, MapPin, ExternalLink, Award, Users, Target, TrendingUp, BookOpen, Medal, Star } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';

import { useForm } from 'react-hook-form';
const experienceCategories = {
  '教育背景': {
    icon: <GraduationCap size={20} />,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50'
  },
  '竞赛项目': {
    icon: <Trophy size={20} />,
    color: 'bg-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  '实践经历': {
    icon: <Briefcase size={20} />,
    color: 'bg-green-500',
    bgColor: 'bg-green-50'
  }
};
export function ExperienceSection() {
  const [experiences, setExperiences] = useState([{
    id: 1,
    type: '教育背景',
    title: '上海大学',
    subtitle: '机械电子工程 · 本科',
    period: '2020.09 - 2024.06',
    location: '上海',
    description: '主修机械电子工程专业，GPA 3.8/4.0，获得多次奖学金。参与多个创新项目，培养了扎实的工程实践能力和团队协作精神。',
    achievements: ['优秀学生奖学金', '创新项目一等奖', '优秀毕业生'],
    details: {
      degree: '本科',
      major: '机械电子工程',
      gpa: '3.8/4.0'
    }
  }, {
    id: 2,
    type: '竞赛项目',
    title: '全国大学生机械创新设计大赛',
    subtitle: '智能仓储机器人项目',
    period: '2023.03 - 2023.08',
    location: '北京',
    description: '作为团队负责人，设计并开发了智能仓储机器人系统，实现了自动导航、货物识别和智能分拣功能。',
    achievements: ['全国一等奖', '最佳创新奖', '技术突破奖'],
    details: {
      role: '团队负责人',
      teamSize: '5人',
      technologies: 'ROS, Python, OpenCV'
    }
  }, {
    id: 3,
    type: '实践经历',
    title: '华为技术有限公司',
    subtitle: 'AI算法实习生',
    period: '2023.07 - 2023.09',
    location: '深圳',
    description: '参与华为云AI平台的算法优化工作，主要负责图像识别模型的训练和部署，提升了模型准确率15%。',
    achievements: ['优秀实习生', '技术创新贡献奖'],
    details: {
      department: 'AI算法部',
      mentor: '张工程师',
      projects: '图像识别优化'
    }
  }]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('教育背景');
  const form = useForm({
    defaultValues: {
      type: '教育背景',
      title: '',
      subtitle: '',
      period: '',
      location: '',
      description: '',
      achievements: '',
      degree: '',
      major: '',
      gpa: '',
      role: '',
      teamSize: '',
      technologies: '',
      department: '',
      mentor: '',
      projects: ''
    }
  });
  const handleTypeChange = type => {
    setSelectedType(type);
    form.setValue('type', type);
    // 清空特定字段
    form.reset({
      type,
      title: '',
      subtitle: '',
      period: '',
      location: '',
      description: '',
      achievements: '',
      degree: '',
      major: '',
      gpa: '',
      role: '',
      teamSize: '',
      technologies: '',
      department: '',
      mentor: '',
      projects: ''
    });
  };
  const onSubmit = data => {
    const newExperience = {
      id: Date.now(),
      type: data.type,
      title: data.title,
      subtitle: data.subtitle,
      period: data.period,
      location: data.location,
      description: data.description,
      achievements: data.achievements.split(',').map(achievement => achievement.trim()).filter(achievement => achievement),
      details: {}
    };
    // 根据类型添加特定字段
    if (data.type === '教育背景') {
      newExperience.details = {
        degree: data.degree,
        major: data.major,
        gpa: data.gpa
      };
    } else if (data.type === '竞赛项目') {
      newExperience.details = {
        role: data.role,
        teamSize: data.teamSize,
        technologies: data.technologies
      };
    } else if (data.type === '实践经历') {
      newExperience.details = {
        department: data.department,
        mentor: data.mentor,
        projects: data.projects
      };
    }
    setExperiences([...experiences, newExperience]);
    setIsDialogOpen(false);
    form.reset();
  };
  const getExperiencesByType = type => experiences.filter(exp => exp.type === type);
  return <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            经历与成就
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            记录我的学习历程、竞赛经历和实践经验，展现个人成长轨迹
          </p>
        </div>

        {/* 添加经历按钮 */}
        <div className="flex justify-end mb-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Plus size={20} />
                <span>添加经历</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>添加新经历</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* 经历类型选择 */}
                  <FormField control={form.control} name="type" render={({
                  field
                }) => <FormItem>
                      <FormLabel>经历类型</FormLabel>
                      <Select onValueChange={value => handleTypeChange(value)} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="选择经历类型" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="教育背景">教育背景</SelectItem>
                          <SelectItem value="竞赛项目">竞赛项目</SelectItem>
                          <SelectItem value="实践经历">实践经历</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>} />

                  {/* 基础字段 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="title" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>机构/项目名称</FormLabel>
                        <FormControl>
                          <Input placeholder="输入机构或项目名称" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                    <FormField control={form.control} name="subtitle" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>职位/专业</FormLabel>
                        <FormControl>
                          <Input placeholder="输入职位或专业" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="period" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>时间周期</FormLabel>
                        <FormControl>
                          <Input placeholder="例如：2023.01 - 2023.06" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                    <FormField control={form.control} name="location" render={({
                    field
                  }) => <FormItem>
                        <FormLabel>地点</FormLabel>
                        <FormControl>
                          <Input placeholder="输入地点" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  </div>
                  <FormField control={form.control} name="description" render={({
                  field
                }) => <FormItem>
                      <FormLabel>详细描述</FormLabel>
                      <FormControl>
                        <Textarea placeholder="详细描述经历内容、职责和成果" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                  <FormField control={form.control} name="achievements" render={({
                  field
                }) => <FormItem>
                      <FormLabel>成就与荣誉</FormLabel>
                      <FormControl>
                        <Input placeholder="优秀学生奖, 最佳创新奖（用逗号分隔）" {...field} />
                      </FormControl>
                      <FormDescription>
                        用逗号分隔多个成就
                      </FormDescription>
                      <FormMessage />
                    </FormItem>} />

                  {/* 根据类型显示特定字段 */}
                  {selectedType === '教育背景' && <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-3">教育背景特定信息</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={form.control} name="degree" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>学位</FormLabel>
                            <FormControl>
                              <Input placeholder="本科/硕士/博士" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                        <FormField control={form.control} name="major" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>专业</FormLabel>
                            <FormControl>
                              <Input placeholder="输入专业名称" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      </div>
                      <FormField control={form.control} name="gpa" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>GPA</FormLabel>
                          <FormControl>
                            <Input placeholder="例如：3.8/4.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    </div>}

                  {selectedType === '竞赛项目' && <div className="space-y-4 p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-medium text-yellow-900 mb-3">竞赛项目特定信息</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={form.control} name="role" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>担任角色</FormLabel>
                            <FormControl>
                              <Input placeholder="团队负责人/核心成员" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                        <FormField control={form.control} name="teamSize" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>团队规模</FormLabel>
                            <FormControl>
                              <Input placeholder="例如：5人" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      </div>
                      <FormField control={form.control} name="technologies" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>使用技术</FormLabel>
                          <FormControl>
                            <Input placeholder="Python, React, TensorFlow" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    </div>}

                  {selectedType === '实践经历' && <div className="space-y-4 p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-3">实践经历特定信息</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={form.control} name="department" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>部门</FormLabel>
                            <FormControl>
                              <Input placeholder="输入部门名称" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                        <FormField control={form.control} name="mentor" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>导师/主管</FormLabel>
                            <FormControl>
                              <Input placeholder="输入导师或主管姓名" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      </div>
                      <FormField control={form.control} name="projects" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>参与项目</FormLabel>
                          <FormControl>
                            <Input placeholder="输入参与的主要项目" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    </div>}

                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      取消
                    </Button>
                    <Button type="submit">
                      添加经历
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {/* 经历分类展示 */}
        <div className="space-y-16">
          {Object.keys(experienceCategories).map(category => {
          const categoryExperiences = getExperiencesByType(category);
          const categoryInfo = experienceCategories[category];
          return <div key={category}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${categoryInfo.color} rounded-lg flex items-center justify-center mr-4 text-white`}>
                    {categoryInfo.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category}
                    </h3>
                    <p className="text-gray-600">
                      {categoryExperiences.length} 项经历
                    </p>
                  </div>
                </div>

                {categoryExperiences.length === 0 ? <div className={`text-center py-12 ${categoryInfo.bgColor} rounded-xl border-2 border-dashed border-gray-300`}>
                    <div className={`w-16 h-16 ${categoryInfo.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white opacity-50`}>
                      {categoryInfo.icon}
                    </div>
                    <p className="text-gray-500">
                      暂无{category}经历
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      点击上方"添加经历"按钮开始添加
                    </p>
                  </div> : <div className="space-y-6">
                    {categoryExperiences.map((experience, index) => <div key={experience.id} className={`relative ${categoryInfo.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}>
                        {/* 时间线连接线 */}
                        {index < categoryExperiences.length - 1 && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300" />}

                        <div className="flex items-start">
                          <div className={`w-10 h-10 ${categoryInfo.color} rounded-lg flex items-center justify-center mr-4 text-white flex-shrink-0`}>
                            {categoryInfo.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-1">
                                  {experience.title}
                                </h4>
                                <p className="text-lg text-gray-700 font-medium">
                                  {experience.subtitle}
                                </p>
                              </div>
                              <div className={`px-3 py-1 ${categoryInfo.color} text-white text-sm rounded-full`}>
                                {experience.type}
                              </div>
                            </div>

                            <div className="flex items-center text-gray-600 mb-4 space-x-4">
                              <div className="flex items-center">
                                <Calendar size={16} className="mr-1" />
                                {experience.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin size={16} className="mr-1" />
                                {experience.location}
                              </div>
                            </div>

                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {experience.description}
                            </p>

                            {/* 特定字段显示 */}
                            {experience.type === '教育背景' && experience.details && <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">学位</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.degree}
                                  </p>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">专业</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.major}
                                  </p>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">GPA</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.gpa}
                                  </p>
                                </div>
                              </div>}

                            {experience.type === '竞赛项目' && experience.details && <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">角色</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.role}
                                  </p>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">团队规模</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.teamSize}
                                  </p>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">技术栈</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.technologies}
                                  </p>
                                </div>
                              </div>}

                            {experience.type === '实践经历' && experience.details && <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">部门</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.department}
                                  </p>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">导师/主管</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.mentor}
                                  </p>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-1">参与项目</p>
                                  <p className="font-medium text-gray-900">
                                    {experience.details.projects}
                                  </p>
                                </div>
                              </div>}

                            {experience.achievements.length > 0 && <div className="flex flex-wrap gap-2">
                                {experience.achievements.map((achievement, index) => <div key={index} className="flex items-center px-3 py-1 bg-white rounded-full text-sm">
                                    <Award size={14} className="text-yellow-500 mr-1" />
                                    <span className="text-gray-700">
                                      {achievement}
                                    </span>
                                  </div>)}
                              </div>}
                          </div>
                        </div>
                      </div>)}
                  </div>}
              </div>;
        })}
        </div>

        {/* 经历统计 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <GraduationCap size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {getExperiencesByType('教育背景').length}
            </h3>
            <p className="text-gray-600">教育经历</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Trophy size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {getExperiencesByType('竞赛项目').length}
            </h3>
            <p className="text-gray-600">竞赛项目</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Briefcase size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {getExperiencesByType('实践经历').length}
            </h3>
            <p className="text-gray-600">实践经历</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Medal size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {experiences.reduce((acc, exp) => acc + exp.achievements.length, 0)}
            </h3>
            <p className="text-gray-600">获得成就</p>
          </div>
        </div>
      </div>
    </section>;
}