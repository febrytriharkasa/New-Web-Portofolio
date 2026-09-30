import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import imgJerigenKocor from '../assets/project/jerigen-kocor.webp';
import imgSimak from '../assets/project/dashboardSimak.webp';
import imgEdinkes from '../assets/project/edinkes.webp';
import imgMathventure from '../assets/project/mathventure.webp';
import imgAdminDashnoard from '../assets/project/adminDahsboard.webp';
import imgWebCoffe from '../assets/project/webCoffe.webp';


const projects = [
  {
    title: 'Website Katalog Ayzel Coffe',
    catClass: 'bg-tertiary-fixed-dim text-on-tertiary-fixed',
    status: 'Freelance Project',
    desc: 'Antarmuka pelanggan yang responsif dan modern untuk menampilkan katalog produk kopi premium. Dibangun menggunakan React.js dan Tailwind CSS, aplikasi ini berfokus pada navigasi yang intuitif dan pengalaman pemesanan yang mulus bagi pengguna.',
    physics: 'Stack: React.Js · Vite · Tailwind',
    tech: ['React.Js', 'Vite', 'Tailwind'],
    image: imgWebCoffe,
    links: {github: 'https://github.com/febrytriharkasa/Website-E-Commerce-Coffe-Ayzel.git' },
  },
  {
    title: 'Admin Dashboard Ayzel Coffe',
    catClass: 'bg-tertiary-fixed-dim text-on-tertiary-fixed',
    status: 'Freelance Project',
    desc: 'Sistem manajemen terpusat dan API backend berbasis CodeIgniter 4. Dilengkapi fitur pemantauan analitik penjualan real-time, grafik arus kas, manajemen stok produk, serta pelacakan operasional shift kedai untuk mendukung keputusan bisnis.',
    physics: 'Stack: CI4 · PHP · Tailwind',
    tech: ['CI4', 'PHP', 'Tailwind'],
    image: imgAdminDashnoard,
    links: {github: 'https://github.com/febrytriharkasa/Website-E-Commerce-Coffe-Ayzel.git' },
  },
  {
    title: 'Landing Pages Jerigen Kocor',
    catClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    status: 'Freelance PROJECT',
    desc: 'Landing page katalog produk interaktif yang menampilkan daftar harga, spesifikasi jerigen, serta integrasi pemesanan langsung melalui WhatsApp Checkout secara praktis',
    physics: 'Stack: React · Vite · Tailwind',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image: imgJerigenKocor,
    links: { demo: 'https://jerigen-kocor.vercel.app/', github: 'https://github.com/febrytriharkasa/Landing-Pages-Jerigen-Kocor.git' },
  },
  {
    title: 'SIMAK Dashboard',
    catClass: 'bg-secondary-container text-on-secondary',
    status: 'INTERNSHIP PROJECT',
    desc: 'Sistem informasi manajemen sekolah terpadu untuk pengelolaan data siswa, guru, modul pembayaran, serta visualisasi grafik statistik transaksi secara real-time.',
    physics: 'Stack: Laravel · MySQL · Tailwind · JQuery',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'JQuery', 'Internship Contribution'],
    image: imgSimak,
    links: {github: 'https://github.com/febrytriharkasa/SIMAK.git' },
  },
  {
    title: 'Edinkes Platform',
    catClass: 'bg-primary-fixed text-on-primary-fixed-variant',
    status: 'INTERNSHIP PROJECT',
    desc: 'Proyek magang pengembangan platform eDinkes. Berkontribusi dalam penambahan fitur baru, perancangan antarmuka UI, struktur database MySQL, optimasi performa sistem, serta proses debugging.',
    physics: 'Stack: Laravel · JQuery · MySQL',
    tech: ['Laravel', 'React', 'JQuery', 'MySQL', 'Internship Contribution'],
    image: imgEdinkes,
    links: {},
  },
  {
    title: 'Mathventure',
    catClass: 'bg-tertiary-fixed-dim text-on-tertiary-fixed',
    status: 'Personal Project',
    desc: 'Game platformer edukasi 2D matematika. Menggabungkan mekanisme petualangan interaktif dengan teka-teki operasi hitung dasar untuk meningkatkan keterlibatan belajar siswa secara menyenangkan.',
    physics: 'Stack: Unity · C# · 2D',
    tech: ['Unity', 'C#', '2D Game | Playable on Itch.io'],
    image: imgMathventure,
    links: {demo: 'https://fbryth.itch.io/mathventure' },
  },
  
]


export default function ProjectsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const [cur, setCur] = useState(0)
  const p = projects[cur]
  const [pop, setPop] = useState(false)

  const go = (i) => {
    setCur(i)
    setPop(true)
    setTimeout(() => setPop(false), 150)
  }
  const next = () => go((cur + 1) % projects.length)
  const prev = () => go((cur - 1 + projects.length) % projects.length)

  return (
    <motion.section
      ref={ref}
      className="w-full max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop py-space-xl lg:py-space-2xl flex flex-col gap-space-lg overflow-hidden"
      id="projects"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b-2 border-on-surface pb-space-md"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.12, duration: 0.5 }}
      >
        <div>
          <motion.h2
            className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase leading-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28, duration: 0.45 }}
          >
            PORTOFOLIO PROYEK
          </motion.h2>
        </div>
        <motion.div
          className="flex items-center gap-space-sm"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.36, duration: 0.4 }}
        >
          <div className="flex items-center gap-space-2xs">
            <motion.button
              aria-label="Proyek Sebelumnya"
              onClick={prev}
              className="w-12 h-12 rounded-xl border-2 border-on-surface bg-surface-container-lowest text-on-surface flex items-center justify-center font-bold shadow-[4px_4px_0px_#191b23] transition-all"
              whileHover={{ y: -3, x: -2, boxShadow: '6px 6px 0px #191b23', backgroundColor: '#5afeb7' }}
              whileTap={{ y: 2, x: 2, boxShadow: '1px 1px 0px #191b23' }}
              transition={{ duration: 0.2 }}
            >
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </motion.button>
            <motion.button
              aria-label="Proyek Berikutnya"
              onClick={next}
              className="w-12 h-12 rounded-xl border-2 border-on-surface bg-primary-container text-on-primary flex items-center justify-center font-bold shadow-[4px_4px_0px_#191b23] transition-all"
              whileHover={{ y: -3, x: -2, boxShadow: '6px 6px 0px #191b23' }}
              whileTap={{ y: 2, x: 2, boxShadow: '1px 1px 0px #191b23' }}
              transition={{ duration: 0.2 }}
            >
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </motion.button>
          </div>
          <motion.div
            className="px-space-sm py-2 rounded-xl border-2 border-on-surface bg-surface-container font-mono text-label-md font-bold uppercase shadow-[2px_2px_0px_#191b23]"
            key={cur}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            0{cur + 1} / 0{projects.length}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        key={cur}
        className={`w-full bg-surface-container-lowest border-[3px] border-on-surface rounded-2xl p-space-md md:p-space-xl shadow-[8px_8px_0px_#191b23] ${pop ? 'scale-[0.98]' : 'scale-100'} transition-transform duration-150`}
        id="projectStageCard"
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full h-56 sm:h-72 md:h-80 bg-surface-container-low rounded-xl border-2 border-on-surface overflow-hidden relative flex items-center justify-center group">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" width="800" height="400" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-on-surface/35 flex items-center justify-center gap-2 transition-opacity">
                {p.links.demo ? <a href={p.links.demo} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full bg-surface-bright border-2 border-on-surface font-label-sm font-bold shadow-[2px_2px_0px_#191b23]">Live Demo</a> : null}
                {p.links.github ? <a href={p.links.github} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full bg-on-surface text-surface-bright border-2 border-on-surface font-label-sm font-bold shadow-[2px_2px_0px_#191b23]">GitHub</a> : null}
              </div>
            </div>
            <motion.div
              className="mt-space-xs p-space-2xs bg-surface-container rounded-lg border border-on-surface font-mono text-[11px] text-on-surface-variant flex items-center justify-between"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
            >
              <span>{p.physics}</span>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-space-sm order-1 lg:order-2">
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.3 }}
            >
              <div className="flex items-center gap-1.5">
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-tertiary-container inline-block"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold">{p.status}</span>
              </div>
            </motion.div>

            <motion.h3
              className="font-headline-lg text-headline-lg-mobile md:text-headline-md text-on-surface uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.3 }}
            >
              {p.title}
            </motion.h3>

            <motion.p
              className="font-body-md text-body-md text-on-surface-variant"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.35 }}
            >
              {p.desc}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-space-3xs pt-space-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.08, delayChildren: 0.32 }}
            >
              {p.tech.map((t) => (
                <motion.span
                  key={t}
                  className="px-2 py-0.5 rounded border border-on-surface bg-surface-container text-on-surface font-label-sm"
                  variants={{ initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 } }}
                  whileHover={{ y: -3, scale: 1.06, transition: { duration: 0.15 } }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="pt-space-md mt-space-sm border-t-2 border-outline-variant flex flex-wrap items-center gap-space-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.4 }}
            >
              {p.links.demo ? (
                <motion.a
                  className="inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-lg border-2 border-on-surface bg-primary text-on-primary font-label-md text-label-md uppercase shadow-[3px_3px_0px_#191b23] font-bold"
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, x: -2, boxShadow: '5px 5px 0px #191b23' }}
                  whileTap={{ y: 1, x: 1, boxShadow: '1px 1px 0px #191b23' }}
                  transition={{ duration: 0.2 }}
                >
                  Live Demo <span className="material-symbols-outlined text-sm">north_east</span>
                </motion.a>
              ) : null}
              {p.links.github ? (
                <motion.a
                  className="inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-lg border-2 border-on-surface bg-surface-bright text-on-surface font-label-md text-label-md uppercase shadow-[3px_3px_0px_#191b23] font-bold"
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, x: -2, boxShadow: '5px 5px 0px #191b23' }}
                  whileTap={{ y: 1, x: 1, boxShadow: '1px 1px 0px #191b23' }}
                  transition={{ duration: 0.2 }}
                >
                  GitHub <span className="material-symbols-outlined text-sm">code</span>
                </motion.a>
              ) : null}
            </motion.div>
          </div>
        </div>
      </motion.div>
              
      <div className="flex items-center justify-end gap-space-sm w-full">
  
        <motion.button
          aria-label="Proyek Sebelumnya"
          onClick={prev}
          className="w-12 h-12 rounded-xl border-2 border-on-surface bg-surface-container-lowest text-on-surface flex items-center justify-center font-bold shadow-[4px_4px_0px_#191b23] transition-all"
          whileHover={{ y: -3, x: -2, boxShadow: '6px 6px 0px #191b23', backgroundColor: '#5afeb7' }}
          whileTap={{ y: 2, x: 2, boxShadow: '1px 1px 0px #191b23' }}
          transition={{ duration: 0.2 }}
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </motion.button>
        <motion.button
          aria-label="Proyek Berikutnya"
          onClick={next}
          className="w-12 h-12 rounded-xl border-2 border-on-surface bg-primary-container text-on-primary flex items-center justify-center font-bold shadow-[4px_4px_0px_#191b23] transition-all"
          whileHover={{ y: -3, x: -2, boxShadow: '6px 6px 0px #191b23' }}
          whileTap={{ y: 2, x: 2, boxShadow: '1px 1px 0px #191b23' }}
          transition={{ duration: 0.2 }}
        >
          <span className="material-symbols-outlined text-2xl">arrow_forward</span>
        </motion.button>
      </div>
    </motion.section>
  )
}
