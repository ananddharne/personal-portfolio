import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ChatPanel } from '@/components/chat/ChatPanel'

describe('ChatPanel', () => {
  it('renders welcome message', () => {
    render(<ChatPanel onClose={() => {}} />)
    expect(screen.getByText(/ask me anything/i)).toBeTruthy()
  })

  it('renders suggestion chips', () => {
    render(<ChatPanel onClose={() => {}} />)
    expect(screen.getByText(/tell me about his projects/i)).toBeTruthy()
  })

  it('calls onClose when × is clicked', () => {
    const onClose = vi.fn()
    render(<ChatPanel onClose={onClose} />)
    fireEvent.click(screen.getByLabelText(/close chat/i))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('disables send when input is empty', () => {
    render(<ChatPanel onClose={() => {}} />)
    const button = screen.getByRole('button', { name: /send/i })
    expect(button).toBeDisabled()
  })
})
