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
  startDate: '2022.07', // 입사일. 이력서(경력기술서)와 맞춘 값
  totalProjects: 6,
  role: '1인 Full Stack (설계-개발-배포-운영)',
  clients: ['KB손해보험', '삼성전자', 'KIA'],
  overseasProjects: 3, // KIA 멕시코 3개
  currentlyOperating: 3 // ORGNavi, 사내 업무 포털, KIA VoC
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
  title: '백엔드를 중심으로 프론트엔드와 인프라 전반을 1인으로 설계·개발·운영했습니다.',
  description: '2022년부터 KB손해보험, 삼성전자, KIA Mexico의 시스템을 담당했고, 현재는 자사 SaaS와 사내 시스템을 만들고 있습니다.'
}

// 카드 표시 전용 프로젝트.
// projects.ts의 Project는 상세 페이지용 전체 서사(context·problem·challenges·retrospective)를
// 요구하는데 아래 프로젝트들은 상세 페이지가 없다. 그 필드를 빈 값으로 채우느니 카드에 실제로
// 쓰이는 필드만 담아 따로 둔다.
export interface ProjectCard {
  id: string
  title: string
  period: string
  projectType: 'development' | 'maintenance' | 'both'
  company: string
  description: string
  myRole: string
  mainTasks?: string[] // projects.ts의 Project와 같게 둬야 두 타입을 한 배열에 담을 수 있다
  tags: string[]
}

export const orgNaviProject: ProjectCard = {
  id: 'orgnavi',
  title: 'ORGNavi 조직도 SaaS',
  period: '2025.12 ~ 현재',
  projectType: 'both',
  company: '빅마음 (Bigmaum)',
  description: '조직도 편집·인사 데이터 임포트·외부 DB 동기화를 하나로 묶은 멀티테넌트 B2B 조직도 서비스',
  myRole: '주 개발자로 제품 기능 개발, 권한 모델 설계, 인프라 이전, 릴리스 체계 구축 담당',
  mainTasks: [
    '조직도 편집기·개편 시뮬레이터·조직 진단·관리 콘솔 구현, 계층 깊이와 평균 관리 범위 등 8개 지표를 서버에서 산출',
    '고객사 간 데이터 혼입을 막기 위해 직원 식별자를 (site_id, emp_id) 복합 키로 구성하고 조회·수정 경로 전체에 테넌트 검증 적용',
    '라이선스 좌석 수 확인과 저장 사이의 경합을 pg_advisory_xact_lock으로 차단, 잠금 순서를 고정해 데드락 방지',
    'Replit 프로토타입을 AWS(EC2·RDS·S3)로 이전하고 테넌트 경계 계약 테스트를 CI에 편입'
  ],
  tags: ['React', 'React Flow', 'Express', 'Drizzle ORM', 'PostgreSQL', 'AWS', 'Claude Code']
}

export const workPortalProject: ProjectCard = {
  id: 'work-portal',
  title: '사내 업무 포털 (연차·결재)',
  period: '2025.12 ~ 2026.06',
  projectType: 'both',
  company: '빅마음 (Bigmaum)',
  description: 'Excel과 Power Automate로 운영되던 연차 관리를 대체한 사내 시스템. 요청이 아니라 직접 제안해 시작한 프로젝트',
  myRole: '1인 풀스택 개발·운영, 연차 정책 정의 및 문서화',
  mainTasks: [
    '기능보다 정책을 먼저 확정. 누적 이월, 경력직 추가 연차의 연간 재부여와 미사용분 소멸, 당겨 쓴 연차의 차기 기간 차감 규칙을 정의 문서 하나로 정리',
    '정의 문서를 기준으로 경계 조건을 검증해 당겨 쓴 연차가 다음 기간에 다시 차감되던 이중 차감 제거',
    'Entra ID·Google SSO를 JWKS 공개키 기반 RS256 서명 검증으로 구현하고 audience·issuer까지 확인',
    '노션·엑셀·CSV에 흩어져 있던 5년치 기록 837건을 이관, 재직 인원 12명 전원이 사용 중'
  ],
  tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Entra ID SSO', 'AWS', 'Claude Code']
}

// 개인 사이드 프로젝트(츄디)는 이 사이트에 싣지 않는다. 공개 색인되는 페이지라
// 사이드 서비스의 예약·매출 수치를 노출할 자리가 아니다. 이력서·자기소개서에는 들어간다.

// KIA 통합 프로젝트 정보
export const kiaIntegratedProject: ProjectCard = {
  id: 'kia-integrated',
  title: 'KIA Mexico 사내 업무 시스템',
  period: '2022.10 ~ 현재',
  projectType: 'both' as const,  // 개발 및 운영
  company: '빅마음 (Bigmaum)',
  description: '해외 법인의 VoC·Facilities·EHS 사내 업무 시스템을 개별적으로 유지보수하며 백엔드·프론트(ejs) 전반의 기능 확장과 운영을 담당',
  myRole: '1인 Full Stack으로 3개 시스템 설계, 개발, 운영 전반 담당',
  mainTasks: [
    'KIA Mexico 사내 VoC, Facilities, EHS 업무를 통합 관리하는 내부 시스템군을 단독 설계·개발',
    'VOC 텍스트 업로드 및 자동 번역 파이프라인과 Device UUID 기반 권한 관리 로직 구현',
    '시설 관리 요청·결재·업체 견적 관리와 EHS 사건·의료·환경 데이터 처리 워크플로우 개발',
    'Passport·Session 기반 인증·권한 미들웨어, 다국어(i18n), 로그·SMTP 알림 자동화 기능 구현'
  ],
  tags: ['Node.js', 'Express', 'PostgreSQL', 'MariaDB', 'DeepL API', 'Linux', 'i18n', 'JWT']
}

// 주요 스킬
export const coreSkills = ['Node.js', 'Express', 'Spring Boot', 'PostgreSQL', 'TypeScript']
export const otherSkills = [
  'Kotlin', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP',
  'React', 'Next.js', 'NestJS', 'Django',
  'AWS', 'GCP', 'Azure', 'Linux', 'Cloudflare', 'CI/CD',
  'MySQL', 'MariaDB', 'BigQuery',
  'REST API', 'Tableau API', 'DeepL API', 'i18n', 'JWT',
  'GitHub', 'Figma'
]
