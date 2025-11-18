// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { GraduationCap, Calendar, MapPin, Award, Trophy, Briefcase, Users, BookOpen, Target, Code, Calculator, Rocket, ChevronLeft, ChevronRight, Play, Pause, Plus, X, School, Medal, UserCheck } from 'lucide-react';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState('education'); // education, competition, practice
  const [formErrors, setFormErrors] = useState({});
  const [education, setEducation] = useState({
    school: '上海大学',
    college: '机电工程与自动化学院',
    major: '机械电子工程',
    tags: ['211工程', '双一流建设高校', '双一流优势学科'],
    courses: ['高等数学', 'C语言', '机械设计', '机械原理', '工程力学', '材料力学', '自动控制原理', '数字电路技术', '电子技术基础', '机器人工学', '深度学习与人工智能']
  });
  const [competitions, setCompetitions] = useState([{
    id: 1,
    title: '中国大学生机械工程创新创意大赛',
    award: '全国三等奖、华东赛区一等奖',
    year: '2025',
    content: '针对太空特殊环境航天器维护和星体探索等多任务应用场景，提出并实现了一种适应太空微重力等特殊环境要求的六足机器人系统设计。通过融合机械设计、运动学建模、智能控制与仿真验证等多学科技术，研究了面向太空极端环境多任务应用场景仿生机器人运动稳定性、环境适应性和系统可靠性等关键技术问题。',
    responsibilities: ['机械系统设计与优化', '运动学建模与仿真', '样机制作与性能测试', '太空环境适应性实验'],
    icon: <Rocket className="text-purple-500" />
  }, {
    id: 2,
    title: '中国机器人大赛暨ROBOTCUP世界杯中国赛',
    award: '亚军（国赛二等奖）',
    year: '2024',
    content: '参与篮球机器人组比赛，机器人具备自动拾球、路径规划、多任务并行处理、定点投篮等功能',
    responsibilities: ['机械结构设计', '零件加工', '现场改装'],
    icon: <Trophy className="text-yellow-500" />
  }, {
    id: 3,
    title: '美国大学生数学建模竞赛（MCM）',
    award: 'M奖（国赛二等奖）',
    year: '2024',
    content: '针对五大湖水资源调控问题，建立模型平衡水位与利益相关者需求，设计算法并分析敏感性',
    responsibilities: ['模型推导与建立', 'MATLAB 求解与检验', '论文撰写'],
    icon: <Calculator className="text-green-500" />
  }]);
  const [practices, setPractices] = useState([{
    id: 1,
    title: '上海大学学生创新创业指导中心',
    position: '中心主任',
    period: '2021.09 - 2024.06',
    description: '负责组织创新创业活动与项目指导',
    icon: <Users className="text-purple-500" />
  }, {
    id: 2,
    title: '全国第十六届精密工程学术研讨会暨青年学者创新论坛',
    position: '志愿者负责人',
    period: '2023.06',
    description: '协调志愿者团队，保障会议顺利进行',
    icon: <Briefcase className="text-indigo-500" />
  }, {
    id: 3,
    title: '上海大学第十三期青年马克思主义者工程',
    position: '学员',
    period: '2023.03 - 2024.03',
    description: '青年马克思主义者培养工程学员',
    icon: <BookOpen className="text-red-500" />
  }, {
    id: 4,
    title: '上海大学第十七期人才学院',
    position: '学员',
    period: '2023.04 - 2024.04',
    description: '人才学院培养计划学员',
    icon: <Target className="text-orange-500" />
  }, {
    id: 5,
    title: '沃顿青年领导力项目',
    position: '学员',
    period: '2024.03 - 2024.06',
    description: '沃顿商学院青年领导力培养项目',
    icon: <Award className="text-teal-500" />
  }]);

  // 表单状态
  const [newEducation, setNewEducation] = useState({
    school: '',
    college: '',
    major: '',
    tags: '',
    courses: ''
  });
  const [newCompetition, setNewCompetition] = useState({
    title: '',
    award: '',
    year: new Date().getFullYear().toString(),
    content: '',
    responsibilities: ''
  });
  const [newPractice, setNewPractice] = useState({
    title: '',
    position: '',
    period: '',
    description: ''
  });
  const tabs = [{
    id: 0,
    name: '教育背景',
    icon: <GraduationCap size={20} />
  }, {
    id: 1,
    name: '竞赛项目',
    icon: <Trophy size={20} />
  }, {
    id: 2,
    name: '实践经历',
    icon: <Briefcase size={20} />
  }];

  // 自动播放功能
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % 3);
    }, 4000); // 每4秒切换一次

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // 表单验证函数
  const validateEducationForm = () => {
    const errors = {};
    if (!newEducation.school.trim()) {
      errors.school = '学校名称不能为空';
    }
    if (!newEducation.college.trim()) {
      errors.college = '学院名称不能为空';
    }
    if (!newEducation.major.trim()) {
      errors.major = '专业名称不能为空';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const validateCompetitionForm = () => {
    const errors = {};
    if (!newCompetition.title.trim()) {
      errors.title = '竞赛名称不能为空';
    }
    if (!newCompetition.year.trim()) {
      errors.year = '年份不能为空';
    }
    if (newCompetition.year && (isNaN(newCompetition.year) || newCompetition.year.length !== 4 || parseInt(newCompetition.year) < 2000 || parseInt(newCompetition.year) > 2030)) {
      errors.year = '请输入有效的年份（2000-2030）';
    }
    if (!newCompetition.content.trim()) {
      errors.content = '项目内容不能为空';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const validatePracticeForm = () => {
    const errors = {};
    if (!newPractice.title.trim()) {
      errors.title = '机构/项目名称不能为空';
    }
    if (!newPractice.position.trim()) {
      errors.position = '职位/角色不能为空';
    }
    if (!newPractice.period.trim()) {
      errors.period = '时间周期不能为空';
    }
    if (!newPractice.description.trim()) {
      errors.description = '描述不能为空';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // 添加新内容函数
  const handleAddEducation = () => {
    if (!validateEducationForm()) return;
    const tagsArray = newEducation.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const coursesArray = newEducation.courses.split(',').map(course => course.trim()).filter(course => course);
    setEducation({
      school: newEducation.school.trim(),
      college: newEducation.college.trim(),
      major: newEducation.major.trim(),
      tags: tagsArray.length > 0 ? tagsArray : [],
      courses: coursesArray.length > 0 ? coursesArray : []
    });
    resetForm();
  };
  const handleAddCompetition = () => {
    if (!validateCompetitionForm()) return;
    const newId = Math.max(...competitions.map(c => c.id), 0) + 1;
    const responsibilitiesArray = newCompetition.responsibilities.split(',').map(resp => resp.trim()).filter(resp => resp);
    const competitionToAdd = {
      id: newId,
      title: newCompetition.title.trim(),
      award: newCompetition.award.trim() || '无奖项',
      year: newCompetition.year.trim(),
      content: newCompetition.content.trim(),
      responsibilities: responsibilitiesArray.length > 0 ? responsibilitiesArray : [],
      icon: <Trophy className="text-indigo-500" />
    };
    setCompetitions([...competitions, competitionToAdd]);
    resetForm();
  };
  const handleAddPractice = () => {
    if (!validatePracticeForm()) return;
    const newId = Math.max(...practices.map(p => p.id), 0) + 1;
    const practiceToAdd = {
      id: newId,
      title: newPractice.title.trim(),
      position: newPractice.position.trim(),
      period: newPractice.period.trim(),
      description: newPractice.description.trim(),
      icon: <Briefcase className="text-indigo-500" />
    };
    setPractices([...practices, practiceToAdd]);
    resetForm();
  };

  // 重置表单
  const resetForm = () => {
    setNewEducation({
      school: '',
      college: '',
      major: '',
      tags: '',
      courses: ''
    });
    setNewCompetition({
      title: '',
      award: '',
      year: new Date().getFullYear().toString(),
      content: '',
      responsibilities: ''
    });
    setNewPractice({
      title: '',
      position: '',
      period: '',
      description: ''
    });
    setFormErrors({});
    setShowAddModal(false);
  };

  // 打开添加模态框
  const openAddModal = type => {
    setModalType(type);
    setShowAddModal(true);
    setFormErrors({});
  };
  const TimelineItem = ({
    item,
    isLast = false
  }) => {
    return <div className="relative flex items-start group">
        {/* 时间线节点 */}
        <div className="flex flex-col items-center mr-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-indigo-200 group-hover:border-indigo-400 transition-colors duration-300 z-10">
            {item.icon}
          </div>
          {!isLast && <div className="w-0.5 h-16 bg-gradient-to-b from-indigo-200 to-transparent mt-2" />}
        </div>

        {/* 内容 */}
        <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 group-hover:border-indigo-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              {item.title}
            </h3>
            {item.year && <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                {item.year}
              </span>}
            {item.period && <span className="text-sm text-gray-500">
                {item.period}
              </span>}
          </div>
          
          {item.award && <div className="text-sm font-semibold text-yellow-600 mb-2">
              {item.award}
            </div>}
          
          {item.position && <div className="text-sm font-semibold text-indigo-600 mb-2">
              {item.position}
            </div>}
          
          <p className="text-gray-600 text-sm mb-3">
            {item.content || item.description}
          </p>
          
          {item.responsibilities && <div className="flex flex-wrap gap-2">
              {item.responsibilities.map((resp, idx) => <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  {resp}
                </span>)}
            </div>}
        </div>
      </div>;
  };
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        // 教育背景
        return <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">教育背景</h3>
              </div>
              
              {/* 添加教育背景按钮 */}
              <button onClick={() => openAddModal('education')} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                <Plus size={16} className="mr-2" />
                添加教育背景
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {education.school}
                </h4>
                <p className="text-indigo-600 font-semibold mb-1">
                  {education.college}
                </p>
                <p className="text-gray-700 font-medium mb-3">
                  {education.major}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {education.tags.map((tag, idx) => <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      {tag}
                    </span>)}
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">主修课程：</h5>
                  <div className="flex flex-wrap gap-1">
                    {education.courses.map((course, idx) => <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {course}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 1:
        // 竞赛项目
        return <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <Trophy size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">竞赛项目</h3>
              </div>
              
              {/* 添加竞赛项目按钮 */}
              <button onClick={() => openAddModal('competition')} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-sm font-medium rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
                <Plus size={16} className="mr-2" />
                添加竞赛项目
              </button>
            </div>

            <div className="space-y-6">
              {competitions.map((competition, index) => <TimelineItem key={competition.id} item={competition} isLast={index === competitions.length - 1} />)}
            </div>
          </div>;
      case 2:
        // 实践经历
        return <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mr-3">
                  <Briefcase size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">实践经历</h3>
              </div>
              
              {/* 添加实践经历按钮 */}
              <button onClick={() => openAddModal('practice')} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg">
                <Plus size={16} className="mr-2" />
                添加实践经历
              </button>
            </div>

            <div className="space-y-6">
              {practices.map((practice, index) => <TimelineItem key={practice.id} item={practice} isLast={index === practices.length - 1} />)}
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            经历与成就
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            教育背景、竞赛项目与实践经历的全面展示
          </p>
        </div>

        {/* 轮播控制区域 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center space-x-2">
            {/* 播放/暂停按钮 */}
            <button onClick={() => setIsAutoPlay(!isAutoPlay)} className="p-2 rounded-full hover:bg-indigo-100 transition-colors duration-200" title={isAutoPlay ? "暂停播放" : "自动播放"}>
              {isAutoPlay ? <Pause size={18} className="text-indigo-600" /> : <Play size={18} className="text-indigo-600" />}
            </button>

            {/* 左切换按钮 */}
            <button onClick={() => setActiveTab(prev => (prev - 1 + 3) % 3)} className="p-2 rounded-full hover:bg-indigo-100 transition-colors duration-200" title="上一个">
              <ChevronLeft size={18} className="text-indigo-600" />
            </button>

            {/* Tab按钮 */}
            <div className="flex space-x-1">
              {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}>
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.name}</span>
                </button>)}
            </div>

            {/* 右切换按钮 */}
            <button onClick={() => setActiveTab(prev => (prev + 1) % 3)} className="p-2 rounded-full hover:bg-indigo-100 transition-colors duration-200" title="下一个">
              <ChevronRight size={18} className="text-indigo-600" />
            </button>
          </div>
        </div>

        {/* 内容展示区域 */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {renderContent()}
          </div>
        </div>

        {/* 进度指示器 */}
        <div className="flex justify-center mt-6 space-x-2">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`transition-all duration-300 ${activeTab === tab.id ? 'w-8 h-2 bg-indigo-600 rounded-full' : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'}`} />)}
        </div>

        {/* 统计信息 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{education.courses.length}+</div>
            <div className="text-sm text-gray-600">核心课程</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{competitions.length}</div>
            <div className="text-sm text-gray-600">竞赛奖项</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{practices.length}</div>
            <div className="text-sm text-gray-600">实践项目</div>
          </div>
        </div>
      </div>

      {/* 添加内容模态框 */}
      {showAddModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {modalType === 'education' && '添加教育背景'}
                  {modalType === 'competition' && '添加竞赛项目'}
                  {modalType === 'practice' && '添加实践经历'}
                </h3>
                <button onClick={resetForm} className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* 教育背景表单 */}
              {modalType === 'education' && <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      学校名称 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newEducation.school} onChange={e => setNewEducation({
                ...newEducation,
                school: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.school ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入学校名称" />
                    {formErrors.school && <p className="mt-1 text-sm text-red-600">{formErrors.school}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      学院名称 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newEducation.college} onChange={e => setNewEducation({
                ...newEducation,
                college: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.college ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入学院名称" />
                    {formErrors.college && <p className="mt-1 text-sm text-red-600">{formErrors.college}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      专业名称 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newEducation.major} onChange={e => setNewEducation({
                ...newEducation,
                major: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.major ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入专业名称" />
                    {formErrors.major && <p className="mt-1 text-sm text-red-600">{formErrors.major}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      学校标签
                    </label>
                    <input type="text" value={newEducation.tags} onChange={e => setNewEducation({
                ...newEducation,
                tags: e.target.value
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" placeholder="请输入学校标签，用逗号分隔" />
                    <p className="mt-1 text-xs text-gray-500">例如：211工程,双一流建设高校</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      主修课程
                    </label>
                    <textarea value={newEducation.courses} onChange={e => setNewEducation({
                ...newEducation,
                courses: e.target.value
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none" placeholder="请输入主修课程，用逗号分隔" rows={3} />
                    <p className="mt-1 text-xs text-gray-500">例如：高等数学,C语言,机械设计</p>
                  </div>
                </div>}

              {/* 竞赛项目表单 */}
              {modalType === 'competition' && <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      竞赛名称 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newCompetition.title} onChange={e => setNewCompetition({
                ...newCompetition,
                title: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.title ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入竞赛名称" />
                    {formErrors.title && <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        获得奖项
                      </label>
                      <input type="text" value={newCompetition.award} onChange={e => setNewCompetition({
                  ...newCompetition,
                  award: e.target.value
                })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" placeholder="请输入获得的奖项" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        年份 <span className="text-red-500">*</span>
                      </label>
                      <input type="text" value={newCompetition.year} onChange={e => setNewCompetition({
                  ...newCompetition,
                  year: e.target.value
                })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.year ? 'border-red-500' : 'border-gray-300'}`} placeholder="例如：2024" maxLength={4} />
                      {formErrors.year && <p className="mt-1 text-sm text-red-600">{formErrors.year}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      项目内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea value={newCompetition.content} onChange={e => setNewCompetition({
                ...newCompetition,
                content: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none ${formErrors.content ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入项目内容描述" rows={4} />
                    {formErrors.content && <p className="mt-1 text-sm text-red-600">{formErrors.content}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      主要职责
                    </label>
                    <textarea value={newCompetition.responsibilities} onChange={e => setNewCompetition({
                ...newCompetition,
                responsibilities: e.target.value
              })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none" placeholder="请输入主要职责，用逗号分隔" rows={3} />
                    <p className="mt-1 text-xs text-gray-500">例如：机械系统设计与优化,运动学建模与仿真</p>
                  </div>
                </div>}

              {/* 实践经历表单 */}
              {modalType === 'practice' && <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      机构/项目名称 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newPractice.title} onChange={e => setNewPractice({
                ...newPractice,
                title: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.title ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入机构或项目名称" />
                    {formErrors.title && <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      职位/角色 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newPractice.position} onChange={e => setNewPractice({
                ...newPractice,
                position: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.position ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入职位或角色" />
                    {formErrors.position && <p className="mt-1 text-sm text-red-600">{formErrors.position}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      时间周期 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={newPractice.period} onChange={e => setNewPractice({
                ...newPractice,
                period: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${formErrors.period ? 'border-red-500' : 'border-gray-300'}`} placeholder="例如：2023.03 - 2024.03" />
                    {formErrors.period && <p className="mt-1 text-sm text-red-600">{formErrors.period}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      描述 <span className="text-red-500">*</span>
                    </label>
                    <textarea value={newPractice.description} onChange={e => setNewPractice({
                ...newPractice,
                description: e.target.value
              })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none ${formErrors.description ? 'border-red-500' : 'border-gray-300'}`} placeholder="请输入实践经历描述" rows={4} />
                    {formErrors.description && <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>}
                  </div>
                </div>}

              {/* 按钮组 */}
              <div className="flex space-x-3 mt-6">
                <button onClick={resetForm} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  取消
                </button>
                <button onClick={() => {
              if (modalType === 'education') {
                handleAddEducation();
              } else if (modalType === 'competition') {
                handleAddCompetition();
              } else if (modalType === 'practice') {
                handleAddPractice();
              }
            }} className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                  添加
                </button>
              </div>
            </div>
          </div>
        </div>}
    </section>;
}