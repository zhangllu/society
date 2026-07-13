// 智者数据 — 60 位
// 审核确认后使用，当前为初版

const thinkers = [
  // ═══════════════════════════════════════════════
  // 古典（19 世纪前）
  // ═══════════════════════════════════════════════
  {
    id: "smith", name: "亚当·斯密", nameEn: "Adam Smith",
    lifespan: "1723–1790", era: "古典", region: "西方",
    fields: ["经济学", "哲学"], cognitiveWays: ["思想实验", "田野调查"],
    oneLine: "交换、分工与市场秩序的分析者",
    coreContribution: "提出「看不见的手」概念，解释市场如何通过自利行为产生公共秩序；奠定现代经济学基础",
    concepts: ["看不见的手", "分工", "同情共感", "绝对优势"],
    works: ["《国富论》", "《道德情操论》"],
    related: [{id: "marx", label: "分歧"}, {id: "weber", label: "交叉"}, {id: "keynes", label: "分歧"}],
    hasDetail: false, hasEntry: true,
    tags: ["市场", "古典经济学", "道德哲学"]
  },
  {
    id: "kant", name: "康德", nameEn: "Immanuel Kant",
    lifespan: "1724–1804", era: "古典", region: "西方",
    fields: ["哲学"], cognitiveWays: ["思想实验"],
    oneLine: "追问「人能知道什么、应该做什么、可以希望什么」",
    coreContribution: "以三大批判构建了现代哲学的认识论、伦理学和美学基础",
    concepts: ["物自体", "绝对命令", "启蒙", "判断力"],
    works: ["《纯粹理性批判》", "《实践理性批判》", "《判断力批判》"],
    related: [{id: "weber", label: "认识论影响"}, {id: "habermas", label: "继承理性传统"}],
    hasDetail: false, hasEntry: false,
    tags: ["启蒙", "理性", "认识论"]
  },
  {
    id: "tocqueville", name: "托克维尔", nameEn: "Alexis de Tocqueville",
    lifespan: "1805–1859", era: "古典", region: "西方",
    fields: ["政治学", "社会学"], cognitiveWays: ["田野调查", "思想实验"],
    oneLine: "亲身考察美国民主，预言平等趋势与「多数暴政」风险",
    coreContribution: "通过实地考察美国民主制度，分析了民主的利弊与条件，提出「多数暴政」概念",
    concepts: ["民主", "多数暴政", "个人主义", "公民结社"],
    works: ["《论美国的民主》", "《旧制度与大革命》"],
    related: [{id: "weber", label: "现代性分析"}, {id: "putnam", label: "社会资本"}],
    hasDetail: false, hasEntry: false,
    tags: ["民主", "平等", "公民社会"]
  },
  {
    id: "marx", name: "马克思", nameEn: "Karl Marx",
    lifespan: "1818–1883", era: "古典", region: "西方",
    fields: ["社会学", "经济学", "哲学"], cognitiveWays: ["思想实验", "符号思考"],
    oneLine: "资本、劳动与社会冲突的分析者",
    coreContribution: "揭示资本主义的内在矛盾，提出历史唯物主义，分析阶级结构与异化劳动",
    concepts: ["阶级", "异化", "剩余价值", "历史唯物主义", "资本积累"],
    works: ["《资本论》", "《共产党宣言》", "《1844年经济学哲学手稿》"],
    related: [{id: "weber", label: "分歧"}, {id: "durkheim", label: "互补"}, {id: "smith", label: "批判"}],
    hasDetail: false, hasEntry: true,
    tags: ["阶级", "资本", "不平等", "冲突"],
    collectionTags: ["influential", "chinese", "neizhuan"]
  },
  {
    id: "comte", name: "孔德", nameEn: "Auguste Comte",
    lifespan: "1798–1857", era: "古典", region: "西方",
    fields: ["社会学", "哲学"], cognitiveWays: ["思想实验"],
    oneLine: "社会学的命名者，倡导用科学方法研究社会",
    coreContribution: "创立实证主义社会学，提出三阶段规律，试图将社会学建设为一门科学",
    concepts: ["实证主义", "三阶段规律", "社会静力学", "社会动力学"],
    works: ["《实证哲学教程》"],
    related: [{id: "durkheim", label: "继承"}, {id: "parsons", label: "受其社会进化论影响"}],
    hasDetail: false, hasEntry: false,
    tags: ["实证主义", "科学方法", "社会进化"]
  },
  {
    id: "durkheim", name: "涂尔干", nameEn: "Émile Durkheim",
    lifespan: "1858–1917", era: "古典", region: "西方",
    fields: ["社会学"], cognitiveWays: ["实验科学", "田野调查"],
    oneLine: "现代社会团结从何而来——从宗教到分工的分析者",
    coreContribution: "将社会学确立为独立学科，用统计方法研究自杀，分析社会团结的基础从宗教到分工的转变",
    concepts: ["社会事实", "有机团结", "机械团结", "失范", "集体意识"],
    works: ["《自杀论》", "《社会分工论》", "《宗教生活的基本形式》"],
    related: [{id: "weber", label: "互补"}, {id: "marx", label: "互补"}, {id: "parsons", label: "继承"}],
    hasDetail: false, hasEntry: false,
    tags: ["社会团结", "宗教", "失范"]
  },
  {
    id: "simmel", name: "齐美尔", nameEn: "Georg Simmel",
    lifespan: "1858–1918", era: "古典", region: "西方",
    fields: ["社会学", "哲学"], cognitiveWays: ["思想实验"],
    oneLine: "都市、货币与社交形式——微观社会学的开创者",
    coreContribution: "开创形式社会学，分析都市生活、货币经济对人的心理和社交关系的深刻影响",
    concepts: ["形式社会学", "社交性", "都市与精神生活", "货币哲学"],
    works: ["《货币哲学》", "《社会学》", "《都市与精神生活》"],
    related: [{id: "goffman", label: "微观互动"}, {id: "weber", label: "同时代人"}],
    hasDetail: false, hasEntry: false,
    tags: ["都市", "货币", "微观互动"],
    collectionTags: ["unknown", "niche"]
  },
  {
    id: "weber", name: "韦伯", nameEn: "Max Weber",
    lifespan: "1864–1920", era: "古典", region: "西方",
    fields: ["社会学", "政治学"], cognitiveWays: ["从行动、群体到制度历史的比较解释"],
    oneLine: "追问现代世界如何由市场、组织、规则与信念共同形成",
    coreContribution: "将行动意义、群体分层、组织机制、合法性与历史比较连成对现代性的解释，而非提供彼此孤立的概念清单",
    concepts: ["理解", "理想型", "分层", "合法性", "理性化"],
    works: ["《新教伦理与资本主义精神》", "《经济与社会》", "《社会科学方法论》"],
    related: [{id: "marx", label: "分歧"}, {id: "durkheim", label: "互补"}, {id: "fei", label: "方法相似"}],
    hasDetail: true, detailPage: "weber.html", hasEntry: true,
    tags: ["理性化", "科层制", "权威", "现代性", "权力"],
    collectionTags: ["influential", "chinese", "neizhuan", "ai"]
  },
  {
    id: "freud", name: "弗洛伊德", nameEn: "Sigmund Freud",
    lifespan: "1856–1939", era: "古典", region: "西方",
    fields: ["心理学", "精神分析"], cognitiveWays: ["思想实验", "故事叙事"],
    oneLine: "无意识的发现者——人的行为受自己不知道的力量驱动",
    coreContribution: "创立精神分析学派，发现无意识心理过程，提出人格结构理论",
    concepts: ["无意识", "本我自我超我", "防御机制", "俄狄浦斯情结"],
    works: ["《梦的解析》", "《精神分析引论》", "《文明及其不满》"],
    related: [{id: "kahneman", label: "双系统理论先驱"}, {id: "maslow", label: "人本主义批判"}],
    hasDetail: false, hasEntry: false,
    tags: ["无意识", "精神分析", "人格"],
    collectionTags: ["influential"]
  },
  {
    id: "veblen", name: "凡勃伦", nameEn: "Thorstein Veblen",
    lifespan: "1857–1929", era: "古典", region: "西方",
    fields: ["经济学", "社会学"], cognitiveWays: ["田野调查", "幽默叙事"],
    oneLine: "用辛辣讽刺揭示「有钱人为什么买不需要的东西」",
    coreContribution: "提出炫耀性消费和 conspicuous leisure 概念，揭示消费背后的社会地位竞争",
    concepts: ["炫耀性消费", "有闲阶级", "金钱竞赛"],
    works: ["《有闲阶级论》"],
    related: [{id: "bourdieu", label: "区隔先驱"}],
    hasDetail: false, hasEntry: false,
    tags: ["消费", "阶层", "地位竞争"],
    collectionTags: ["unknown", "niiche", "neizhuan"]
  },
  {
    id: "tonnies", name: "滕尼斯", nameEn: "Ferdinand Tönnies",
    lifespan: "1855–1936", era: "古典", region: "西方",
    fields: ["社会学"], cognitiveWays: ["思想实验"],
    oneLine: "提出「共同体」与「社会」的经典二分",
    coreContribution: "以 Gemeinschaft 和 Gesellschaft 的区分，奠定了社会学对传统与现代社会的经典分析框架",
    concepts: ["共同体", "社会", "本质意志", "选择意志"],
    works: ["《共同体与社会》"],
    related: [{id: "durkheim", label: "呼应"}, {id: "weber", label: "社会行动"}],
    hasDetail: false, hasEntry: false,
    tags: ["共同体", "现代性", "社会类型"],
    collectionTags: ["niche"]
  },
  {
    id: "james", name: "威廉·詹姆斯", nameEn: "William James",
    lifespan: "1842–1910", era: "古典", region: "西方",
    fields: ["心理学", "哲学"], cognitiveWays: ["思想实验", "田野调查"],
    oneLine: "实用主义哲学与心理学之父，追问「意识流」和「信仰的意志」",
    coreContribution: "开创美国心理学，提出意识流概念和实用主义哲学",
    concepts: ["意识流", "实用主义", "自我的四重划分"],
    works: ["《心理学原理》", "《实用主义》"],
    related: [{id: "kahneman", label: "认知研究先驱"}],
    hasDetail: false, hasEntry: false,
    tags: ["意识", "实用主义", "自我"]
  },
  // ═══════════════════════════════════════════════
  // 现代（20 世纪）
  // ═══════════════════════════════════════════════
  {
    id: "fei", name: "费孝通", nameEn: "Fei Xiaotong",
    lifespan: "1910–2005", era: "现代", region: "中国",
    fields: ["社会学", "人类学"], cognitiveWays: ["田野调查"],
    oneLine: "中国社会学奠基人，用「差序格局」解释中国人的人际关系",
    coreContribution: "开创中国社区研究传统，提出差序格局、熟人社会等本土概念",
    concepts: ["差序格局", "熟人社会", "乡土中国", "生育制度", "双轨政治"],
    works: ["《乡土中国》", "《江村经济》", "《生育制度》"],
    related: [{id: "weber", label: "方法相似"}, {id: "malinowski", label: "师承"}, {id: "liang", label: "同时代关注中国"}],
    hasDetail: false, hasEntry: true,
    tags: ["中国社会", "乡村", "关系"],
    collectionTags: ["chinese"]
  },
  {
    id: "keynes", name: "凯恩斯", nameEn: "John Maynard Keynes",
    lifespan: "1883–1946", era: "现代", region: "西方",
    fields: ["经济学"], cognitiveWays: ["思想实验", "符号思考"],
    oneLine: "让政府在经济危机中「花钱」的经济学家",
    coreContribution: "创立宏观经济学，提出有效需求理论，为政府干预经济提供理论依据",
    concepts: ["有效需求", "乘数效应", "流动性陷阱", "动物精神"],
    works: ["《就业、利息和货币通论》"],
    related: [{id: "smith", label: "挑战看不见的手"}, {id: "hayek", label: "论敌"}, {id: "kahneman", label: "动物精神"}],
    hasDetail: false, hasEntry: false,
    tags: ["宏观经济", "政府干预", "就业"],
    collectionTags: ["influential"]
  },
  {
    id: "hayek", name: "哈耶克", nameEn: "Friedrich Hayek",
    lifespan: "1899–1992", era: "现代", region: "西方",
    fields: ["经济学", "政治哲学"], cognitiveWays: ["思想实验"],
    oneLine: "市场价格是分散知识的最佳传递机制——反对计划经济的核心论证",
    coreContribution: "提出「知识问题」——市场价格是传递分散信息的最佳机制，反对计划经济",
    concepts: ["自发秩序", "知识问题", "价格信号"],
    works: ["《通往奴役之路》", "《致命的自负》"],
    related: [{id: "keynes", label: "论敌"}, {id: "smith", label: "继承"}],
    hasDetail: false, hasEntry: false,
    tags: ["自由市场", "知识", "计划与市场"],
    collectionTags: ["fans"]
  },
  {
    id: "schumpeter", name: "熊彼特", nameEn: "Joseph Schumpeter",
    lifespan: "1883–1950", era: "现代", region: "西方",
    fields: ["经济学", "社会学"], cognitiveWays: ["思想实验", "故事叙事"],
    oneLine: "「创造性破坏」——企业家是资本主义永不停息的发动机",
    coreContribution: "提出「创造性破坏」概念，强调企业家创新是经济发展的根本动力",
    concepts: ["创造性破坏", "企业家精神", "创新理论"],
    works: ["《经济发展理论》", "《资本主义、社会主义与民主》"],
    related: [{id: "marx", label: "受其方法影响"}, {id: "weber", label: "企业家与理性化"}],
    hasDetail: false, hasEntry: false,
    tags: ["创新", "企业家", "资本主义"],
    collectionTags: ["niche"]
  },
  {
    id: "popper", name: "波普尔", nameEn: "Karl Popper",
    lifespan: "1902–1994", era: "现代", region: "西方",
    fields: ["科学哲学"], cognitiveWays: ["思想实验"],
    oneLine: "科学和非科学的界线是可证伪性",
    coreContribution: "提出证伪主义——科学理论必须能被证明是错的才是科学",
    concepts: ["证伪主义", "开放社会", "三个世界"],
    works: ["《科学发现的逻辑》", "《开放社会及其敌人》"],
    related: [{id: "kuhn", label: "论敌"}, {id: "hayek", label: "共享开放社会理念"}],
    hasDetail: false, hasEntry: false,
    tags: ["科学哲学", "批判理性", "开放社会"]
  },
  {
    id: "kuhn", name: "库恩", nameEn: "Thomas Kuhn",
    lifespan: "1922–1996", era: "现代", region: "西方",
    fields: ["科学哲学"], cognitiveWays: ["思想实验", "田野调查"],
    oneLine: "科学不是线性进步，而是一系列「革命」——范式转换",
    coreContribution: "提出「范式」和「科学革命」概念，颠覆了科学是线性积累的常识",
    concepts: ["范式", "科学革命", "不可通约性", "常规科学", "危机"],
    works: ["《科学革命的结构》"],
    related: [{id: "popper", label: "论敌"}, {id: "latour", label: "继承"}],
    hasDetail: false, hasEntry: false,
    tags: ["科学革命", "范式", "知识社会建构"],
    collectionTags: ["fans"]
  },
  {
    id: "parsons", name: "帕森斯", nameEn: "Talcott Parsons",
    lifespan: "1902–1979", era: "现代", region: "西方",
    fields: ["社会学"], cognitiveWays: ["思想实验"],
    oneLine: "试图用一个「大理论」解释整个社会的结构和功能",
    coreContribution: "创立结构功能主义学派，提出 AGIL 模型分析社会系统的功能需求",
    concepts: ["AGIL模型", "模式变量", "社会行动理论", "结构功能主义"],
    works: ["《社会行动的结构》", "《社会系统》"],
    related: [{id: "weber", label: "译介到英语世界"}, {id: "durkheim", label: "继承"}, {id: "merton", label: "弟子"}],
    hasDetail: false, hasEntry: false,
    tags: ["社会系统", "功能主义", "大理论"],
    collectionTags: ["fate"]
  },
  {
    id: "merton", name: "默顿", nameEn: "Robert K. Merton",
    lifespan: "1910–2003", era: "现代", region: "西方",
    fields: ["社会学"], cognitiveWays: ["思想实验", "田野调查"],
    oneLine: "「中程理论」倡导者——不要大理论，不要纯数据",
    coreContribution: "提出中程理论、自证预言、角色模型等至今被广泛使用的概念",
    concepts: ["自证预言", "角色模型", "中程理论", "越轨失范理论"],
    works: ["《社会理论与社会结构》"],
    related: [{id: "parsons", label: "师承"}, {id: "goffman", label: "微观分析"}],
    hasDetail: false, hasEntry: false,
    tags: ["中程理论", "自证预言", "科学社会学"],
    collectionTags: ["underrated"]
  },
  {
    id: "goffman", name: "戈夫曼", nameEn: "Erving Goffman",
    lifespan: "1922–1982", era: "现代", region: "西方",
    fields: ["社会学"], cognitiveWays: ["田野调查"],
    oneLine: "日常生活是一场表演——前台后台、印象管理、面子功夫",
    coreContribution: "创立拟剧理论，揭示日常互动中的印象管理策略",
    concepts: ["拟剧理论", "印象管理", "前台后台", "污名", "总体机构"],
    works: ["《日常生活中的自我呈现》", "《污名》", "《收容所》"],
    related: [{id: "simmel", label: "微观互动"}, {id: "bourdieu", label: "社会表演"}, {id: "foucault", label: "规训"}],
    hasDetail: false, hasEntry: false,
    tags: ["日常互动", "身份表演", "面子"],
    collectionTags: ["niche", "neizhuan"]
  },
  {
    id: "bourdieu", name: "布尔迪厄", nameEn: "Pierre Bourdieu",
    lifespan: "1930–2002", era: "现代", region: "西方",
    fields: ["社会学", "人类学"], cognitiveWays: ["田野调查", "思想实验"],
    oneLine: "你的品味不是天生的——文化资本和社会阶层如何塑造你的审美",
    coreContribution: "揭示文化资本、惯习和场域如何再生产社会不平等",
    concepts: ["文化资本", "惯习", "场域", "符号暴力", "区隔"],
    works: ["《区隔》", "《国家精英》", "《实践感》"],
    related: [{id: "veblen", label: "消费与阶层"}, {id: "weber", label: "社会分层"}, {id: "foucault", label: "符号权力"}],
    hasDetail: false, hasEntry: false,
    tags: ["文化", "阶层", "品味", "教育"],
    collectionTags: ["neizhuan"]
  },
  {
    id: "foucault", name: "福柯", nameEn: "Michel Foucault",
    lifespan: "1926–1984", era: "现代", region: "西方",
    fields: ["哲学", "社会学"], cognitiveWays: ["田野调查", "思想实验"],
    oneLine: "权力不是谁压迫谁——它渗透在知识、话语和日常规训之中",
    coreContribution: "颠覆传统权力观，揭示知识-权力关系、规训机制和生命政治",
    concepts: ["规训", "知识-权力", "话语", "全景监狱", "治理术", "生命政治"],
    works: ["《规训与惩罚》", "《词与物》", "《知识考古学》", "《性史》"],
    related: [{id: "weber", label: "理性化延伸"}, {id: "habermas", label: "论敌"}, {id: "goffman", label: "规训"}],
    hasDetail: false, hasEntry: false,
    tags: ["权力", "知识", "规训", "现代性"],
    collectionTags: ["ai", "neizhuan"]
  },
  {
    id: "habermas", name: "哈贝马斯", nameEn: "Jürgen Habermas",
    lifespan: "1929–", era: "现代", region: "西方",
    fields: ["哲学", "社会学"], cognitiveWays: ["思想实验"],
    oneLine: "现代社会还有可能达成共识吗——通过理性沟通",
    coreContribution: "提出交往理性与公共领域概念，为现代社会寻求共识基础",
    concepts: ["交往理性", "公共领域", "沟通行动", "合法性危机"],
    works: ["《公共领域的结构转型》", "《沟通行动理论》"],
    related: [{id: "weber", label: "理性化批判继承"}, {id: "foucault", label: "论敌"}, {id: "arendt", label: "公共领域"}],
    hasDetail: false, hasEntry: false,
    tags: ["公共领域", "沟通", "理性", "民主"]
  },
  {
    id: "giddens", name: "吉登斯", nameEn: "Anthony Giddens",
    lifespan: "1938–", era: "现代", region: "西方",
    fields: ["社会学"], cognitiveWays: ["思想实验"],
    oneLine: "现代性是一个「失控的怪物」——结构化理论",
    coreContribution: "提出结构化理论，分析现代性对个人生活的深刻影响",
    concepts: ["结构化理论", "现代性的后果", "自我认同", "风险社会"],
    works: ["《现代性的后果》", "《社会的构成》", "《现代性与自我认同》"],
    related: [{id: "beck", label: "风险社会"}, {id: "weber", label: "现代性分析"}],
    hasDetail: false, hasEntry: false,
    tags: ["现代性", "结构化", "自我认同"]
  },
  {
    id: "bauman", name: "鲍曼", nameEn: "Zygmunt Bauman",
    lifespan: "1925–2017", era: "现代", region: "西方",
    fields: ["社会学"], cognitiveWays: ["思想实验"],
    oneLine: "现代社会从「固体」变成「液体」——一切都在流动",
    coreContribution: "以「流动的现代性」诊断当代社会的不确定性、消费主义与道德困境",
    concepts: ["流动的现代性", "液态之爱", "消费社会", "道德商人"],
    works: ["《流动的现代性》", "《现代性与大屠杀》", "《液态之爱》"],
    related: [{id: "weber", label: "理性化批判延续"}, {id: "beck", label: "自反性现代化"}],
    hasDetail: false, hasEntry: false,
    tags: ["流动现代性", "不确定性", "消费"],
    collectionTags: ["neizhuan", "ai"]
  },
  {
    id: "beck", name: "贝克", nameEn: "Ulrich Beck",
    lifespan: "1944–2015", era: "现代", region: "西方",
    fields: ["社会学"], cognitiveWays: ["思想实验"],
    oneLine: "现代社会的主要问题从「怎么分蛋糕」变成「怎么避免灾难」",
    coreContribution: "提出风险社会理论，揭示现代社会如何被自己制造的风险所定义",
    concepts: ["风险社会", "自反性现代化", "个体化"],
    works: ["《风险社会》"],
    related: [{id: "giddens", label: "现代性批判"}, {id: "bauman", label: "流动现代性"}],
    hasDetail: false, hasEntry: false,
    tags: ["风险", "现代化", "不确定性"],
    collectionTags: ["ai"]
  },
  {
    id: "elias", name: "埃利亚斯", nameEn: "Norbert Elias",
    lifespan: "1897–1990", era: "现代", region: "西方",
    fields: ["社会学"], cognitiveWays: ["田野调查"],
    oneLine: "文明不是天生的——餐桌礼仪、羞耻感、暴力垄断是漫长的社会过程",
    coreContribution: "揭示「文明」是长期社会过程的结果——暴力被国家垄断，自我控制被内化",
    concepts: ["文明的进程", "形态社会学", "暴力垄断"],
    works: ["《文明的进程》", "《个体的社会》"],
    related: [{id: "weber", label: "理性化"}, {id: "foucault", label: "自我控制"}],
    hasDetail: false, hasEntry: false,
    tags: ["文明", "暴力", "自我控制", "历史"],
    collectionTags: ["unknown", "niche"]
  },
  {
    id: "levi-strauss", name: "列维-斯特劳斯", nameEn: "Claude Lévi-Strauss",
    lifespan: "1908–2009", era: "现代", region: "西方",
    fields: ["人类学"], cognitiveWays: ["田野调查", "符号思考"],
    oneLine: "所有文化的背后有共同的「心智结构」——结构主义人类学奠基人",
    coreContribution: "创立结构主义人类学，揭示神话、亲属关系背后的深层心智结构",
    concepts: ["结构主义", "神话结构", "亲属关系基本结构", "野性的思维"],
    works: ["《忧郁的热带》", "《结构人类学》", "《神话学》"],
    related: [{id: "bourdieu", label: "受其方法影响"}],
    hasDetail: false, hasEntry: false,
    tags: ["结构主义", "神话", "文化", "心智"],
    collectionTags: ["influential"]
  },
  {
    id: "geertz", name: "格尔茨", nameEn: "Clifford Geertz",
    lifespan: "1926–2006", era: "现代", region: "西方",
    fields: ["人类学"], cognitiveWays: ["田野调查"],
    oneLine: "文化不是藏在脑子里的——它体现在公共的符号和意义之中",
    coreContribution: "提出「深描」和「地方性知识」概念，将文化视为「意义之网」",
    concepts: ["深描", "地方性知识", "文化解释", "巴厘岛斗鸡"],
    works: ["《文化的解释》", "《地方性知识》"],
    related: [{id: "fei", label: "田野传统"}, {id: "weber", label: "文化是意义之网"}],
    hasDetail: false, hasEntry: false,
    tags: ["文化", "符号", "意义"]
  },
  {
    id: "milgram", name: "米尔格拉姆", nameEn: "Stanley Milgram",
    lifespan: "1933–1984", era: "现代", region: "西方",
    fields: ["社会心理学"], cognitiveWays: ["实验科学"],
    oneLine: "65% 的普通人会在权威命令下对他人施加致命电击",
    coreContribution: "通过权威服从实验震惊世界，揭示情境力量对个人行为的巨大影响",
    concepts: ["权威服从", "六度分隔", "熟悉的陌生人"],
    works: ["《对权威的服从》"],
    related: [{id: "arendt", label: "平庸之恶"}, {id: "kahneman", label: "认知偏误"}],
    hasDetail: false, hasEntry: false,
    tags: ["权威", "服从", "情境力量", "伦理"],
    collectionTags: ["fans"]
  },
  {
    id: "kahneman", name: "卡尼曼", nameEn: "Daniel Kahneman",
    lifespan: "1934–2024", era: "现代", region: "西方",
    fields: ["心理学", "行为经济学"], cognitiveWays: ["实验科学"],
    oneLine: "人不是理性的——系统1和系统2如何塑造你的每一个判断",
    coreContribution: "提出前景理论和双系统理论，揭示人类决策中的系统性认知偏误",
    concepts: ["系统1/系统2", "认知偏误", "前景理论", "损失厌恶", "锚定效应"],
    works: ["《思考，快与慢》", "《噪声》"],
    related: [{id: "thaler", label: "行为经济学"}, {id: "freud", label: "无意识先驱"}, {id: "milgram", label: "实验方法"}],
    hasDetail: false, hasEntry: true,
    tags: ["认知", "决策", "偏误", "理性"],
    collectionTags: ["fans", "neizhuan", "ai"]
  },
  {
    id: "thaler", name: "塞勒", nameEn: "Richard Thaler",
    lifespan: "1945–", era: "现代", region: "西方",
    fields: ["行为经济学"], cognitiveWays: ["实验科学", "思想实验"],
    oneLine: "人不是经济人——用「助推」帮人做出更好的选择",
    coreContribution: "将心理学融入经济学，提出助推理论，影响全球公共政策设计",
    concepts: ["助推", "心理账户", "禀赋效应", "自我控制"],
    works: ["《助推》", "《「错误」的行为》"],
    related: [{id: "kahneman", label: "合作者"}, {id: "sandel", label: "助推伦理争议"}],
    hasDetail: false, hasEntry: false,
    tags: ["行为经济学", "助推", "决策"],
    collectionTags: ["underrated"]
  },
  {
    id: "arendt", name: "阿伦特", nameEn: "Hannah Arendt",
    lifespan: "1906–1975", era: "现代", region: "西方",
    fields: ["政治哲学"], cognitiveWays: ["思想实验", "田野调查"],
    oneLine: "「平庸之恶」——邪恶不需要魔鬼，只需要普通人按流程办事",
    coreContribution: "提出「平庸之恶」概念，分析极权主义起源，重新定义了政治行动",
    concepts: ["平庸之恶", "极权主义起源", "公共领域", "行动"],
    works: ["《艾希曼在耶路撒冷》", "《极权主义的起源》", "《人的境况》"],
    related: [{id: "milgram", label: "呼应"}, {id: "weber", label: "权威类型"}, {id: "habermas", label: "公共领域"}],
    hasDetail: false, hasEntry: false,
    tags: ["极权", "邪恶", "公共领域", "政治"],
    collectionTags: ["fans", "fate"]
  },
  {
    id: "beauvoir", name: "波伏娃", nameEn: "Simone de Beauvoir",
    lifespan: "1908–1986", era: "现代", region: "西方",
    fields: ["哲学", "女性主义"], cognitiveWays: ["思想实验", "故事叙事"],
    oneLine: "「女人不是天生的，而是后天成为的」",
    coreContribution: "以《第二性》为第二波女性主义奠定哲学基础，揭示性别是社会建构",
    concepts: ["他者", "成为女人", "性别与社会建构", "存在主义"],
    works: ["《第二性》"],
    related: [{id: "bourdieu", label: "性别区隔"}],
    hasDetail: false, hasEntry: false,
    tags: ["性别", "女性主义", "存在主义"]
  },
  {
    id: "gramsci", name: "葛兰西", nameEn: "Antonio Gramsci",
    lifespan: "1891–1937", era: "现代", region: "西方",
    fields: ["政治哲学", "文化研究"], cognitiveWays: ["思想实验"],
    oneLine: "统治阶级不只是靠暴力统治，更是靠「文化霸权」",
    coreContribution: "提出文化霸权理论——统治不仅靠强制，更靠被统治者的「同意」",
    concepts: ["文化霸权", "知识分子角色", "实践哲学"],
    works: ["《狱中札记》"],
    related: [{id: "marx", label: "继承与创新"}, {id: "foucault", label: "权力分析"}, {id: "bourdieu", label: "符号权力"}],
    hasDetail: false, hasEntry: false,
    tags: ["霸权", "意识形态", "知识分子"],
    collectionTags: ["fate"]
  },
  {
    id: "vygotsky", name: "维果茨基", nameEn: "Lev Vygotsky",
    lifespan: "1896–1934", era: "现代", region: "其他",
    fields: ["心理学"], cognitiveWays: ["实验科学", "思想实验"],
    oneLine: "学习不是一个人完成的——「最近发展区」解释为什么需要老师",
    coreContribution: "提出最近发展区和脚手架理论，揭示社会互动在学习中的核心作用",
    concepts: ["最近发展区", "脚手架", "语言与思维", "内化"],
    works: ["《思维与语言》"],
    related: [{id: "piaget", label: "方法分歧"}],
    hasDetail: false, hasEntry: false,
    tags: ["学习", "发展", "语言", "教育"]
  },
  {
    id: "piaget", name: "皮亚杰", nameEn: "Jean Piaget",
    lifespan: "1896–1980", era: "现代", region: "西方",
    fields: ["发展心理学"], cognitiveWays: ["实验科学"],
    oneLine: "儿童的思维不是成人的缩小版——认知发展有四个不可跳跃的阶段",
    coreContribution: "提出认知发展四阶段理论，揭示了儿童思维与成人思维的本质差异",
    concepts: ["认知发展四阶段", "图式", "同化与顺应", "建构主义"],
    works: ["《儿童的语言与思维》", "《发生认识论导论》"],
    related: [{id: "vygotsky", label: "方法分歧"}],
    hasDetail: false, hasEntry: false,
    tags: ["儿童发展", "认知", "建构主义"]
  },
  {
    id: "maslow", name: "马斯洛", nameEn: "Abraham Maslow",
    lifespan: "1908–1970", era: "现代", region: "西方",
    fields: ["心理学"], cognitiveWays: ["思想实验"],
    oneLine: "人不是被本能驱动的动物——人有自我实现的需要",
    coreContribution: "提出需求层次理论，开创人本主义心理学，关注人的潜能与成长",
    concepts: ["需求层次", "自我实现", "高峰体验"],
    works: ["《动机与人格》", "《存在心理学探索》"],
    related: [{id: "kahneman", label: "幸福感研究"}],
    hasDetail: false, hasEntry: false,
    tags: ["需求", "成长", "幸福感"]
  },
  {
    id: "festinger", name: "费斯廷格", nameEn: "Leon Festinger",
    lifespan: "1919–1989", era: "现代", region: "西方",
    fields: ["社会心理学"], cognitiveWays: ["实验科学"],
    oneLine: "当行为和信念不一致时，人会改变信念——认知失调",
    coreContribution: "提出认知失调理论——人不是理性评估信息，而是为自己的行为找理由",
    concepts: ["认知失调", "社会比较"],
    works: ["《认知失调理论》"],
    related: [{id: "kahneman", label: "判断与决策"}],
    hasDetail: false, hasEntry: false,
    tags: ["认知失调", "自我辩护", "态度改变"],
    collectionTags: ["underrated"]
  },
  {
    id: "malinowski", name: "马林诺夫斯基", nameEn: "Bronisław Malinowski",
    lifespan: "1884–1942", era: "现代", region: "西方",
    fields: ["人类学"], cognitiveWays: ["田野调查"],
    oneLine: "现代人类学田野调查的奠基人——住在岛上和岛民一起生活",
    coreContribution: "创立参与观察法，开创了现代人类学田野调查的范式",
    concepts: ["参与观察", "功能主义", "库拉圈"],
    works: ["《西太平洋上的航海者》"],
    related: [{id: "fei", label: "师承"}, {id: "simmel", label: "方法差异"}],
    hasDetail: false, hasEntry: false,
    tags: ["田野调查", "功能主义", "参与观察"]
  },
  {
    id: "liang", name: "梁漱溟", nameEn: "Liang Shuming",
    lifespan: "1893–1988", era: "现代", region: "中国",
    fields: ["哲学", "乡村建设"], cognitiveWays: ["田野调查", "思想实验"],
    oneLine: "中国不能走西方道路——儒家文化、乡村建设是中国社会的基础",
    coreContribution: "以乡村建设运动实践自己的社会理论，指出中国文化以伦理为本位",
    concepts: ["中国文化要义", "乡村建设", "伦理本位", "职业分途"],
    works: ["《东西文化及其哲学》", "《乡村建设理论》", "《中国文化要义》"],
    related: [{id: "fei", label: "共同关注中国乡村"}, {id: "weber", label: "中国宗教比较"}],
    hasDetail: false, hasEntry: false,
    tags: ["中国文化", "乡村", "儒家"],
    collectionTags: ["chinese"]
  },
  // ═══════════════════════════════════════════════
  // 当代（21 世纪活跃）
  // ═══════════════════════════════════════════════
  {
    id: "harari", name: "赫拉利", nameEn: "Yuval Noah Harari",
    lifespan: "1976–", era: "当代", region: "西方",
    fields: ["历史学"], cognitiveWays: ["故事叙事", "思想实验"],
    oneLine: "人类靠「讲故事」统治世界——国家、货币、公司都是想象的共同体",
    coreContribution: "以大历史视角解释人类文明演进，揭示「虚构故事」是人类大规模合作的基础",
    concepts: ["认知革命", "想象的共同体", "虚构故事的力量"],
    works: ["《人类简史》", "《未来简史》", "《今日简史》"],
    related: [{id: "weber", label: "想象的秩序"}, {id: "kahneman", label: "认知局限"}],
    hasDetail: false, hasEntry: false,
    tags: ["人类文明", "叙事", "未来"],
    collectionTags: ["influential"]
  },
  {
    id: "pinker", name: "平克", nameEn: "Steven Pinker",
    lifespan: "1954–", era: "当代", region: "西方",
    fields: ["心理学", "认知科学"], cognitiveWays: ["符号思考", "计算模拟"],
    oneLine: "人类文明不是越来越糟——数据证明暴力在长期下降",
    coreContribution: "以数据论证暴力在人类历史中持续下降，为「启蒙进步观」提供实证支持",
    concepts: ["语言本能", "心智模块", "启蒙进程", "暴力下降论"],
    works: ["《语言本能》", "《人性中的善良天使》", "《当下的启蒙》"],
    related: [{id: "kahneman", label: "认知科学"}, {id: "chomsky", label: "激发其语言研究"}],
    hasDetail: false, hasEntry: false,
    tags: ["暴力", "启蒙", "数据", "进步"],
    collectionTags: ["fans"]
  },
  {
    id: "sandel", name: "桑德尔", nameEn: "Michael Sandel",
    lifespan: "1953–", era: "当代", region: "西方",
    fields: ["政治哲学"], cognitiveWays: ["思想实验"],
    oneLine: "钱不能买什么？——市场和道德之间的边界",
    coreContribution: "以苏格拉底式追问挑战市场道德，批判精英的傲慢和优绩主义的弊端",
    concepts: ["正义", "市场道德", "社群主义", "精英的傲慢", "优绩主义"],
    works: ["《正义》", "《金钱不能买什么》", "《精英的傲慢》"],
    related: [{id: "habermas", label: "公共生活"}, {id: "smith", label: "道德哲学"}],
    hasDetail: false, hasEntry: false,
    tags: ["正义", "市场", "道德", "精英"],
    collectionTags: ["neizhuan"]
  },
  {
    id: "nussbaum", name: "努斯鲍姆", nameEn: "Martha Nussbaum",
    lifespan: "1947–", era: "当代", region: "西方",
    fields: ["哲学", "伦理学"], cognitiveWays: ["思想实验"],
    oneLine: "一个人「能做和能成为什么」——能力理论衡量生活质量",
    coreContribution: "开创能力理论，强调情感在伦理生活中的核心地位，倡导世界公民教育",
    concepts: ["能力理论", "情感与认知", "世界公民", "诗性正义"],
    works: ["《正义的界限》", "《善的脆弱性》", "《功利教育批判》"],
    related: [{id: "sen", label: "共同开创能力理论"}],
    hasDetail: false, hasEntry: false,
    tags: ["能力", "正义", "情感", "教育"]
  },
  {
    id: "sen", name: "森", nameEn: "Amartya Sen",
    lifespan: "1933–", era: "当代", region: "其他",
    fields: ["经济学", "哲学"], cognitiveWays: ["思想实验", "符号思考"],
    oneLine: "贫困不是收入问题——是「能力被剥夺」的问题",
    coreContribution: "以能力理论重新定义贫困和发展，揭示饥荒并非粮食短缺而是权利失败",
    concepts: ["能力理论", "饥荒与权利", "发展即自由"],
    works: ["《贫困与饥荒》", "《以自由看待发展》"],
    related: [{id: "nussbaum", label: "能力理论分歧"}, {id: "kahneman", label: "幸福经济学"}],
    hasDetail: false, hasEntry: false,
    tags: ["贫困", "发展", "自由", "能力"]
  },
  {
    id: "banerjee", name: "班纳吉", nameEn: "Abhijit Banerjee",
    lifespan: "1961–", era: "当代", region: "其他",
    fields: ["经济学"], cognitiveWays: ["实验科学"],
    oneLine: "用医学实验的方法检验扶贫政策——什么有效什么无效",
    coreContribution: "将随机对照试验引入发展经济学，以实证方法检验扶贫政策的真实效果",
    concepts: ["随机对照试验", "贫困陷阱", "亲贫政策"],
    works: ["《贫穷的本质》", "《好的经济学》"],
    related: [{id: "kahneman", label: "实验方法"}, {id: "sen", label: "贫困研究"}],
    hasDetail: false, hasEntry: false,
    tags: ["贫困", "实验", "政策评估"]
  },
  {
    id: "chomsky", name: "乔姆斯基", nameEn: "Noam Chomsky",
    lifespan: "1928–", era: "当代", region: "西方",
    fields: ["语言学", "政治批评"], cognitiveWays: ["符号思考", "思想实验"],
    oneLine: "人天生有「语言器官」——生成语法颠覆了行为主义语言学",
    coreContribution: "提出普遍语法和生成语法理论，革命性地改变了语言学和认知科学",
    concepts: ["普遍语法", "生成语法", "语言能力表现", "制造共识"],
    works: ["《句法结构》", "《制造共识》", "《美国梦的安魂曲》"],
    related: [{id: "pinker", label: "继承语言学观点"}, {id: "popper", label: "理性批判传统"}],
    hasDetail: false, hasEntry: false,
    tags: ["语言", "认知", "政治批判"],
    collectionTags: ["fans"]
  },
  {
    id: "latour", name: "拉图尔", nameEn: "Bruno Latour",
    lifespan: "1947–2022", era: "当代", region: "西方",
    fields: ["社会学", "STS"], cognitiveWays: ["从现场追踪关联、转译与稳定化"],
    oneLine: "从实验室出发，追踪事实、技术和秩序如何在人的与非人的连接中稳定下来",
    coreContribution: "与合作者发展行动者网络理论，重新描述科学、技术、现代性与生态政治中的关系形成",
    concepts: ["行动者网络", "转译", "纯化与杂合"],
    works: ["《实验室生活》", "《我们从未现代过》"],
    related: [{id: "kuhn", label: "科学知识建构"}, {id: "foucault", label: "知识权力"}],
    hasDetail: true, detailPage: "latour.html", hasEntry: true,
    tags: ["科学建构", "网络理论", "现代性"],
    collectionTags: ["niche"]
  },
  {
    id: "putnam", name: "帕特南", nameEn: "Robert Putnam",
    lifespan: "1941–", era: "当代", region: "西方",
    fields: ["政治学", "社会学"], cognitiveWays: ["田野调查"],
    oneLine: "美国人不再一起去教堂和俱乐部了——社会资本的衰落",
    coreContribution: "以「社会资本」概念解释社区参与和公民信任对美国民主的重要性",
    concepts: ["社会资本", "独自打保龄", "公民参与下降"],
    works: ["《独自打保龄》", "《使民主运转起来》"],
    related: [{id: "tocqueville", label: "公民结社"}, {id: "fukuyama", label: "信任与社会资本"}],
    hasDetail: false, hasEntry: false,
    tags: ["社会资本", "社区", "民主", "信任"],
    collectionTags: ["fans"]
  },
  {
    id: "said", name: "萨义德", nameEn: "Edward Said",
    lifespan: "1935–2003", era: "当代", region: "其他",
    fields: ["文化研究", "后殖民理论"], cognitiveWays: ["田野调查"],
    oneLine: "西方对「东方」的描述不是客观知识——是权力控制的一部分",
    coreContribution: "以东方学批判揭示西方对东方的知识生产如何服务于殖民统治",
    concepts: ["东方主义", "文化帝国主义", "知识分子"],
    works: ["《东方学》", "《文化与帝国主义》"],
    related: [{id: "foucault", label: "话语与权力"}, {id: "gramsci", label: "文化霸权"}],
    hasDetail: false, hasEntry: false,
    tags: ["后殖民", "东方学", "文化权力"]
  },
  {
    id: "north", name: "诺斯", nameEn: "Douglass North",
    lifespan: "1920–2015", era: "当代", region: "西方",
    fields: ["经济学"], cognitiveWays: ["田野调查"],
    oneLine: "制度决定经济增长——不是技术，不是资本，是规则和产权",
    coreContribution: "开创新制度经济学，以制度变迁和路径依赖解释经济增长和国家兴衰",
    concepts: ["制度变迁", "路径依赖", "产权理论"],
    works: ["《经济史中的结构与变迁》", "《制度、制度变迁与经济绩效》"],
    related: [{id: "weber", label: "制度分析"}, {id: "hayek", label: "自发秩序"}],
    hasDetail: false, hasEntry: false,
    tags: ["制度", "经济增长", "产权"],
    collectionTags: ["niche"]
  },
  {
    id: "ostrom", name: "奥斯特罗姆", nameEn: "Elinor Ostrom",
    lifespan: "1933–2012", era: "当代", region: "西方",
    fields: ["政治经济学"], cognitiveWays: ["田野调查"],
    oneLine: "公共资源不一定导致「公地悲剧」——社区自己管理可能更好",
    coreContribution: "以大量案例证明社区自主治理公共资源可以比政府或市场更有效",
    concepts: ["公共池塘资源", "多中心治理", "自主治理原则"],
    works: ["《公共事物的治理之道》"],
    related: [{id: "hayek", label: "地方知识"}, {id: "putnam", label: "社会资本与治理"}],
    hasDetail: false, hasEntry: false,
    tags: ["公共资源", "治理", "社区"],
    collectionTags: ["unknown"]
  },
  {
    id: "jin", name: "金观涛", nameEn: "Jin Guantao",
    lifespan: "1947–", era: "当代", region: "中国",
    fields: ["思想史", "科学哲学"], cognitiveWays: ["计算模拟", "思想实验"],
    oneLine: "用系统论和控制论重新理解中国历史——「超稳定结构」",
    coreContribution: "以系统论方法解释中国两千年历史的超稳定结构及其周期性崩溃",
    concepts: ["超稳定结构", "中国思想史", "系统论哲学"],
    works: ["《兴盛与危机》", "《中国思想史十讲》", "《历史的巨镜》"],
    related: [{id: "weber", label: "中国社会结构比较"}, {id: "liang", label: "中国文化分析"}],
    hasDetail: false, hasEntry: false,
    tags: ["中国历史", "系统论", "超稳定"],
    collectionTags: ["chinese"]
  },
  {
    id: "sun", name: "孙立平", nameEn: "Sun Liping",
    lifespan: "1950–", era: "当代", region: "中国",
    fields: ["社会学"], cognitiveWays: ["田野调查"],
    oneLine: "中国社会转型的核心问题是「断裂」——一部分人被甩出社会结构",
    coreContribution: "提出社会断裂理论，分析中国转型过程中底层群体被排斥的结构性机制",
    concepts: ["社会断裂", "总体性资本", "失衡与博弈", "底层与精英"],
    works: ["《断裂》", "《失衡》", "《博弈》"],
    related: [{id: "fei", label: "中国社会研究"}, {id: "marx", label: "阶级分析"}],
    hasDetail: false, hasEntry: false,
    tags: ["社会转型", "断裂", "不平等", "中国"],
    collectionTags: ["chinese"]
  },
  {
    id: "fukuyama", name: "福山", nameEn: "Francis Fukuyama",
    lifespan: "1952–", era: "当代", region: "西方",
    fields: ["政治学", "政治哲学"], cognitiveWays: ["思想实验", "田野调查"],
    oneLine: "历史不是自由的线性胜利——国家能力、法治和民主问责的三元平衡",
    coreContribution: "从「历史终结论」到国家能力理论，不断修正对政治发展的理解",
    concepts: ["历史终结论", "信任与社会资本", "国家能力", "政治秩序"],
    works: ["《历史的终结与最后的人》", "《政治秩序的起源》", "《信任》"],
    related: [{id: "weber", label: "国家与社会"}, {id: "putnam", label: "社会资本"}],
    hasDetail: false, hasEntry: false,
    tags: ["国家", "民主", "信任", "政治秩序"],
    collectionTags: ["fans"]
  },
  {
    id: "deaton", name: "迪顿", nameEn: "Angus Deaton",
    lifespan: "1945–", era: "当代", region: "西方",
    fields: ["经济学"], cognitiveWays: ["符号思考"],
    oneLine: "富裕不等于幸福——用数据追踪消费、贫困和健康的关系",
    coreContribution: "以精细的消费数据分析揭示经济增长与人类福祉之间的复杂关系",
    concepts: ["消费与收入", "贫困测量", "健康不平等"],
    works: ["《大逃离》", "《美国的经济不平等》"],
    related: [{id: "kahneman", label: "幸福经济学"}, {id: "sen", label: "贫困与能力"}],
    hasDetail: false, hasEntry: false,
    tags: ["消费", "贫困", "健康", "不平等"]
  },
  {
    id: "simon", name: "西蒙", nameEn: "Herbert Simon",
    lifespan: "1916–2001", era: "当代", region: "西方",
    fields: ["经济学", "政治学", "AI"], cognitiveWays: ["计算模拟", "思想实验"],
    oneLine: "人不是「完全理性」的——有限理性下「满意即可」的决策原则",
    coreContribution: "提出有限理性理论，颠覆了古典经济学的完全理性假设，也是AI早期奠基人",
    concepts: ["有限理性", "满意原则", "AI早期奠基"],
    works: ["《管理行为》", "《人工智能科学》"],
    related: [{id: "kahneman", label: "有限理性实证"}, {id: "thaler", label: "行为经济学"}],
    hasDetail: false, hasEntry: false,
    tags: ["理性", "决策", "AI", "管理"],
    collectionTags: ["niche"]
  },
  {
    id: "becker", name: "贝克尔", nameEn: "Gary Becker",
    lifespan: "1930–2014", era: "当代", region: "西方",
    fields: ["经济学"], cognitiveWays: ["符号思考"],
    oneLine: "用经济学分析一切——婚姻、犯罪、歧视都是「理性选择」",
    coreContribution: "将经济学分析扩展到非市场领域——家庭、教育、犯罪、歧视",
    concepts: ["人力资本", "家庭经济学", "犯罪与惩罚", "歧视经济学"],
    works: ["《人力资本》", "《家庭论》", "《歧视经济学》"],
    related: [{id: "smith", label: "理性自利假设"}, {id: "thaler", label: "挑战其理性假设"}],
    hasDetail: false, hasEntry: false,
    tags: ["理性选择", "人力资本", "家庭"]
  }
];

// ═══════════════════════════════════════════════════════════════
// 精选集——每人一个专属标签
// ═══════════════════════════════════════════════════════════════
const features = [
  { id: "weber",    tag: "最懂现代人困境的先知",     tease: "他说的「理性化的牢笼」就是你今天的职场" },
  { id: "durkheim", tag: "最冷静的社会解剖师",       tease: "用数据研究自杀的人，冷冰冰的数字背后是最深的关怀" },
  { id: "simmel",   tag: "最懂都市灵魂的陌生人",     tease: "1903 年就写透了今天在大城市独居的精神困境" },
  { id: "bourdieu", tag: "最刺痛品味的阶层侦探",     tease: "你的审美不是天生的，是你的阶层给你的" },
  { id: "goffman",  tag: "最洞悉伪装的互动侦探",     tease: "他发现每个人都在演——前台后台，随时切换" },
  { id: "foucault", tag: "最无孔不入的权力侦探",     tease: "权力不在山顶，在办公室、学校、医院的每个角落" },
  { id: "bauman",   tag: "最颠沛流离的流亡者",       tease: "一生三次流亡，「流动的现代性」就是他的人生" },
  { id: "comte",    tag: "最异想天开的奠基人",       tease: "命名了社会学，晚年创立「人道教」把人类当神崇拜" },
  { id: "elias",    tag: "最晚绽放的智者",           tease: "65 岁当教授，代表作 30 年无人问津" }
];

// ═══════════════════════════════════════════════════════════════
// 学习路径（步骤结构）
// ═══════════════════════════════════════════════════════════════
const pathways = [
  {
    id: "quick",
    title: "快速扫盲",
    subtitle: "30 分钟了解全貌",
    desc: "完全不了解社会学？从这 4 位开始建立基本认知框架",
    steps: [
      { id: "weber", hint: "现代组织的底层逻辑" },
      { id: "marx", hint: "资本与冲突的根源" },
      { id: "durkheim", hint: "社会如何凝聚在一起" },
      { id: "smith", hint: "市场秩序从哪来" }
    ]
  },
  {
    id: "dilemma",
    title: "理解当代困境",
    subtitle: "为什么活着这么累",
    desc: "对「内卷」「焦虑」「意义感丧失」有切身感受的年轻人",
    steps: [
      { id: "kahneman", hint: "你的判断不理性" },
      { id: "weber", hint: "被科层制困住的人生" },
      { id: "bauman", hint: "一切都在流动，没有什么是永恒的" },
      { id: "foucault", hint: "谁在规训你" }
    ]
  },
  {
    id: "china",
    title: "中国视角",
    subtitle: "理解我们身处的社会",
    desc: "对中国社会结构感兴趣，想从本土视角理解问题",
    steps: [
      { id: "fei", hint: "乡土中国的人际逻辑" },
      { id: "liang", hint: "儒家文化的社会基础" },
      { id: "jin", hint: "中国历史的超稳定结构" },
      { id: "sun", hint: "转型中的社会断裂" }
    ]
  }
];

// ═══════════════════════════════════════════════════════════════
// 主题导览（复合结构）
// ═══════════════════════════════════════════════════════════════
const topics = [
  {
    name: "权力",
    ids: ["marx", "weber", "foucault", "arendt", "gramsci"],
    desc: "权力不只是谁压迫谁——它渗透在知识、话语和日常之中"
  },
  {
    name: "不平等",
    ids: ["marx", "veblen", "bourdieu", "sen", "deaton", "sun"],
    desc: "为什么有人多得，有人少得？不止是钱的问题"
  },
  {
    name: "理性",
    ids: ["weber", "kahneman", "simon", "habermas"],
    desc: "人是理性的吗？理性本身又带来了什么"
  },
  {
    name: "现代性",
    ids: ["weber", "bauman", "beck", "giddens", "simmel"],
    desc: "现代社会让人更自由了，还是更困惑了"
  },
  {
    name: "自由",
    ids: ["hayek", "arendt", "sandel", "sen", "mill"],
    desc: "自由不只是没人管你——你能成为什么才是自由"
  },
  {
    name: "身份",
    ids: ["goffman", "bourdieu", "beauvoir", "said", "giddens"],
    desc: "「我是谁」不是天生的，而是在互动中被塑造的"
  },
  {
    name: "资本",
    ids: ["marx", "smith", "keynes", "hayek", "north"],
    desc: "资本是如何运作的？不同的经济学家有不同的答案"
  },
  {
    name: "知识",
    ids: ["kuhn", "popper", "foucault", "latour", "chomsky"],
    desc: "知识是客观的吗？还是权力、社会和语言建构的产物"
  },
  {
    name: "中国",
    ids: ["fei", "liang", "jin", "sun", "weber", "marx"],
    desc: "中国社会从哪来，往哪去？多种视角的交汇"
  }
];
