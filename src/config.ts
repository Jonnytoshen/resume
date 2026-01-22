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
