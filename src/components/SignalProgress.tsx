import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function SignalProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  const [ready, setReady] = useState(false)

  useEffect(() => setReady(true), [])
  if (!ready) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--signal), var(--amber))',
        boxShadow: '0 0 12px color-mix(in srgb, var(--signal) 50%, transparent)',
      }}
    />
  )
}
