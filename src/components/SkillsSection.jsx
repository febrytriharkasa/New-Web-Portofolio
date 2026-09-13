import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const LaravelIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#FF2D20" d="M64 0l64 16v80l-64 32L0 96V16z"/><path fill="#fff" d="M40 32h16v48H88v16H40z"/></svg>
)
const TailwindIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#38BDF8" d="M64 24c-7 0-13 3-17 8 5-2 9-1 13 1 4 2 6 6 8 11 2-5 5-9 10-11 4-2 8-3 13-1-4-5-10-8-17-8-6 0-10 2-10 2s-4-2-10-2zm-24 24c-7 0-13 3-17 8 5-2 9-1 13 1 4 2 6 6 8 11 2-5 5-9 10-11 4-2 8-3 13-1-4-5-10-8-17-8-6 0-10 2-10 2s-4-2-10-2zm48 0c-7 0-13 3-17 8 5-2 9-1 13 1 4 2 6 6 8 11 2-5 5-9 10-11 4-2 8-3 13-1-4-5-10-8-17-8-6 0-10 2-10 2s-4-2-10-2zM40 72c-7 0-13 3-17 8 5-2 9-1 13 1 4 2 6 6 8 11 2-5 5-9 10-11 4-2 8-3 13-1-4-5-10-8-17-8-6 0-10 2-10 2s-4-2-10-2z"/></svg>
)
const MySQLIcon = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true"><path fill="#00618A" d="M64 12c14 0 26 4 34 10-6-2-13-3-20-3 6 3 10 8 12 14-3-2-7-3-11-4 4 5 5 11 3 17-5-4-11-7-18-8 2 3 3 7 2 11-4-3-9-5-14-5s-10 2-14 5c-1-4 0-8 2-11-7 1-13 4-18 8-2-6-1-12 3-17-4 1-8 2-11 4 2-6 6-11 12-14-7 0-14 1-20 3C38 16 50 12 64 12z"/><path fill="#E48E00" d="M44 72c0 8 9 14 20 14s20-6 20-14-9-14-20-14-20 6-20 14z"/></svg>
)

export default function SkillsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96])
  const [log, setLog] = useState('> [System] Klik salah satu kartu di atas untuk melihat detail alur kerja.')

  const skills = [
    { label: 'React.js & Vite', bg: 'hover:bg-tertiary-fixed', icon: <span className="flex items-center gap-1"><img src={reactLogo} alt="" width="16" height="16" /><img src={viteLogo} alt="" width="16" height="16" /></span> },
    { label: 'Tailwind & Bootstrap', bg: 'hover:bg-secondary-container', icon: <TailwindIcon /> },
    { label: 'PHP & Laravel/CI', bg: 'hover:bg-primary-fixed', icon: <LaravelIcon /> },
    { label: 'MySQL Database', bg: 'hover:bg-tertiary-fixed-dim', icon: <MySQLIcon /> },
    { label: 'RESTful API', bg: 'hover:bg-secondary-fixed', icon: <span className="material-symbols-outlined text-[16px]">api</span> },
    { label: 'Git & GitHub', bg: 'hover:bg-primary-container', icon: <span className="material-symbols-outlined text-[16px]">hub</span> },
  ]

  return (
    <motion.section
      ref={ref}
      style={{ scale }}
      className="w-full bg-surface-container py-space-xl lg:py-space-2xl border-t-[2.5px] border-on-surface overflow-hidden"
      id="sandbox"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <motion.div
            className="lg:col-span-6 flex flex-col gap-space-md"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.45 }}
            >
              TEKNOLOGI &amp; KEAHLIAN UTAMA
            </motion.h2>
            <motion.p
              className="font-body-md text-body-md text-on-surface-variant"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.36, duration: 0.45 }}
            >
              Kombinasi teknologi dan alat kerja yang saya gunakan untuk merancang, membangun, dan mengoptimalkan aplikasi web modern dari sisi front-end hingga back-end.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-space-xs pt-space-xs"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.07, delayChildren: 0.44 }}
            >
              {skills.map((s) => (
                <motion.span
                  key={s.label}
                  className={`inline-flex items-center gap-1.5 px-space-sm py-space-2xs rounded-full border-2 border-on-surface bg-surface-bright text-on-surface font-label-md text-label-md uppercase shadow-[3px_3px_0px_#191b23] transition-colors cursor-pointer font-bold ${s.bg}`}
                  variants={{ initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 } }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {s.icon}
                  {s.label}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="mt-space-sm border-2 border-on-surface rounded-xl bg-surface-container-lowest p-space-sm shadow-[4px_4px_0px_#191b23]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.72, duration: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs font-label-sm text-label-sm">
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✔</span> Desain Responsif &amp; Mobile-First</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✔</span> Pengelolaan Basis Data Teroptimasi</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✔</span> Kode Terstruktur &amp; Mudah Dipelihara</div>
                <div className="flex items-center gap-2"><span className="text-tertiary font-bold">✔</span> Integrasi RESTful API yang Aman</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            style={{ y }}
            initial={{ opacity: 0, x: 36, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.22, type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="bg-surface-container-lowest border-[2.5px] border-on-surface rounded-2xl p-space-md shadow-[6px_6px_0px_#191b23] flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b-2 border-on-surface pb-space-2xs">
                <span className="font-label-md text-label-md text-on-surface uppercase font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-secondary-container">science</span> DEVELOPMENT WORKFLOW
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Tekan Tombol</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Siklus pengembangan aplikasi yang saya terapkan, mulai dari perancangan antarmuka, logika server, hingga proses rilis.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
                <motion.div
                  onClick={() => setLog('> [Front-End] Rendering komponen UI responsif dengan React & Tailwind CSS.')}
                  className="min-h-32 bg-secondary-container rounded-xl border-2 border-on-surface shadow-[4px_4px_0px_#191b23] p-2 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                  whileHover={{ y: -8, rotate: -1 }}
                  whileTap={{ scaleX: 1.25, scaleY: 0.75 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                >
                  <span className="material-symbols-outlined text-3xl text-on-secondary-container">laptop_mac</span>
                  <span className="font-label-sm text-label-sm text-on-secondary-container uppercase font-bold mt-1">Front-End</span>
                  <span className="font-mono text-[9px] text-on-secondary-container/80">React / Vite / Tailwind</span>
                </motion.div>
                <motion.div
                  onClick={() => setLog('> [Back-End] Menghubungkan database MySQL & RESTful API melalui Laravel.')}
                  className="min-h-32 bg-tertiary-fixed rounded-xl border-2 border-on-surface shadow-[4px_4px_0px_#191b23] p-2 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                  whileHover={{ rotate: 6 }}
                  whileTap={{ rotate: -12, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 12 }}
                >
                  <span className="material-symbols-outlined text-3xl text-on-tertiary-fixed">developer_board</span>
                  <span className="font-label-sm text-label-sm text-on-tertiary-fixed uppercase font-bold mt-1">Back-End</span>
                  <span className="font-mono text-[9px] text-on-tertiary-fixed/80">Laravel / CI / MySQL API</span>
                </motion.div>
                <motion.div
                  onClick={() => setLog('> [Debug] Pengujian API dengan Postman serta pemecahan masalah kode via Browser DevTools.')}
                  className="min-h-32 bg-primary-container rounded-xl border-2 border-on-surface shadow-[4px_4px_0px_#191b23] p-2 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                  whileHover={{ boxShadow: '6px 6px 0px #191b23' }}
                  whileTap={{ x: 4, y: 4, boxShadow: '0px 0px 0px #191b23' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  <span className="material-symbols-outlined text-3xl text-on-primary">bug_report</span>
                  <span className="font-label-sm text-label-sm text-on-primary uppercase font-bold mt-1">DEBUG & TESTING</span>
                  <span className="font-mono text-[9px] text-on-primary/80">Postman / DevTools</span>
                </motion.div>
                <motion.div
                  onClick={() => setLog('> [Deployment] Otomatisasi build & deployment aplikasi ke platform deploy.')}
                  className="min-h-32 bg-tertiary-container rounded-xl border-2 border-on-surface shadow-[4px_4px_0px_#191b23] p-2 flex flex-col items-center justify-center text-center cursor-pointer select-none"
                  whileHover={{ boxShadow: '6px 6px 0px #191b23' }}
                  whileTap={{ x: 4, y: 4, boxShadow: '0px 0px 0px #191b23' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  <span className="material-symbols-outlined text-3xl text-on-primary">cloud_upload</span>
                  <span className="font-label-sm text-label-sm text-on-primary uppercase font-bold mt-1">Deployment</span>
                  <span className="font-mono text-[9px] text-on-primary/80">Vercel / Git Workflow / Netlify</span>
                </motion.div>
              </div>
              <motion.div
                key={log}
                className="mt-space-xs p-space-2xs bg-surface-container rounded-lg border border-on-surface font-mono text-[11px] text-on-surface-variant flex items-center justify-between"
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
              >
                <span>{log}</span>
                <motion.span
                  className="w-2 h-2 rounded-full bg-tertiary-fixed-dim inline-block"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
