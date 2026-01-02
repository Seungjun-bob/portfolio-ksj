import { PersonalInfo } from '../types'

export const personalInfo: PersonalInfo = {
  name: '강승준',
  title: 'Backend & Infra Engineer',
  birth: '1996.01.05',
  email: 'rkdtmdwns0105@gmail.com',
  phone: '010-8368-0105',
  blog: 'https://bob-data.tistory.com/',
  github: 'https://github.com/Seungjun-bob',
  introduce: [
    '개발자는 지휘자와 같다.\n보이지 않는 무대 위에서\n수많은 소리의 가능성을 바라본다.',
    '언어와 프레임워크는 악기이고,\n인프라는 리듬이며,\n요구사항은 연주의 주제다.',
    '나는 먼저 악보를 그린다.\n무엇을 만들 것인지보다\n어떤 흐름이 자연스러운지 고민하며,\n어떤 악기가 이 장면에 어울리는지를 선택한다.',
    '각 파트가 제 소리를 내되\n서로를 덮지 않도록,\n전체가 하나의 음악으로 들리도록\n조율하는 것이 나의 일이다.',
    '완벽한 연주는 없다.\n하지만 좋은 연주는\n왜 이 구성이 필요한지\n스스로 설명할 수 있다.',
    '나는 코드를 쓰는 사람이기보다\n구조를 읽고, 흐름을 만들고,\n하나의 연주를 완성하는\n지휘자가 되고자 한다.'
  ],
  coreMessage: '좋은 시스템은 스스로 설명할 수 있어야 합니다.',
  philosophyPrinciples: [
    {
      verse: 2,
      poem: '언어와 프레임워크는 악기이고,\n인프라는 리듬이며,\n요구사항은 연주의 주제다.',
      principle: '도구는 목적에 맞게 선택한다',
      description: '기술 자체가 아닌, 문제 해결에 적합한 도구를 선택합니다.',
      linkedProject: 'samsung-digital-marketing'
    },
    {
      verse: 3,
      poem: '나는 먼저 악보를 그린다.\n무엇을 만들 것인지보다\n어떤 흐름이 자연스러운지 고민하며,\n어떤 악기가 이 장면에 어울리는지를 선택한다.',
      principle: '설계가 구현보다 먼저다',
      description: '코드를 작성하기 전에 전체 흐름을 그립니다.',
      linkedProject: 'kb-tableau-drm'
    },
    {
      verse: 5,
      poem: '완벽한 연주는 없다.\n하지만 좋은 연주는\n왜 이 구성이 필요한지\n스스로 설명할 수 있다.',
      principle: '모든 결정에는 이유가 있어야 한다',
      description: '기술 선택, 아키텍처 결정 모두 "왜"를 설명할 수 있어야 합니다.',
      linkedProject: 'samsung-digital-marketing'
    }
  ]
}
