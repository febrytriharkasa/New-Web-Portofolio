import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-surface-container border-t-[2.5px] border-on-surface overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg items-start">
          <motion.div
            className="lg:col-span-4 flex flex-col gap-space-xs"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            <div className="flex items-center gap-space-xs">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold leading-tight">FBRYTH</span>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">Febry Tri Harkasa • Jr. Fullstack Web Developer</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mt-1">Berfokus pada pengembangan sistem back-end berkinerja tinggi dan clean code, yang diintegrasikan secara mulus dengan eksplorasi front-end untuk menghadirkan aplikasi web yang responsif.</p>
          </motion.div>

          <motion.div
            className="lg:col-span-3 flex flex-col gap-space-xs"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.14, duration: 0.4 }}
          >
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold border-b-2 border-on-surface pb-1 inline-block self-start">Sitemap / Quick Links</span>
            <div className="flex flex-col gap-1.5 pt-1">
              {[
                ['home', 'Home'],
                ['about', 'About Me'],
                ['experience', 'Experience'],
                ['projects', 'Portfolio Projects'],
                ['contact', 'Contact & Commissions'],
              ].map(([id, label], i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    to={id}
                    smooth
                    duration={600}
                    offset={-80}
                    className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm text-primary">chevron_right</span> {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 flex flex-col gap-space-xs"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.22, duration: 0.4 }}
          >
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold border-b-2 border-on-surface pb-1 inline-block self-start">Connect &amp; Socials</span>
              <div className="flex flex-row flex-wrap sm:flex-col gap-1.5 sm:gap-1.5 pt-1">
              {[
                ['https://github.com/febrytriharkasa', '// GitHub'],
                ['https://www.linkedin.com/in/febry-tri-harkasa-796573322/', '// Linkedin'],
                ['https://www.instagram.com/fbry.th/', '// Instagram'],
                ['mailto:febrytrih123@gmail.com', '// Email'],
              ].map(([href, label], i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.26 + i * 0.06, duration: 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 flex flex-col gap-space-xs"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold border-b-2 border-on-surface pb-1 inline-block self-start">Open Project</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Sidoarjo • Indonesia • Remote / On-Site</p>
            <motion.div
              className="p-space-xs rounded-xl border-2 border-on-surface bg-surface-container-lowest shadow-[4px_4px_0px_#191b23] flex flex-col gap-1"
              whileHover={{ y: -3, boxShadow: '6px 6px 0px #191b23' }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-primary uppercase font-bold">STATUS KETERSEDIAAN</span><span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-bold font-mono">OPEN</span>
              </div>
              <span className="font-body-sm text-body-sm font-bold text-on-surface">Terbuka untuk Penuh Waktu & Lepas</span>
              <span className="font-label-sm text-[11px] text-on-surface-variant">Web Development Projects</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-space-lg pt-space-md border-t-2 border-on-surface flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">© 2026 FBRYTH. BUILT WITH REACT, VITE &amp; TAILWIND CSS.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
