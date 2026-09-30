import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import imgMe from '../assets/fotoMe.webp';

export const AboutProfile = () => (
  <div className="grid grid-cols-1 gap-space-md items-center md:grid-cols-12 md:gap-space-lg">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-12 flex flex-col items-center text-center gap-space-sm bg-surface-container-low rounded-xl border-2 border-on-surface p-4 sm:p-space-md relative overflow-hidden md:col-span-4"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#191b23_2px,transparent_2px)] [background-size:12px_12px]" />
      <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl border-[2.5px] border-on-surface bg-surface-bright shadow-[5px_5px_0px_#191b23] overflow-hidden">
        <img
          alt="FbryTH"
          loading="lazy"
          className="w-full h-full object-cover"
          src={imgMe}
          width="174"
          height="214"
        />
      </div>
      <div className="relative z-10 w-full max-w-full px-2">
        <div className="font-headline-sm text-lg sm:text-headline-sm uppercase text-on-surface font-bold break-words">Febry Tri Harkasa</div>
        <div className="font-label-sm text-xs sm:text-label-sm text-primary font-bold uppercase mt-0.5 break-words">Jr. Fullstack Web Developer</div>
      </div>
      <div className="relative z-10 w-full grid grid-cols-1 gap-2 pt-2 border-t-2 border-outline-variant font-label-sm text-[10px] sm:text-[11px]">
        <div className="p-1.5 bg-surface-bright rounded border border-on-surface text-center break-words">
          <span className="block text-primary font-bold">FOCUS</span>
          <span>React.JS | Laravel | CI4 | Database</span>
        </div>
        <div className="p-1.5 bg-surface-bright rounded border border-on-surface text-center break-words">
          <span className="block text-secondary font-bold">HOBBY</span>
          <span>Memancing | Game</span>
        </div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-12 flex flex-col gap-space-sm md:col-span-8"
    >
      <div className="flex items-center justify-between border-b-2 border-on-surface pb-space-2xs">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-on-surface-variant">01 // PROFIL DIRI</span>
        </div>
      </div>
      <h3 className="font-headline-md text-xl md:text-headline-md text-on-surface uppercase font-bold break-words">
        MEMBANGUN SISTEM WEB YANG AMAN DAN TERUKUR
      </h3>
      <p className="font-body-md text-sm md:text-body-md text-on-surface-variant break-words">
        Saya adalah Junior Fullstack Web Developer dengan minat besar pada pengelolaan basis data dan pengembangan API. 
        Memiliki fondasi pada logika back-end menggunakan Laravel/CI4, saat ini saya sedang memperluas keahlian 
        ke arah pengembangan end-to-end. Saya aktif belajar mengintegrasikan antarmuka modern dengan React agar 
        siap berkontribusi membangun aplikasi web yang fungsional dari hulu ke hilir.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs pt-space-2xs">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="p-space-xs rounded-xl border-2 border-on-surface bg-surface-container shadow-[3px_3px_0px_#191b23]"
        >
          <div className="flex items-center gap-1.5 text-tertiary font-headline-sm font-bold text-base sm:text-headline-sm">
            <span className="material-symbols-outlined text-lg">brush</span> System Integration
          </div>
          <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
            Mampu menghubungkan logika server yang kompleks dengan antarmuka modern, memastikan data mengalir dengan tepat dari database hingga ke pengguna akhir.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="p-space-xs rounded-xl border-2 border-on-surface bg-surface-container shadow-[3px_3px_0px_#191b23]"
        >
          <div className="flex items-center gap-1.5 text-primary font-headline-sm font-bold text-base sm:text-headline-sm">
            <span className="material-symbols-outlined text-lg">data_object</span> RESTful API
          </div>
          <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
            Membangun dan mendokumentasikan titik akhir endpoint API yang aman, cepat, dan mudah diintegrasikan dengan aplikasi front-end maupun pihak ketiga.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="p-space-xs rounded-xl border-2 border-on-surface bg-surface-container shadow-[3px_3px_0px_#191b23]"
        >
          <div className="flex items-center gap-1.5 text-secondary font-headline-sm font-bold text-base sm:text-headline-sm">
            <span className="material-symbols-outlined text-lg">all_inclusive</span> Database
          </div>
          <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
            Perancangan basis data relasional yang efisien, kueri terstruktur, dan integrasi API yang aman dengan Laravel.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 gap-2 p-space-xs bg-surface-bright rounded-xl border-2 border-on-surface shadow-[3px_3px_0px_#191b23] mt-space-2xs"
      >
        <div className="text-center">
          <div className="font-label-sm text-[11px] text-on-surface-variant uppercase font-bold">Fresh Graduate</div>
        </div>
      </motion.div>
    </motion.div>
  </div>
)

export const AboutEdu = () => (
  <div className="flex flex-col gap-space-md">
    <div className="flex items-center justify-between border-b-2 border-on-surface pb-space-2xs">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-on-surface-variant">02 // Riwayat Pendidikan &amp; Sertifikasi</span>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-surface-container rounded-xl border-2 border-on-surface p-space-sm shadow-[4px_4px_0px_#191b23] flex flex-col justify-between hover:translate-y-[-2px] transition-all"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded border border-on-surface bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[10px] font-bold">2022 - 2025</span>
            <span className="material-symbols-outlined text-primary text-xl">school</span>
          </div>
          <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">S1 Teknik Informarika</h4>
          <p className="font-label-sm text-label-sm text-primary font-bold mt-1">Universitas 17 Agustus 1945 Surabaya</p>
          <p className="font-body-sm text-[13px] text-on-surface-variant mt-2">
            Berfokus pada pengembangan aplikasi web dari sisi front-end hingga back-end, mencakup perancangan antarmuka yang interaktif serta pengelolaan basis data yang efisien
          </p>
        </div>
        <div className="mt-space-sm pt-space-xs border-t border-outline-variant font-label-sm text-[11px] text-tertiary font-bold flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">verified</span> graduate 2026
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="bg-surface-container rounded-xl border-2 border-on-surface p-space-sm shadow-[4px_4px_0px_#191b23] flex flex-col justify-between hover:translate-y-[-2px] transition-all"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded border border-on-surface bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[10px] font-bold">2026 - 2029</span>
            <span className="material-symbols-outlined text-secondary text-xl">code</span>
          </div>
          <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">Junior Web Programming</h4>
          <p className="font-label-sm text-label-sm text-secondary-container font-bold mt-1">Badan Nasional Sertifikasi Profesi (BNSP)</p>
          <p className="font-body-sm text-[13px] text-on-surface-variant mt-2">
            Sertifikasi kompetensi nasional yang memvalidasi kemampuan dalam membangun aplikasi web dinamis, perancangan basis data relasional, pengkodean terstruktur, serta penerapan standar keamanan web dasar.
          </p>
        </div>
        <div className="mt-space-sm pt-space-xs border-t border-outline-variant font-label-sm text-[11px] text-primary font-bold flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">verified</span> Certified Competent BNSP
        </div>
      </motion.div>
    </div>
  </div>
)

const AboutSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [36, -36])

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="w-full max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop py-space-xl lg:py-space-2xl flex flex-col gap-space-lg"
      id="about"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b-2 border-on-surface pb-space-md">
        <div className="flex flex-col gap-1">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase leading-tight">
            Profil Diri &amp; Riwayat Pendidikan
          </h2>
        </div>
      </div>

      <motion.div
        className="w-full relative bg-surface-container-lowest border-[3px] border-on-surface rounded-2xl shadow-[8px_8px_0px_#191b23] p-4 sm:p-space-md md:p-space-xl flex flex-col gap-space-md md:gap-space-xl overflow-hidden"
        id="aboutStageCard"
      >
        <AboutProfile />
        <div className="w-full h-0.5 bg-on-surface/20" />
        <AboutEdu />
      </motion.div>
    </motion.section>
  )
}

export default AboutSection