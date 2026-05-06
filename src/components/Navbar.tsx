import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { label: t.navbar.services, href: '#services' },
    { label: t.navbar.portfolio, href: '#portfolio' },
    { label: t.navbar.about, href: '#about' },
    { label: t.navbar.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center rotate-45 group-hover:scale-105 transition-transform">
            <span className="text-primary-foreground font-bold text-sm -rotate-45 font-mono">H</span>
          </div>
          <span className="font-heading font-bold text-foreground text-lg">
            Hex<span className="text-primary">Web</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-sm border border-border text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-200"
            title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
          >
            <Globe size={16} />
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          
          <a
            href="https://wa.me/962770125495"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_16px_hsl(157_100%_50%/0.4)] active:scale-95"
          >
            {t.navbar.letsTalk}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {/* Language Toggle - Mobile */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-sm border border-border text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                <Globe size={16} />
                {language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
              </button>
              
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/962770125495"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-semibold text-center active:scale-95"
              >
                {t.navbar.letsTalk}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
