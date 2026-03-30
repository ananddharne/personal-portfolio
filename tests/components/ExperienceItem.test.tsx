import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ExperienceItem } from '@/components/experience/ExperienceItem'

const item = {
  id: 'test',
  role: 'Software Engineer',
  company: 'Test Co',
  period: '2021–2024',
  type: 'Full-time',
  description: 'Did great work.',
  accomplishments: ['Built X', 'Improved Y by 30%'],
}

describe('ExperienceItem', () => {
  it('renders role and company', () => {
    render(<ExperienceItem item={item} />)
    expect(screen.getByText('Software Engineer')).toBeTruthy()
    expect(screen.getByText('Test Co')).toBeTruthy()
  })

  it('accomplishments are hidden by default', () => {
    render(<ExperienceItem item={item} />)
    expect(screen.queryByText('Built X')).toBeNull()
  })

  it('shows accomplishments when expanded', () => {
    render(<ExperienceItem item={item} />)
    fireEvent.click(screen.getByText(/show accomplishments/i))
    expect(screen.getByText('Built X')).toBeTruthy()
  })

  it('hides accomplishments when collapsed again', () => {
    render(<ExperienceItem item={item} />)
    fireEvent.click(screen.getByText(/show accomplishments/i))
    fireEvent.click(screen.getByText(/hide accomplishments/i))
    expect(screen.queryByText('Built X')).toBeNull()
  })
})
