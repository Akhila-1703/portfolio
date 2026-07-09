import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}

export function FadeIn({ children, delay = 0, y = 24, className = '' }: FadeInProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  )
}
