import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'kb-tableau-drm',
    title: 'KB손해보험 Tableau DRM 다운로드 시스템',
    period: '2025.11 ~ 2025.12 (2개월)',
    company: '빅마음 (Bigmaum)',
    description: 'Tableau 대시보드 데이터를 DRM 적용 상태로 안전하게 다운로드할 수 있는 전용 서버 및 웹 시스템 구축',
    tags: ['Java', 'Tomcat', 'Tableau REST API', 'Fasoo DRM', 'JWT', 'SSO'],
    context: 'KB손해보험 내부 사용자들이 Tableau 대시보드의 데이터를 다운로드할 때 DRM(Digital Rights Management)을 적용하여 데이터 유출을 방지해야 하는 요구사항이 있었습니다. 또한 IE에서 Edge로 전환하는 과도기적 보안 환경에서 SSO 인증과 Tableau Server 연동을 안정적으로 처리해야 했습니다.',
    problem: [
      'Tableau 화면에서 직접 다운로드 시 DRM 적용 불가능',
      'IE 기반 SSO와 Tableau(Edge 필수) 브라우저 간 인증 연계 문제',
      '프로젝트 진행 중 고객 요구사항 변경 (서버 페이징 → Tableau 임베딩 방식)',
      '사용자별 View 접근 권한 제어 및 필터링 처리 필요'
    ],
    myRole: 'Java 기반 서버 설계 및 구현을 담당했습니다. Tableau Server REST API 연동, SSO 인증 후 JWT 토큰 체계 구현, DRM 연동 로직 설계, View 기반 접근 제어 및 필터링 기능을 구현했습니다.',
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
        title: '요구사항 변경 대응 (서버 페이징 → Tableau 임베딩)',
        situation: '프로젝트 초반에는 서버에서 페이징 처리 방식으로 설계. 진행 중 고객이 Tableau 화면 자체에 버튼을 두고 사용자가 직접 다운로드하길 원함',
        approach: '1) 서버 주도 페이징 방식 폐기, 2) Tableau Server에 임베딩된 View 기준으로 View ID 식별, 3) 서버는 다운로드 전용 역할만 담당하도록 구조 변경, 4) View ID 기반 접근 제어 페이지 개발',
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
      'IE에서 Edge로 전환하는 과도기적 환경에서 브라우저 간 인증 연계라는 독특한 문제를 해결하면서, 레거시 시스템과 모던 기술의 공존 방법을 배웠습니다.',
      '프로젝트 진행 중 요구사항이 크게 변경되는 상황에서 유연한 아키텍처의 중요성을 깨달았습니다. 초기 설계 시 확장성을 고려하는 것이 얼마나 중요한지 체감했습니다.',
      'Tableau REST API를 활용한 데이터 추출 및 필터링 경험을 통해 BI 도구와의 연동 방법을 익혔고, vf_ 파라미터를 활용한 동적 필터링의 강력함을 배웠습니다.',
      'DRM 시스템 연동 경험을 통해 데이터 보안의 중요성과 DRM이 데이터 유출 방지에 얼마나 효과적인지 이해하게 되었습니다.'
    ]
  },
  {
    id: 'samsung-digital-marketing',
    title: '삼성전자 Digital Marketing 데이터 통합 대시보드',
    period: '2024.07 ~ 2025.08 (13개월)',
    company: '빅마음 (Bigmaum)',
    description: '인플루언서 성과 데이터를 저장·관리하며, 통계 차트 및 Tableau 대시보드로 시각화',
    tags: ['GCP', 'Kotlin', 'SpringBoot', 'MySQL', 'BigQuery', 'Chart.js', 'CI/CD'],
    context: '프로젝트를 시작하면서 가장 먼저 던진 질문은 "왜 데이터가 분산되어 있는가?"였습니다. 마케팅 팀과 대화하며 발견한 것은, 문제의 본질이 "도구의 부재"가 아니라 "의사결정을 위한 신뢰할 수 있는 단일 진실 공급원(Single Source of Truth)의 부재"였습니다. 각 팀이 자신만의 스프레드시트로 데이터를 관리하다 보니, 같은 캠페인에 대해서도 서로 다른 숫자를 이야기하는 상황이 빈번했습니다.\n\n이 깨달음이 중요했던 이유는, 단순히 "데이터 시각화 도구"를 만드는 것이 아니라 "팀 간 데이터 신뢰도를 회복하는 시스템"을 만들어야 한다는 방향성을 잡을 수 있었기 때문입니다. 동시에 GCP 보안 점수 30%라는 수치를 보고, "왜 이렇게 낮은가?"를 파고들면서 보안이 단순한 체크리스트가 아니라 시스템 설계의 근간이 되어야 한다는 것을 깨달았습니다.',
    problem: [
      '인플루언서 성과 데이터가 여러 소스에 분산되어 통합 관리가 어려움',
      'Tableau 성능 병목으로 인한 차트 로딩 지연',
      'GCP 환경의 보안 취약점 (보안 점수 30%)',
      '코드 배포 시간이 10분 이상 소요되어 개발 효율성 저하'
    ],
    myRole: '1인 Full Stack 개발 및 인프라 보안 운영을 담당했습니다. 백엔드 개발, 웹 개발, GCP 인프라 보안 강화, CI/CD 파이프라인 구축까지 전체 시스템을 설계하고 구현했습니다.',
    decisionAndArchitecture: [
      {
        title: 'Kotlin + Spring Boot: 익숙함보다 적합함을 선택',
        description: 'Node.js가 아닌 Kotlin + Spring Boot를 선택한 이유',
        reason: '처음에는 익숙한 Node.js로 시작하려 했습니다. 하지만 "이 프로젝트에 정말 적합한가?"를 고민하면서 세 가지 기준으로 비교했습니다: 1) 타입 안정성 - 마케팅 데이터의 복잡한 구조를 다루는데 Kotlin의 null safety와 data class가 훨씬 명확했습니다, 2) 엔터프라이즈 생태계 - 삼성전자라는 대기업 환경에서 Spring의 검증된 보안/트랜잭션 처리가 필요했습니다, 3) 학습 기회 - "편한 길"보다 "성장할 수 있는 길"을 선택하고 싶었습니다. 결과적으로 Kotlin의 간결함과 Spring Boot의 강력함이 프로젝트 내내 올바른 선택이었음을 증명했습니다.'
      },
      {
        title: 'GCP 보안: 체크리스트가 아닌 설계 원칙으로',
        description: 'Bastion Host 기반 Private 네트워크 구성',
        reason: 'GCP Security Command Center에서 보안 점수 30%를 보았을 때, 단순히 "지적된 항목을 수정"하는 것이 아니라 "왜 이렇게 설계되었나?"를 되물었습니다. Public IP 노출은 증상이었고, 진짜 문제는 "보안을 나중에 추가하려는 사고방식"이었습니다. 그래서 처음부터 다시 설계했습니다: 모든 서버는 Private 네트워크 내부에, 접근은 Bastion Host를 통해서만, 인증은 OS Login으로 IAM과 통합. 이 "보안 우선" 원칙이 90% 점수라는 결과보다 중요했던 것은, 이후 모든 인프라 결정의 기준이 되었기 때문입니다.'
      },
      {
        title: 'Chart.js vs Tableau: 성능과 제어권의 트레이드오프',
        description: 'Chart.js로 직접 구현하기로 결정',
        reason: 'Tableau는 강력하지만 커스터마이징에 한계가 있었고, 로딩 시간이 사용자 경험을 해쳤습니다. "기존 도구를 최적화할 것인가, 새로 만들 것인가?"를 놓고 고민했습니다. 결정의 기준은 "제어권"이었습니다. Chart.js는 코드로 모든 것을 제어할 수 있어, Skeleton UI로 로딩 경험을 개선하고, SessionStorage로 사용자 상태를 기억하는 등 세밀한 UX 개선이 가능했습니다. 개발 시간은 더 들었지만, "우리가 원하는 경험"을 정확히 구현할 수 있었습니다.'
      }
    ],
    challenges: [
      {
        title: '보안 점수 30% 뒤에 숨겨진 근본 원인 찾기',
        situation: 'GCP Security Command Center가 보안 점수 30%를 보여줬을 때, 제가 먼저 한 일은 "왜?"를 묻는 것이었습니다. 단순히 Public IP가 문제라고 보기엔 뭔가 더 깊은 구조적 문제가 있다고 느꼈습니다. 팀과 대화하며 발견한 것은, 보안이 "나중에 추가할 것"으로 여겨졌다는 점이었습니다.',
        approach: '문제의 근본 원인을 파악한 후, "어떻게 하면 보안을 기본값으로 만들 수 있을까?"를 고민했습니다: 모든 서버를 Private IP로 전환하여 기본적으로 외부 접근 차단, Bastion Host를 single point of entry로 만들어 접근 경로 단일화, OS Login으로 IAM 권한과 서버 접근을 통합하여 "권한이 곧 접근"이 되도록 설계, Cloud Armor로 네트워크 레벨에서 불필요한 트래픽 차단, MySQL도 SSL 필수로 만들어 암호화되지 않은 연결 자체를 불가능하게 함',
        outcome: '점수 90%라는 숫자보다 중요한 것은, "보안을 나중에 추가하는 것"에서 "보안이 기본인 아키텍처"로 사고방식이 바뀌었다는 것입니다. 이후 모든 인프라 결정에서 "이것은 안전한가?"가 첫 번째 질문이 되었습니다.'
      },
      {
        title: 'Git조차 없던 환경에서 CI/CD까지',
        situation: '프로젝트 인수 당시 코드는 FTP로 전송되고, 배포는 수동 스크립트를 실행하는 방식이었습니다. "왜 Git을 안 쓰나요?"라고 물었을 때 돌아온 답은 "그냥 이렇게 해왔어요"였습니다. 10분의 배포 시간은 문제의 표면이었고, 진짜 문제는 "버전 관리와 자동화의 가치를 경험해보지 못했다"는 것이었습니다.',
        approach: 'Git을 도입하면서 가장 신경 쓴 것은 "도구"가 아니라 "문화"였습니다: Git Flow 전략을 함께 정의하며 "왜 브랜치를 나누는가" 설명, GitHub Actions로 CI/CD를 구축하되, 단계별로 자동화를 늘려가며 팀이 가치를 체감하도록 함, 첫 자동 배포 성공 후 팀원들의 반응이 "이제 수동으로 돌아갈 수 없다"였던 것이 가장 큰 성과, IaC로 인프라를 코드화하여 "환경 재현"을 버튼 하나로 만듦',
        outcome: '배포 시간 70% 단축은 부수적 효과였습니다. 진짜 변화는 팀이 "자동화할 수 있는 것은 자동화해야 한다"는 원칙을 받아들인 것이었습니다. 이후 모니터링, 테스트, 문서화까지 자동화 범위가 자연스럽게 확장되었습니다.'
      },
      {
        title: '완벽한 도구보다 제어 가능한 구현을',
        situation: 'Tableau는 강력한 BI 도구지만, 로딩 시간이 사용자 경험을 해치고 있었습니다. "Tableau를 최적화할 것인가, 대체할 것인가?"를 놓고 고민했습니다. 핵심 질문은 "우리에게 필요한 것은 도구의 강력함인가, 경험의 제어권인가?"였습니다.',
        approach: 'Chart.js로 직접 구현하기로 결정한 후, "어떻게 하면 더 나은 경험을 만들 수 있을까?"에 집중했습니다: Skeleton UI로 "로딩 중"을 "곧 보여줄게요"로 바꿔 심리적 대기 시간 단축, SessionStorage로 사용자가 어디까지 봤는지 기억하여 끊김 없는 경험 제공, 차트 인터랙션을 직접 설계하여 정확히 우리가 원하는 UX 구현',
        outcome: 'Tableau보다 기능은 적지만, 우리 사용자에게는 더 나은 도구가 되었습니다. "범용 도구"보다 "우리 문제에 최적화된 해결책"이 더 가치 있다는 것을 배웠습니다.'
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
        description: 'Bastion Host 및 Private IP 전환으로 외부 노출 최소화 및 보안 강화'
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
      '"익숙함"과 "적합함"의 차이: Kotlin을 선택하면서 배운 것은 새로운 언어 문법이 아니라, "내가 편한 것"과 "문제에 적합한 것"을 구분하는 사고방식이었습니다. 이후 모든 기술 선택에서 "왜 이것이 이 문제에 적합한가?"를 먼저 묻게 되었습니다.',
      '보안은 체크리스트가 아닌 사고방식: 보안 점수를 올리는 과정에서 깨달은 것은, 보안은 "나중에 추가하는 것"이 아니라 "설계의 기본 전제"여야 한다는 것입니다. "안전하지 않은 것을 불가능하게 만드는" 아키텍처 설계 원칙은 이후 모든 프로젝트에 적용하고 있습니다.',
      '자동화는 도구가 아닌 문화: CI/CD를 구축하면서 배운 가장 큰 교훈은, 도구를 도입하는 것보다 "왜 자동화가 필요한가"를 팀이 이해하게 만드는 것이 더 중요하다는 점입니다. 도구는 복사할 수 있지만, 자동화 문화는 함께 만들어가야 합니다.',
      '완벽한 도구보다 적합한 해결책: Tableau를 버리고 Chart.js를 선택한 경험에서 배운 원칙은, "80% 기능으로도 우리 문제의 100%를 해결할 수 있다면, 그것이 더 나은 선택"이라는 것입니다. 범용성보다 문제 적합성이 중요합니다.'
    ]
  },
  {
    id: 'kia-facilities',
    title: 'KIA Mexico Facilities 사내 업무 프로세스',
    period: '2023.10 ~ 2024.02 (5개월)',
    company: '빅마음 (Bigmaum)',
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
    ]
  },
  {
    id: 'kia-ehs',
    title: 'KIA Mexico EHS 사내 업무 프로세스 통합',
    period: '2022.10 ~ 2023.06 (9개월)',
    company: '빅마음 (Bigmaum)',
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
    ]
  }
]
