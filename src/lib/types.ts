export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  type: string
  description: string
  accomplishments: string[]
}

export interface Project {
  id: string
  num: string
  title: string
  description: string
  tags: string[]
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  previewAlt?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}
