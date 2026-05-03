
window.onerror = function(msg, url, line) {
  alert('JS Error: ' + msg + ' at line ' + line);
  return true;
};
// ── QUESTION DATA ──────────────────────────────────────────────────────────
const QUESTIONS = {
  f: [
    {
      id: 1, type: 'multi',
      category: 'f', weight: 8,
      text: '企业网络建设连接情况',
      sub: '可多选',
      options: [
        { label: '无', score: 0 },
        { label: '企业车间建成工控网络，支持自动化控制应用', score: null },
        { label: '企业建成应用系统网络，实现大规模设备、人员与信息系统互联', score: null },
        { label: '企业建设/租用5G工业网络，支撑系统互联和网络协同应用', score: null },
        { label: '网络全面覆盖生产现场与环节，具备未来智能化新应用的扩展能力', score: null }
      ]
    },
    {
      id: 2, type: 'single',
      category: 'f', weight: 6,
      text: '企业的生产设备数字化率',
      sub: '',
      options: [
        { label: '[0-10%]', score: 0 },
        { label: '(10%,20%]', score: 1.5 },
        { label: '(20%,40%]', score: 3 },
        { label: '(40%,60%]', score: 4.5 },
        { label: '(60%,100%]', score: 6 }
      ]
    },
    {
      id: 3, type: 'single',
      category: 'f', weight: 6,
      text: '企业的生产设备联网率',
      sub: '',
      options: [
        { label: '[0-10%]', score: 0 },
        { label: '(10%,20%]', score: 1.5 },
        { label: '(20%,40%]', score: 3 },
        { label: '(40%,60%]', score: 4.5 },
        { label: '(60%,100%]', score: 6 }
      ]
    },
    {
      id: 4, type: 'multi',
      category: 'f', weight: 10,
      text: '企业实现数据自动采集的业务环节覆盖范围',
      sub: '可多选，覆盖越多得分越高',
      options: [
        { label: '无', score: 0 },
        { label: '产品设计', score: null },
        { label: '工艺设计', score: null },
        { label: '营销管理', score: null },
        { label: '售后服务', score: null },
        { label: '计划排程', score: null },
        { label: '生产管控', score: null },
        { label: '质量管理', score: null },
        { label: '设备管理', score: null },
        { label: '安全生产', score: null },
        { label: '能耗管理', score: null },
        { label: '采购管理', score: null },
        { label: '仓储物流', score: null },
        { label: '财务管理', score: null },
        { label: '人力资源', score: null }
      ]
    },
    {
      id: 5, type: 'single',
      category: 'f', weight: 10,
      text: '企业使用本地或云化部署的信息化服务，实现业务的数字化管理情况',
      sub: '',
      options: [
        { label: '无', score: 0 },
        { label: '单个业务环节', score: 2.5 },
        { label: '多个业务环节（2个及以上）', score: 5 },
        { label: '绝大部分业务环节（大于80%）', score: 7.5 },
        { label: '全覆盖', score: 10 }
      ]
    },
    {
      id: 6, type: 'multi',
      category: 'f', weight: 5,
      text: '企业在保障网络安全方面采取的举措',
      sub: '可多选',
      options: [
        { label: '无', score: 0 },
        { label: '建立了网络安全管理制度', score: null },
        { label: '使用了网络安全产品及服务（如防火墙、网络分区、入侵检测、身份认证等）', score: null },
        { label: '自行或委托专业评估机构实施网络安全风险评估', score: null },
        { label: '建立网络边界安全访问控制能力，及网络关键节点入侵检测和恶意代码检测能力', score: null }
      ]
    },
    {
      id: 7, type: 'multi',
      category: 'f', weight: 5,
      text: '企业在保障数据安全方面采取的举措',
      sub: '可多选',
      options: [
        { label: '无', score: 0 },
        { label: '建立了数据安全管理制度', score: null },
        { label: '使用了数据安全产品及服务（如数据加密、数据备份与恢复、数据脱敏、数据分级分类保护等）', score: null },
        { label: '自行或委托专业评估机构实施数据安全风险评估', score: null },
        { label: '建立数据台账（类型、用途、数量、数据源单位、使用单位等），定期开展数据安全保障能力核验', score: null }
      ]
    }
  ],
  m: [
    {
      id: 8, type: 'single',
      category: 'm', weight: 7.5,
      text: '企业对数字化的认识与执行水平情况',
      sub: '',
      options: [
        { label: '无', score: 0 },
        { label: '已经主动了解数字化相关内容', score: 1.5 },
        { label: '已经制定实施数字化的规划、计划及保障措施等', score: 3 },
        { label: '已经着手开始进行单点或多点的数字化改造', score: 4.5 },
        { label: '已经通过数字化手段实现业务模式、管理决策方式的改变并取得成效', score: 6 },
        { label: '已经能够输出数字化转型成果或经验供同行借鉴', score: 7.5 }
      ]
    },
    {
      id: 9, type: 'multi',
      category: 'm', weight: 7.5,
      text: '企业数字化管理制度的建立情况',
      sub: '可多选',
      options: [
        { label: '无', score: 0 },
        { label: '建立数字化转型实施工作流程', score: null },
        { label: '建立信息系统建设及运营管理制度', score: null },
        { label: '建立数据资源管理制度', score: null },
        { label: '建立与数字化融合的科研、业务、产品等方面的创新激励制度', score: null }
      ]
    },
    {
      id: 10, type: 'multi',
      category: 'm', weight: 7.5,
      text: '企业在数字化人才建设方面采取的举措',
      sub: '可多选',
      options: [
        { label: '无', score: 0 },
        { label: '配备专职/兼职的数字化人才', score: null },
        { label: '设置专门的数字化岗位/部门', score: null },
        { label: '定期对员工开展数字化方面培训', score: null },
        { label: '有明确的数字化人才绩效及薪酬管理', score: null },
        { label: '有明确的数字化人才梯度培育机制', score: null }
      ]
    },
    {
      id: 11, type: 'single',
      category: 'm', weight: 7.5,
      text: '企业近三年平均数字化投入总额占营业额的平均比例',
      sub: '',
      options: [
        { label: '[0-10%]', score: 0 },
        { label: '(10%,20%]', score: 1.875 },
        { label: '(20%,40%]', score: 3.75 },
        { label: '(40%,60%]', score: 5.625 },
        { label: '(60%,100%]', score: 7.5 }
      ]
    }
  ],
  r: [
    {
      id: 12, type: 'single3',
      category: 'r', weight: 7,
      text: '企业数字化改造后每百元营业收入中综合能源消费量相比于改造前的变化情况',
      sub: '',
      options: [
        { label: '增加', score: 0 },
        { label: '持平', score: 3.5 },
        { label: '降低', score: 7 }
      ]
    },
    {
      id: 13, type: 'single3',
      category: 'r', weight: 7,
      text: '企业数字化改造后月均产品合格率相比于改造前的变化情况',
      sub: '',
      options: [
        { label: '降低', score: 0 },
        { label: '持平', score: 3.5 },
        { label: '增加', score: 7 }
      ]
    },
    {
      id: 14, type: 'single3',
      category: 'r', weight: 3,
      text: '企业上年度人均营业收入相比于前年变化情况',
      sub: '',
      options: [
        { label: '降低', score: 0 },
        { label: '持平', score: 1.5 },
        { label: '增加', score: 3 }
      ]
    },
    {
      id: 15, type: 'single3',
      category: 'r', weight: 3,
      text: '企业上年度每百元营业收入中的成本相比于前年变化情况',
      sub: '',
      options: [
        { label: '增加', score: 0 },
        { label: '持平', score: 1.5 },
        { label: '降低', score: 3 }
      ]
    }
  ]
};

// ── REF DATA (评分参考数据) ────────────────────────────────────────────
const REF_DATA = {
  // F类 - 数字化基础
  f1: {
    explanation: '1.工业控制网络用于工业过程控制的网络。由各种不同类型的控制器、传感器和执行机构组成复杂系统，核心是控制器，通过它们把生产过程中所需要的数据采集、处理和控制功能有机地结合起来。\n2、在车间、办公区、厂区部署的有线、无线网络能够支撑大规模设备、人员与信息系统互联。\n3、5G专网：企业与电信运营商等合作建设的5G工业网络，包括虚拟专网、独立专网等不同组网方式。',
    standard: '企业是否建成覆盖车间/办公区/厂区的工控网络和应用系统网络，是否实现设备、人员与信息系统的全面互联；是否建设或租用5G工业网络支撑系统协同；网络是否具备向智能化扩展的能力。前三条满足可选第四条',
    materials: ['工控网络相关网络架构文件', '网络拓扑图/网络建设方案', '5G网络建设或租赁合同']
  },
  f2: {
    explanation: '数值=数字化生产设备数量/总生产设备数量×100%，如数控机床、数控加工中心、工业机器人、自动生产线、柔性生产线、3D打印机设备等生产设备设施，机器视觉检测设备、光谱仪、硬度计、振动仪、维修工具等服务于生产过程的辅助设备，包括研发、加工制造、物流、质量检验检测等领域的设备。',
    standard: `数字化设备指具备数字接口、可接入网络的设备。设备数字化是企业实现生产过程数据自动采集的基础前提。数控机床、工业机器人、智能传感与控制装备、增材制造装备、智能检测与装配装备、智能物流与仓储装备等；
   在传统机械装备中部署PLC或传感器等数字化产品,从而具备数字控制能力的设备,
   应用了机器视觉、特征识别等人工智能技术的装备；
   在产品质量改进与缺陷检测、生产工艺过程优化、故障预测与诊断等应用智能技术的生产线。`,
    materials: ['设备清单（含数字化设备明细）']
  },
  f3: {
    explanation: '生产设备联网率是指已接入网络的生产设备数量占数字化设备总数的比例，联网是实现数据采集与实时监控的必要条件。',
    standard: '设备联网后才能进行生产数据的自动采集、远程监控与智能分析，是设备系统数字化的核心指标。',
    materials: ['设备清单', 'IoT平台接入设备界面截图', '设备通讯模块照片']
  },
  f4: {
    explanation: '数据自动采集的业务环节覆盖范围越广，表明企业数字化基础越扎实，能够支撑更全面的数据驱动决策。',
    standard: `1、产品设计和工艺设计主要是针对设计数据的自动采集而非手动输入。
2、营销管理主要是针对销售需求是否可以自动采集到系统内。
3、售后服务主要是针对客诉等售后信息是否可以自动采集到系统内。
4、计划排程主要是针对预测需求池或销售订单是否可以自动采集到排程系统内。
5.生产管控主要是针对生产执行过程中的生产数据如领料、报工、过程数据等是否可以自动采集到系统内。
6、质量管理主要是针对过程检的质量数据和质量检结果是否可以自动采集到系统内。
7、设备管理主要是针对设备的运行状态、告警参数是否可以自动采集到系统内。
8、安全生产主要是针对企业现场生产的安全信息例如闯光栅、气阀告警、危险源告警等告警信息是否可以自动采集到系统内。
9、能耗管理主要是针对企业是否使用智能电表等具备通讯协议的装备对水、电、气等能耗数据进行自动采集。
10、采购管理只要是针对企业的计划内采购是否可以直接从销售模块同步到采购模块。
11、仓储物流主要是针对业务场景关联到出入库执行和数据是否同步到仓储模块
12、财务管理主要是针对
13、人力资源主要是针对企业的考勤数据、薪酬的统计依据是否可以自动采集。`,
    materials: ['各业务环节系统截图/界面照片', '数据采集平台界面截图']
  },
  f5: {
    explanation: '企业使用本地或云化部署的信息化服务，实现业务数字化管理的覆盖面，是衡量信息系统应用水平的关键指标。',
    standard: `从单个业务环节到全覆盖（大于80%业务环节），覆盖环节越多得分越高。信息系统包括ERP、MES、PLM、1、指产品设计、工艺设计、营销管理、售后服务、计划排程、生产管控、质量管理、设备管理、安全生产、能耗管理、采购管理、仓储物流、财务管理、人力资源等环节。
2、企业在某业务环节，建设部署了本地信息系统或者使用了云服务，都可以认为是在该环节实现了数字化管理。
3、信息系统种类繁多，包括EDA、CAD、CAE、CAPP、ERP、MES、WMS、CRM、OA、BI等系统。
4、企业的业务环节在名称上不一定与上述业务环节的名称完全相同，企业可根据实际完成的工作内容，确定本企业的业务环节，例如，营销管理可能是市场营销，计划排程可能是计划排产。CRM、SCM等各类业务管理软件。`,
    materials: ['信息化系统清单', '系统部署架构文档', '业务覆盖率说明文件']
  },
  f6: {
    explanation: '网络安全是企业数字化安全防护的基础，包括管理制度、产品服务、风险评估和访问控制等多层次措施。',
    standard: '考察企业是否建立网络安全管理制度、是否使用网络安全产品（防火墙、入侵检测等）、是否开展网络安全风险评估、是否具备边界访问控制与入侵检测能力。',
    materials: ['企业网络安全管理制度文件', '防火墙硬件/后台截图', '网络安全风险评估报告', '防火墙功能截图']
  },
  f7: {
    explanation: '数据安全是企业核心数字资产的保护能力的体现，包括制度建设、产品服务、风险评估和数据管理等多个维度。',
    standard: '考察企业是否建立数据安全管理制度、是否使用数据安全产品（加密、备份、脱敏等）、是否开展数据安全风险评估、是否建立数据台账并定期开展能力核验。',
    materials: ['企业数据安全管理制度文件', '加密服务器/备份平台照片', '数据安全风险评估报告', '数据台账及管理界面截图']
  },
  // M类 - 数字化管理
  m8: {
    explanation: '企业对数字化的认识与执行水平反映了企业数字化成熟度从意识觉醒到成果产出的完整路径。',
    standard: '从被动了解（1级）→制定规划保障（2级）→开始改造（3级）→实现业务模式和管理决策改变并取得成效（4级），体现了企业数字化推进的深度。',
    materials: ['数字化规划/计划等文件', '数字化改造合同/项目文档', '参观交流照片/签到表', '数字化实施成果案例']
  },
  m9: {
    explanation: '数字化管理制度的完善程度是企业数字化管理水平的重要标志，制度越完善越能保障数字化持续推进。',
    standard: '考察企业是否建立：数字化转型实施工作流程、信息系统建设及运营管理制度、数据资源管理制度、与数字化融合的创新激励制度。',
    materials: ['数字化实施工作流程文件', '信息系统建设及运营管理制度文件', '数据资源管理制度文件', '数字化融合创新激励制度文件']
  },
  m10: {
    explanation: '数字化人才是企业数字化转型的核心支撑，人才建设体系越完善，数字化推进力度越强。',
    standard: '考察企业是否配备专职/兼职数字化人才、设置专门数字化岗位/部门、定期开展培训、有绩效薪酬管理制度、有梯度培育机制。',
    materials: ['企业组织架构图（显示数字化岗位）', '培训签到表或培训照片', '数字化人才绩效/薪酬管理制度文件', '梯度培育制度文件']
  },
  m11: {
    explanation: '企业近三年平均数字化投入占比是衡量数字化资金保障力度的重要指标，稳定持续的投入是数字化成功的保障。',
    standard: '计算公式：近三年数字化投入总额/近三年营业收入总额的平均比例。比例越高，说明企业对数字化重视程度越高。',
    materials: ['企业财务报表（数字化投入科目）', '数字化投入计算表（投入金额/营业收入明细）']
  },
  // R类 - 数字化成效
  r12: {
    explanation: '每百元营业收入中综合能源消费量是衡量企业绿色低碳转型成效的核心指标，数字化改造应带来能耗的降低。',
    standard: '数字化改造后每百元营业收入综合能源消费量相比改造前的变化：增加（0分）、持平（50分）、降低（100分）。数据来源为企业能源管理系统或财务报表。',
    materials: ['能源管理系统界面截图', '综合能源消费数据（205-1表或财务账目）', '数字化改造前后对比说明']
  },
  r13: {
    explanation: '月均产品合格率是衡量数字化质量提升成效的关键指标，数字化管控应带来质量稳定性提升。',
    standard: '数字化改造后月均产品合格率相比改造前的变化：降低（0分）、持平（50分）、增加（100分）。数据来源为企业质量管理系统或生产报表。',
    materials: ['质量管理系统界面截图', '产品质量合格率统计报表', '数字化改造前后质量数据对比']
  },
  r14: {
    explanation: '人均营业收入是企业劳动生产率的重要体现，数字化提升应带来人效的提高。',
    standard: '企业上年度人均营业收入相比前年的变化：降低（0分）、持平（50分）、增加（100分）。计算公式：营业收入/从业人员平均人数。',
    materials: ['企业从业人员平均人数证明（社保或统计局数据）', '近两年营业收入财务数据']
  },
  r15: {
    explanation: '每百元营业收入中的成本是衡量企业降本增效成效的核心指标，数字化优化应带来成本降低。',
    standard: '企业上年度每百元营业收入中的成本相比前年的变化：增加（0分）、持平（50分）、降低（100分）。成本包含营业成本、期间费用等。',
    materials: ['企业成本明细表', '近两年财务数据对比', '成本分析报告']
  }
};
const SCENARIO_REF_DATA = {
  s1: {
    levels: [
      { lv: 1, label: '一级', judgment: '使用CAD/CAE/EDA等设计软件工具辅助开展产品设计', materials: ['设计软件使用截图', '设计文档清单'] },
      { lv: 2, label: '二级', judgment: '应用信息化系统开展产品设计，实现产品设计过程或版本的数字化、规范化管理', materials: ['PLM/PDM系统截图', '设计版本管理记录'] },
      { lv: 3, label: '三级', judgment: '运用仿真分析实现产品外观、结构、性能的试验验证或迭代优化；实现产业链上下游协同设计', materials: ['仿真分析报告', '协同设计平台截图/合作协议'] },
      { lv: 4, label: '四级', judgment: '建立典型产品组件及关键零部件的标准库和知识库；实现产品设计与工艺设计的协同，数据跨部门共享', materials: ['标准库/知识库界面截图', '跨部门数据共享记录'] }
    ]
  },
  s2: {
    levels: [
      { lv: 1, label: '一级', judgment: '应用CAM、CAPP等设计软件工具基于产品设计数据辅助开展工艺设计', materials: ['工艺设计软件使用截图', '工艺文档清单'] },
      { lv: 2, label: '二级', judgment: '应用信息化系统开展工艺设计，实现设计过程的数字化、规范化管理', materials: ['CAPP/MES系统截图', '工艺设计流程文档'] },
      { lv: 3, label: '三级', judgment: '建立数据模型，基于质量、成本等数据运用三维仿真等技术实现工艺设计的模拟仿真、迭代优化', materials: ['仿真模型截图', '工艺优化分析报告'] },
      { lv: 4, label: '四级', judgment: '建立典型制造工艺流程、参数、资源等关键要素的知识库；实现工艺设计与生产系统间的数据交互、并行协同', materials: ['工艺知识库界面截图', '工艺-生产系统对接记录'] }
    ]
  },
  s3: {
    levels: [
      { lv: 1, label: '一级', judgment: '借助信息技术工具（如电子表格、云存储等）对销售信息进行辅助记录和管理', materials: ['销售数据记录表格', '云存储目录截图'] },
      { lv: 2, label: '二级', judgment: '使用信息化系统对营销信息进行规范化管理', materials: ['CRM系统截图', '客户数据台账'] },
      { lv: 3, label: '三级', judgment: '基于销售信息化系统实现对营销信息的实时管控；实现销售系统与生产、库存、财务等系统的数字化协同', materials: ['CRM/ERP系统集成截图', '跨系统数据对接记录'] },
      { lv: 4, label: '四级', judgment: '使用AI等前沿技术实现销售、财务、生产、供应链之间的数字化协同；实现实时销售预测，自动/半自动制定采购、生产、物流计划', materials: ['AI销售预测系统截图', '自动计划生成记录', '供应链协同平台截图'] }
    ]
  },
  s4: {
    levels: [
      { lv: 1, label: '一级', judgment: '运用信息技术工具（如小程序、APP等）对售后服务流程进行辅助管理', materials: ['售后服务小程序/APP截图', '服务记录台账'] },
      { lv: 2, label: '二级', judgment: '运用信息化系统实现售后服务流程的数字化、规范化管理，并与设计、工艺、生产、销售部门进行信息共享', materials: ['售后服务系统截图', '跨部门信息共享记录'] },
      { lv: 3, label: '三级', judgment: '基于信息系统实现面向客户的精细化管理（如远程运维、主动式客户服务）；建立客户服务数据模型，实现精准服务', materials: ['远程运维系统截图', '客户服务数据模型说明'] },
      { lv: 4, label: '四级', judgment: '建立售后问题清单，实现售后问题的快速响应；指导产品设计、工艺优化；实现售后服务与财务、质量等系统的数字化协同', materials: ['售后问题管理清单', '跨系统协同记录', '质量问题分析报告'] }
    ]
  },
  s5: {
    levels: [
      { lv: 1, label: '一级', judgment: '应用信息技术工具辅助人工编制生产计划', materials: ['生产计划编制表格/软件截图', '计划排程记录'] },
      { lv: 2, label: '二级', judgment: '应用信息化系统辅助生成生产计划，基于生产计划进行生产准备检查，实现规范化管理', materials: ['APS/MES系统截图', '生产准备检查记录'] },
      { lv: 3, label: '三级', judgment: '应用信息化系统实现基于物料安全库存、销售订单、采购提前期、生产交期等多约束条件自动生成生产计划', materials: ['APS系统截图', '自动排产规则配置说明', '多约束排产分析报告'] },
      { lv: 4, label: '四级', judgment: '运用AI等前沿技术建立生产排产与调度算法模型，实现自动给出优化排产方案；生产情况实时监测，动态实时的生产排产和调度', materials: ['AI排产系统截图', '算法模型说明', '实时监测平台截图'] }
    ]
  },
  s6: {
    levels: [
      { lv: 1, label: '一级', judgment: '应用信息技术工具辅助人工进行生产工单数据的记录', materials: ['工单记录表格/系统截图', '工单台账'] },
      { lv: 2, label: '二级', judgment: '应用信息化系统实现生产工单信息录入、跟踪，实现规范化管理', materials: ['MES系统工单管理截图', '工单跟踪记录'] },
      { lv: 3, label: '三级', judgment: '应用信息化系统对生产工单信息、工艺参数进行数据采集；实现信息化系统与其他系统的协同，实现数据共享', materials: ['MES数据采集截图', '系统集成对接记录', '工艺参数采集记录'] },
      { lv: 4, label: '四级', judgment: '运用AI等前沿技术建立生产运行监测预警算法模型；实现在线分析与实时监测预警，驱动生产过程的迭代优化与闭环管控', materials: ['AI监测预警系统截图', '算法模型说明', '预警处理记录'] }
    ]
  },
  s7: {
    levels: [
      { lv: 1, label: '一级', judgment: '应用信息技术工具辅助开展产品质量信息的管理', materials: ['质量信息记录表格/系统截图', '质量数据台账'] },
      { lv: 2, label: '二级', judgment: '实现生产过程质量数据的数字化采集录入、统计与管理；基于信息化系统实现质量管理流程的规范化管理', materials: ['QMS系统截图', '质量数据采集录入记录', '质量管理流程文档'] },
      { lv: 3, label: '三级', judgment: '应用数字化检测设备及信息化系统实现关键工序质量检测，自动对检测结果判断和报警；或实现质量可追溯', materials: ['数字化检测设备截图', '质量检测系统截图', '质量追溯记录'] },
      { lv: 4, label: '四级', judgment: '应用前沿技术（如视觉质检）开展产品质量检测；开展产业链上下游质量数据跨企业共享；构建产品质量管理模型，实现缺陷预测性分析', materials: ['视觉质检系统截图', '上下游质量数据共享记录', '缺陷预测分析模型说明'] }
    ]
  },
  s8: {
    levels: [
      { lv: 1, label: '一级', judgment: '通过人工或手持仪器开展设备点巡检，并应用信息技术工具辅助制定设备管理台账', materials: ['设备点巡检记录表', '设备管理台账'] },
      { lv: 2, label: '二级', judgment: '通过信息技术手段制定设备维护计划，开展设备点巡检、维护保养等功能，实现设备的规范化管理', materials: ['设备管理系统截图', '维护计划文档', '设备点巡检维护记录'] },
      { lv: 3, label: '三级', judgment: '建立设备运行模型和设备故障知识库，实现设备故障自动预警及自动制定预测维护解决方案；基于设备综合效率的分析驱动工艺优化和生产作业计划优化', materials: ['设备运行模型截图', '故障知识库截图', 'OEE分析报告', '预测维护方案记录'] },
      { lv: 4, label: '四级', judgment: '基于信息化系统实现设备关键运行参数数据的实时采集、故障分析和远程诊断；实现设备综合效率（OEE）统计', materials: ['设备实时监控系统截图', '远程诊断记录', 'OEE统计报表'] }
    ]
  },
  s9: {
    levels: [
      { lv: 1, label: '一级', judgment: '应用信息技术工具辅助开展车间安全生产规范的制定及管理', materials: ['安全生产管理制度文件', '安全管理台账'] },
      { lv: 2, label: '二级', judgment: '应用信息技术手段实现安全作业规范化管理，开展安全风险数据、重大危险源等在线监测', materials: ['安全管理系统截图', '风险数据监测记录', '危险源在线监测截图'] },
      { lv: 3, label: '三级', judgment: '基于安全作业、风险管控等数据的分析及建模，实现危险源的预防性管理、自动预警及响应处理', materials: ['安全数据分析模型说明', '预防性管理记录', '预警响应处理记录'] },
      { lv: 4, label: '四级', judgment: '实现危险废物存储、运输的全流程信息化管理；实现安全生产风险实时报警；建立安全应急预案，实现安全事故处理与相关部门及时协同', materials: ['危险废物管理信息系统截图', '实时报警系统截图', '应急预案文档', '跨部门协同记录'] }
    ]
  },
  s10: {
    levels: [
      { lv: 1, label: '一级', judgment: '应用信息技术工具辅助人工进行能耗数据记录', materials: ['能耗数据记录表格', '能耗台账'] },
      { lv: 2, label: '二级', judgment: '应用信息化系统收集和管理水、电、气、液等能耗数据，实现基于能耗数据的统计分析，实现规范化管理', materials: ['能源管理系统截图', '能耗统计分析报表'] },
      { lv: 3, label: '三级', judgment: '应用信息化系统或平台，实时采集和管理水、电、气、液以及影响设备能耗的关键数据；实现设备能耗的监测分析与相关部门协同管控优化', materials: ['能源管理平台截图', '实时能耗数据采集记录', '能耗分析报告', '协同管控记录'] },
      { lv: 4, label: '四级', judgment: '建立设备能耗监测与优化算法模型；实现设备能耗实时监测、能源转化效率分析、未来能耗预测及能源优化调度', materials: ['能耗优化算法模型说明', '能耗预测系统截图', '能源优化调度记录'] }
    ]
  },
  s11: {
    levels: [
      { lv: 1, label: '一级', judgment: '借助信息技术工具辅助记录采购订单信息和采购过程信息', materials: ['采购订单记录表格', '采购过程台账'] },
      { lv: 2, label: '二级', judgment: '应用信息化系统对采购管理信息进行规范化管理', materials: ['采购管理系统截图', '采购数据台账'] },
      { lv: 3, label: '三级', judgment: '实现供应商管理、询报比价、采购计划、采购执行的全过程管理；实现采购信息化系统与生产、仓储、财务等系统的数字化协同', materials: ['采购管理系统全流程截图', '供应商管理记录', '系统集成对接记录'] },
      { lv: 4, label: '四级', judgment: '运用AI等前沿技术实现采购与内外部供应链之间的数字化协同；实现供应链风险预警预测，动态优化采购策略', materials: ['AI采购系统截图', '供应链风险预警记录', '采购策略优化报告'] }
    ]
  },
  s12: {
    levels: [
      { lv: 1, label: '一级', judgment: '使用信息技术工具辅助记录出入库信息，实现对库存数据的采集管理', materials: ['出入库记录表格', '库存数据台账'] },
      { lv: 2, label: '二级', judgment: '使用信息化系统，对物料、成品、半成品、耗材等出入库、库存等数据信息进行统计，实现规范化管理', materials: ['WMS系统截图', '库存统计数据报表'] },
      { lv: 3, label: '三级', judgment: '实现仓储管理信息化系统与生产、采购、财务等信息化系统的数字化协同', materials: ['WMS系统集成截图', '跨系统数据对接记录'] },
      { lv: 4, label: '四级', judgment: '使用AI等前沿技术实现仓储物流与供应商库存或客户生产计划间的数字化协同；自动实现物流计划的自动制定实施或厂内物料自动配送；实现智能仓储及厂外智能物流', materials: ['智能仓储系统截图', '自动配送系统截图', '供应链协同平台截图', '物流计划自动生成记录'] }
    ]
  },
  s13: {
    levels: [
      { lv: 1, label: '一级', judgment: '使用信息化系统辅助实现日常财务记录，基本的总账管理和财务报表生成', materials: ['财务系统截图', '总账管理界面', '财务报表样本'] },
      { lv: 2, label: '二级', judgment: '使用信息化系统，实现总账、往来、存货、固定资产、出纳等与财务会计核算的协同，对财务实现规范化管理', materials: ['财务系统各模块截图', '财务核算流程文档', '往来/存货/固定资产管理记录'] },
      { lv: 3, label: '三级', judgment: '实现业务数据与财务管理的协同，能支持企业的管理会计核算；实现通过财务的分析辅助决策', materials: ['业财一体化系统截图', '管理会计核算报表', '财务分析报告'] },
      { lv: 4, label: '四级', judgment: '实现企业内外部协同，实现企业财务管理全面智能化和数据驱动；实现对企业未来的财务状况进行预测、规划和风险评估', materials: ['智能财务系统截图', '财务预测规划报告', '风险评估模型说明'] }
    ]
  },
  s14: {
    levels: [
      { lv: 1, label: '一级', judgment: '采用信息技术工具辅助实现员工、流程的信息记录', materials: ['人力资源信息系统截图', '员工信息记录台账'] },
      { lv: 2, label: '二级', judgment: '基于信息化系统实现对考勤和薪酬福利等核心流程的规范化管理', materials: ['HRM系统考勤管理截图', '薪酬福利管理记录'] },
      { lv: 3, label: '三级', judgment: '利用人力资源数据分析工具进行关键指标分析，数据驱动人力资源战略规划和决策制定', materials: ['人力资源数据分析平台截图', '关键指标分析报告', '战略规划文档'] },
      { lv: 4, label: '四级', judgment: '应用AI等前沿技术实现个性化绩效管理、智能招聘与人才画像、个性化的培训和发展计划', materials: ['AI招聘系统截图', '人才画像模型说明', '个性化培训计划记录'] }
    ]
  },
  s15: {
    levels: [
      { lv: 1, label: '一级', judgment: '应用信息技术工具（如电子邮件或文档共享服务等通讯工具）辅助日常沟通和简单的信息共享文档处理', materials: ['协同办公工具截图', '文档共享记录'] },
      { lv: 2, label: '二级', judgment: '部署具有更丰富功能的协同平台或办公软件，实现日常业务流程的数字化', materials: ['协同办公平台截图', '业务流程数字化记录'] },
      { lv: 3, label: '三级', judgment: '应用协同平台实现与财务、采购、生产、项目管理等专业业务管理系统集成；利用移动工具，提升跨部门协作效率', materials: ['协同平台集成截图', '跨部门协作记录', '移动办公工具截图'] },
      { lv: 4, label: '四级', judgment: '应用AI等前沿技术实现内部、外部数据的协同；在自动问答、智能推荐、智能预测分析等办公场景实现无缝协作办公', materials: ['AI协同办公系统截图', '智能问答/推荐系统说明', '预测分析功能记录'] }
    ]
  },
  s16: {
    levels: [
      { lv: 1, label: '一级', judgment: '运用信息技术工具辅助收集企业生产经营过程基本数据，为管理者提供简单的决策建议或方向', materials: ['决策支持系统基础版本截图', '生产经营数据收集记录'] },
      { lv: 2, label: '二级', judgment: '运用信息化系统整合关键业务环节的数据，使用业务关联分析和决策支持工具，提供直观的可视化数据', materials: ['BI/决策支持系统截图', '业务数据关联分析报告', '可视化数据看板截图'] },
      { lv: 3, label: '三级', judgment: '利用数据驱动平台针对特定业务场景实施数据模拟与效能优化，助力决策者精准评估并采纳最佳实践方案', materials: ['数据驱动平台截图', '数据模拟分析报告', '效能优化方案'] },
      { lv: 4, label: '四级', judgment: '运用AI等前沿技术整合企业内外部数据，构建智能化的预测、预警和决策模型，辅助管理层或业务人员进行智能化流程决策', materials: ['AI决策支持系统截图', '智能预测预警模型说明', '决策模型应用记录'] }
    ]
  }
};

// ── SCENARIOS DATA ─────────────────────────────────────────────────────────
const SCENARIOS = [
  { id: 's1', name: '产品设计', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '通过设计软件工具（如CAD、CAE、EDA等）辅助开展产品设计' },
    { lv: 2, label: '二级', badge: 'l2', desc: '应用信息化系统开展产品设计，实现产品设计过程或版本的数字化、规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '运用仿真分析等技术实现对产品外观、结构、性能等进行试验验证或迭代优化；实现产业链上下游间的多方信息交互、协同设计' },
    { lv: 4, label: '四级', badge: 'l4', desc: '建立典型产品组件及关键零部件的标准库及典型产品设计知识库；实现产品设计与工艺设计的协同，数据跨部门共享' }
  ]},
  { id: 's2', name: '工艺设计', required: false, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '应用设计软件工具（如CAM、CAPP等）基于产品设计数据辅助开展工艺设计' },
    { lv: 2, label: '二级', badge: 'l2', desc: '应用信息化系统开展工艺设计，实现设计过程的数字化、规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '建立数据模型，基于质量、成本等数据运用三维仿真等技术实现工艺设计的模拟仿真、迭代优化' },
    { lv: 4, label: '四级', badge: 'l4', desc: '建立典型制造工艺流程、参数、资源等关键要素的知识库；实现工艺设计与生产系统间的数据交互、并行协同' }
  ]},
  { id: 's3', name: '营销管理', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '借助信息技术工具（如电子表格、云存储等）对销售信息进行辅助记录和管理' },
    { lv: 2, label: '二级', badge: 'l2', desc: '使用信息化系统对营销信息进行规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '基于销售信息化系统实现对营销信息的实时管控；实现销售信息化系统与生产、库存、财务等系统的数字化协同' },
    { lv: 4, label: '四级', badge: 'l4', desc: '使用人工智能等前沿技术，实现销售、财务、生产、供应链之间的数字化协同；实现实时销售预测，自动或半自动制定采购、生产、物流等计划' }
  ]},
  { id: 's4', name: '售后服务', required: false, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '运用信息技术工具（如小程序、APP等）对售后服务流程进行辅助管理' },
    { lv: 2, label: '二级', badge: 'l2', desc: '运用信息化系统实现售后服务流程的数字化、规范化管理，并与设计、工艺、生产、销售部门进行信息共享' },
    { lv: 3, label: '三级', badge: 'l3', desc: '基于信息系统实现面向客户的精细化管理（如远程运维、主动式客户服务）；建立客户服务数据模型，实现精准服务' },
    { lv: 4, label: '四级', badge: 'l4', desc: '建立售后问题清单，实现售后问题的快速响应；指导产品设计、工艺优化；实现售后服务与财务、质量等系统的数字化协同' }
  ]},
  { id: 's5', name: '计划排程', required: false, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '应用信息技术工具辅助人工编制生产计划' },
    { lv: 2, label: '二级', badge: 'l2', desc: '应用信息化系统辅助生成生产计划，基于生产计划进行生产准备检查，实现规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '应用信息化系统实现基于物料安全库存、销售订单、采购提前期、生产交期等多约束条件自动生成生产计划' },
    { lv: 4, label: '四级', badge: 'l4', desc: '运用人工智能等前沿技术，建立生产排产与调度算法模型，实现自动给出优化排产方案；生产情况实时监测，动态实时的生产排产和调度' }
  ]},
  { id: 's6', name: '生产管控', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '应用信息技术工具辅助人工进行生产工单数据的记录' },
    { lv: 2, label: '二级', badge: 'l2', desc: '应用信息化系统实现生产工单信息录入、跟踪，实现规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '应用信息化系统对生产工单信息、工艺参数进行数据采集；实现信息化系统与其他系统的协同，实现数据共享' },
    { lv: 4, label: '四级', badge: 'l4', desc: '运用人工智能等前沿技术建立生产运行监测预警算法模型；实现在线分析与实时监测预警，驱动生产过程的迭代优化与闭环管控' }
  ]},
  { id: 's7', name: '质量管理', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '应用信息技术工具辅助开展产品质量信息的管理' },
    { lv: 2, label: '二级', badge: 'l2', desc: '实现生产过程质量数据的数字化采集录入、统计与管理；基于信息化系统实现质量管理流程的规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '应用数字化检测设备及信息化系统实现关键工序质量检测，自动对检测结果判断和报警；或实现质量可追溯' },
    { lv: 4, label: '四级', badge: 'l4', desc: '应用前沿技术（如视觉质检）开展产品质量检测；开展产业链上下游质量数据跨企业共享；构建产品质量管理模型，实现缺陷预测性分析' }
  ]},
  { id: 's8', name: '设备管理', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '通过人工或手持仪器开展设备点巡检，并应用信息技术工具辅助制定设备管理台账' },
    { lv: 2, label: '二级', badge: 'l2', desc: '通过信息技术手段制定设备维护计划，开展设备点巡检、维护保养等功能，实现设备的规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '建立设备运行模型和设备故障知识库，实现设备故障自动预警及自动制定预测维护解决方案；基于设备综合效率的分析驱动工艺优化和生产作业计划优化' },
    { lv: 4, label: '四级', badge: 'l4', desc: '基于信息化系统实现设备关键运行参数数据的实时采集、故障分析和远程诊断；实现设备综合效率（OEE）统计' }
  ]},
  { id: 's9', name: '安全生产', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '应用信息技术工具辅助开展车间安全生产规范的制定及管理' },
    { lv: 2, label: '二级', badge: 'l2', desc: '应用信息技术手段实现安全作业规范化管理，开展安全风险数据、重大危险源等在线监测' },
    { lv: 3, label: '三级', badge: 'l3', desc: '基于安全作业、风险管控等数据的分析及建模，实现危险源的预防性管理、自动预警及响应处理' },
    { lv: 4, label: '四级', badge: 'l4', desc: '实现危险废物存储、运输的全流程信息化管理；实现安全生产风险实时报警；建立安全应急预案，实现安全事故处理与相关部门及时协同' }
  ]},
  { id: 's10', name: '能耗管理', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '应用信息技术工具辅助人工进行能耗数据记录' },
    { lv: 2, label: '二级', badge: 'l2', desc: '应用信息化系统收集和管理水、电、气、液等能耗数据，实现基于能耗数据的统计分析，实现规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '应用信息化系统或平台，实时采集和管理水、电、气、液以及影响设备能耗的关键数据；实现设备能耗的监测分析与相关部门协同管控优化' },
    { lv: 4, label: '四级', badge: 'l4', desc: '建立设备能耗监测与优化算法模型；实现设备能耗实时监测、能源转化效率分析、未来能耗预测及能源优化调度' }
  ]},
  { id: 's11', name: '采购管理', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '借助信息技术工具辅助记录采购订单信息和采购过程信息' },
    { lv: 2, label: '二级', badge: 'l2', desc: '应用信息化系统对采购管理信息进行规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '实现供应商管理、询报比价、采购计划、采购执行的全过程管理；实现采购信息化系统与生产、仓储、财务等系统的数字化协同' },
    { lv: 4, label: '四级', badge: 'l4', desc: '运用人工智能等前沿技术，实现采购与内外部供应链之间的数字化协同；实现供应链风险预警预测，动态优化采购策略' }
  ]},
  { id: 's12', name: '仓储物流', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '使用信息技术工具辅助记录出入库信息，实现对库存数据的采集管理' },
    { lv: 2, label: '二级', badge: 'l2', desc: '使用信息化系统，对物料、成品、半成品、耗材等出入库、库存等数据信息进行统计，实现规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '实现仓储管理信息化系统与生产、采购、财务等信息化系统的数字化协同' },
    { lv: 4, label: '四级', badge: 'l4', desc: '使用人工智能等前沿技术，实现仓储物流与供应商库存或客户生产计划间的数字化协同；自动实现物流计划的自动制定实施或厂内物料自动配送；实现智能仓储及厂外智能物流' }
  ]},
  { id: 's13', name: '财务管理', required: true, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '使用信息化系统辅助实现日常财务记录，基本的总账管理和财务报表生成' },
    { lv: 2, label: '二级', badge: 'l2', desc: '使用信息化系统，实现总账、往来、存货、固定资产、出纳等与财务会计核算的协同，对财务实现规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '实现业务数据与财务管理的协同，能支持企业的管理会计核算；实现通过财务的分析辅助决策' },
    { lv: 4, label: '四级', badge: 'l4', desc: '实现企业内外部协同，实现企业财务管理全面智能化和数据驱动；实现对企业未来的财务状况进行预测、规划和风险评估' }
  ]},
  { id: 's14', name: '人力资源', required: false, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '采用信息技术工具辅助实现员工、流程的信息记录' },
    { lv: 2, label: '二级', badge: 'l2', desc: '基于信息化系统实现对考勤和薪酬福利等核心流程的规范化管理' },
    { lv: 3, label: '三级', badge: 'l3', desc: '利用人力资源数据分析工具进行关键指标分析，数据驱动人力资源战略规划和决策制定' },
    { lv: 4, label: '四级', badge: 'l4', desc: '应用人工智能等前沿技术，实现个性化绩效管理、智能招聘与人才画像、个性化的培训和发展计划' }
  ]},
  { id: 's15', name: '协同办公', required: false, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '应用信息技术工具（如电子邮件或文档共享服务等通讯工具）辅助日常沟通和简单的信息共享文档处理' },
    { lv: 2, label: '二级', badge: 'l2', desc: '部署具有更丰富功能的协同平台或办公软件，实现日常业务流程的数字化' },
    { lv: 3, label: '三级', badge: 'l3', desc: '应用协同平台实现与财务、采购、生产、项目管理等专业业务管理系统集成；利用移动工具，提升跨部门协作效率' },
    { lv: 4, label: '四级', badge: 'l4', desc: '应用人工智能等前沿技术实现内部、外部数据的协同；在自动问答、智能推荐、智能预测分析等办公场景实现无缝协作办公' }
  ]},
  { id: 's16', name: '决策支持', required: false, levels: [
    { lv: 1, label: '一级', badge: 'l1', desc: '运用信息技术工具辅助收集企业生产经营过程基本数据，为管理者提供简单的决策建议或方向' },
    { lv: 2, label: '二级', badge: 'l2', desc: '运用信息化系统，整合关键业务环节的数据，使用业务关联分析和决策支持工具，提供直观的可视化数据' },
    { lv: 3, label: '三级', badge: 'l3', desc: '利用数据驱动平台针对特定业务场景实施数据模拟与效能优化，助力决策者精准评估并采纳最佳实践方案' },
    { lv: 4, label: '四级', badge: 'l4', desc: '运用人工智能等前沿技术整合企业内外部数据，构建智能化的预测、预警和决策模型，辅助管理层或业务人员进行智能化流程决策' }
  ]}
];

// ── STATE ───────────────────────────────────────────────────────────────────
const state = {
  answers: {},      // question id -> [selected indices] or single index
  scenarios: {},    // scenario id -> selected level (1-4)
  info: null        // { company, auditor, org, assessor }
};

// ── RENDER QUESTIONS ─────────────────────────────────────────────────────────
function renderQuestions() {
  const containers = {
    f: document.getElementById('questions-f'),
    m: document.getElementById('questions-m'),
    r: document.getElementById('questions-r')
  };

  for (const [cat, list] of Object.entries(QUESTIONS)) {
    const container = containers[cat];
    const catLabels = { f: { name: '数字化基础', icon: '💻', cls: 'f' }, m: { name: '数字化管理', icon: '⚙️', cls: 'm' }, r: { name: '数字化成效', icon: '📈', cls: 'r' } };
    const info = catLabels[cat];
    const catHtml = `
      <div class="cat-header">
        <div class="cat-icon" style="background:${cat === 'f' ? '#EEF4FF' : cat === 'm' ? '#F5F0FF' : '#F0FFF4'}">${info.icon}</div>
        <span class="cat-name ${info.cls}">${info.name}</span>
        <span class="cat-weight">${cat === 'f' ? '权重50%' : cat === 'm' ? '权重30%' : '权重20%'}</span>
      </div>`;

    let html = catHtml;
    list.forEach((q, qi) => {
      const isMulti = q.type === 'multi';
      const isSingle3 = q.type === 'single3';
      const badgeClass = isMulti ? 'multi' : '';
      const badgeText = isMulti ? '多选' : (isSingle3 ? '3选' : '单选');

      html += `
        <div class="question-card animate-fade stagger-${Math.min(qi+1, 5)}">
          <div class="question-meta" style="display:flex;align-items:center;gap:8px">
            <div class="question-num">第${q.id}题</div>
            <div class="question-type-badge ${badgeClass}">${badgeText}</div>
            <button class="ref-btn" onclick="openRef('${q.category}', ${q.id})" title="评分参考">?</button>
          </div>
          <div class="question-text">${q.text}</div>
          ${q.sub ? `<div class="question-sub">${q.sub}</div>` : ''}
          <div class="options-list" id="opts-${q.id}">
            ${q.options.map((opt, oi) => `
              <div class="option-item" data-q="${q.id}" data-o="${oi}" onclick="toggleOption(${q.id}, ${oi}, ${isMulti ? 'true' : 'false'})">
                <div class="option-check">
                  <svg class="option-check-icon" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div class="option-label">${opt.label}</div>
              </div>
            `).join('')}
          </div>
        </div>`;
    });
    container.innerHTML = html;
  }
}

// ── RENDER SCENARIOS ──────────────────────────────────────────────────────────
function renderScenarios() {
  const container = document.getElementById('scenarios-container');
  let html = '';
  SCENARIOS.forEach(sc => {
    html += `
      <div class="scenario-card ${sc.required ? 'required' : ''}" id="sc-${sc.id}" onclick="toggleScenario('${sc.id}')">
        <div class="scenario-name">${sc.name}</div>
        <div class="scenario-sub">${sc.required ? '★ 约束性场景' : '指导性场景'}</div>
        <div class="scenario-levels" id="sc-levels-${sc.id}">
          ${sc.levels.map(lv => `
            <div class="level-option" id="lv-${sc.id}-${lv.lv}" onclick="event.stopPropagation(); selectLevel('${sc.id}', ${lv.lv})">
              <div class="level-label">
                <span class="level-badge ${lv.badge}">${lv.label}</span>
                ${lv.desc.length > 40 ? lv.desc.substring(0,40) + '…' : lv.desc}
              </div>
              <div class="level-desc">${lv.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
  });
  container.innerHTML = `
    <div class="scenario-grid" style="margin-bottom:20px">
      ${SCENARIOS.slice(0,8).map(sc => `
        <div class="scenario-card ${sc.required ? 'required' : ''}" id="sc-${sc.id}" onclick="toggleScenario('${sc.id}')">
          <div style="display:flex;align-items:center;gap:6px">
            <div class="scenario-name">${sc.name}</div>
            <button class="ref-btn" onclick="openScenarioRef('${sc.id}')" title="评分参考">?</button>
          </div>
          <div class="scenario-sub">${sc.required ? '★ 约束性' : '指导性'}</div>
          <div class="scenario-levels" id="sc-levels-${sc.id}">
            ${sc.levels.map(lv => `
              <div class="level-option" id="lv-${sc.id}-${lv.lv}" onclick="event.stopPropagation(); selectLevel('${sc.id}', ${lv.lv})">
                <div class="level-label">
                  <span class="level-badge ${lv.badge}">${lv.label}</span>
                </div>
                <div class="level-desc">${lv.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    <div class="scenario-grid">
      ${SCENARIOS.slice(8).map(sc => `
        <div class="scenario-card ${sc.required ? 'required' : ''}" id="sc-${sc.id}" onclick="toggleScenario('${sc.id}')">
          <div style="display:flex;align-items:center;gap:6px">
            <div class="scenario-name">${sc.name}</div>
            <button class="ref-btn" onclick="openScenarioRef('${sc.id}')" title="评分参考">?</button>
          </div>
          <div class="scenario-sub">${sc.required ? '★ 约束性' : '指导性'}</div>
          <div class="scenario-levels" id="sc-levels-${sc.id}">
            ${sc.levels.map(lv => `
              <div class="level-option" id="lv-${sc.id}-${lv.lv}" onclick="event.stopPropagation(); selectLevel('${sc.id}', ${lv.lv})">
                <div class="level-label">
                  <span class="level-badge ${lv.badge}">${lv.label}</span>
                </div>
                <div class="level-desc">${lv.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>`;
}

// ── INTERACTIONS ─────────────────────────────────────────────────────────────
function toggleOption(qId, oIdx, isMulti) {
  if (!state.answers[qId]) state.answers[qId] = [];

  if (isMulti) {
    // Multi: find "无" option index 0
    if (oIdx === 0) {
      state.answers[qId] = [0];
    } else {
      // Remove "无" if selected
      state.answers[qId] = state.answers[qId].filter(i => i !== 0);
      const idx = state.answers[qId].indexOf(oIdx);
      if (idx === -1) state.answers[qId].push(oIdx);
      else state.answers[qId].splice(idx, 1);
    }
  } else {
    state.answers[qId] = [oIdx];
  }

  renderOptions(qId);
  updateNavButtons();
}

function renderOptions(qId) {
  const q = [...QUESTIONS.f, ...QUESTIONS.m, ...QUESTIONS.r].find(q => q.id === qId);
  if (!q) return;
  const selected = state.answers[qId] || [];
  const opts = document.querySelectorAll(`[data-q="${qId}"]`);
  opts.forEach((el, i) => {
    el.classList.toggle('selected', selected.includes(i));
  });
}

function toggleScenario(id) {
  const card = document.getElementById('sc-' + id);
  const wasOpen = card.classList.contains('open');
  // Close all others
  document.querySelectorAll('.scenario-card').forEach(c => c.classList.remove('open'));
  if (!wasOpen) card.classList.add('open');
}

function selectLevel(scId, lv) {
  state.scenarios[scId] = lv;
  const sc = SCENARIOS.find(s => s.id === scId);

  // Update level options
  document.querySelectorAll(`#sc-levels-${scId} .level-option`).forEach(el => {
    el.classList.remove('selected');
  });
  document.getElementById(`lv-${scId}-${lv}`).classList.add('selected');

  // Update card
  const card = document.getElementById('sc-' + scId);
  card.classList.add('selected');
  card.querySelector('.scenario-sub').textContent = `当前等级：${lv}级 · ${sc.required ? '★ 约束性' : '指导性'}`;

  updateNavButtons();
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function startAssessment() {
  goToScreen('screen-info');
  document.getElementById('progressWrap').style.display = 'block';
}

function checkInfoForm() {
  const company = document.getElementById('field-company').value.trim();
  const auditor = document.getElementById('field-auditor').value.trim();
  const org = document.getElementById('field-org').value.trim();
  const assessor = document.getElementById('field-assessor').value.trim();
  const allFilled = company && auditor && org && assessor;
  const btn = document.getElementById('btn-info');
  if (btn) btn.disabled = !allFilled;
  if (allFilled) {
    state.info = { company, auditor, org, assessor };
  }
}

function goToScreen(id) {
  const target = document.getElementById(id);
  if (!target) { alert('Section not found: ' + id); return; }
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateProgressBar(id);
  updateNavButtons();
}

function updateProgressBar(id) {
  const screens = ['screen-welcome','screen-info','screen-f','screen-m','screen-r','screen-b','screen-results'];
  const idx = screens.indexOf(id);
  const pct = idx / (screens.length - 1) * 100;
  document.getElementById('progressFill').style.width = pct + '%';

  const stepIds = ['stepIntro','stepInfo','stepF','stepM','stepR','stepB','stepRes'];
  stepIds.forEach((sid, i) => {
    const el = document.getElementById(sid);
    el.classList.remove('active','done');
    if (i < idx) el.classList.add('done');
    else if (i === idx) el.classList.add('active');
  });
}

function updateNavButtons() {
  const allQ = [...QUESTIONS.f, ...QUESTIONS.m, ...QUESTIONS.r];
  const fDone = QUESTIONS.f.every(q => state.answers[q.id] && state.answers[q.id].length > 0);
  const mDone = QUESTIONS.m.every(q => state.answers[q.id] && state.answers[q.id].length > 0);
  const rDone = QUESTIONS.r.every(q => state.answers[q.id] && state.answers[q.id].length > 0);
  const bDone = SCENARIOS.every(sc => state.scenarios[sc.id]);

  document.getElementById('btn-f').disabled = !fDone;
  document.getElementById('btn-m').disabled = !mDone;
  document.getElementById('btn-r').disabled = !rDone;
  document.getElementById('btn-b').disabled = !bDone;
}

// ── SCORING ──────────────────────────────────────────────────────────────────
function calcQuestionScore(q) {
  const ans = state.answers[q.id];
  if (!ans || ans.length === 0) return 0;
  if (q.type === 'multi') {
    if (ans.includes(0)) return 0; // chose "无"
    const validOptions = q.options.length - 1;
    return ans.length * (q.weight / validOptions);
  }
  return q.options[ans[0]].score ?? 0;
}

function calcSectionScore(questions) {
  return questions.reduce((sum, q) => sum + calcQuestionScore(q), 0);
}

function getScenarioLevelCount() {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
  Object.values(state.scenarios).forEach(lv => { if (lv) counts[lv]++; });
  return counts;
}

function determineOverallLevel(fScore, mScore, rScore, scenarioCounts) {
  // Direct sum since each dimension is already in 0-100 scale (F=50, M=30, R=20)
  const baseScore = fScore + mScore + rScore;

  // Count scenarios at each level (only count if level >= target level)
  const scenariosAtLv = (minLv) => {
    return SCENARIOS.filter(sc => {
      const lv = state.scenarios[sc.id] || 0;
      return lv >= minLv;
    });
  };

  // Determine level
  let level = 0;

  // 四级: baseScore>=80, 不少于10个应用场景(不少于6个约束性场景)等级需达到四级
  {
    const lv4Scenarios = scenariosAtLv(4);
    const totalScenarios = lv4Scenarios.length;
    const requiredScenarios = lv4Scenarios.filter(sc => sc.required).length;
    if (baseScore >= 80 && totalScenarios >= 10 && requiredScenarios >= 6) level = 4;
  }

  // 三级: baseScore>=60, 不少于8个应用场景(不少于5个约束性场景)等级需达到三级
  if (level === 0) {
    const lv3Scenarios = scenariosAtLv(3);
    const totalScenarios = lv3Scenarios.length;
    const requiredScenarios = lv3Scenarios.filter(sc => sc.required).length;
    if (baseScore >= 60 && totalScenarios >= 8 && requiredScenarios >= 5) level = 3;
  }

  // 二级: baseScore>=40, 不少于6个应用场景(不少于3个约束性场景)等级需达到二级
  if (level === 0) {
    const lv2Scenarios = scenariosAtLv(2);
    const totalScenarios = lv2Scenarios.length;
    const requiredScenarios = lv2Scenarios.filter(sc => sc.required).length;
    if (baseScore >= 40 && totalScenarios >= 6 && requiredScenarios >= 3) level = 2;
  }

  // 一级: baseScore>=20, 不少于6个应用场景(不少于3个约束性场景)等级需达到一级
  if (level === 0) {
    const lv1Scenarios = scenariosAtLv(1);
    const totalScenarios = lv1Scenarios.length;
    const requiredScenarios = lv1Scenarios.filter(sc => sc.required).length;
    if (baseScore >= 20 && totalScenarios >= 6 && requiredScenarios >= 3) level = 1;
  }

  return { baseScore, level };
}

function calculateResults() {
  const fScore = calcSectionScore(QUESTIONS.f);
  const mScore = calcSectionScore(QUESTIONS.m);
  const rScore = calcSectionScore(QUESTIONS.r);
  const { baseScore, level } = determineOverallLevel(fScore, mScore, rScore, getScenarioLevelCount());

  goToScreen('screen-results');
  document.getElementById('progressWrap').style.display = 'none';

  // Populate meta info
  if (state.info) {
    document.getElementById('results-meta').style.display = 'block';
    document.getElementById('results-company').textContent = state.info.company;
    document.getElementById('results-auditor').textContent = state.info.auditor;
    document.getElementById('results-org').textContent = state.info.org;
    document.getElementById('results-assessor').textContent = state.info.assessor;
  } else {
    document.getElementById('results-meta').style.display = 'none';
  }

  // Animate ring
  setTimeout(() => {
    const ring = document.getElementById('ringFill');
    const circumference = 2 * Math.PI * 80; // 502
    const offset = circumference * (1 - baseScore / 100);
    ring.style.strokeDashoffset = offset;
  }, 300);

  const levels = [
    { name: '无等级', title: '尚未达到一级标准', desc: '您的企业在数字化转型方面还需从基础开始建设。建议从设备数字化、信息系统部署等基础工作入手，逐步建立数字化能力。', color: '#86868B' },
    { name: '一级（初始级）', title: '处于数字化起步阶段', desc: '企业已具备基本数字化意识，在部分环节开展了数字化尝试。建议聚焦约束性场景的深度改造，建立数据采集基础能力。', color: '#E67E22' },
    { name: '二级（规范级）', title: '进入数字化规范阶段', desc: '企业在关键环节实现了数字化规范管理，具备一定数据积累。建议推进跨系统集成，打通数据孤岛，向集成级迈进。', color: '#F39C12' },
    { name: '三级（集成级）', title: '实现数字化集成整合', desc: '企业已完成主要业务流程的数字化集成，具备数据驱动决策的基础。建议深化AI应用，推进产业链协同，打造孪生工厂。', color: '#3498DB' },
    { name: '四级（协同级）', title: '达到数字化协同领先', desc: '企业实现了人机物互联互通，具备模型驱动的智能运营能力，在行业内处于领先水平。建议持续创新，探索前沿技术在业务中的深度应用。', color: '#27AE60' }
  ];
  const lvInfo = levels[level];

  document.getElementById('resultLevelNum').textContent = level === 0 ? '—' : level;
  document.getElementById('resultTotal').textContent = Math.round(baseScore) + '分';
  document.getElementById('resultLevelTitle').textContent = lvInfo.title;
  document.getElementById('resultLevelDesc').textContent = lvInfo.desc;

  // Scores
  document.getElementById('resultF').textContent = Math.round(fScore);
  document.getElementById('resultM').textContent = Math.round(mScore);
  document.getElementById('resultR').textContent = Math.round(rScore);

  // Scenario level
  const scLevels = getScenarioLevelCount();
  const avgLevel = Object.entries(scLevels).reduce((s, [lv, cnt]) => s + parseInt(lv) * cnt, 0) / Math.max(Object.values(scLevels).reduce((s,c)=>s+c,0),1);
  document.getElementById('resultB').textContent = avgLevel.toFixed(1);

  // Breakdown bars
  setTimeout(() => {
    document.getElementById('fBar').style.width = fScore + '%';
    document.getElementById('mBar').style.width = mScore + '%';
    document.getElementById('rBar').style.width = rScore + '%';
  }, 400);
  document.getElementById('fScore').textContent = Math.round(fScore);
  document.getElementById('mScore').textContent = Math.round(mScore);
  document.getElementById('rScore').textContent = Math.round(rScore);
  document.getElementById('fPercent').textContent = '(权重50%)';
  document.getElementById('mPercent').textContent = '(权重30%)';
  document.getElementById('rPercent').textContent = '(权重20%)';

  // Populate print-only report
  document.getElementById('print-company').textContent = state.info?.company || '—';
  document.getElementById('print-auditor').textContent = state.info?.auditor || '—';
  document.getElementById('print-org').textContent = state.info?.org || '—';
  document.getElementById('print-assessor').textContent = state.info?.assessor || '—';
  document.getElementById('print-level').textContent = level === 0 ? '无等级' : level + '级';
  document.getElementById('print-leveltitle').textContent = lvInfo.title;
  document.getElementById('print-leveldesc').textContent = lvInfo.desc;
  document.getElementById('print-totalscore').textContent = Math.round(baseScore) + '分';
  document.getElementById('print-f').textContent = Math.round(fScore);
  document.getElementById('print-m').textContent = Math.round(mScore);
  document.getElementById('print-r').textContent = Math.round(rScore);

  // Split scenarios into required and guiding
  const requiredScenarios = SCENARIOS.filter(sc => sc.required);
  const guidingScenarios = SCENARIOS.filter(sc => !sc.required);
  document.getElementById('print-required-list').innerHTML = requiredScenarios.map(sc => {
    const lv = state.scenarios[sc.id] || 0;
    return `<div class="print-scenario"><span class="sc-lv">${lv || '—'}</span><span class="sc-name">${sc.name}</span><span class="sc-tag">★</span></div>`;
  }).join('');
  document.getElementById('print-guiding-list').innerHTML = guidingScenarios.map(sc => {
    const lv = state.scenarios[sc.id] || 0;
    return `<div class="print-scenario"><span class="sc-lv">${lv || '—'}</span><span class="sc-name">${sc.name}</span></div>`;
  }).join('');

  // Scenario results split by type
  const requiredSc = SCENARIOS.filter(sc => sc.required);
  const guidingSc = SCENARIOS.filter(sc => !sc.required);
  const lvNames = ['','一级','二级','三级','四级'];
  const lvDescs = ['','初始级','规范级','集成级','协同级'];
  const lvColors = ['','#E67E22','#F39C12','#3498DB','#27AE60'];

  document.getElementById('requiredScenarioResults').innerHTML = requiredSc.map(sc => {
    const lv = state.scenarios[sc.id] || 0;
    return `
      <div class="scenario-result-card required-card">
        <div class="scenario-result-level" style="color:${lv > 0 ? lvColors[lv] : 'var(--accent)'}">${lv || '—'}</div>
        <div>
          <div class="scenario-result-name">${sc.name} <span class="scenario-required-tag">★</span></div>
          <div class="scenario-result-desc">${lv > 0 ? lvNames[lv] + ' · ' + lvDescs[lv] : '未评测'}</div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('guidingScenarioResults').innerHTML = guidingSc.map(sc => {
    const lv = state.scenarios[sc.id] || 0;
    return `
      <div class="scenario-result-card">
        <div class="scenario-result-level" style="color:${lv > 0 ? lvColors[lv] : 'var(--accent)'}">${lv || '—'}</div>
        <div>
          <div class="scenario-result-name">${sc.name}</div>
          <div class="scenario-result-desc">${lv > 0 ? lvNames[lv] + ' · ' + lvDescs[lv] : '未评测'}</div>
        </div>
      </div>`;
  }).join('');
}

function restartAssessment() {
  state.answers = {};
  state.scenarios = {};
  state.info = null;
  document.getElementById('progressWrap').style.display = 'none';
  document.getElementById('ringFill').style.strokeDashoffset = 502;
  document.getElementById('fBar').style.width = '0%';
  document.getElementById('mBar').style.width = '0%';
  document.getElementById('rBar').style.width = '0%';
  // Clear info form
  document.getElementById('field-company').value = '';
  document.getElementById('field-auditor').value = '';
  document.getElementById('field-org').value = '';
  document.getElementById('field-assessor').value = '';
  document.getElementById('btn-info').disabled = true;
  goToScreen('screen-welcome');
  renderScenarios();
  updateNavButtons();
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── INIT ─────────────────────────────────────────────────────────────────────
// ── REF SIDEBAR LOGIC ───────────────────────────────────────────────────
let currentRef = null;

function openRef(cat, qId) {
  // Map question id to REF_DATA key: f1-f7, m1-m4, r1-r4
  const refKeys = { f: qId, m: qId - 7, r: qId - 11 };
  const refKey = cat + refKeys[cat];
  const data = REF_DATA[refKey];
  if (!data) return;
  currentRef = { type: 'question', cat, qId };
  const relQ = refKeys[cat];
  const catNames = { f: '数字化基础', m: '数字化管理', r: '数字化成效' };
  const body = document.getElementById('refSidebarBody');
  body.innerHTML = `
    <div class="ref-question-label">第${relQ}题 · ${catNames[cat] || cat}</div>
    <div class="ref-explanation-box">
      <div class="ref-explanation-label">重点指标解释</div>
      <div class="ref-explanation-text">${data.explanation}</div>
    </div>
    <div class="ref-standard-box">
      <div class="ref-standard-label">标准说明</div>
      <div class="ref-standard-text">${data.standard}</div>
    </div>
    <div class="ref-materials-toggle" onclick="toggleMaterials(this)">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      查看支撑材料清单
    </div>
    <div class="ref-materials-list" id="refMaterialsList">
      <div class="ref-materials-label">支撑材料</div>
      ${(data.materials || []).map(m => `<div class="ref-material-item">${m}</div>`).join('')}
    </div>
  `;

  document.getElementById('refSidebar').classList.add('open');
  document.getElementById('refOverlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function openScenarioRef(scId) {
  const data = SCENARIO_REF_DATA[scId];
  if (!data) return;
  const sc = SCENARIOS.find(s => s.id === scId);
  if (!sc) return;
  currentRef = { type: 'scenario', scId };

  const body = document.getElementById('refSidebarBody');
  body.innerHTML = `
    <div class="ref-question-label">${sc.name} · 场景等级判定${sc.required ? ' ★约束性' : ''}</div>
    ${data.levels.map((lv, idx) => `
      ${idx > 0 ? '<div class="ref-divider"></div>' : ''}
      <div class="ref-level-section">
        <div class="ref-level-header">
          <span class="ref-level-badge l${lv.lv}">${lv.label}</span>
        </div>
        <div class="ref-level-judgment">${lv.judgment}</div>
        ${lv.materials && lv.materials.length > 0 ? `<div class="ref-level-materials">支撑材料：${lv.materials.join('、')}</div>` : ''}
      </div>
    `).join('')}
  `;

  document.getElementById('refSidebar').classList.add('open');
  document.getElementById('refOverlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeRefSidebar() {
  document.getElementById('refSidebar').classList.remove('open');
  document.getElementById('refOverlay').style.display = 'none';
  document.body.style.overflow = '';
  currentRef = null;
}

function toggleMaterials(el) {
  el.classList.toggle('open');
  document.getElementById('refMaterialsList').classList.toggle('open');
}

renderQuestions();
renderScenarios();

// ── RESULTS: 评分依据 & 材料清单 ────────────────────────────────────────
function showRefSummary() {
  const section = document.getElementById('refSummarySection');
  const content = document.getElementById('refSummaryContent');
  if (section.style.display === 'none') {
    section.style.display = 'block';
    let html = '';
    // F维度
    html += '<div class="cat-header" style="margin-top:16px"><div class="cat-icon" style="background:#EEF4FF">💻</div><span class="cat-name f">数字化基础</span></div>';
    QUESTIONS.f.forEach(q => {
      const score = calcQuestionScore(q);
      const ref = REF_DATA['f' + q.id];
      if (!ref) return;
      html += `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius2);padding:14px 16px;margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
            <div style="font-size:0.8rem;font-weight:600;color:var(--text)">第${q.id}题：${q.text}</div>
            <div style="font-family:'Syne',sans-serif;font-size:0.95rem;font-weight:700;color:var(--accent)">${Math.round(score)}分</div>
          </div>
          <div style="font-size:0.72rem;color:var(--text2);line-height:1.5">${ref.explanation}</div>
        </div>`;
    });
    // M维度
    html += '<div class="cat-header" style="margin-top:20px"><div class="cat-icon" style="background:#F5F0FF">⚙️</div><span class="cat-name m">数字化管理</span></div>';
    QUESTIONS.m.forEach(q => {
      const score = calcQuestionScore(q);
      const ref = REF_DATA['m' + q.id];
      if (!ref) return;
      html += `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius2);padding:14px 16px;margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
            <div style="font-size:0.8rem;font-weight:600;color:var(--text)">第${q.id}题：${q.text}</div>
            <div style="font-family:'Syne',sans-serif;font-size:0.95rem;font-weight:700;color:#5856D6">${Math.round(score)}分</div>
          </div>
          <div style="font-size:0.72rem;color:var(--text2);line-height:1.5">${ref.explanation}</div>
        </div>`;
    });
    // R维度
    html += '<div class="cat-header" style="margin-top:20px"><div class="cat-icon" style="background:#F0FFF4">📈</div><span class="cat-name r">数字化成效</span></div>';
    QUESTIONS.r.forEach(q => {
      const score = calcQuestionScore(q);
      const ref = REF_DATA['r' + q.id];
      if (!ref) return;
      html += `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius2);padding:14px 16px;margin-bottom:8px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
            <div style="font-size:0.8rem;font-weight:600;color:var(--text)">第${q.id}题：${q.text}</div>
            <div style="font-family:'Syne',sans-serif;font-size:0.95rem;font-weight:700;color:#34C759">${Math.round(score)}分</div>
          </div>
          <div style="font-size:0.72rem;color:var(--text2);line-height:1.5">${ref.explanation}</div>
        </div>`;
    });
    content.innerHTML = html;
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    section.style.display = 'none';
  }
}

function showMaterialsList() {
  const section = document.getElementById('materialsListSection');
  const content = document.getElementById('materialsListContent');
  if (section.style.display === 'none') {
    section.style.display = 'block';
    const materialsData = getMaterialsData();
    let html = `
      <table style="width:100%;border-collapse:collapse;font-size:0.78rem">
        <thead>
          <tr style="background:var(--bg)">
            <th style="padding:10px 12px;text-align:left;border-bottom:1px solid var(--border);font-weight:600;color:var(--text)">一级指标</th>
            <th style="padding:10px 12px;text-align:left;border-bottom:1px solid var(--border);font-weight:600;color:var(--text)">题目</th>
            <th style="padding:10px 12px;text-align:left;border-bottom:1px solid var(--border);font-weight:600;color:var(--text)">支撑材料</th>
            <th style="padding:10px 12px;text-align:center;border-bottom:1px solid var(--border);font-weight:600;color:var(--text);width:60px">是否提供</th>
          </tr>
        </thead>
        <tbody>`;
    materialsData.forEach(item => {
      html += `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid var(--border);color:var(--text)">${item.cat}</td>
          <td style="padding:10px 12px;border-bottom:1px solid var(--border);color:var(--text2)">${item.question}</td>
          <td style="padding:10px 12px;border-bottom:1px solid var(--border);color:var(--text2)">${item.materials}</td>
          <td style="padding:10px 12px;border-bottom:1px solid var(--border);text-align:center">
            <input type="checkbox" style="width:16px;height:16px;cursor:pointer">
          </td>
        </tr>`;
    });
    html += '</tbody></table>';
    content.innerHTML = html;
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    section.style.display = 'none';
  }
}

function getMaterialsData() {
  const data = [];
  QUESTIONS.f.forEach(q => {
    const ref = REF_DATA['f' + q.id];
    if (ref && ref.materials && ref.materials.length > 0) {
      data.push({ cat: '数字化基础', question: q.text, materials: ref.materials.join('、') });
    }
  });
  QUESTIONS.m.forEach(q => {
    const ref = REF_DATA['m' + q.id];
    if (ref && ref.materials && ref.materials.length > 0) {
      data.push({ cat: '数字化管理', question: q.text, materials: ref.materials.join('、') });
    }
  });
  QUESTIONS.r.forEach(q => {
    const ref = REF_DATA['r' + q.id];
    if (ref && ref.materials && ref.materials.length > 0) {
      data.push({ cat: '数字化成效', question: q.text, materials: ref.materials.join('、') });
    }
  });
  return data;
}
