import { motion } from 'framer-motion'
import { useState } from 'react'

const items = [
  { kind: 'dot', text: 'FULLSTACK WEB DEVELOPER', dotClass: 'bg-primary', ping: true },
  { kind: 'sep' },
  { kind: 'text', text: 'REACT.JS & TAILWIND CSS' },
  { kind: 'sep' },
  { kind: 'text', text: 'LARAVEL & CI4 RESTFUL API' },
  { kind: 'sep' },
  { kind: 'text', text: 'MYSQL DATABASE' },
  { kind: 'sep' },
  { kind: 'dot', text: 'SERTIFIKASI JUNIOR WEB PROGRAMMING BNSP', dotClass: 'bg-secondary-container', ping: true },
  { kind: 'sep' },
  { kind: 'text', text: 'S1 TEKNIK INFORMATIKA UNTAG SURABAYA' },
  { kind: 'sep' },
  { kind: 'text', text: 'TERSEDIA UNTUK PROYEK & KARIR' },
]

const Chunk = () => (
  <>
    {items.map((it, i) => {
      if (it.kind === 'sep') {
        return <span key={i} className="text-on-surface font-headline-sm shrink-0">•</span>
      }
      if (it.kind === 'dot') {
        return (
          <span key={i} className="inline-flex items-center gap-space-2xs font-label-md text-label-md text-on-tertiary-fixed uppercase font-bold shrink-0">
            <span className={`w-2.5 h-2.5 rounded-full ${it.dotClass} shrink-0 ${it.ping ? 'animate-ping' : ''}`} />
            {it.text}
          </span>
        )
      }
      return (
        <span key={i} className="font-label-md text-label-md text-on-tertiary-fixed uppercase font-bold shrink-0">
          {it.text}
        </span>
      )
    })}
  </>
)

export default function MarqueeTicker() {
  const [paused, setPaused] = useState(false)
  const speed = paused ? 0 : -70

  return (
    <section
      className="w-full bg-tertiary-fixed border-y-[2.5px] border-on-surface overflow-hidden select-none relative h-10 sm:h-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] [background:repeating-linear-gradient(90deg,transparent,transparent_6px,rgba(25,27,35,0.5)_6px,rgba(25,27,35,0.5)_8px)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] [background:radial-gradient(circle,rgba(25,27,35,1)_1px,transparent_1.2px)] [background-size:14px_14px]" />
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-tertiary-fixed to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-tertiary-fixed to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-white/55 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-white/35 pointer-events-none" />

      <motion.div
        className="flex gap-space-lg sm:gap-space-xl items-center whitespace-nowrap py-space-2xs will-change-transform"
        animate={{ x: [0, speed * 40] }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <div className="flex items-center gap-space-lg sm:gap-space-xl shrink-0 pr-space-lg sm:pr-space-xl">
          <Chunk />
        </div>
        <div className="flex items-center gap-space-lg sm:gap-space-xl shrink-0 pr-space-lg sm:pr-space-xl" aria-hidden>
          <Chunk />
        </div>
        <div className="flex items-center gap-space-lg sm:gap-space-xl shrink-0 pr-space-lg sm:pr-space-xl" aria-hidden>
          <Chunk />
        </div>
      </motion.div>
    </section>
  )
}
