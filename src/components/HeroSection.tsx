import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const codeLines = [
  '// Building for the web since 2020',
  'const studio = {',
  '  name: "Hex Web Studio",',
  '  location: "Amman, Jordan ',
  '  stack: ["React", "Next.js", "TypeScript"],',
  '  passion: "Crafting pixel-perfect experiences",',
  '}',
]

function TypewriterCode() {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    if (currentLine >= codeLines.length) return
    const line = codeLines[currentLine]
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev]
          next[currentLine] = (next[currentLine] || '') + line[currentChar]
          return next
        })
        setCurrentChar((c) => c + 1)
      }, 40)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
      }, 120)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar])

  return (
    <div className="font-mono text-xs sm:text-sm leading-relaxed">
      {codeLines.map((_, i) => (
        <div key={i} className="flex">
          <span className="select-none w-8 text-muted-foreground text-right mr-4">{i + 1}</span>
          <span
            className={
              i === 0
                ? 'text-muted-foreground'
                : i === 1 || i === 6
                ? 'text-primary'
                : 'text-foreground'
            }
          >
            {displayed[i] || ''}
            {i === currentLine && (
              <span className="cursor-blink text-primary">|</span>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const { language, t } = useLanguage()
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const words = language === 'ar' ? 
    ['مواقع ويب', 'صفحات هبوط', 'تطبيقات ويب', 'متاجر إلكترونية', 'معارض أعمال'] :
    ['Websites', 'Landing Pages', 'Web Apps', 'E-Commerce Stores', 'Portfolios']

  const stats = language === 'ar' ? [
    { num: '50+', label: 'مشروع منجز' },
    { num: '2024', label: 'أُطلق' },
    { num: '100%', label: 'رضا العملاء' },
  ] : [
    { num: '50+', label: 'Projects Delivered' },
    { num: '2024', label: 'Launched' },
    { num: '100%', label: 'Client Satisfaction' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length)
        setFade(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(157_100%_50%/0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(157_80%_40%/0.05)_0%,transparent_60%)]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(157 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(157 100% 50%) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {language === 'ar' ? 'متاح للمشاريع · عمان، الأردن' : 'Available for projects · Amman, Jordan'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4"
          >
            {language === 'ar' ? 'أبني' : 'I Build'}{' '}
            <span
              className="text-primary hex-glow-text transition-opacity duration-400"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {words[wordIndex]}
            </span>
            <br />
            {language === 'ar' ? 'التي' : 'That'}{' '}
            <span className="relative inline-block">
              {language === 'ar' ? 'تعمل بالفعل' : 'Actually Work'}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/60 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg"
          >
            {language === 'ar' ? 'ستوديو هيكس ويب يصنع مواقع سريعة، حديثة، وجذابة بصرياً للشركات والشركات الناشئة في الأردن وخارجها.' : 'Hex Web Studio creates fast, modern, and visually stunning websites for businesses and startups in Jordan and beyond.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://www.instagram.com/hexwebstudio_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(157_100%_50%/0.4)] transition-all duration-200 active:scale-95"
            >
              {t.hero.viewPortfolio}
              <ExternalLink size={16} />
            </a>
            <a
              href="https://wa.me/962770125495"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-200 active:scale-95"
            >
              {language === 'ar' ? 'واتسابني' : 'WhatsApp Me'}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex gap-8 mt-12 pt-8 border-t border-border"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-bold text-primary">{stat.num}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — code editor */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="hex-glow rounded-lg border border-border overflow-hidden bg-card">
            {/* Editor title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/40 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-primary/70" />
              </div>
              <span className="ml-2 text-muted-foreground text-xs font-mono">studio.ts</span>
            </div>
            {/* Code */}
            <div className="p-6">
              <TypewriterCode />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 bg-secondary border border-border rounded-md px-3 py-2 text-xs font-mono text-primary shadow-md"
          >
            ✓ React · Next.js · TypeScript
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
