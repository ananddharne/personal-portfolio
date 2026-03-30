import { describe, it, expect, beforeEach, vi } from 'vitest'
import { checkRateLimit, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from '@/lib/rateLimit'

describe('checkRateLimit', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('allows requests under the limit', () => {
    const ip = 'test-ip-1'
    for (let i = 0; i < RATE_LIMIT_MAX; i++) {
      expect(checkRateLimit(ip)).toBe(true)
    }
  })

  it('blocks the request that exceeds the limit', () => {
    const ip = 'test-ip-2'
    for (let i = 0; i < RATE_LIMIT_MAX; i++) {
      checkRateLimit(ip)
    }
    expect(checkRateLimit(ip)).toBe(false)
  })

  it('resets after the window expires', () => {
    const ip = 'test-ip-3'
    for (let i = 0; i < RATE_LIMIT_MAX; i++) {
      checkRateLimit(ip)
    }
    expect(checkRateLimit(ip)).toBe(false)
    vi.advanceTimersByTime(RATE_LIMIT_WINDOW_MS + 1)
    expect(checkRateLimit(ip)).toBe(true)
  })

  it('tracks different IPs independently', () => {
    const ip1 = 'test-ip-4a'
    const ip2 = 'test-ip-4b'
    for (let i = 0; i < RATE_LIMIT_MAX; i++) {
      checkRateLimit(ip1)
    }
    expect(checkRateLimit(ip1)).toBe(false)
    expect(checkRateLimit(ip2)).toBe(true)
  })
})
