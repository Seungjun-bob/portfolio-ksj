import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'kb-tableau-drm',
    title: 'KB손해보험 Tableau DRM 구축 프로젝트',
    period: '2025.11 ~ 2025.12 (2개월)',
    company: '빅마음 (Bigmaum)',
    projectType: 'development',
    description: 'Tableau 대시보드 데이터를 DRM 적용 상태로 안전하게 다운로드할 수 있는 전용 서버 및 웹 시스템 구축',
    tags: ['Java', 'Tomcat', 'Tableau REST API', 'Fasoo DRM', 'JWT', 'SSO'],
    context: 'KB손해보험 내부 사용자들이 Tableau 대시보드의 데이터를 다운로드할 때 DRM(Digital Rights Management)을 적용하여 데이터 유출을 방지해야 하는 요구사항이 있었습니다. 또한 IE에서 Edge로 전환하는 보안 환경에서 SSO 인증과 Tableau Server 연동을 안정적으로 처리해야 했습니다.',
    problem: [
      'Tableau 화면에서 직접 다운로드 시 DRM 적용 불가능',
      'IE 기반 SSO와 Tableau(Edge 필수) 브라우저 간 인증 연계 문제',
      '프로젝트 진행 중 고객 요구사항 변경 (Tableau 임베딩 → 서버에 다운로드 버튼 추가)',
      '사용자별 View 접근 권한 제어 및 필터링 처리 필요'
    ],
    myRole: 'Java 기반 서버 설계 및 개발을 담당했습니다. Tableau Server REST API 연동, SSO 인증 후 JWT 토큰 체계 구현, DRM 연동 로직 설계, View 기반 접근 제어 및 필터링 기능을 구현했습니다.',
    decisionAndArchitecture: [
      {
        title: 'Java + Tomcat 기반 서버',
        description: 'Java와 Apache Tomcat 기반 서버 구축',
        reason: '금융권 표준 기술 스택이며, 기존 인프라와의 호환성이 높음. 안정적인 엔터프라이즈 환경 구축에 적합'
      },
      {
        title: 'Tableau REST API 기반 다운로드',
        description: '모든 다운로드를 Tableau REST API를 통해 서버에서 처리',
        reason: 'Tableau 화면에서 직접 다운로드 시 DRM 적용 불가능. 서버를 거쳐야만 DRM 처리가 가능하므로 REST API 기반 강제'
      },
      {
        title: 'IE-Edge 브릿지 토큰 인증',
        description: 'IE에서 SSO 인증 후 30초 단기 만료 토큰을 생성하여 Edge로 전달',
        reason: 'IE 기반 SSO와 Tableau(Edge 필수)의 브라우저 불일치 문제 해결. 단기 토큰으로 보안 위험 최소화하면서 인증 연계'
      },
      {
        title: 'View ID 기반 접근 제어',
        description: 'Tableau View ID를 서버에서 관리하고, 사용자별 접근 가능한 View만 노출',
        reason: '사용자 권한에 따라 접근 가능한 대시보드를 제한하여 데이터 보안 강화'
      }
    ],
    challenges: [
      {
        title: 'IE-Edge 브라우저 간 인증 연계',
        situation: 'IE 기반 SSO에서만 토큰 발급 가능하지만, Tableau는 Edge에서만 동작. 동일 브라우저 내 인증 연계 불가능',
        approach: '1) IE에서 SSO 인증 수행, 2) 인증 성공 후 30초 만료 단기 토큰을 URL에 포함, 3) Edge 브라우저 강제 오픈, 4) Edge에서 토큰 검증 후 DRM 통신용 토큰 생성 및 쿠키 저장, 5) 이후 Tableau 서버 접근 및 다운로드 정상 처리',
        outcome: 'IE와 Edge 간 안전한 인증 연계 구현. 30초 단기 토큰으로 보안 위험 최소화하면서 사용자 경험 유지'
      },
      {
        title: '요구사항 변경 대응 (Tableau 임베딩 → 서버 다운로드 버튼 추가)',
        situation: '프로젝트 초반에는 태블로 임베딩 방식으로 설계. 진행 중 고객이 Tableau 화면 자체에 버튼을 두고 사용자가 직접 다운로드하길 원함',
        approach: '1) 웹 임베딩 포탈 방식 폐기, 2) Tableau Server에 임베딩된 View 기준으로 View ID 식별, 3) 서버는 다운로드 전용 역할만 담당하도록 구조 변경, 4) View ID 기반 접근 제어 페이지 개발',
        outcome: '유연한 아키텍처로 요구사항 변경에 빠르게 대응. Tableau 임베딩 방식으로 사용자 경험 향상'
      },
      {
        title: 'REST API 기반 DRM 처리 강제화',
        situation: 'Tableau 화면에서 직접 다운로드 시 서버를 거치지 않아 DRM 적용 불가능',
        approach: '1) 모든 다운로드를 Tableau REST API 기반으로 강제, 2) Excel/PDF/CSV 다운로드 요청을 서버에서 대행, 3) 서버 → DRM → 사용자 전달 구조 확립, 4) vf_ 파라미터 기반 필터링으로 화면 필터와 다운로드 결과 일치 보장',
        outcome: '모든 다운로드 파일에 DRM 적용 보장. 데이터 유출 방지 및 보안 요구사항 충족'
      },
      {
        title: 'View ID 기반 접근 제어 및 필터링',
        situation: '사용자별 접근 가능한 Tableau View 제한 필요. 필터 조건에 따라 다른 데이터 다운로드 필요',
        approach: '1) View ID 목록을 서버에서 관리, 2) 사용자별 접근 가능한 View만 노출하는 전용 페이지 개발, 3) Tableau REST API의 vf_ 파라미터 기반 필터링 적용, 4) 서버 요청 시 필터 값을 URL 파라미터로 전달',
        outcome: '사용자 권한에 따른 접근 제어 구현. 화면과 동일한 조건의 데이터 파일 생성 보장'
      }
    ],
    results: [
      {
        type: 'qualitative',
        description: 'Tableau 다운로드 데이터에 DRM 적용하여 데이터 유출 방지'
      },
      {
        type: 'qualitative',
        description: 'IE-Edge 브라우저 간 안전한 인증 연계 구현'
      },
      {
        type: 'qualitative',
        description: 'REST API 중심의 확장 가능한 다운로드 아키텍처 확립'
      },
      {
        type: 'qualitative',
        description: '운영 환경에서 Excel/PDF/CSV 다운로드 안정화'
      },
      {
        type: 'qualitative',
        description: 'View ID 기반 접근 제어로 데이터 보안 강화'
      }
    ],
    retrospective: [
      'Java와 Tomcat 환경에서 금융권 보안 요구사항을 충족하는 시스템을 구축하면서 엔터프라이즈 개발의 엄격함을 경험했습니다.',
      'IE에서 Edge로 전환하는 환경에서 브라우저 간 인증 연계라는 독특한 문제를 해결하면서, 레거시 시스템과 모던 기술의 공존 방법을 배웠습니다.',
      '프로젝트 진행 중 요구사항이 크게 변경되는 상황에서 유연한 아키텍처의 중요성을 깨달았습니다. 초기 설계 시 확장성을 고려하는 것이 얼마나 중요한지 체감했습니다.',
      'Tableau REST API를 활용한 데이터 추출 및 필터링 경험을 통해 BI 도구와의 연동 방법을 익혔습니다.',
      'DRM 시스템 연동 경험을 통해 데이터 보안의 중요성과 DRM이 데이터 유출 방지에 얼마나 효과적인지 이해하게 되었습니다.'
    ],
    keyTakeaway: '유연한 아키텍처가 요구사항 변경을 기회로 만들 수 있다는 것을 배웠습니다.',
    improvements: [
      {
        title: '요구사항 변경에 대한 초기 대응',
        situation: '프로젝트 초반 웹 포탈 임베딩 방식으로 설계를 확정하고 구현을 시작했습니다. 고객의 요구사항이 명확히 확정되지 않은 상태에서 개발을 진행한 것이 실수였습니다.',
        consequence: '중간에 서버 화면에 버튼 추가 방식으로 요구사항이 변경되면서 기존 구현의 상당 부분을 폐기해야 했습니다.',
        wouldDoDifferently: '요구사항이 불확실한 상태에서는 프로토타입을 먼저 만들어 고객에게 확인받을 것입니다. "어떤 화면을 원하시나요?"라고 말로 묻는 것보다, 간단한 목업을 보여주는 것이 오해를 줄입니다.'
      }
    ]
  },
  {
    id: 'samsung-digital-marketing',
    title: '삼성전자 Digital Marketing 데이터 통합 대시보드',
    period: '2024.07 ~ 2025.08 (13개월)',
    company: '빅마음 (Bigmaum)',
    projectType: 'both',
    description: '인플루언서 성과 데이터를 저장·관리하며, 통계 차트 및 Tableau 대시보드로 시각화',
    tags: ['GCP', 'Kotlin', 'SpringBoot', 'MySQL', 'BigQuery', 'Chart.js', 'CI/CD'],
    context: '프로젝트에 합류하며 가장 먼저 마주한 과제는, 이미 구축된 시스템을 어떻게 안정적으로 유지하고 운영할 것인가였습니다. 데이터는 이미 활용되고 있었지만, 운영 구조와 관리 체계는 충분히 정비되어 있지 않았습니다. 특히 소스 코드가 Git으로 체계적으로 관리되지 않아 변경 이력 추적과 협업에 어려움이 있었고, 이를 운영 리스크로 판단해 Git 기반 소스 관리 체계를 정비하고 Gitflow 전략을 도입했습니다. 그 결과 수정과 배포 과정의 불확실성을 줄이고, 장기적인 유지보수가 가능한 구조로 개선할 수 있었습니다. 또한 GCP 보안 점수가 30% 수준에 머물러 있다는 점을 계기로 인프라 구조를 점검했고, Bastion Host를 중심으로 한 Private Network 구조로 전환해 보안 점수를 90%까지 개선했습니다. 이 경험을 통해 이미 존재하는 시스템을 이해하고, 우선순위를 판단해 안정적으로 운영하는 역할의 중요성을 체감할 수 있었습니다.',
    problem: [
      '인플루언서 성과 데이터가 여러 소스에 분산되어 통합 관리가 어려움',
      'Tableau 성능 병목으로 인한 차트 로딩 지연',
      'GCP 환경의 보안 취약점 (보안 점수 30%)',
      '코드 배포 시간이 10분 이상 소요되어 개발 효율성 저하'
    ],
    myRole: '1인 Full Stack 개발 및 인프라 보안 운영을 담당했습니다. 백엔드 개발, 웹 개발, GCP 인프라 보안 강화, CI/CD 파이프라인 구축까지 전체 시스템을 설계하고 구현했습니다.',
    decisionAndArchitecture: [
      {
        title: 'Git Flow 기반 소스 관리 체계 도입',
        description: 'Git Flow 전략을 도입하여 소스 코드 관리 체계 정비',
        reason: '기존에는 코드 변경 이력이 명확하지 않아 협업에 어려움이 있었습니다. Git Flow를 도입함으로써 브랜치 전략을 명확히 하고, 코드 리뷰와 병합 과정을 체계화하여 개발 효율성을 높였습니다.'
      },
      {
        title: 'GCP Bastion Host 기반 Private 네트워크',
        description: 'Bastion Host를 중심으로 한 Private 네트워크 아키텍처 설계 및 구현',
        reason: 'GCP 보안 점수가 30%에 머물러 있어, 외부 노출을 최소화하는 방향으로 인프라를 재설계했습니다. Bastion Host를 통해 내부 리소스에 대한 접근을 통제하고, Private IP로 전환하여 보안 점수를 크게 향상시켰습니다.'
      },
      {
        title: 'Chart.js 커스텀 차트 구현',
        description: 'Tableau 대신 Chart.js로 커스텀 차트 구현',
        reason: 'Tableau의 로딩 지연 문제를 해결하기 위해, 직접 차트를 구현하여 성능을 최적화했습니다. Chart.js를 활용해 Skeleton UI와 세션 스토리지를 적용함으로써 사용자 경험을 크게 개선할 수 있었습니다.'
      }
    ],
    challenges: [
      {
        title: '보안 점수 30%에서 90%로 향상',
        situation: 'GCP 보안 점수가 30%에 불과하여, 외부 공격에 취약한 상태였습니다.',
        approach: '1) 기존 퍼블릭 IP 인스턴스를 Private IP로 전환, 2) Bastion Host를 도입하여 내부 리소스 접근 통제, 3) 방화벽 규칙 재설계 및 최소 권한 원칙 적용, 4) 정기적인 보안 점검 및 모니터링 체계 구축',
        outcome: '보안 점수를 90%까지 향상시켰으며, 외부 노출을 최소화하여 보안 리스크를 크게 줄였습니다.'
      },
      {
        title: '배포 시간 10분에서 3분으로 단축',
        situation: '코드 배포 시간이 10분 이상 소요되어 개발 효율성이 저하되고 있었습니다. 수동 배포 과정에서 실수가 발생할 위험도 있었습니다.',
        approach: '1) Git Flow 전략 도입으로 브랜치 관리 체계화, 2) Jenkins 기반 CI/CD 파이프라인 구축, 3) 자동화 스크립트 작성으로 빌드 및 배포 과정 단순화, 4) 배포 전후 자동 테스트 및 롤백 메커니즘 구현',
        outcome: '배포 시간을 3분으로 단축시켰으며, 자동화된 배포 프로세스로 인해 실수 발생 가능성을 크게 줄였습니다.'
      },
      {
        title: 'Tableau 성능 병목 해소 및 사용자 경험 개선',
        situation: 'Tableau 대시보드의 차트 로딩이 지연되어 사용자 경험이 저하되고 있었습니다. 특히 대용량 데이터 처리 시 성능 병목이 심각했습니다.',
        approach: '1) Tableau 사용 패턴 분석 및 병목 구간 식별, 2) Chart.js를 활용한 커스텀 차트 개발, 3) Skeleton UI 적용으로 로딩 중 사용자 피드백 제공, 4) 세션 스토리지를 활용하여 자주 조회되는 데이터 캐싱',
        outcome: '차트 로딩 속도가 크게 향상되어 사용자 경험이 개선되었으며, 대용량 데이터 처리 시에도 원활한 성능을 유지할 수 있었습니다.'
      }
    ],
    results: [
      {
        type: 'quantitative',
        description: 'GCP 보안 점수를 30%에서 90%로 향상',
        metric: '60% 증가'
      },
      {
        type: 'quantitative',
        description: '코드 배포 시간을 10분에서 3분으로 단축',
        metric: '70% 감소'
      },
      {
        type: 'qualitative',
        description: 'Bastion Host 기반 Private 네트워크로 외부 노출 최소화'
      },
      {
        type: 'qualitative',
        description: 'Git Flow 도입으로 협업 효율성 및 릴리즈 안정성 확보'
      },
      {
        type: 'qualitative',
        description: 'Chart.js 커스텀 차트로 Tableau 성능 병목 해소 및 사용자 경험 개선'
      }
    ],
    retrospective: [
      'GCP 인프라 보안 강화를 통해 Bastion Host와 Private 네트워크의 중요성을 깊이 이해하게 되었습니다. 보안 점수 향상은 단순한 수치 개선을 넘어, 실제 운영 환경의 안전성을 크게 높이는 결과를 가져왔습니다.',
      'Git Flow 전략을 도입하면서 체계적인 소스 코드 관리와 협업의 중요성을 깨달았습니다. 명확한 브랜치 전략과 코드 리뷰 프로세스는 개발 효율성을 크게 향상시켰습니다.',
      'CI/CD 파이프라인 구축 경험을 통해 자동화의 가치를 실감했습니다. 배포 시간을 단축하고 실수 가능성을 줄이는 것은 개발자 생산성 향상에 직접적인 영향을 미쳤습니다.',
      'Tableau의 한계를 극복하기 위해 Chart.js로 커스텀 차트를 구현한 경험은 도구 선택의 중요성을 일깨워주었습니다. 익숙한 도구가 항상 최선은 아니며, 문제에 적합한 도구를 선택하는 것이 더 나은 결과를 가져온다는 것을 배웠습니다.'
    ],
    keyTakeaway: '안정적인 운영과 보안 강화를 통해 시스템의 신뢰성을 확보하는 것이 무엇보다 중요하다는 것을 배웠습니다.',
    improvements: [
      {
        title: '테스트 코드 작성 부족',
        situation: '프로젝트 초기에는 테스트 코드 작성에 충분한 시간을 할애하지 못했습니다. 빠른 개발과 배포에 집중하다 보니, 단위 테스트와 통합 테스트가 부족했습니다.',
        consequence: '운영 중에 예상치 못한 버그가 발생하여 긴급 수정이 필요했고, 이는 개발 일정에 영향을 미쳤습니다.',
        wouldDoDifferently: '초기부터 테스트 코드를 체계적으로 작성하고, CI/CD 파이프라인에 자동화된 테스트 단계를 포함시킬 것입니다. 이는 코드 품질을 높이고, 운영 중 발생할 수 있는 문제를 사전에 방지하는 데 도움이 될 것입니다.'
      }
    ]
  },
  {
    id: 'kia-voc',
    title: 'KIA Mexico VoC (Voice of Customer) 대시보드',
    period: '2025.08 ~ 2025.09 (개발) / 2025.09 ~ 현재 (운영)',
    company: '빅마음 (Bigmaum)',
    projectType: 'both',
    description: 'VOC 텍스트를 업로드하고 DeepL로 자동 번역하여 공장 대형 스크린에 실시간 게시',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'DeepL API', 'Linux'],
    context: 'KIA 멕시코 법인장 지시로 시작된 프로젝트입니다. 멕시코 자동차 공장 3~5곳에 각각 1~8개의 스크린을 이어붙여 VOC를 표시합니다. 스페인어 지역이라 모든 소통을 영어로 진행했습니다.',
    problem: [
      '대형 스크린에 맞는 UI 필요',
      '공장별 장비 관리 및 권한 제어',
      '다국어 자동 번역'
    ],
    myRole: '1인 Full Stack 개발/운영, 영어로 해외 협업',
    decisionAndArchitecture: [
      {
        title: 'DeepL API 자동 번역',
        description: 'VOC 업로드 시 DeepL API로 자동 번역',
        reason: '스페인어/영어/한국어 다국어 환경에서 언어 장벽 해소'
      },
      {
        title: 'UUID 기반 장비 관리',
        description: '각 디스플레이 장비에 고유 UUID 부여',
        reason: '공장마다 네트워크 환경이 달라 IP 기반 관리 불가능'
      }
    ],
    challenges: [
      {
        title: '대형 스크린 UI 최적화',
        situation: '일반 웹과 다르게 멀리서도 보여야 하는 공장 환경',
        approach: '폰트 크기, 색상 대비, 애니메이션 속도를 다르게 설정. 공장 환경 사진을 받아가며 조정',
        outcome: '멀리서도 명확히 보이는 UI 완성'
      },
      {
        title: 'UUID 기반 장비 관리',
        situation: 'IP 기반 관리가 네트워크 환경 차이로 불가능',
        approach: '각 장비에 UUID 부여, Device 관리 모듈 표준화',
        outcome: '공장과 스크린을 고유하게 식별하여 관리 효율성 향상'
      }
    ],
    results: [
      {
        type: 'qualitative',
        description: '멕시코 공장 3~5곳, 각 1~8개 스크린 운영 중'
      },
      {
        type: 'qualitative',
        description: 'DeepL 자동 번역으로 언어 장벽 해소'
      },
      {
        type: 'qualitative',
        description: 'UUID 기반 장비 관리로 추적 및 제어 구현'
      }
    ],
    retrospective: [
      '대형 스크린 UI는 일반 웹과 다르다. 폰트, 색상 대비, 애니메이션 속도 모두 별도 설정 필요',
      'UUID 기반 장비 관리가 IP보다 훨씬 효과적. 네트워크 환경이 다양할수록 UUID가 유리',
      '영어 실시간 소통이 처음엔 긴장됐지만 화상 미팅 거듭하며 익숙해짐'
    ],
    keyTakeaway: '같은 웹이라도 환경이 다르면 완전히 다른 접근이 필요하다는 것을 배웠습니다. 공장의 대형 스크린은 일반 웹과 다른 가독성 기준을 요구했습니다.',
    improvements: [
      {
        title: '초기 환경 테스트 부족',
        situation: '일반 모니터에서 개발 후 실제 공장 대형 스크린에 배포',
        consequence: '폰트 크기, 색상 대비가 실제 환경에서 예상과 달라 여러 번 수정',
        wouldDoDifferently: '특수 환경(대형 스크린, 키오스크)은 가능한 한 빨리 실제 환경에서 테스트. 시뮬레이션은 한계가 있음'
      }
    ]
  },
  {
    id: 'kia-facilities',
    title: 'KIA Mexico Facilities 사내 업무 프로세스',
    period: '2023.10 ~ 2024.02 (5개월)',
    company: '빅마음 (Bigmaum)',
    projectType: 'both',
    description: '시설 보수 및 신규 개발 요청 신청·관리, 업체 선정, 예산 설정, 결과물 승인, 전체 프로세스 관리',
    tags: ['Node.js', 'Express', 'MariaDB', 'Linux', 'JWT', 'i18n'],
    context: 'KIA 멕시코 공장의 시설 관리 프로세스가 수작업 중심으로 이루어져 비효율적이었습니다. 요청 등록부터 업체 선정, 예산 설정, 승인까지 전 과정을 통합 관리할 수 있는 시스템이 필요했고, 해외 협업을 위한 다국어 지원도 필수였습니다.',
    problem: [
      '시설 요청 및 관리 프로세스가 수작업으로 진행되어 비효율적',
      '외부 업체와의 협업 채널이 분산되어 견적 및 평가 추적이 어려움',
      '결재 시스템이 없어 승인 흐름이 불명확',
      '스페인어/영어 다국어 지원 필요'
    ],
    myRole: '1인 Full Stack 개발 및 운영을 담당했습니다. 영어로 해외 협업하며 요구사항을 수집하고, 전체 워크플로우를 설계 및 구현했습니다.',
    decisionAndArchitecture: [
      {
        title: 'Express 기반 모듈형 라우터',
        description: 'Express의 모듈형 라우터와 PM2 프로세스 관리 활용',
        reason: '운영/개발 환경 전환을 단순화하고, 각 기능별 라우터를 독립적으로 관리하여 유지보수성 향상'
      },
      {
        title: 'i18n 기반 다국어 지원',
        description: 'i18n 모듈 및 세션 기반 언어 유지로 스페인어/영어 UI 지원',
        reason: '멕시코 현지 직원과 본사 직원 모두 사용할 수 있도록 다국어 지원 필수. 세션 기반으로 사용자별 언어 설정 유지'
      },
      {
        title: 'Passport + JWT 기반 인증',
        description: 'Passport와 JWT를 결합한 인증 시스템 구현',
        reason: '세션 기반 인증의 확장성 한계를 극복하고, Stateless한 JWT로 보안 및 접근 제어 강화'
      }
    ],
    challenges: [
      {
        title: '전체 워크플로우 구현',
        situation: '시설 요청 등록부터 카테고리 매핑, 담당자 자동 배정, 진행/종결 모니터링까지 전 주기 관리 필요',
        approach: '1) 요청 등록 시 카테고리별 담당자 자동 배정 로직 구현, 2) 복수 승인자 결재 시스템 구현, 3) 공급사 포털을 통한 업체 등록·견적·평가 자동화, 4) 요청서·견적·결재 문서 파일/DB 동기화',
        outcome: '전체 프로세스를 단일 포털에서 관리. 외부 협력사와의 협업 채널 일원화'
      },
      {
        title: '보안 강화 및 권한 관리',
        situation: '민감 정보 보호 및 역할별 접근 제어 필요',
        approach: '1) TDE(Key) 기반 DB 암호화 적용, 2) Passport+JWT 기반 인증 및 권한 검사 미들웨어 구현, 3) 계정 라이프사이클 관리 (임시 비밀번호, 최초 로그인, 변경 로그), 4) WAS SSL → WEB Server SSL 방식 전환',
        outcome: '민감정보 보호 강화 및 HTTPS 체계 명확화. 역할별 맞춤 네비게이션 제공'
      },
      {
        title: '운영 자동화',
        situation: '승인 대기, 평가 미완료 등 운영 이벤트를 수동으로 추적',
        approach: '1) 승인 대기·평가 미완료 알림 자동 발송, 2) 주간 현황 메일 자동 발송, 3) Winston 로그 로테이션 및 DB 요청 로그 적재',
        outcome: '운영 이벤트 추적 및 감사 요건 충족. 관리자의 수동 작업 감소'
      }
    ],
    results: [
      {
        type: 'qualitative',
        description: '시설 요청부터 승인까지 전 주기 워크플로우를 단일 포털에서 관리'
      },
      {
        type: 'qualitative',
        description: '외부 협력사와의 협업 채널 일원화로 견적 및 평가 추적 용이'
      },
      {
        type: 'qualitative',
        description: 'TDE 기반 DB 암호화로 민감정보 보호 강화'
      },
      {
        type: 'qualitative',
        description: '다국어 지원으로 멕시코 현지 및 본사 직원 모두 사용 가능'
      }
    ],
    retrospective: [
      '해외 협업 경험을 통해 영어 커뮤니케이션 능력을 향상시켰고, 문화적 차이를 고려한 UI/UX 설계의 중요성을 배웠습니다.',
      '전체 프로세스를 처음부터 설계하면서 워크플로우 설계의 복잡성과 중요성을 깨달았습니다. 특히 복수 승인자 결재 시스템은 많은 고민이 필요했습니다.',
      'TDE 기반 DB 암호화를 직접 적용하면서 데이터 보호의 중요성을 체감했고, 암호화가 성능에 미치는 영향도 고려해야 함을 배웠습니다.',
      'i18n을 활용한 다국어 지원은 단순히 텍스트 번역을 넘어, 날짜 형식, 통화 단위 등 로컬라이제이션까지 고려해야 한다는 것을 경험했습니다.'
    ],
    keyTakeaway: '도구를 도입하는 것보다 그 가치를 팀이 이해하게 만드는 것이 더 중요하다는 것을 배웠습니다.',
    improvements: [
      {
        title: '초기에 i18n 구조 설계 미흡',
        situation: 'i18n을 개발 중반에 도입했습니다. 초기에는 "한국어만 지원해도 되겠지"라고 생각했습니다.',
        consequence: '기존 코드의 모든 텍스트를 i18n 키로 교체하는 작업이 필요했고, 일부 하드코딩된 텍스트를 놓쳐 나중에 발견되었습니다.',
        wouldDoDifferently: '해외 프로젝트는 초기부터 다국어 지원을 기본으로 설계할 것입니다. i18n 구조는 나중에 추가하기보다 처음부터 적용하는 것이 훨씬 수월합니다.'
      }
    ]
  },
  {
    id: 'kia-ehs',
    title: 'KIA Mexico EHS 사내 업무 프로세스 통합',
    period: '2022.10 ~ 2023.06 (9개월)',
    company: '빅마음 (Bigmaum)',
    projectType: 'both',
    description: 'Environment, Health, Safety 업무 프로세스를 통합 관리하는 시스템 개발',
    tags: ['Node.js', 'Express', 'MariaDB', 'Linux', 'Passport', 'Winston'],
    context: 'KIA 멕시코 공장의 EHS(Environment, Health, Safety) 업무가 각각 분리되어 관리되고 있었습니다. 의료, 안전, 환경 데이터를 통합 관리하고, ESG 데이터를 체계적으로 수집할 필요가 있었습니다.',
    problem: [
      '의료, 안전, 환경 업무가 각각 분리되어 통합 관리 어려움',
      'HR 데이터와 연동되지 않아 환자 정보 조회 불편',
      '사고 조사 및 후속 조치 이력이 구조화되지 않아 추적 어려움',
      'ESG 데이터 수집 및 보고가 수작업으로 진행'
    ],
    myRole: '1인 Full Stack 개발 및 운영을 담당했습니다. 의료, 안전, 환경 세 영역을 통합하는 시스템을 설계하고 구현했습니다.',
    decisionAndArchitecture: [
      {
        title: 'HR 데이터 연동',
        description: 'HR 시스템과 연동하여 환자 기본정보·알레르기 조회',
        reason: '의료 업무에서 환자 정보를 매번 입력하는 비효율을 제거하고, 정확한 정보를 바탕으로 맞춤 진료 지원'
      },
      {
        title: '진료 기록 흐름 설계',
        description: '접수 → 간호 → 의사 → 물리치료로 이어지는 진료 기록 흐름을 단일 포털에서 처리',
        reason: '진료 과정을 체계화하고, 각 단계별 기록을 통합 관리하여 환자 이력 추적 용이'
      },
      {
        title: 'ESG 데이터 자동화',
        description: '에너지·폐기물 KPI 입력 및 월/연 누계 자동 계산, Excel 정적 리포트 자동 생성',
        reason: 'ESG 보고 주기를 단축하고, 수작업으로 인한 오류 방지'
      }
    ],
    challenges: [
      {
        title: '통합 포털 구현',
        situation: '의료, 안전, 환경 세 영역을 하나의 시스템에서 관리',
        approach: '1) 의료: HR 데이터 연동, 진료 기록 흐름 설계, 2) 안전: 사건 접수, 이미지 증빙, 메일 알림, 담당자 지정, 3) 환경: 에너지·폐기물 KPI 입력, 월/연 누계 계산, Excel 리포트 생성',
        outcome: '세 영역을 단일 포털에서 통합 관리. 각 영역별 데이터 추적 가능'
      },
      {
        title: '보안 및 권한 관리',
        situation: '의료 정보 등 민감 정보 보호 및 역할별 접근 제어 필요',
        approach: '1) MySQL 세션 스토어와 Passport·JWT 기반 다계층 검증, 2) 권한별 메뉴/라우트 차단, 3) 약관 동의·비밀번호 초기화 자동화',
        outcome: '세션 신뢰도 강화 및 접근 범위 분리'
      },
      {
        title: '운영 자동화 및 커뮤니케이션',
        situation: '진료 예약, 사고 알림 등 실시간 커뮤니케이션 필요',
        approach: '1) Winston 로그 로테이션 및 DB 기반 요청 로깅, 2) Nodemailer·Push API 통합으로 진료 예약·사고 알림을 이메일/사내 알림에 동시 송출',
        outcome: '장애 추적 및 사용량 분석 체계화. 실시간 알림으로 대응 속도 향상'
      }
    ],
    results: [
      {
        type: 'qualitative',
        description: 'EHS 세 영역을 단일 포털에서 통합 관리'
      },
      {
        type: 'qualitative',
        description: 'HR 데이터 연동으로 의료 업무 효율성 향상'
      },
      {
        type: 'qualitative',
        description: 'ESG 데이터 자동화로 보고 주기 단축'
      },
      {
        type: 'qualitative',
        description: '실시간 알림 시스템으로 사고 대응 속도 향상'
      }
    ],
    retrospective: [
      '의료, 안전, 환경이라는 서로 다른 도메인을 하나의 시스템에 통합하면서 도메인 지식의 중요성을 깨달았습니다. 각 영역의 전문가와 소통하며 요구사항을 정확히 파악하는 것이 중요했습니다.',
      'HR 시스템과의 연동 경험을 통해 외부 시스템 통합 시 데이터 일관성과 동기화 전략의 중요성을 배웠습니다.',
      'ESG 데이터 자동화는 단순히 기능 구현을 넘어, 실제 업무 프로세스를 개선하는 것이 얼마나 중요한지 체감하게 해준 경험이었습니다.',
      'Winston 로그 시스템을 구축하면서 로깅이 단순히 디버깅 도구가 아니라, 운영 및 감사의 핵심 도구임을 배웠습니다.'
    ],
    keyTakeaway: '서로 다른 도메인을 통합할 때, 기술보다 도메인 전문가와의 소통이 더 중요하다는 것을 배웠습니다.',
    improvements: [
      {
        title: '도메인 지식 부족 상태로 개발 시작',
        situation: '의료, 안전, 환경 세 영역에 대한 충분한 이해 없이 개발을 시작했습니다. "요구사항대로 만들면 되겠지"라고 생각했습니다.',
        consequence: '개발 중간에 도메인 특수성을 이해하게 되면서 설계를 수정해야 하는 경우가 있었습니다. 예를 들어, 의료 기록의 법적 보존 기간 요구사항을 늦게 파악하여 데이터 아카이빙 로직을 추가해야 했습니다.',
        wouldDoDifferently: '새로운 도메인의 프로젝트는 개발 전에 도메인 전문가와 충분한 사전 미팅을 가질 것입니다. 최소 1주일은 도메인 학습에 투자합니다.'
      }
    ]
  }
]
