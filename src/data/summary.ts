export interface CareerSummary {
  startDate: string
  totalProjects: number
  role: string
  clients: string[]
  overseasProjects: number
  currentlyOperating: number
}

export interface Insight {
  situation: string
  lesson: string
  project: string
  projectId: string
}

export const careerSummary: CareerSummary = {
  startDate: '2022.10',
  totalProjects: 5,
  role: '1인 Full Stack (설계-개발-배포-운영)',
  clients: ['KB손해보험', '삼성전자', 'KIA'],
  overseasProjects: 3, // KIA 멕시코 3개
  currentlyOperating: 2 // 삼성, KIA VoC
}

export const insights: Insight[] = [
  {
    situation: '도메인을 충분히 학습하지 않고 개발을 시작했습니다',
    lesson: '중간에 설계를 수정하게 되었습니다. 개발 전 도메인 학습과 사전 협의에 충분한 시간을 투자해야 합니다',
    project: 'KIA EHS',
    projectId: 'kia-ehs'
  },
  {
    situation: '해외 프로젝트에서 i18n을 개발 중반에 도입했습니다',
    lesson: '기존 코드 수정 비용이 발생했습니다. 해외 프로젝트는 초기부터 다국어를 기본 전제로 설계해야 합니다',
    project: 'KIA Facilities',
    projectId: 'kia-facilities'
  },
  {
    situation: '초기 단계에서 테스트 코드가 부족했습니다',
    lesson: '운영 중 긴급 수정이 발생했습니다. 초기부터 테스트를 포함한 배포 파이프라인을 구성해야 합니다',
    project: '삼성 Digital Marketing',
    projectId: 'samsung-digital-marketing'
  },
  {
    situation: '일반 모니터 기준으로 개발했습니다',
    lesson: '실제 공장 대형 스크린에서 추가 수정이 필요했습니다. 특수 환경은 가능한 빨리 실제 환경에서 테스트해야 합니다',
    project: 'KIA VoC',
    projectId: 'kia-voc'
  },
  {
    situation: '요구사항이 완전히 확정되지 않은 상태에서 구현을 시작했습니다',
    lesson: '중간 설계 변경으로 일부 구현을 폐기했습니다. 초기 단계에서 프로토타입으로 요구사항을 검증해야 합니다',
    project: 'KB Tableau DRM',
    projectId: 'kb-tableau-drm'
  }
]

export const coreStrengths = {
  title: '1인 Full Stack으로 시스템을 처음부터 끝까지 책임집니다',
  description: '2022년부터 KB손해보험, 삼성전자, KIA Mexico 프로젝트에서 설계, 개발, 배포, 운영까지 담당하고 있습니다.'
}

// KIA 통합 프로젝트 정보
export const kiaIntegratedProject = {
  id: 'kia-integrated',
  title: 'KIA Mexico 사내 업무 시스템',
  period: '2022.10 ~ 현재',
  company: '빅마음 (Bigmaum)',
  description: 'EHS, Facilities, VoC 3개 시스템을 영어로 해외 협업하여 설계·개발·운영',
  myRole: '1인 Full Stack으로 3개 시스템 설계, 개발, 운영 전반 담당. 영어로 해외 협업.',
  implementations: [
    'EHS 통합 포털 (의료/안전/환경 업무 통합)',
    'Facilities 워크플로우 (시설 관리 전 주기)',
    'VoC 실시간 대시보드 (공장 대형 스크린)',
    'i18n 다국어 지원 (스페인어/영어)',
    'DeepL API 자동 번역',
    'HR 시스템 연동 및 ESG 데이터 자동화'
  ],
  tags: ['Node.js', 'Express', 'PostgreSQL', 'MariaDB', 'DeepL API', 'Linux', 'i18n', 'JWT']
}

// 주요 스킬
export const coreSkills = ['Node.js', 'Express', 'Spring Boot', 'PostgreSQL', 'Claude Code']
export const otherSkills = [
  'Kotlin', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP',
  'React', 'Next.js', 'NestJS', 'Django',
  'AWS', 'GCP', 'Azure', 'Linux', 'Cloudflare', 'CI/CD',
  'MySQL', 'MariaDB', 'BigQuery',
  'REST API', 'Tableau API', 'DeepL API', 'i18n', 'JWT',
  'GitHub', 'Figma'
]
