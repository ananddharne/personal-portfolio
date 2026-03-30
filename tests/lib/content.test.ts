import { describe, it, expect } from 'vitest'
import { experience, projects, skillGroups, chatSystemPrompt } from '@/lib/content'

describe('content data', () => {
  it('experience items have required fields', () => {
    expect(experience.length).toBeGreaterThan(0)
    experience.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('role')
      expect(item).toHaveProperty('company')
      expect(item).toHaveProperty('period')
      expect(item).toHaveProperty('description')
      expect(Array.isArray(item.accomplishments)).toBe(true)
    })
  })

  it('projects have required fields', () => {
    expect(projects.length).toBe(4)
    projects.forEach(project => {
      expect(project).toHaveProperty('id')
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(Array.isArray(project.tags)).toBe(true)
      expect(project).toHaveProperty('featured')
    })
  })

  it('skillGroups has four categories', () => {
    expect(skillGroups.length).toBe(4)
    skillGroups.forEach(group => {
      expect(group).toHaveProperty('category')
      expect(Array.isArray(group.skills)).toBe(true)
      expect(group.skills.length).toBeGreaterThan(0)
    })
  })

  it('chatSystemPrompt is a non-empty string', () => {
    expect(typeof chatSystemPrompt).toBe('string')
    expect(chatSystemPrompt.length).toBeGreaterThan(100)
  })
})
