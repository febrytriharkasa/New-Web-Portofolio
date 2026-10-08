import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    period: '2026 - Sekarang',
    dateBadge: 'Okt 2026 - Sekarang',
    type: 'Freelance',
    typeClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    entity: 'Freelance',
    role: 'Fullstack Web Developer',
    location: 'Sidoarjo, Jawa Timur - Remote',
    skills: ['React.js', 'CodeIgniter 4', 'Laravel', 'Tailwind CSS', 'MySQL', 'PostgreSQL', 'RESTful API'],
    icon: 'work',
  },
  {
    period: '2025 - 2025',
    dateBadge: 'Sep 2025 - Nov 2025',
    type: 'Magang',
    typeClass: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    entity: 'Yayasan Al-Khusnaniyah / Platform SIMAK',
    role: 'Fullstack Web Developer Intern',
    location: 'Sidoarjo, Jawa Timur - Remote',
    skills: ['Laravel', 'MySQL', 'JQuery', 'Tailwind CSS'],
    icon: 'apartment',
  },
  {
    period: '2025 - 2025',
    dateBadge: 'Jan 2025 - Mar 2025',
    type: 'Magang',
    typeClass: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    entity: 'Dinas Kesehatan Prov Surabaya / Platform eDinkes',
    role: 'Fullstack Web Developer Intern',
    location: 'Surabaya, Jawa Timur - On-Site',
    skills: ['Laravel', 'MySQL', 'JQuery', 'Tailwind CSS'],
    icon: 'apartment',
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [36, -36])

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="w-full max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop py-space-xl lg:py-space-2xl flex flex-col gap-space-lg"
      id="experience"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b-2 border-on-surface pb-space-md">
        <div className="flex flex-col gap-1">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase leading-tight">
            Pengalaman &amp; Riwayat Karier
          </h2>
        </div>
      </div>

      <div className="relative w-full py-space-xl">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-1/2 top-4 bottom-4 w-[2.5px] bg-on-surface/30 md:-translate-x-1/2" />

        <div className="flex flex-col gap-space-xl md:gap-space-2xl">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col md:flex-row items-start"
              >
                {/* Timeline node icon */}
                <div className="absolute left-5 md:left-1/2 top-6 w-10 h-10 rounded-full border-2 border-on-surface bg-surface-bright shadow-[3px_3px_0px_#191b23] -translate-x-1/2 flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                </div>

                {/* Mobile padding offset, desktop split columns */}
                <div className="w-full pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-20">
                  {/* Left column on desktop */}
                  <div className={`hidden md:block ${!isEven ? 'order-1' : 'order-2'}`}>
                    {!isEven ? (
                      <div className="bg-surface-container rounded-xl border-2 border-on-surface p-5 sm:p-space-sm shadow-[4px_4px_0px_#191b23] hover:translate-y-[-2px] transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`px-2.5 py-0.5 rounded border border-on-surface ${item.typeClass} font-label-sm text-[10px] sm:text-[11px] font-bold uppercase`}>
                              {item.type}
                            </span>
                            <span className="px-2 py-0.5 rounded border border-on-surface bg-surface-bright font-label-sm text-[10px] sm:text-[11px] text-on-surface font-bold">
                              {item.dateBadge}
                            </span>
                          </div>
                        </div>

                        <h3 className="font-headline-sm text-lg sm:text-headline-sm uppercase text-on-surface font-bold">
                          {item.entity}
                        </h3>
                        <div className="font-label-sm text-sm text-primary font-bold mt-0.5">
                          {item.role}
                        </div>

                        <div className="font-body-sm text-[12px] sm:text-[13px] text-on-surface-variant mt-2 flex items-center gap-1">
                          <span>{item.location}</span>
                        </div>

                        <div className="mt-space-sm pt-space-xs border-t border-outline-variant flex flex-wrap items-center gap-1.5">
                          <span className="font-label-sm text-[10px] text-on-surface-variant font-bold uppercase mr-1">Stack:</span>
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded-full border border-on-surface bg-surface-bright text-on-surface font-label-sm text-[10px] font-bold"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Right column on desktop (and also mobile container) */}
                  <div className={`w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    {(isEven || typeof window === 'undefined') ? (
                      <div className="bg-surface-container rounded-xl border-2 border-on-surface p-5 sm:p-space-sm shadow-[4px_4px_0px_#191b23] hover:translate-y-[-2px] transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`px-2.5 py-0.5 rounded border border-on-surface ${item.typeClass} font-label-sm text-[10px] sm:text-[11px] font-bold uppercase`}>
                              {item.type}
                            </span>
                            <span className="px-2 py-0.5 rounded border border-on-surface bg-surface-bright font-label-sm text-[10px] sm:text-[11px] text-on-surface font-bold">
                              {item.dateBadge}
                            </span>
                          </div>
                        </div>

                        <h3 className="font-headline-sm text-lg sm:text-headline-sm uppercase text-on-surface font-bold">
                          {item.entity}
                        </h3>
                        <div className="font-label-sm text-sm text-primary font-bold mt-0.5">
                          {item.role}
                        </div>

                        <div className="font-body-sm text-[12px] sm:text-[13px] text-on-surface-variant mt-2 flex items-center gap-1">
                          <span>{item.location}</span>
                        </div>

                        <div className="mt-space-sm pt-space-xs border-t border-outline-variant flex flex-wrap items-center gap-1.5">
                          <span className="font-label-sm text-[10px] text-on-surface-variant font-bold uppercase mr-1">Stack:</span>
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded-full border border-on-surface bg-surface-bright text-on-surface font-label-sm text-[10px] font-bold"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Mobile fallback for odd items when rendered on small screen */
                      <div className="block md:hidden bg-surface-container rounded-xl border-2 border-on-surface p-5 sm:p-space-sm shadow-[4px_4px_0px_#191b23] hover:translate-y-[-2px] transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`px-2.5 py-0.5 rounded border border-on-surface ${item.typeClass} font-label-sm text-[10px] sm:text-[11px] font-bold uppercase`}>
                              {item.type}
                            </span>
                            <span className="px-2 py-0.5 rounded border border-on-surface bg-surface-bright font-label-sm text-[10px] sm:text-[11px] text-on-surface font-bold">
                              {item.dateBadge}
                            </span>
                          </div>
                        </div>

                        <h3 className="font-headline-sm text-lg sm:text-headline-sm uppercase text-on-surface font-bold">
                          {item.entity}
                        </h3>
                        <div className="font-label-sm text-sm text-primary font-bold mt-0.5">
                          {item.role}
                        </div>

                        <div className="font-body-sm text-[12px] sm:text-[13px] text-on-surface-variant mt-2 flex items-center gap-1">
                          <span>{item.location}</span>
                        </div>

                        <div className="mt-space-sm pt-space-xs border-t border-outline-variant flex flex-wrap items-center gap-1.5">
                          <span className="font-label-sm text-[10px] text-on-surface-variant font-bold uppercase mr-1">Stack:</span>
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded-full border border-on-surface bg-surface-bright text-on-surface font-label-sm text-[10px] font-bold"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
