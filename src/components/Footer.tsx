import { motion } from 'framer-motion'
import { Phone, MapPin, ArrowUp } from 'lucide-react'
import { InstagramIcon } from './icons'
import { useLanguage } from '../contexts/LanguageContext'

export function Footer() {
  const { language } = useLanguage()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center rotate-45">
                <span className="text-primary-foreground font-bold text-sm -rotate-45 font-mono">H</span>
              </div>
              <span className="font-heading font-bold text-foreground text-lg">
                Hex<span className="text-primary">Web</span> Studio
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              Building beautiful, high-performance websites and web applications for businesses in Jordan and beyond.
            </p>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={13} className="text-primary" />
              Amman, Jordan
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-heading font-semibold text-foreground text-sm mb-4">Navigation</div>
            <ul className="space-y-2">
              {[
                { label: language === 'ar' ? 'الخدمات' : 'Services', href: '#services' },
                { label: language === 'ar' ? 'أعمالي' : 'Portfolio', href: '#portfolio' },
                { label: language === 'ar' ? 'نبذة عني' : 'About', href: '#about' },
                { label: language === 'ar' ? 'التواصل' : 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href)
                      el?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading font-semibold text-foreground text-sm mb-4">{language === 'ar' ? 'التواصل' : 'Contact'}</div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/962770125495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={13} className="text-primary" />
                  +962 770 125 495
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hexwebstudio_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <InstagramIcon size={13} className="text-primary" />
                  @hexwebstudio_
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            {language === 'ar' ? 
                `© ${new Date().getFullYear()} ستوديو هيكس ويب. جميع الحقوق محفوظة.` :
                `© ${new Date().getFullYear()} Hex Web Studio. All rights reserved.`
              }
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            {language === 'ar' ? 'صُنع بـ' : 'Made with'} <span className="text-primary">❤</span> {language === 'ar' ? 'في عمان، الأردن' : 'in Amman, Jordan'}
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
