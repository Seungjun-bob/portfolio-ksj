import { Project } from '../types'

export const projects: Project[] = [
 {
  id: 'kb-tableau-drm',
  title: 'KB손해보험 Tableau DRM 구축 프로젝트',
  period: '2025.11 ~ 2025.12 (2개월)',
  company: '빅마음 (Bigmaum)',
  projectType: 'development',
  description: 'Tableau 대시보드 데이터를 DRM 적용 상태로 안전하게 다운로드할 수 있는 서버 및 웹 시스템 구축',
  tags: ['Java', 'Tomcat', 'Tableau REST API', 'Fasoo DRM', 'JWT', 'SSO'],

  context:
    'KB손해보험에서 Tableau 대시보드 데이터 다운로드 시 DRM 적용이 필수였습니다. IE 기반 SSO 환경과 Edge 전용 Tableau 간 인증 연계 문제를 해결해야 했습니다.',

  problem: [
    'Tableau 화면 직접 다운로드 시 DRM 적용 불가',
    'IE 기반 SSO와 Edge 브라우저 간 인증 연계 문제',
    '사용자별 View 접근 제어 필요'
  ],

  myRole:
    'Java 서버 설계 및 개발, Tableau REST API 연동, JWT 기반 인증, DRM 연동 구현',

  decisionAndArchitecture: [
    {
      title: 'Java + Tomcat 기반 서버',
      description: '',
      reason: '금융권 표준 스택으로 안정성과 기존 인프라 호환성이 높음'
    },
    {
      title: 'Tableau REST API 기반 다운로드',
      description: '',
      reason: '서버를 거쳐야만 DRM 적용이 가능'
    },
    {
      title: 'IE-Edge 브릿지 토큰 인증',
      description: '',
      reason: '브라우저 불일치 문제를 보안 수준을 유지한 채 해결'
    }
  ],

  challenges: [
    {
      title: 'IE-Edge 인증 연계',
      situation: 'IE 기반 SSO와 Edge 전용 Tableau 간 인증 연계 불가',
      approach: 'IE에서 단기 토큰 발급 후 Edge로 전달하여 서버에서 검증',
      outcome: '브라우저 간 안전한 인증 연계 구현'
    },
    {
      title: 'DRM 강제 적용',
      situation: '화면 직접 다운로드 시 DRM 적용 불가',
      approach: '모든 다운로드를 REST API 기반으로 서버에서 대행',
      outcome: '모든 파일에 DRM 적용 보장'
    }
  ],

  results: [
    { type: 'qualitative', description: 'Tableau 다운로드 데이터 DRM 적용' },
    { type: 'qualitative', description: '브라우저 간 인증 연계 문제 해결' }
  ],

  retrospective: [
    '레거시 환경(IE)과 모던 기술(Edge, REST API)을 연결하는 방법 학습',
    '요구사항 변경에 유연하게 대응할 수 있는 구조 설계의 중요성 체감'
  ],

  keyTakeaway:
    '유연한 아키텍처가 요구사항 변경을 리스크가 아닌 기회로 만든다는 것을 배웠습니다.',

  improvements: [
    {
      title: '초기 요구사항 검증 부족',
      situation: '요구사항이 완전히 확정되지 않은 상태에서 구현 시작',
      consequence: '중간 설계 변경으로 일부 구현 폐기',
      wouldDoDifferently: '초기 단계에서 프로토타입으로 요구사항 검증'
    }
  ]
},
  {
  id: 'samsung-digital-marketing',
  title: '삼성전자 Digital Marketing 데이터 통합 대시보드',
  period: '2024.07 ~ 2025.08 (13개월)',
  company: '빅마음 (Bigmaum)',
  projectType: 'both',
  description: '인플루언서 성과 데이터를 통합 관리하고, 차트 및 Tableau 대시보드로 시각화하는 시스템 구축',
  tags: ['GCP', 'Kotlin', 'SpringBoot', 'MySQL', 'BigQuery', 'Chart.js', 'CI/CD'],

  context:
    '기존에 구축된 시스템을 인수해 안정적으로 운영하는 것이 핵심 과제였습니다. 운영 구조와 보안, 배포 체계가 정비되지 않은 상태였습니다.',

  problem: [
    'GCP 보안 취약 (보안 점수 30%)',
    '비효율적인 수동 배포 프로세스',
    'Tableau 차트 로딩 지연'
    ],

  myRole:
    '1인 Full Stack으로 백엔드, 웹, GCP 인프라 보안, CI/CD까지 전체 시스템 설계·구현·운영',

  decisionAndArchitecture: [
    {
      title: 'Bastion Host 기반 Private 네트워크',
      description: '',
      reason: '외부 노출을 최소화하고 보안 수준을 근본적으로 개선'
    },
    {
      title: 'CI/CD 파이프라인 구축',
      description: '',
      reason: '수동 배포의 시간 지연과 실수 위험 제거'
    },
    {
      title: 'Chart.js 커스텀 차트',
      description: '',
      reason: 'Tableau 성능 병목 해소 및 사용자 경험 개선'
    }
  ],

  challenges: [
    {
      title: 'GCP 보안 취약 개선',
      situation: '보안 점수 30% 수준',
      approach: 'Private 네트워크 전환 및 접근 통제 강화',
      outcome: '보안 점수 90%까지 개선'
    },
    {
      title: '배포 자동화',
      situation: '수동 배포로 인한 시간 지연과 실수 위험',
      approach: 'CI/CD 파이프라인 구축',
      outcome: '배포 시간 10분 → 3분 단축'
    }
  ],

  results: [
    { type: 'quantitative', description: 'GCP 보안 점수 30% → 90%' },
    { type: 'quantitative', description: '배포 시간 10분 → 3분 단축' },
    { type: 'qualitative', description: '운영 안정성 및 배포 신뢰도 향상' }
  ],

  retrospective: [
    '운영 시스템에서 보안과 배포 체계의 중요성 체감',
    '자동화가 개발 생산성과 안정성에 미치는 영향 경험'
  ],

  keyTakeaway:
    '기존 시스템을 안정적으로 유지하는 방법을 배웠습니다.',

  improvements: [
    {
      title: '테스트 전략 미흡',
      situation: '초기 단계에서 테스트 코드 부족',
      consequence: '운영 중 긴급 수정 발생',
      wouldDoDifferently: '초기부터 테스트를 포함한 배포 파이프라인 구성'
    }
  ]
},
 {
  id: 'kia-voc',
  title: 'KIA Mexico VoC (Voice of Customer) 대시보드',
  period: '2025.08 ~ 2025.09 (개발) / 2025.09 ~ 현재 (운영)',
  company: '빅마음 (Bigmaum)',
  projectType: 'both',
  description: 'VOC 텍스트를 자동 번역해 공장 대형 스크린에 실시간 표시하는 시스템 구축',
  tags: ['Node.js', 'Express', 'PostgreSQL', 'DeepL API', 'Linux'],

  context:
    '멕시코 공장 내 여러 대형 스크린에 VOC를 실시간으로 표시해야 했습니다. 다국어 환경과 공장별 장비 관리가 주요 과제였습니다.',

  problem: [
    '공장 대형 스크린에 적합한 UI 필요',
    '공장·스크린별 장비 관리 필요',
    '다국어 자동 번역 요구'
  ],

  myRole:
    '1인 Full Stack으로 개발 및 운영 전반 담당, 영어로 해외 협업',

  decisionAndArchitecture: [
    {
      title: 'DeepL API 자동 번역',
      description: '',
      reason: '다국어 공장 환경에서 언어 장벽 해소'
    },
    {
      title: 'UUID 기반 장비 관리',
      description: '',
      reason: '공장별 네트워크 환경이 달라 IP 기반 관리 불가'
    }
  ],

  challenges: [
    {
      title: '대형 스크린 UI 최적화',
      situation: '일반 웹과 다른 가독성 요구',
      approach: '대형 스크린 기준 UI 설계',
      outcome: '멀리서도 인식 가능한 화면 구현'
    }
  ],

  results: [
    { type: 'qualitative', description: '멕시코 공장 다수의 대형 스크린에서 운영 중' },
    { type: 'qualitative', description: '자동 번역으로 다국어 VOC 실시간 표시' }
  ],

  retrospective: [
    '대형 스크린 UI는 일반 웹과 전혀 다른 기준 필요',
    '네트워크 환경이 다양한 경우 UUID 기반 관리가 효과적'
  ],

  keyTakeaway:
    '같은 웹이라도 사용 환경에 따라 설계 기준이 완전히 달라진다는 것을 배웠습니다.',

  improvements: [
    {
      title: '초기 환경 테스트 부족',
      situation: '일반 모니터 기준으로 개발',
      consequence: '실제 공장 스크린에서 추가 수정 필요',
      wouldDoDifferently: '특수 환경은 가능한 빨리 실제 환경에서 테스트'
    }
  ]
},
  {
  id: 'kia-facilities',
  title: 'KIA Mexico Facilities 사내 업무 프로세스',
  period: '2023.10 ~ 2024.02 (5개월)',
  company: '빅마음 (Bigmaum)',
  projectType: 'both',
  description: '시설 보수·개발 요청부터 승인, 업체 선정, 예산 관리까지 통합하는 사내 시스템 구축',
  tags: ['Node.js', 'Express', 'MariaDB', 'Linux', 'JWT', 'i18n'],

  context:
    '시설 관리 업무가 수작업으로 진행되어 효율이 낮았습니다. \
요청부터 승인까지 전 과정을 관리하고, 해외 협업을 위한 다국어 지원이 필요했습니다.',

  problem: [
    '시설 요청 및 승인 프로세스의 비효율',
    '외부 협력사 견적·평가 관리 어려움',
    '결재 흐름 부재로 승인 상태 불명확',
    '스페인어·영어 다국어 지원 필요'
  ],

  myRole:
    '1인 Full Stack으로 요구사항 수집, 워크플로우 설계, 개발 및 운영 전반 담당',

  decisionAndArchitecture: [
    {
      title: '시설 업무 통합 워크플로우',
      description: '요청–업체–예산–승인 전 과정을 단일 시스템으로 통합',
      reason:
        '업무 흐름을 한 곳에서 관리하기 위해'
    },
    {
      title: 'i18n 기반 다국어 지원',
      description: '스페인어·영어 UI 제공',
      reason:
        '현지 직원과 본사 직원이 함께 사용할 수 있도록'
    },
    {
      title: 'JWT 기반 인증 및 권한 관리',
      description: '역할별 접근 제어 구현',
      reason:
        '민감 정보 보호와 승인 권한 분리를 위해'
    }
  ],

  challenges: [
    {
      title: '시설 업무 워크플로우 구현',
      situation:
        '요청부터 승인까지 전 주기 관리 필요',
      approach:
        '단일 포털 기반 업무 흐름 설계',
      outcome:
        '전체 프로세스 통합 관리 구현'
    },
    {
      title: '보안 및 권한 관리',
      situation:
        '민감 정보 보호 및 역할별 접근 필요',
      approach:
        'DB 암호화 및 역할 기반 접근 제어',
      outcome:
        '보안 강화 및 접근 범위 명확화'
    },
    {
      title: '운영 자동화',
      situation:
        '승인·평가 상태를 수동으로 관리',
      approach:
        '알림 및 로그 자동화',
      outcome:
        '운영 부담 감소 및 추적성 확보'
    }
  ],

  results: [
    { type: 'qualitative', description: '시설 업무 전 주기 단일 포털 통합' },
    { type: 'qualitative', description: '외부 협력사 관리 및 견적 추적 용이' },
    { type: 'qualitative', description: '다국어 지원으로 해외 협업 환경 구축' },
    { type: 'qualitative', description: '보안 및 운영 안정성 향상' }
  ],

  retrospective: [
    '해외 협업 환경에서 다국어·권한 설계의 중요성 체감',
    '복잡한 워크플로우를 구조화하는 설계 경험',
    '운영 자동화가 관리 효율에 미치는 영향 학습'
  ],

  keyTakeaway:
    '복잡한 업무일수록 흐름을 단순하게 설계하는 것이 가장 중요하다는 것을 배웠습니다.',

  improvements: [
    {
      title: '다국어 구조 초기 설계 부족',
      situation:
        'i18n을 개발 중반에 도입',
      consequence:
        '기존 코드 수정 비용 발생',
      wouldDoDifferently:
        '해외 프로젝트는 초기부터 다국어를 기본 전제로 설계'
    }
  ]
},
 {
  id: 'kia-ehs',
  title: 'KIA Mexico EHS 사내 업무 프로세스 통합',
  period: '2022.10 ~ 2023.06 (9개월)',
  company: '빅마음 (Bigmaum)',
  projectType: 'both',
  description: '의료·안전·환경(EHS) 업무를 통합 관리하는 사내 시스템 구축',
  tags: ['Node.js', 'Express', 'MariaDB', 'Linux', 'Passport', 'Winston'],

  context:
    'KIA 멕시코 공장의 의료, 안전, 환경 업무가 분리되어 운영되고 있었습니다. \
EHS 데이터를 통합 관리하고 ESG 데이터를 체계적으로 수집할 필요가 있었습니다.',

  problem: [
    '의료·안전·환경 업무 분산으로 통합 관리 어려움',
    'HR 데이터 미연동으로 의료 업무 비효율',
    '사고 이력 및 후속 조치 추적 어려움',
    'ESG 데이터 수작업 관리'
  ],

  myRole:
    '1인 Full Stack으로 시스템 설계, 개발, 운영 전반을 담당',

  decisionAndArchitecture: [
    {
      title: 'EHS 통합 포털',
      description: '의료·안전·환경 업무를 단일 시스템으로 통합',
      reason:
        '업무 흐름과 데이터를 한 곳에서 관리하기 위해'
    },
    {
      title: 'HR 데이터 연동',
      description: '환자 기본정보 및 이력 조회 연동',
      reason:
        '의료 업무 정확성과 효율성을 높이기 위해'
    },
    {
      title: 'ESG 데이터 자동화',
      description: 'KPI 누계 계산 및 리포트 자동 생성',
      reason:
        '수작업을 줄이고 보고 주기를 단축하기 위해'
    }
  ],

  challenges: [
    {
      title: 'EHS 도메인 통합',
      situation:
        '서로 다른 업무 영역을 하나의 시스템에서 관리해야 함',
      approach:
        '공통 포털 구조로 업무 흐름 통합',
      outcome:
        'EHS 전 영역 통합 관리 구현'
    },
    {
      title: '보안 및 권한 관리',
      situation:
        '의료 정보 등 민감 데이터 보호 필요',
      approach:
        '역할 기반 접근 제어 및 다단계 인증',
      outcome:
        '접근 범위 분리 및 보안 강화'
    },
    {
      title: '운영 자동화',
      situation:
        '진료·사고 관련 커뮤니케이션 지연',
      approach:
        '로그 체계화 및 알림 자동화',
      outcome:
        '대응 속도 및 운영 안정성 향상'
    }
  ],

  results: [
    { type: 'qualitative', description: 'EHS 세 영역 단일 포털 통합' },
    { type: 'qualitative', description: 'HR 연동으로 의료 업무 효율 개선' },
    { type: 'qualitative', description: 'ESG 데이터 자동화 및 보고 주기 단축' },
    { type: 'qualitative', description: '실시간 알림으로 사고 대응 속도 향상' }
  ],

  retrospective: [
    '서로 다른 도메인을 하나의 시스템으로 통합하며 도메인 이해의 중요성 체감',
    '외부 시스템(HR) 연동 시 데이터 일관성과 흐름 설계의 중요성 학습',
    '운영을 고려한 로그·알림 설계가 시스템 신뢰도를 좌우함을 경험'
  ],

  keyTakeaway:
    '도메인 통합 프로젝트에서는 기술보다 업무 이해와 소통이 더 중요하다는 것을 배웠습니다.',

  improvements: [
    {
      title: '초기 도메인 이해 부족',
      situation:
        '도메인 학습 없이 개발을 시작',
      consequence:
        '중간에 설계 수정 발생',
      wouldDoDifferently:
        '개발 전 도메인 학습과 사전 협의에 충분한 시간 투자'
    }
  ]
}
]