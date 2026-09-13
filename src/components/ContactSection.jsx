import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <motion.section
      className="w-full bg-secondary-container border-b-[2.5px] border-on-surface py-space-2xl relative overflow-hidden"
      id="contact"
      initial={{ opacity: 0, y: -40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border-4 border-on-surface bg-tertiary-fixed opacity-40 pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      />
      <motion.div
        className="absolute -left-12 -top-12 w-48 h-48 rounded-2xl border-4 border-on-surface bg-primary-fixed opacity-30 rotate-12 pointer-events-none"
        initial={{ opacity: 0, rotate: 30 }}
        animate={{ opacity: 0.3, rotate: 12 }}
        transition={{ delay: 0.3, duration: 1 }}
      />
      <div className="max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop relative z-10">
        <motion.div
          className="bg-surface-bright border-[3px] border-on-surface rounded-2xl p-space-lg md:p-space-xl shadow-[8px_8px_0px_#191b23] flex flex-col md:flex-row items-center justify-between gap-space-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col gap-space-xs max-w-xl text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.h2
              className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase leading-tight"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              PUNYA IDE PROYEK ATAU PELUANG KERJA? MARI WUJUDKAN BERSAMA.
            </motion.h2>
            <motion.p
              className="font-body-md text-body-md text-on-surface-variant"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Saya siap membantu membangun aplikasi web yang responsif, terstruktur, dan siap pakai. Mari diskusikan kebutuhan sistem atau peluang kolaborasi Anda.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-2xs px-space-md sm:px-space-lg py-space-sm sm:py-space-md rounded-xl border-[2.5px] border-on-surface bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-[5px_5px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#191b23] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_#191b23] transition-all font-bold"
              href="https://wa.me/6287766602457?text=Halo%20Febry%2C%20saya%20tertarik%20diskusi%20proyek"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, boxShadow: '7px 7px 0px #191b23' }}
              whileTap={{ y: 0, boxShadow: '5px 5px 0px #191b23' }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="material-symbols-outlined text-xl"
                initial={{ rotate: -45 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                chat
              </motion.span>MULAI DISKUSI
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}