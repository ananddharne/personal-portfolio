'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { ChatPanel } from './ChatPanel'

export function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ChatPanel onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Close chat' : "Chat with Anand's AI assistant"}
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
        style={{
          background: open ? 'var(--accent)' : 'var(--text)',
          color: 'var(--bg)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}
      >
        <Sparkles size={18} />
      </motion.button>
    </div>
  )
}
