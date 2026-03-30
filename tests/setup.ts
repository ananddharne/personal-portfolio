import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock framer-motion so AnimatePresence removes children immediately in tests
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>()
  return {
    ...actual,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    motion: new Proxy(actual.motion, {
      get(target, key) {
        // Return the actual motion components to avoid breaking other things
        return (target as Record<string | symbol, unknown>)[key]
      },
    }),
  }
})
