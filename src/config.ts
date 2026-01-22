const startWork = new Date('2016-06-27')
const now = new Date()

export const basicInfo = {
  name: '沈水平',
  gender: '男',
  birth: '1993/10',
  city: '北京',
  job: '前端开发工程师',
  experience: now.getFullYear() - startWork.getFullYear(),
  contacts: {
    phone: '(+86) 13241468893',
    email: 'jonnytoshen@gmail.com',
    github: 'https://github.com/Jonnytoshen',
  },
} as const

// Capabilities and Strengths
export const capabilities = [
  {
    field: '核心前端架构与框架能力',
    items: [
      '精通 **Angular** 框架及其生态系统，包括最新的 **Signal** 响应式状态驱动、**RxJS** 异步流处理以及 **NgRx** 企业级状态管理。',
      '擅长使用 **Nx** 工具链搭建企业级 **Monorepo** 管理体系，实现多应用与多库的代码共享与边界管理，以及擅长模块化、组件化开发，推动代码复用与团队协作效率提升。',
      '熟练使用 **Ant Design for Angular**、**Angular Material**、**ECharts**、**D3.js**、**DeckGL**，实现数据驱动型可视化与大屏交互。',
      '深入 **OpenLayers** 与 **Cesium**，具备二维/三维地图集成、空间分析、高性能渲染与业务图层抽象能力。',
      '具备从零设计并维护开源级组件库的能力，如主导开发了基于 **OpenLayers** 的 **Angular** 地图组件库 **Workletjs**，封装了 70+ 可复用组件。',
    ],
  },
  {
    field: '全栈开发',
    items: [
      '能够独立承担 **BFF**（Backend For Frontend）层开发，熟练使用 **NestJS** 和 **Node.js** 构建 REST API 。',
      '具备 **PostgreSQL** 和 **MongoDB** 的建模与管理经验，利用 Mongoose Virtual 等技术抽象业务指标。',
      '能基于 **Nest Commander** 开发 CLI 工具，用于无界面场景下的业务验证与自动化处理。',
    ],
  },
  {
    field: '工程化与交付保障',
    items: [
      '具备建立 **ESLint** + **Prettier** + **Husky** 代码规范工作流，实现提交前自动校验，保障团队代码风格统一与质量稳定。',
      '具备建立完善的测试体系的能力，使用 **Jest/Vitest** 进行单元测试，以及 **Playwright** 进行关键业务路径的端到端（E2E）测试。',
      '擅长前端性能调优（**懒加载**、**Tree Shaking**、**资源压缩等**）、错误监控（**Sentry**）。',
      '熟悉 **Docker** 容器化部署、**Nginx** 配置，主导 **GitHub Actions CI/CD** 流水线搭建，并能处理服务器采购、域名备案及 **SSL** 证书申请等全流程工作。',
    ],
  },
  {
    field: '优秀的工程素养与开源贡献者',
    items: [
      '擅长使用 **GitHub Copilot** 辅助开发，践行 **Vibe Coding** 理念，在保证代码质量的同时追求极致的开发体验。',
      '具备清晰的产品思维，能主导从 **Figma** 原型设计到最终部署运维的全流程工作，保障设计到实现的一致性。',
      '积极参与开源生态建设，为 **OpenLayers**、**nrwl/nx**、**antvis** 等知名项目贡献代码或提交 Bug，展现了强大的技术钻研与解决复杂问题的能力。',
    ],
  },
]

export const workExperiences = [
  {
    company: '北京旗曜科技有限公司',
    period: '2023.07 - 至今',
    job: '前端开发工程师',
    description:
      '负责公司核心产品的需求分析与全栈开发（前端 + 后端 BFF 层），主导地图相关公共组件的封装与发布，显著提升项目复用性和团队整体开发效率。搭建企业级前端架构，实现多应用、多库的 Monorepo 管理体系。参与项目的部署与运维，确保应用稳定上线与持续交付。负责阿里云ECS服务器的采购，以及产品域名注册、备案及管理工作（DNS解析和TLS证书申请）。',
  },
  {
    company: '中化明达科技有限公司',
    period: '2018.06 - 2023.07',
    job: '前端开发工程师',
    description:
      '负责公司主要产品的 PC 端与 H5 前端开发及性能优化，并参与课题研究汇报类应用的构建。协助开发互联网数据抓取脚本，支持业务数据采集与分析。同时参与软著和高新资质等材料的整理与编制工作，为公司认证与申报提供技术支持。',
  },
  {
    company: '北京中盈安信技术服务股份有限公司',
    period: '2016.06 - 2018.05',
    job: '前端开发工程师',
    description:
      '负责公司主要产品的 PC 端与 H5 前端开发及性能优化，并参与课题研究汇报类应用的构建。协助开发互联网数据抓取脚本，支持业务数据采集与分析。同时参与软著和高新资质等材料的整理与编制工作，为公司认证与申报提供技术支持。',
  },
]

export const projects = [
  {
    id: 1,
    name: 'Workletjs - Angular地图组件库',
    role: '创始人 & 核心维护者',
    period: '2025.10 - 至今',
    description:
      '主导设计并开发了 Workletjs，一个基于 OpenLayers 的 Angular 地图组件库，致力于提供与 OpenLayers 无缝集成的地图解决方案。通过封装 70+ 可复用组件，显著降低交互式地图应用的开发门槛与复杂度。',
    link: 'https://workletjs.github.io/',
    techStack: [
      'Typescript',
      'Angular',
      'Angular Material',
      'Tailwind CSS',
      'OpenLayers',
      'Nx Monorepo',
      'ESLint',
      'Prettier',
      'Vitest',
    ],
    responsibilities: [
      '采用 Nx Monorepo 统一管理核心库、文档站点及示例应用，优化模块依赖与项目协作结构。',
      '设计并实现覆盖地图、图层、交互、控件等模块的组件体系，支持高度定制化地图功能。',
      '基于 Angular Signal 实现响应式状态驱动，将 OpenLayers 的命令式操作转换为声明式组件，使地图状态管理更直观，并依托 Signal 的细粒度更新优化渲染性能。',
      '集成 ESLint + Prettier 保障代码质量与风格统一，引入 Vitest 作为单元测试框架，确保组件稳定性。',
      '利用 GitHub Copilot 根据组件逻辑快速生成单元测试，对生成的单元测试代码进行审查。以及使用其辅助编写项目及组件文档。',
      '基于 NgDoc 构建项目文档站点，结合 Angular Material 与 Tailwind CSS 实现响应式 UI 与现代化交互体验。',
      '搭建 GitHub Actions CI/CD 流水线，自动化实现代码检查、构建与部署（发布）流程，提升开发效率与交付质量。',
    ],
    highlights: [
      '从零完成项目架构设计与核心代码开发，推动项目快速迭代并形成完整组件生态。',
      '通过模块化、文档化与自动化工程实践，为后续社区贡献与项目扩展奠定可持续维护基础。',
      '探索前端 GIS 与 Angular 深度集成方案，为复杂业务场景下的地图可视化提供开源技术选项。',
    ],
  },
  {
    id: 2,
    name: '羲和自动报告系统',
    role: '前端开发技术负责人',
    period: '2024.07 - 至今',
    description:
      '羲和自动报告系统是一套面向新能源发电项目的自动化、辅助编写报告平台，覆盖风电与光伏项目前期分析、指标计算与标准化报告生成流程，通过前后端协同与模板化机制显著提升报告编制效率与一致性。',
    techStack: [
      'Nx Monorepo',
      'Angular',
      'NgRx',
      'Ant Design for Angular',
      'NestJS',
      'Nest Commander',
      'MongoDB',
      'Mongoose',
      'ECharts',
    ],
    responsibilities: [
      '基于 Nx 构建前后端统一的 Monorepo 工程结构，集中管理 Angular 前端应用、NestJS 后端服务、CLI 工具及共享业务库，明确应用（Apps）与领域库（Libs）的边界，提升多项目协作效率与代码可维护性。',
      '以 Angular 作为核心前端框架，结合 NgRx 构建可预测的状态管理模型，使用 Ant Design for Angular 搭建高度一致的业务 UI 体系，支撑复杂参数配置、数据录入与报告生成流程。',
      '负责自动报告系统 Web 端核心功能的设计与实现，包括项目参数录入、数据校验、指标结果展示、模板选择与报告生成流程引导，确保复杂业务场景下的良好可用性与可扩展性。',
      '基于 Nest Commander 开发“集中式风电项目自动报告”CLI 工具，并将其作为 Nx Monorepo 中的独立应用，与 Web 端共享核心业务逻辑与数据模型，用于验证自动报告业务在无界面场景下的可行性。',
      '推动 ECharts SSR 在NestJS服务中的集成，通过Monorepo的共享类型定义确保前后端数据模型一致性。',
      '参与制定多类型报告模板及其语法规则，设计模板版本管理规范；在前端实现模板管理与配置界面，支持模板迭代与历史报告回溯。',
      '基于 NestJS + MongoDB 构建自动报告系统后台服务，部分计算模型通过 mongoose virtual 属性抽象为业务指标；前端专注于数据指标展示，形成清晰的前后端职责边界。',
    ],
    highlights: [
      '通过自动化数据整合与模板化生成机制，将风电/光伏项目前期报告编制流程由人工撰写转为配置驱动，报告生成效率提升 60%+，显著降低重复性人力成本。',
      '基于 Nx Monorepo 统一管理 Angular 前端、NestJS 后端与 CLI 工具，抽象共享业务库，实现多形态应用复用，核心业务代码复用率提升至 70%+，缩短新功能交付周期。',
    ],
  },
  {
    id: 3,
    name: '羲和前期评估系统',
    role: '前端开发技术负责人',
    period: '2023.07 - 2025.03',
    description:
      '“羲和前期评估系统”是一款服务于新能源项目前期开发的全链路评估与辅助决策平台。系统通过整合中尺度气象数据与高分辨率地形数据，实现对风资源分布、发电潜力及收益率的精准量化分析，帮助客户快速判断场址开发价值，提升项目决策效率与科学性。',
    techStack: [
      'Typescript',
      'Angular',
      'Angular Material',
      'Ant Design for Angular',
      'NgRx',
      'OpenLayers',
      'ECharts',
      'NestJS',
      'MongoDB',
      'Nx monorepo',
      'ESLint',
      'Prettier',
      'Playwright',
    ],
    responsibilities: [
      '负责新能源项目前期开发的资源评估与辅助决策系统前端架构设计与核心功能开发。',
      '主导基于 Nx 搭建前端 Monorepo 架构，统一 Web 与 H5 应用代码组织方式，并引入 Nx Release 机制，规范版本发布流程，显著降低多应用并行开发与维护成本。',
      '使用 Angular 框架开发Web应用与H5移动应用（嵌入微信公众号），分别采用 Ant Design 与 Angular Material 作为UI基础，并利用 OpenLayers 实现核心地图可视化功能。',
      '引入 NgRx 作为统一状态管理方案，规范复杂业务状态流转，提升数据可预测性与可维护性。',
      '使用 ECharts 对气象资源、统计指标进行分析与可视化展示，支持多维度对比与趋势分析。',
      '主导设计并落地前端 可复用组件库（表单控件、数据展示组件等），减少重复代码约 30%，显著提升开发效率与代码一致性。',
      '参与并主导部分后端能力建设，基于 NestJS + MongoDB 开发项目信息与配置参数管理服务，并通过聚合 Python 等语言实现的后端服务，为前端提供更贴合业务的接口，降低前端逻辑复杂度、提升响应速度与用户体验。',
      '建立前端测试体系，使用 Jest 编写单元测试，核心模块覆盖率约 30%；使用 Playwright 完成关键业务路径的端到端测试，保障核心流程稳定性。',
      '针对 H5 场景进行性能专项优化，通过 路由懒加载、Tree Shaking、关键 CSS 内联、资源压缩（Gzip） 等手段，将首屏加载时间从 12s 优化至约 3s。',
      '主导前端应用与 Sentry 的集成，建立实时错误监控与告警机制；通过分析错误堆栈与用户会话，将生产环境关键问题的平均定位与修复时间缩短 60%，用户侧未捕获异常数量季度环比下降 40%。',
    ],
    highlights: [
      '成功交付具备气象数据分析、地图可视化、财务概算与辅助决策能力的一体化评估系统，支持新能源项目前期快速评估与科学决策。',
      '建立标准化、可监控的前端研发生态，提升团队交付效率与系统稳定性。',
      '通过性能优化与错误监控体系建设，显著提升系统可用性与用户体验，支撑业务团队高效开展项目评估工作。',
    ],
  },
  {
    id: 4,
    name: '新能源协作平台',
    role: '前端核心开发人员',
    period: '2021.03 - 2023.02',
    description:
      '新能源协作平台是一个面向新能源项目（风电、光伏等）开发选址、空间分析和项目管理的综合协作系统，为新能源项目开发提供全流程的数字化支持。',
    techStack: [
      'Angular',
      'Ant Design for Angular',
      'OpenLayers',
      'NestJS',
      'TypeORM',
      'PostgreSQL',
      'Keycloak',
      'Turf.js',
    ],
    responsibilities: [
      '基于 Angular 搭建前端应用架构，使用 Ant Design for Angular 构建统一、可复用的业务 UI 组件，负责项目管理、地图工作空间及坐标工具模块的核心开发。',
      '基于 OpenLayers 实现可交互的地图工作空间，支持图形绘制与编辑、距离测量、位置搜索与定位等常用 GIS 功能，提升新能源项目选址与方案比选效率。',
      '结合新能源业务场景，对地图能力进行业务抽象，设计并实现风机点位、风机基础等新能源项目开发选址业务图层，支持图层管理、样式配置与数据交互。',
      '负责坐标转换功能 的前端实现，支持多种投影与坐标系之间的转换；实现未知坐标系数据的自动识别逻辑，兼容多种空间数据文件格式，提升外部数据接入能力。',
      '基于 NestJS + PostgreSQL 参与并实现项目管理后台服务，完成项目信息、矢量数据等核心数据的建模、存储与管理，对外提供标准化 REST API。',
      '主导推进 Keycloak Resource Server 的接入与落地，实现前端基于 RBAC 的权限体系，支持路由级、视图级、按钮级及 API 级的精细化权限控制，满足多角色协作与安全合规需求。',
    ],
    highlights: [
      '构建统一的 GIS 工作空间与业务图层体系，显著提升新能源项目选址与数据协作效率。',
      '实现多坐标系与未知坐标系识别能力，降低外部空间数据接入与使用门槛。',
      '打通前后端 RBAC 权限链路，支撑平台在多项目、多角色场景下的安全稳定运行。',
    ],
  },
  {
    id: 5,
    name: '风电项目宏观选址可视化应用',
    role: '前端核心开发人员',
    period: '2020.03 - 2021.05',
    description:
      '作为项目核心开发者，参与设计并实现了基于Angular的风电项目宏观选址可视化应用。该项目聚焦于风电项目选址成果的可视化展示与交互分析，通过整合二维与三维地图引擎，结合数据可视化技术，实现了高效、直观的宏观选址决策支持平台。',
    techStack: ['Angular', 'TypeScript', 'OpenLayers', 'Cesium', 'ECharts', 'RxJS', 'WebGL'],
    responsibilities: [
      '基于Angular前端框架搭建模块化、可维护的前端应用结构，通过组件化开发实现功能解耦与复用。结合RxJS进行状态管理与异步数据流处理，确保应用在高频交互场景下的响应性能。',
      '引入 Cesium 三维地图引擎，对高精度地形、风机点位、场区边界等要素进行三维可视化呈现，并设计实现 二维（OpenLayers）/三维（Cesium）地图无缝切换机制，提升选址成果的空间表达能力。',
      '创新性地将 ECharts 融合至 Cesium 三维场景，实现风机点位风玫瑰图在三维地图中的空间叠加，直观展示主导风向、风频分布等关键指标。',
      '使用 Cesium 加载的高精度地形数据（DEM高程数据），基于 Cesium 的自定义材质与 WebGL 技术，在客户端实时生成并渲染等高线，支持地形特征的快速识别与分析。',
      '推动基于数据驱动的应用架构设计，通过配置化方式管理风电项目数据源与可视化参数，实现新项目的快速部署与上线。',
    ],
    highlights: [
      '构建了具备二维/三维一体化展示能力的风电项目宏观选址可视化平台，提升了选址评估的直观性与决策效率。',
      '通过客户端等高线实时生成与三维数据可视化融合，增强了地形分析与风电资源评估的深度。',
      '实现基于数据驱动的配置化部署模式，将新项目上线周期缩短约60%，显著提升了业务响应速度。',
    ],
  },
  {
    id: 6,
    name: '内蒙古新能源智慧规划管理平台',
    role: '前端核心开发人员',
    period: '2018.08 - 2019.06',
    description:
      '面向新能源项目规划管理的综合可视化服务平台，围绕风电、光伏新能源资源分布、统计分析需求，构建集地图、图表与大屏展示于一体的可视化应用，为区域新能源开发与管理提供数据支撑。',
    techStack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'OpenLayers',
      'ECharts',
      'D3.js',
      'DeckGL',
      'Webpack',
    ],
    responsibilities: [
      '使用 Figma 进行可交互原型与 UI 设计，参与大屏布局、交互流程及组件规范制定，保障设计到实现的一致性。针对新能源数据展示场景，设计适配大屏的地图 + 图表联动交互方案。',
      '基于 Angular 构建前端应用架构，模块化封装地图、图表及业务组件，提升系统可维护性与扩展性。',
      '使用 OpenLayers + ECharts 实现新能源分布、统计指标与趋势分析的大屏可视化展示，支持地图与图表之间的联动交互。',
      '基于 D3.js 实现行政区划统计地图，支持区域高亮、动态过渡动画（svg）及多维数据驱动的交互效果，提升区域统计分析的可读性。',
      '引入 DeckGL 实现大规模新能源数据（点、网格、聚合结果等）的高性能渲染与分析可视化，显著提升十万级数据量下的交互流畅度。',
      '基于 Mapbox Geobuf 技术对十万级矢量网格数据进行压缩，分析与可视化数据体积缩小约 6–8 倍，有效降低网络传输与前端解析开销。',
      '使用 GeoTIFF 相关库，在 OpenLayers 中渲染 COG（Cloud Optimized GeoTIFF）瓦片金字塔，实现高程、资源等栅格数据的高效加载与显示。',
      '实现地图中鼠标实时移动的栅格数值查询（如高程查询），在保证性能的前提下提供毫秒级响应体验。',
    ],
    highlights: [
      '成功整合多个可视化库（OpenLayers、ECharts、D3.js、DeckGL），形成统一的技术栈。',
      '攻克大规模地理数据在前端加载速度的性能瓶颈，显著提升十万级数据量下的交互流畅度。',
      '创新性应用COG瓦片金字塔技术，解决传统GeoTIFF文件加载缓慢的问题。',
    ],
  },
]

export const personalEvaluation = [
  '热爱前端开发，认同并践行 **Vibe Coding** 的工程理念，在保持代码质量与可维护性的同时，追求高效、顺畅且富有创造力的开发体验。',
  '具备公共组件库的开发经验，曾参与开源项目并持续输出可复用、高内聚的代码资产。',
  '注重代码规范与工程化实践，具备清晰的产品思维和良好的业务抽象能力，能够在复杂需求中快速定位问题并给出合理解决方案。',
  '具备较强的自我驱动学习能力，乐于钻研新技术、关注前端生态与行业趋势，在团队协作中善于沟通、乐于分享，持续推动技术与业务的正向演进。',
]

export const contributions = [
  {
    name: 'workletjs',
    description: '基于 Angular（Signals）和 OpenLayers 构建的现代地图组件库。',
    url: 'https://workletjs.github.io/',
    github: 'https://github.com/workletjs/',
  },
  {
    name: 'PR & issues',
    description: '为 OpenLayers、nrwl/nx、antvis 等知名开源项目贡献代码或提交 Bug。',
    url: 'https://github.com/pulls?q=author:Jonnytoshen',
  },
]
