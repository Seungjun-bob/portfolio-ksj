import { Skill } from '../types'

export const skills: Skill[] = [
  {
    category: 'Backend',
    items: ['Kotlin/Spring Boot', 'Node.js (Express/NestJS)', 'Java/Tomcat', 'Python/Django', 'REST API']
  },
  {
    category: 'Infra & DevOps',
    items: ['GCP (Bastion Host, Private Network, Cloud Armor)', 'AWS (Lightsail, Lambda, RDS)', 'Linux', 'CI/CD (Github Actions)', 'Docker']
  },
  {
    category: 'Database',
    items: ['MySQL', 'MariaDB', 'PostgreSQL', 'BigQuery']
  },
  {
    category: 'AI & Agent',
    items: ['Claude Code Agent', 'Claude Agent SDK', 'Llama (fine tuning)']
  },
  {
    category: 'Language',
    items: ['JavaScript', 'TypeScript', 'Kotlin', 'Java', 'Python', 'SQL', 'Bash']
  },
  {
    category: 'Collaboration',
    items: ['Git/GitHub', 'Jira', 'Slack', 'Notion', '영어 커뮤니케이션 (해외 협업)']
  }
]
