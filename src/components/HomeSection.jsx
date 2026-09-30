import { motion } from 'framer-motion'
import { useState, useCallback, useRef } from 'react'
import { Link } from 'react-scroll'
import imgMe from '../assets/fotoMe2.webp';

const HeroAvatar = ({ onSquish }) => {
  const avatarRef = useRef(null)
  const handleClick = useCallback(() => {
    const el = avatarRef.current
    if (!el) return
    el.classList.add('scale-125', 'rotate-12')
    setTimeout(() => el.classList.remove('scale-125', 'rotate-12'), 220)
    onSquish?.()
  }, [onSquish])

  return (
    <motion.div
      ref={avatarRef}
      onClick={handleClick}
      className="relative z-10 w-48 h-48 rounded-2xl border-[3px] border-on-surface bg-surface-bright shadow-[6px_6px_0px_#191b23] overflow-hidden cursor-pointer hover:scale-105 hover:-rotate-2 active:scale-95 transition-all"
      id="heroSquishAvatar"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <img
        alt="Me"
        loading="eager" // Ubah ke eager karena ini gambar utama diatas lipatan layar (Above the Fold)
        className="w-full h-full object-cover pointer-events-none"
        src={imgMe}
        width="234"
        height="312"
      />
      <span
        className="absolute bottom-2 right-2 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-label-sm uppercase px-2 py-0.5 rounded border-2 border-on-surface shadow-[2px_2px_0px_#191b23] font-bold"
      >
        ONLINE
      </span>
    </motion.div>
  )
}

const phrases = [
  'Fullstack Web Developer • 165 FPS',
  'Powered by Coffee & Clean Code',
  'Bug Ratio: 0.01% | Tea: 100%',
  'Git Push: Force (Just Kidding)',
  'Dockerized • Deployed • Done',
]

const viewportOpts = { once: true, amount: 0.2 }

const slideLeft = {
  hidden: { opacity: 0, x: -80, skewX: -8 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const slideUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
}

const popIn = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.4, ease: 'easeOut', type: 'spring' } },
}

const slideRotate = {
  hidden: { opacity: 0, x: -60, rotate: -12 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const riseUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HomeSection() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const handleSquish = useCallback(() => {
    setPhraseIdx((i) => (i + 1) % phrases.length)
  }, [])

  return (
    <section className="w-full max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop py-space-xl lg:py-space-2xl relative overflow-hidden" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
          >
            <div className="font-label-md text-label-md text-primary uppercase font-bold tracking-widest mb-1">PORTFOLIO // CREATIVE PROFILE</div>
            <h1 className="font-display-hero text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight break-words">
              Febry Tri Harkasa <span className="text-secondary-container inline-block">//</span> Jr. Fullstack Web Developer
            </h1>
          </motion.div>

          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            Hai! Saya Febry Tri Harkasa, Junior Fullstack Web Developer yang sangat antusias memecahkan masalah logika 
            di balik layar menggunakan Laravel. Untuk melengkapi keahlian tersebut, saat ini saya sedang mengeksplorasi 
            sisi Front-End dengan React, Vue, dan Tailwind CSS. Tujuannya sederhana: memahami alur kerja aplikasi web 
            secara menyeluruh agar bisa berkontribusi penuh secara end-to-end.
          </motion.p>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            className="flex flex-wrap items-center gap-space-xs"
          >
            {['Front-end', 'Back-end', 'Debugging', 'Deployment'].map((t) => (
              <span
                key={t}
                className="px-space-xs py-1 rounded-md border-2 border-on-surface bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase font-bold shadow-[2px_2px_0px_#191b23]"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={slideRotate}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            className="flex flex-wrap items-center gap-space-sm pt-space-xs"
          >
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className="inline-flex items-center justify-center gap-space-2xs px-space-md py-space-sm rounded-lg border-[2.5px] border-on-surface bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-[5px_5px_0px_#191b23] font-bold hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">view_carousel</span> Lihat Proyek Pilihan
            </Link>
          </motion.div>

          <motion.div
            variants={riseUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            className="flex flex-wrap items-center gap-space-xs pt-space-2xs border-t-2 border-outline-variant"
          >
            <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold mr-1">CONNECT:</span>
            {[
              { l: 'GitHub', href: 'https://github.com/febrytriharkasa' },
              { l: 'Linkedin', href: 'https://www.linkedin.com/in/febry-tri-harkasa-796573322/' },
              { l: 'Instagram', href: 'https://www.instagram.com/fbry.th/' },
              { l: 'Email', href: 'mailto:febrytrih123@gmail.com' },
            ].map((b) => (
              <a
                key={b.l}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="px-space-xs py-1 rounded border-2 border-on-surface bg-surface-container font-label-sm text-label-sm uppercase shadow-[2px_2px_0px_#191b23] hover:scale-110 hover:bg-primary-container hover:text-on-primary active:scale-95 transition-all"
              >
                {b.l}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: 200, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 12,
            mass: 1.5,
            delay: 0.5,
          }}
        >
          <div className="relative bg-surface-container-lowest border-[3px] border-on-surface rounded-2xl p-space-sm sm:p-space-md shadow-[8px_8px_0px_#191b23] overflow-hidden flex flex-col gap-space-sm">
            <div className="flex items-center justify-between border-b-2 border-on-surface pb-space-2xs">
              <div className="flex items-center gap-space-3xs">
                {['bg-secondary-container', 'bg-primary-fixed', 'bg-tertiary-fixed-dim'].map((c, i) => (
                  <span key={i} className={`w-3.5 h-3.5 rounded-full ${c} border border-on-surface`} />
                ))}
              </div>
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-bold">CREATOR_ID // Fbryth</span>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">badge</span>
            </div>

            <div className="w-full bg-surface-container-low rounded-xl border-2 border-on-surface relative overflow-hidden flex flex-col items-center p-space-md group">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#191b23_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
              <HeroAvatar onSquish={handleSquish} />
              <div className="relative z-10 mt-space-sm text-center">
                <div className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Febry</div>
                <div className="font-label-sm text-label-sm text-primary uppercase font-bold" id="squishReactionText">
                  {phrases[phraseIdx]}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-space-xs text-on-surface-variant font-label-sm text-label-sm pt-space-3xs border-t-2 border-outline-variant">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse" />
                <span>Desk: Remote Worldwide</span>
              </div>
              <div className="flex items-center justify-end gap-1">
                <span className="material-symbols-outlined text-sm text-secondary-container">speed</span>
                <span className="uppercase font-bold text-on-surface">&lt;16ms Latency</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}