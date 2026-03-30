export const RATE_LIMIT_MAX = 20
export const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour

interface Entry {
  count: number
  resetAt: number
}

const store = new Map<string, Entry>()

export function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count++
  return true
}
