import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import imgMe from '../assets/fotoMe.webp';
import imgLogo from '../assets/logo.png';


const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Portfolio' },
  { id: 'sandbox', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [active, setActive] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const el = mobileMenuRef.current
    if (!el) return
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px'
      el.style.opacity = '1'
    } else {
      el.style.maxHeight = '0px'
      el.style.opacity = '0'
    }
  }, [isOpen])

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b-[2.5px] border-on-surface"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="h-20 max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop flex items-center justify-between gap-space-sm">
        <motion.div
          className="flex items-center gap-space-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
    >
              <Link to="home" smooth duration={600} offset={-80} className="flex items-center gap-space-xs cursor-pointer">
                <motion.img
                  alt="Logo"
                  loading="lazy"
                  className="h-8 w-auto object-contain"
                  src={imgLogo}
                  width="32"
                  height="32"
                  initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1.5, opacity: 1 }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

        <motion.nav
          className="hidden lg:flex items-center gap-space-xs p-space-3xs rounded-full border-2 border-on-surface bg-surface-container-low"
          id="mainNavigation"
          whileHover={{ scale: 1.02, boxShadow: '4px 4px 0px #191b23' }}
          transition={{ duration: 0.2 }}
        >
          {items.map(({ id, label }) => {
            const isActive = active === id
            return (
              <Link
                key={id}
                to={id}
                smooth
                duration={600}
                offset={-80}
                spy
                onSetActive={() => setActive(id)}
                className={`px-space-sm py-space-3xs rounded-full font-label-md text-label-md transition-all cursor-pointer ${isActive ? 'bg-primary-container !text-on-primary font-bold shadow-[2px_2px_0px_#191b23] border-2 border-on-surface' : 'text-on-surface-variant hover:text-on-surface border-2 border-transparent'}`}
              >
                {label}
              </Link>
            )
          })}
        </motion.nav>

        <motion.div
          className="flex items-center gap-space-2xs sm:gap-space-xs"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="hidden sm:inline-flex items-center justify-center px-space-xs py-1 rounded-lg border-2 border-on-surface bg-secondary-container text-on-secondary-container font-label-sm text-label-sm sm:px-space-sm sm:py-space-2xs sm:font-label-md sm:text-label-md shadow-[3px_3px_0px_#191b23] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#191b23] transition-all uppercase font-bold cursor-pointer"
          >
            Let's Talk
          </Link>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="flex lg:hidden items-center justify-center p-1.5 rounded-full border-2 border-on-surface shadow-[2px_2px_0px_#191b23] bg-surface-container-lowest"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-on-surface"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L12 13.17l5.71-5.94a.75.75 0 111.08 1.04l-6.25 6.5a.75.75 0 01-1.08 0l-6.25-6.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </motion.svg>
          </motion.button>
          <motion.div
            className="flex items-center p-0.5 rounded-full border-2 border-on-surface shadow-[2px_2px_0px_#191b23] bg-surface-container-lowest"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              alt="Profile"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
              src={imgMe}
              width="32"
              height="32"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        ref={mobileMenuRef}
        className="lg:hidden overflow-hidden border-t-2 border-on-surface bg-surface/95 backdrop-blur-md transition-all duration-400 ease-[0.22,1,0.36,1]"
        style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col items-center gap-space-xs px-grid-margin-mobile py-space-md">
          {items.map(({ id, label }) => {
            const isActive = active === id
            return (
              <Link
                key={id}
                to={id}
                smooth
                duration={600}
                offset={-80}
                spy
                onSetActive={() => setActive(id)}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center px-space-sm py-space-2xs rounded-full font-label-md text-label-md transition-all cursor-pointer ${isActive ? 'bg-primary-container !text-on-primary font-bold shadow-[2px_2px_0px_#191b23] border-2 border-on-surface' : 'text-on-surface-variant hover:text-on-surface border-2 border-transparent'}`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.header>
  )
}
