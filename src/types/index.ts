export type ProjectType = 'development' | 'maintenance' | 'both'

export interface Project {
  id: string
  title: string
  period: string
  company: string
  projectType: ProjectType
  description: string
  tags: string[]
  thumbnail?: string
  mainTasks?: string[]
  context: string
  problem: string[]
  myRole: string
  decisionAndArchitecture: DecisionItem[]
  challenges: Challenge[]
  results: Result[]
  retrospective: string[]
  keyTakeaway: string
  improvements?: Improvement[]
}

export interface DecisionItem {
  title: string
  choice?: string
  alternatives?: string[]
  description: string
  reason: string
  outcome?: string
}

export interface Challenge {
  title: string
  situation: string
  approach: string
  outcome: string
}

export interface Result {
  type: 'quantitative' | 'qualitative'
  description: string
  metric?: string
}

export interface PersonalInfo {
  name: string
  title: string
  birth: string
  email: string
  phone: string
  blog: string
  github: string
  tagline: string
  coreMessage: string
  coreMessageContext: string
}

export interface Education {
  school: string
  period: string
  major: string
  submajor?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Improvement {
  title: string
  situation: string
  consequence: string
  wouldDoDifferently: string
}

export interface AboutSection {
  title: string
  content: string
}
