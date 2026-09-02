import { SlideLayout } from './components/SlideLayout';
import { 
  Database, Lightbulb, User, Mic, PlaySquare, Workflow, Hospital, Activity, 
  FileText, ShieldAlert, GraduationCap, Building2, Globe, Layers, Search, Code, CheckCircle, 
  Users, Stethoscope, ShieldCheck, Cpu, BriefcaseMedical, ChevronRight
} from 'lucide-react';

function Slide1() {
  return (
    <SlideLayout
      header="第1页｜Zerone 医院专家智能服务平台"
      title="让每个科室拥有自己的专业智能体系，让每位专家拥有可服务、可订阅的数字专家"
      conclusion="Zerone 不只是帮助医院建设知识库，而是帮助医院和专家建立自己的专业 AI 服务体系。"
    >
      <div className="flex h-full gap-12 items-center">
        <div className="flex-1 space-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-100 border-b border-slate-700 pb-4">医院真正有价值的 AI 资产，不只是文档和数据，还包括：</h3>
            <ul className="space-y-4 text-xl text-slate-300 list-disc pl-6 marker:text-blue-500">
              <li>科室长期积累的知识、规范和病例</li>
              <li>专家在大量临床实践中形成的判断方法</li>
              <li>专家的专业方向、学术影响力和个人品牌</li>
              <li>医护人员已经形成的工作流程</li>
              <li>HIS、药师工作站等业务系统中的实时数据</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-100 border-b border-slate-700 pb-4">Zerone 将这些内容转化为可持续运营的专业智能服务：</h3>
            <div className="flex flex-wrap gap-3">
              {['科室知识库', '专家知识库', '专业 Skill', '科室 Agent', '专属专家 Agent', '专家声音与数字人', '面向院内及行业的订阅服务'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-slate-800 text-blue-400 rounded-full font-medium border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-lg">
            {/* Center Node */}
            <div className="absolute inset-0 m-auto w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex flex-col items-center justify-center text-white shadow-2xl shadow-blue-500/30 z-10">
              <User className="w-12 h-12 mb-2" />
              <span className="text-xl font-bold">专家数字分身</span>
            </div>
            {/* Orbiting Nodes */}
            {[
              { label: '知识库', icon: Database, color: 'text-emerald-400', bg: 'bg-slate-800 border-slate-700', pos: 'top-0 left-1/2 -translate-x-1/2' },
              { label: 'Skill', icon: Lightbulb, color: 'text-amber-400', bg: 'bg-slate-800 border-slate-700', pos: 'top-1/4 right-0' },
              { label: 'Agent', icon: Cpu, color: 'text-purple-400', bg: 'bg-slate-800 border-slate-700', pos: 'bottom-1/4 right-0' },
              { label: '数字人', icon: PlaySquare, color: 'text-rose-400', bg: 'bg-slate-800 border-slate-700', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
              { label: '声音', icon: Mic, color: 'text-cyan-400', bg: 'bg-slate-800 border-slate-700', pos: 'bottom-1/4 left-0' },
              { label: '医院系统', icon: Hospital, color: 'text-slate-400', bg: 'bg-slate-800 border-slate-700', pos: 'top-1/4 left-0' },
            ].map((node, i) => (
              <div key={i} className={`absolute ${node.pos} w-28 h-28 ${node.bg} rounded-full flex flex-col items-center justify-center shadow-lg border z-0 transition-transform hover:scale-110`}>
                <node.icon className={`w-8 h-8 mb-2 ${node.color}`} />
                <span className={`text-sm font-semibold ${node.color}`}>{node.label}</span>
              </div>
            ))}
            {/* Connecting lines conceptually represented by a background circle */}
            <div className="absolute inset-8 border-2 border-dashed border-slate-700 rounded-full -z-10 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide2() {
  const problems = [
    { title: "知识分散", desc: "科室 SOP、指南、病例、论文、培训材料和专家经验分散在不同文档、系统和个人手中。", icon: FileText },
    { title: "经验依赖专家本人", desc: "大量复杂问题只有资深专家能够处理，年轻医生难以系统学习，专家时间也成为稀缺资源。", icon: User },
    { title: "通用 AI 缺乏专业边界", desc: "通用模型了解一般医学知识，但不了解医院制度、科室规范、专家方向、业务流程。", icon: Globe },
    { title: "AI 与现有系统割裂", desc: "医生使用 HIS，药师使用药师工作站。独立聊天工具很难进入真实工作流。", icon: Workflow },
    { title: "专家知识无法规模化", desc: "专家会诊、授课时间有限，难以让知识持续覆盖更多医生、医院和平台。", icon: Users },
  ];

  return (
    <SlideLayout
      header="第2页｜医院拥有大量知识，但还没有形成可运营的专业智能资产"
      title="医院不缺知识和专家，缺少的是知识生产、能力封装与服务分发的平台"
      conclusion="医院 AI 的关键不是再接入一个大模型，而是把医院和专家自己的知识变成可管理、可调用、可授权的数字资产。"
    >
      <div className="flex flex-col h-full gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-slate-100">医院当前面临的问题</h3>
          <div className="grid grid-cols-5 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm flex flex-col h-full">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-slate-400">
                  <p.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-100 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-slate-950/50 rounded-xl p-8 border border-slate-800 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-8 text-blue-400 text-center">Zerone 建立一条完整链路</h3>
          <div className="flex items-center justify-between px-12">
            {['专业资料', '标准化知识', '专业能力', '数字专家', '多渠道服务', '订阅运营'].map((step, i, arr) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center shadow-md border-2 border-blue-500 text-blue-400 font-bold text-xl">
                    {i + 1}
                  </div>
                  <span className="mt-3 font-semibold text-slate-300">{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-16 h-1 bg-blue-500/50 mx-4 relative">
                    <div className="absolute right-0 -top-1.5 w-4 h-4 border-t-4 border-r-4 border-blue-500/50 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide3() {
  const layers = [
    { title: "第五层：服务入口", desc: "服务可以进入：Zerone 网页、医院内部工作台、HIS/业务系统、第三方 Agent 平台、行业能力市场等。", quote: "接口和平台是分发渠道", icon: Globe, color: "bg-slate-800 border-slate-700 text-indigo-400" },
    { title: "第四层：专家数字形象", desc: "构建专家认证身份、品牌主页、表达方式、授权声纹、数字人、直播教学形象等。", quote: "解决用户以什么方式认识、信任并使用", icon: User, color: "bg-slate-800 border-slate-700 text-violet-400" },
    { title: "第三层：Agent 服务", desc: "组合知识、Skill和工作流，形成：科室 Agent、药师 Agent、专属专家 Agent、教学 Agent 等。", quote: "解决谁以什么身份，在什么场景提供服务", icon: Cpu, color: "bg-slate-800 border-slate-700 text-blue-400" },
    { title: "第二层：专业能力", desc: "封装专家方法为 Skill：用药风险审核、相似病例分析、微创介入风险检查、随访方案生成等。", quote: "解决 AI 应该按照什么方法完成任务", icon: Lightbulb, color: "bg-slate-800 border-slate-700 text-emerald-400" },
    { title: "第一层：知识资产", desc: "建立不同范围知识库：医院公共、科室专属、专家个人、专病、典型病例、药品器械知识库等。", quote: "解决 AI 可以从哪些可信知识中获得依据", icon: Database, color: "bg-slate-800 border-slate-700 text-amber-400" },
  ];

  return (
    <SlideLayout
      header="第3页｜Zerone 的完整产品体系"
      title="知识库、Skill、Agent与数字专家，共同构成专业智能服务"
      conclusion="知识库是内容，Skill 是方法，Agent 是服务主体，数字形象是专家品牌，接口和平台是分发渠道。"
    >
      <div className="flex flex-col h-full justify-center space-y-4 max-w-5xl mx-auto py-4">
        {layers.map((layer, i) => (
          <div key={i} className={`flex items-stretch rounded-xl border ${layer.color} overflow-hidden shadow-sm`}>
            <div className="w-1/4 bg-slate-900/50 p-4 flex flex-col justify-center items-center text-center border-r border-slate-700 backdrop-blur-sm">
              <layer.icon className="w-8 h-8 mb-2 opacity-80" />
              <h4 className="font-bold text-lg text-slate-200">{layer.title}</h4>
            </div>
            <div className="w-2/4 p-5 flex items-center">
              <p className="text-slate-300 leading-relaxed">{layer.desc}</p>
            </div>
            <div className="w-1/4 bg-black/20 p-4 flex items-center justify-center border-l border-slate-700 italic font-medium opacity-90 text-sm text-center">
              "{layer.quote}"
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

function Slide4() {
  return (
    <SlideLayout
      header="第4页｜为每个科室和专家建立独立的专业知识体系"
      title="同一套平台，承载医院、科室、专家和专病等不同层级的知识资产"
      conclusion="AI 可以提高知识生产效率，但医疗知识的正确性、适用范围和责任边界必须由专业人员确认。"
    >
      <div className="flex h-full gap-8">
        <div className="w-1/2 space-y-6">
          <h3 className="text-2xl font-bold mb-4 text-slate-100 border-b border-slate-700 pb-2">知识库不是只有一种</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-sm">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center"><Building2 className="w-5 h-5 mr-2"/>医院级</h4>
              <p className="text-sm text-slate-300">医疗制度、质控标准、感染管理、应急预案、用药目录等公共规范。</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-sm">
              <h4 className="font-bold text-emerald-400 mb-2 flex items-center"><Users className="w-5 h-5 mr-2"/>科室级</h4>
              <p className="text-sm text-slate-300">科室 SOP、临床规范、操作流程、教学资料等特定科室知识。</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-sm">
              <h4 className="font-bold text-violet-400 mb-2 flex items-center"><User className="w-5 h-5 mr-2"/>专家级</h4>
              <p className="text-sm text-slate-300">典型病例、诊疗思路、经验总结、批注及专家确认的问答。</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-sm">
              <h4 className="font-bold text-amber-400 mb-2 flex items-center"><Activity className="w-5 h-5 mr-2"/>专病/专项级</h4>
              <p className="text-sm text-slate-300">肝肿瘤介入、抗感染、慢病管理等专题知识体系。</p>
            </div>
          </div>
          
          <div className="mt-8 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
             <h4 className="font-bold text-slate-200 mb-3">知识进入平台的流程</h4>
             <div className="flex flex-wrap gap-2 text-sm text-slate-400">
               {['收集资料', '脱敏授权', '清洗内容', '统一术语', '建立标签', 'AI结构化', '人工检查', '专家确认', '导入知识库', '验证检索'].map((step, i) => (
                 <span key={i} className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700 shadow-sm">{i+1}. {step}</span>
               ))}
             </div>
          </div>
        </div>
        
        <div className="w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-slate-100 border-b border-slate-700 pb-2">严格的人机分工</h3>
          <div className="space-y-4">
            <div className="bg-blue-900/20 p-5 rounded-xl border border-blue-900/50 flex gap-4">
              <div className="w-12 h-12 bg-blue-900/50 text-blue-400 rounded-full flex items-center justify-center shrink-0"><Cpu className="w-6 h-6"/></div>
              <div>
                <h4 className="font-bold text-blue-400 mb-2">AI 可以完成 (提效)</h4>
                <p className="text-sm text-slate-300">文档识别、内容分类、字段提取、标签建议、病例结构化、初步关联。</p>
              </div>
            </div>
            <div className="bg-emerald-900/20 p-5 rounded-xl border border-emerald-900/50 flex gap-4">
              <div className="w-12 h-12 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center shrink-0"><Code className="w-6 h-6"/></div>
              <div>
                <h4 className="font-bold text-emerald-400 mb-2">工程团队需要完成 (实施)</h4>
                <p className="text-sm text-slate-300">数据汇总、格式处理、脱敏实施、异常数据处理、数据导入。</p>
              </div>
            </div>
            <div className="bg-amber-900/20 p-5 rounded-xl border border-amber-900/50 flex gap-4">
              <div className="w-12 h-12 bg-amber-900/50 text-amber-400 rounded-full flex items-center justify-center shrink-0"><Stethoscope className="w-6 h-6"/></div>
              <div>
                <h4 className="font-bold text-amber-400 mb-2">专家必须参与 (把关)</h4>
                <p className="text-sm text-slate-300">确认专业正确性、处理知识冲突、明确适用条件、确定风险边界、最终验收。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide5() {
  return (
    <SlideLayout
      header="第5页｜3000例病例不会自动教会AI，但可以成为专家能力的基础"
      title="从“保存病例”到“理解专家如何判断”，需要知识、检索、规则与审核共同完成"
      conclusion="病例是经验的证据，知识库负责找到证据，Skill 负责组织分析过程，专家负责确认方法和边界。"
    >
      <div className="flex flex-col h-full gap-6">
        <div className="flex gap-6 h-48">
          <div className="w-1/2 bg-slate-900/50 p-6 rounded-xl border border-rose-900/50">
            <h4 className="text-lg font-bold text-rose-400 mb-3 flex items-center"><ShieldAlert className="w-5 h-5 mr-2"/>为什么不能直接说“AI学会了”</h4>
            <p className="text-sm text-slate-300 mb-2">单纯导入病例，系统获得的是检索和归纳能力，不等于掌握临床判断。</p>
            <p className="text-sm text-rose-300 font-medium">病例中往往缺失：为什么这样选？放弃了什么？风险考量？失败原因？</p>
          </div>
          <div className="w-1/2 bg-slate-900/50 p-6 rounded-xl border border-blue-900/50">
            <h4 className="text-lg font-bold text-blue-400 mb-3 flex items-center"><Search className="w-5 h-5 mr-2"/>什么是相似病例检索</h4>
            <p className="text-sm text-slate-300">输入当前病例，系统多维度(病灶、解剖、既往治疗等)查找历史病例，返回的不是简单答案，而是一组参考：</p>
            <p className="text-sm text-blue-300 font-medium mt-2">相似在哪里？关键差异？当时方案？结果如何？可复用性？</p>
          </div>
        </div>

        <div className="flex-1 mt-4">
          <h3 className="text-xl font-bold mb-6 text-slate-100 text-center">从病例形成专业 Skill 的转化路径</h3>
          <div className="grid grid-cols-4 gap-4 h-32">
            {[
              { title: "原始病例", desc: "杂乱、非结构化的历史病历文本", icon: FileText, color: "bg-slate-800 text-slate-400" },
              { title: "标准病例", desc: "AI 辅助结构化、清洗去重、统一字段", icon: Database, color: "bg-blue-900/50 text-blue-400" },
              { title: "相似病例", desc: "聚类分析，多维度特征匹配召唤", icon: Search, color: "bg-indigo-900/50 text-indigo-400" },
              { title: "专家 Skill", desc: "提取规则、补充隐性经验、专家审核", icon: Lightbulb, color: "bg-emerald-900/50 text-emerald-400" }
            ].map((step, i, arr) => (
              <div key={i} className="relative bg-slate-800 rounded-xl border border-slate-700 p-4 shadow-sm flex flex-col items-center justify-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-200">{step.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
                {i < arr.length - 1 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 flex justify-center z-10 text-slate-500">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide6() {
  return (
    <SlideLayout
      header="第6页｜成熟案例：药剂科专业智能体系"
      title="药剂科已经验证了“知识库＋Skill＋Agent＋系统服务”的建设模式"
      conclusion="药剂科案例证明，Zerone 可以把科室知识从“资料”升级成可进入业务系统的专业服务。"
    >
      <div className="flex flex-col h-full gap-6">
        <div className="grid grid-cols-3 gap-6 flex-1">
          <div className="bg-amber-900/20 p-6 rounded-xl border border-amber-900/50 flex flex-col">
            <h4 className="text-xl font-bold text-amber-400 mb-4 flex items-center"><Database className="w-6 h-6 mr-2"/>知识库</h4>
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5 flex-1">
              <li>药品说明书及院内目录</li>
              <li>用法用量、配伍禁忌</li>
              <li>药物相互作用</li>
              <li>特殊人群用药规范</li>
              <li>处方审核规则</li>
              <li>药师咨询案例</li>
            </ul>
          </div>
          <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-900/50 flex flex-col">
            <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center"><Lightbulb className="w-6 h-6 mr-2"/>Skill 能力</h4>
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5 flex-1">
              <li>用药信息查询、剂量检查</li>
              <li>重复用药、相互作用识别</li>
              <li>特殊人群风险分析</li>
              <li>处方问题提示</li>
              <li>回答依据生成</li>
              <li>高风险转人工</li>
            </ul>
          </div>
          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-900/50 flex flex-col">
            <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center"><Cpu className="w-6 h-6 mr-2"/>Agent 服务矩阵</h4>
            <ul className="space-y-4 text-slate-300 text-sm flex-1">
              <li><span className="font-bold text-blue-300">药师 Agent：</span>完整专业依据和审核信息</li>
              <li><span className="font-bold text-blue-300">医生用药 Agent：</span>简洁建议和风险提示</li>
              <li><span className="font-bold text-blue-300">患者科普 Agent：</span>通俗用药说明，隐藏规则</li>
              <li><span className="font-bold text-blue-300">数字专家：</span>科室专家身份提供咨询培训</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
          <h4 className="text-lg font-bold text-slate-200 mb-4">系统接入与服务订阅</h4>
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex-1 text-center shadow-sm">
              <span className="text-sm font-bold text-slate-300 block mb-2">HIS / 药师工作站发送：</span>
              <span className="text-xs text-slate-400">患者信息、诊断、处方、检验、过敏史</span>
            </div>
            <div className="flex flex-col items-center justify-center text-blue-400 font-bold px-2">
              <span className="text-xs mb-1">API / MCP</span>
              <div className="flex gap-2">
                 <ChevronRight className="w-5 h-5 rotate-180 opacity-50" />
                 <ChevronRight className="w-5 h-5" />
              </div>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border border-blue-900/50 flex-1 text-center shadow-sm">
              <span className="text-sm font-bold text-blue-400 block mb-2">Zerone 平台返回：</span>
              <span className="text-xs text-slate-300">风险项、分析结果、引用依据、处理建议、复核提示</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide7() {
  return (
    <SlideLayout
      header="第7页｜建设案例：微创介入专家数字分身"
      title="把专家大量临床实践，转化为年轻医生可以随时调用的辅助能力"
      conclusion="这不是复制一个专家头像，而是把专家知识、判断方法、服务流程和个人品牌共同数字化。"
    >
      <div className="flex h-full gap-8">
        <div className="w-1/2 space-y-6">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
            <h4 className="text-xl font-bold text-slate-100 mb-4 flex items-center"><Activity className="w-6 h-6 mr-2 text-rose-400"/>场景目标与挑战</h4>
            <p className="text-sm text-slate-300 mb-3">已知病灶靶点，选择入针区域。这不是简单的几何最短路径，需综合判断：</p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-400">
              <span className="px-2 py-1 bg-slate-700 rounded">血管神经骨骼</span>
              <span className="px-2 py-1 bg-slate-700 rounded">重要器官</span>
              <span className="px-2 py-1 bg-slate-700 rounded">患者体位</span>
              <span className="px-2 py-1 bg-slate-700 rounded">穿刺角度</span>
              <span className="px-2 py-1 bg-slate-700 rounded">器械限制</span>
              <span className="px-2 py-1 bg-rose-900/50 text-rose-400 border border-rose-900/50 rounded">专家积累的入路经验</span>
            </div>
          </div>
          
          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-900/50">
            <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center"><ShieldCheck className="w-6 h-6 mr-2"/>现阶段能力边界：定性辅助</h4>
            <p className="text-sm text-slate-300 mb-3">不替代影像导航计算精确坐标，而是提供专家级策略分析：</p>
            <ul className="text-sm text-slate-400 space-y-1.5 list-disc pl-5">
              <li>检索相似病例与相关规范</li>
              <li>分析入路需要考虑的风险结构</li>
              <li>建议大致入针区域及体位方向</li>
              <li>指出信息缺失，提交专家复核</li>
            </ul>
            <p className="text-xs font-bold text-blue-400 mt-4 bg-blue-900/50 p-2 rounded">最终方案仍由医生结合医学影像确认。</p>
          </div>
        </div>

        <div className="w-1/2 space-y-6">
          <h3 className="text-xl font-bold text-slate-100 mb-4">数字专家的逐步构建与交互形式</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
               <h5 className="font-bold text-indigo-400 mb-2 flex items-center"><FileText className="w-4 h-4 mr-1"/>图文咨询</h5>
               <p className="text-xs text-slate-400">适合病例输入、依据展示和结构化报告输出。</p>
            </div>
            <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
               <h5 className="font-bold text-cyan-400 mb-2 flex items-center"><Mic className="w-4 h-4 mr-1"/>语音咨询</h5>
               <p className="text-xs text-slate-400">医生口述病例，数字专家以授权声音进行专业解答。</p>
            </div>
            <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
               <h5 className="font-bold text-rose-400 mb-2 flex items-center"><PlaySquare className="w-4 h-4 mr-1"/>数字人讲解</h5>
               <p className="text-xs text-slate-400">用于教学、培训和术前讨论，解释判断过程与风险。</p>
            </div>
            <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
               <h5 className="font-bold text-emerald-400 mb-2 flex items-center"><User className="w-4 h-4 mr-1"/>真人专家复核</h5>
               <p className="text-xs text-slate-400">复杂病例从 Agent 无缝升级到专家团队处理。</p>
            </div>
          </div>
          <div className="bg-amber-900/20 p-4 rounded-xl border border-amber-900/50 mt-4">
             <h4 className="font-bold text-amber-400 mb-1 flex items-center"><ShieldAlert className="w-4 h-4 mr-1"/>合规前提</h4>
             <p className="text-xs text-amber-500/80">形象、肖像、声音必须明确授权；醒目标识 AI 身份，避免使用者误认为与专家实时沟通。</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide8() {
  const subscriptions = [
    { title: "知识库订阅", icon: Database, color: "text-blue-400", desc: "持续更新的专业知识服务（药品、规范、专病、精选病例等）。可控制查看、下载、调用权限。" },
    { title: "Skill 订阅", icon: Lightbulb, color: "text-emerald-400", desc: "具体专业能力（处方审核、病例分析、随访建议）。可安装到Agent或通过API/MCP调用。" },
    { title: "Agent 订阅", icon: Cpu, color: "text-purple-400", desc: "配置好的专业助手（专属知识+Skill+交互规则）。如：专家介入Agent、专病辅助Agent。" },
    { title: "数字专家订阅", icon: User, color: "text-rose-400", desc: "完整的专家服务产品（身份+形象+声纹+数字人+AI服务+复核入口）。明确专业来源。" },
    { title: "接口与工具订阅", icon: Code, color: "text-slate-400", desc: "业务系统通过 HTTPS/MCP 订阅批量分析、特定调用额度、知识检索及复核工作流。" },
    { title: "组合服务包订阅", icon: Layers, color: "text-amber-400", desc: "将多资产打包销售。如：科室基础包、专家能力包、数字专家完整包、医院运营全套方案。" },
  ];

  return (
    <SlideLayout
      header="第8页｜所有专业资产都可以订阅"
      title="订阅对象不只有 Skill，而是覆盖知识、能力、服务和专家品牌的完整产品矩阵"
      conclusion="Zerone 的订阅单位，可以是一份知识、一项能力、一个 Agent、一位数字专家，也可以是一整套医院专业智能服务。"
    >
      <div className="grid grid-cols-3 gap-6 h-full">
        {subscriptions.map((sub, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-center mb-4">
              <div className={`p-3 bg-slate-900 rounded-lg ${sub.color}`}>
                <sub.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-slate-100 ml-4">{sub.title}</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">{sub.desc}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

function Slide9() {
  const levels = [
    { level: "一", title: "专家本人", desc: "管理资料、检索病例、复盘备课、统一团队方法。" },
    { level: "二", title: "专家团队与科室", desc: "年轻医生培养、科室病例讨论、规范统一。" },
    { level: "三", title: "医院内部", desc: "跨科室能力调用，医院统一采购授权、全院审计。" },
    { level: "四", title: "医联体和合作医院", desc: "分级服务体系：AI日常支持 + 专家处理疑难杂症。" },
    { level: "五", title: "行业其他医院医生", desc: "个人订阅、科室席位、年度授权、按调用/病例计费。" },
    { level: "六", title: "外部Agent及平台", desc: "通过 MCP 接入 WorkBuddy、医生工作台等第三方市场。" },
  ];

  return (
    <SlideLayout
      header="第9页｜从科室内部使用，到全行业能力市场"
      title="同一套专业资产，可以按不同权限和服务等级向多个市场分发"
      conclusion="Zerone 让专业知识从“一位专家服务一个患者”，逐步扩展为“一套专业服务覆盖科室、医联体乃至行业”。"
    >
      <div className="flex h-full gap-8 items-center">
        <div className="flex-1">
          <div className="space-y-3 relative">
            {levels.map((lvl, i) => (
              <div key={i} className={`p-4 rounded-xl border flex items-center shadow-sm relative z-10 transition-transform hover:-translate-y-1 bg-slate-800
                ${i===0 ? 'border-blue-500 shadow-blue-500/10 ml-0' : ''}
                ${i===1 ? 'border-blue-600 ml-4' : ''}
                ${i===2 ? 'border-blue-700 ml-8' : ''}
                ${i===3 ? 'border-emerald-600 ml-12' : ''}
                ${i===4 ? 'border-emerald-700 ml-16' : ''}
                ${i===5 ? 'border-purple-600 ml-20' : ''}
              `}>
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center font-bold text-slate-400 mr-4 shrink-0">
                  {lvl.level}
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">{lvl.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{lvl.desc}</p>
                </div>
              </div>
            ))}
            {/* Connecting line */}
            <div className="absolute left-8 top-8 bottom-8 border-l-2 border-dashed border-slate-700 z-0 hidden md:block"></div>
          </div>
        </div>
        
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-full bg-amber-900/20 rounded-2xl border border-amber-900/50 p-6 flex flex-col items-center text-center">
             <HeartIcon className="w-12 h-12 text-amber-500 mb-4" />
             <h4 className="font-bold text-amber-400 text-lg mb-2">第七层：患者与公众服务</h4>
             <p className="text-sm text-amber-500/80">
               在完成内容分层和风险控制后，发布独立的患者版Agent（科普、备诊、随访）。
             </p>
             <div className="mt-4 px-4 py-2 bg-slate-900/50 rounded-full text-xs font-bold text-rose-400 border border-rose-900/50 shadow-sm">
               ⚠️ 患者版与医生版必须严格隔离权限与边界
             </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
// simple heart icon for slide 9
function HeartIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  )
}

function Slide10() {
  return (
    <SlideLayout
      header="第10页｜专业智能服务的发布、运营与落地"
      title="先跑通一个专家和一个场景，再形成可复制、可订阅的行业服务"
      conclusion="Zerone 帮助医院和专家，把知识、经验、能力与专业品牌，建设成可持续更新、跨平台交付的分级订阅资产。"
    >
      <div className="flex flex-col h-full gap-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2">试点建设路径 (6步走)</h3>
        <div className="grid grid-cols-6 gap-3 mb-6">
          {[
            { title: "确定试点", desc: "选科室、专家、场景、数据" },
            { title: "建设资产", desc: "清洗、结构化、提炼Skill、Agent配置" },
            { title: "建立形象", desc: "姓名、主页、声纹、数字人、复核入口" },
            { title: "接入场景", desc: "网页、插件、HIS、API、工作平台" },
            { title: "建立产品", desc: "配置人群、权限、额度、定价、分成" },
            { title: "小范围验证", desc: "测知识准确度、接受度、进入工作流" }
          ].map((step, i) => (
            <div key={i} className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-3 relative shadow-sm">
               <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{i+1}</div>
               <h5 className="font-bold text-blue-400 text-sm mt-1">{step.title}</h5>
               <p className="text-xs text-slate-400 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-6 flex-1">
          <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-sm">
             <h4 className="font-bold text-slate-100 mb-4 flex items-center"><Activity className="w-5 h-5 mr-2 text-indigo-400"/>订阅运营能力支撑</h4>
             <ul className="text-sm text-slate-400 grid grid-cols-2 gap-y-2 gap-x-4">
               <li>• 资产发布与订阅管理</li>
               <li>• 套餐与定价策略</li>
               <li>• 多级权限管理(医/科/院)</li>
               <li>• 调用计量与订单续费</li>
               <li>• 多方分成结算体系</li>
               <li>• 专家审核与版本更新</li>
               <li>• 服务评价与下架机制</li>
             </ul>
          </div>
          
          <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-sm">
             <h4 className="font-bold text-slate-100 mb-4 flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-emerald-400"/>医疗专业治理底座</h4>
             <ul className="text-sm text-slate-400 grid grid-cols-2 gap-y-2 gap-x-4">
               <li>• 数据脱敏与合规</li>
               <li>• 全程日志追踪</li>
               <li>• 知识来源强追溯</li>
               <li>• AI 身份明确标识</li>
               <li>• 肖像声纹严格授权</li>
               <li>• 高风险人工确认卡点</li>
               <li>• 患医版本严格物理隔离</li>
             </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide11() {
  return (
    <SlideLayout
      header="附页1｜Zerone 的产品定位升级"
      title="从“组装工具”迈向“专业智能产销平台”"
      conclusion="真正的平台闭环：知识生产 → Skill生产 → Agent组装 → 数字专家塑造 → 发布订阅 → 使用反馈 → 专家更新"
    >
      <div className="flex flex-col h-full items-center justify-center gap-12">
        <div className="text-center">
          <p className="text-xl text-slate-400 line-through decoration-red-500 mb-2">过去的表达：专属知识库 ＋ 专业 Skill ＋ Agent</p>
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-xl shadow-blue-900/50 transform scale-105">
             <h2 className="text-3xl font-bold">Zerone 是面向医院和专业专家的 AI 能力生产与订阅平台。</h2>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 w-full">
          {[
            { n: 1, title: "沉淀知识", desc: "把科室和专家资料变成可信知识库" },
            { n: 2, title: "封装能力", desc: "把专家判断方式变成专业 Skill" },
            { n: 3, title: "形成服务", desc: "把知识和能力组合成专业 Agent" },
            { n: 4, title: "塑造专家", desc: "形成带身份、形象、声音的数字专家" },
            { n: 5, title: "运营分发", desc: "向院内、医联体、行业等进行订阅分发" },
          ].map((item) => (
            <div key={item.n} className="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow-sm text-center">
               <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-lg font-bold text-slate-400 mx-auto mb-3">
                 {item.n}
               </div>
               <h4 className="font-bold text-slate-100 mb-2">{item.title}</h4>
               <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide12() {
  return (
    <SlideLayout
      header="附页2｜订阅产品矩阵"
      title="覆盖知识、能力、服务与接口的全方位价值交付"
      conclusion="专家形象、声音不是装饰，而是专业品牌入口；订阅不是单一收费，而是覆盖产权、授权、计量与分成运营体系。"
    >
      <div className="h-full flex flex-col">
        <div className="overflow-x-auto border border-slate-700 rounded-xl shadow-sm bg-slate-800 flex-1">
          <table className="w-full text-left border-collapse h-full">
            <thead>
              <tr className="bg-slate-900/50 text-slate-300">
                <th className="p-4 border-b border-slate-700 font-bold w-1/5">订阅对象</th>
                <th className="p-4 border-b border-slate-700 font-bold w-2/5">用户实际获得什么</th>
                <th className="p-4 border-b border-slate-700 font-bold w-1/5">典型用户</th>
                <th className="p-4 border-b border-slate-700 font-bold w-1/5">交付方式</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-400 align-middle">
              <tr className="hover:bg-slate-700/50 transition-colors">
                <td className="p-4 border-b border-slate-700 font-bold text-slate-200">知识库</td>
                <td className="p-4 border-b border-slate-700">持续更新的专业知识与检索能力</td>
                <td className="p-4 border-b border-slate-700">医生、科室、Agent</td>
                <td className="p-4 border-b border-slate-700">网页、API、MCP</td>
              </tr>
              <tr className="hover:bg-slate-700/50 transition-colors">
                <td className="p-4 border-b border-slate-700 font-bold text-slate-200">Skill</td>
                <td className="p-4 border-b border-slate-700">某项专家方法或任务能力</td>
                <td className="p-4 border-b border-slate-700">医生、Agent开发者、平台</td>
                <td className="p-4 border-b border-slate-700">安装、调用、API</td>
              </tr>
              <tr className="hover:bg-slate-700/50 transition-colors">
                <td className="p-4 border-b border-slate-700 font-bold text-slate-200">Agent</td>
                <td className="p-4 border-b border-slate-700">可直接使用的专业智能助手</td>
                <td className="p-4 border-b border-slate-700">医生、科室、医院</td>
                <td className="p-4 border-b border-slate-700">网页、插件、工作台</td>
              </tr>
              <tr className="hover:bg-slate-700/50 transition-colors">
                <td className="p-4 border-b border-slate-700 font-bold text-slate-200">数字专家</td>
                <td className="p-4 border-b border-slate-700">专家知识、能力、形象与服务入口</td>
                <td className="p-4 border-b border-slate-700">医生、医联体、行业用户</td>
                <td className="p-4 border-b border-slate-700">图文、语音、数字人</td>
              </tr>
              <tr className="hover:bg-slate-700/50 transition-colors">
                <td className="p-4 border-b border-slate-700 font-bold text-slate-200">接口服务</td>
                <td className="p-4 border-b border-slate-700">供业务系统调用的智能能力</td>
                <td className="p-4 border-b border-slate-700">HIS、药师站、第三方平台</td>
                <td className="p-4 border-b border-slate-700">HTTPS、MCP</td>
              </tr>
              <tr className="hover:bg-slate-700/50 transition-colors">
                <td className="p-4 border-b border-slate-700 font-bold text-slate-200">人工复核</td>
                <td className="p-4 border-b border-slate-700">AI 分析后的专家确认服务</td>
                <td className="p-4 border-b border-slate-700">复杂病例用户</td>
                <td className="p-4 border-b border-slate-700">工单、会诊、远程复核</td>
              </tr>
              <tr className="bg-blue-900/20 hover:bg-blue-900/40 transition-colors">
                <td className="p-4 font-bold text-blue-400">组合产品</td>
                <td className="p-4 font-medium text-blue-300">完整专业服务方案 (如: 科室基础包、专家能力包)</td>
                <td className="p-4 font-medium text-blue-300">科室、医院、医联体</td>
                <td className="p-4 font-medium text-blue-300">私有部署或订阅服务</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SlideLayout>
  );
}

export const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12
];
