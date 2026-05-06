import { motion } from 'framer-motion'
import { MapPin, Phone, CheckCircle2 } from 'lucide-react'
import { InstagramIcon } from './icons'
import { useLanguage } from '../contexts/LanguageContext'

export function AboutSection() {
  const { language } = useLanguage()

  const techStack = language === 'ar' ? [
    'ريأكت', 'نكست.جي إس', 'تايبسكريبت', 'تيلويند سي إس إس',
    'نود.جي إس', 'بوستجري إس كيو إل', 'فيجما', 'وردبريس',
  ] : [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'PostgreSQL', 'Figma', 'WordPress',
  ]

  const values = language === 'ar' ? [
    'تسليم سريع دون التضحية بالجودة',
    'كود نظيف وقابل للصيانة في كل مرة',
    'الموبايل أولاً، متجاوب بشكل افتراضي',
    'محسّن لمحركات البحث من الأساس',
    'تواصل مباشر — لا وسطاء',
  ] : [
    'Fast turnaround without sacrificing quality',
    'Clean, maintainable code every time',
    'Mobile-first, responsive by default',
    'SEO optimized from the ground up',
    'Direct communication — no middlemen',
  ]
  return (
    <section id="about" className="py-24 relative">
      {/* bg strip */}
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image & info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-border hex-glow">
              <img
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXNpZ24lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDB8MHx8fDE3NzgwNzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Developer workspace"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Info card */}
            <div className="absolute -bottom-6 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg w-52">
              <div className="flex items-start gap-2 mb-3">
                <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center rotate-45 shrink-0 mt-0.5">
                  <span className="text-primary-foreground font-bold text-xs -rotate-45 font-mono">H</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground text-sm">{language === 'ar' ? 'ستوديو هيكس ويب' : 'Hex Web Studio'}</div>
                  <div className="text-xs text-muted-foreground">{language === 'ar' ? 'مطور ويب' : 'Web Developer'}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin size={11} className="text-primary shrink-0" />
                {language === 'ar' ? 'عمان، الأردن' : 'Amman, Jordan'}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                {language === 'ar' ? 'متاح للمشاريع' : 'Available for projects'}
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
              {language === 'ar' ? 'نبذة عني' : 'About Me'}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {language === 'ar' ? 'مطور شغوف،' : 'Passionate Developer,'}{' '}
              <span className="text-primary">{language === 'ar' ? 'مقر في عمان' : 'Based in Amman'}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'ar' 
                ? 'أنا مطور ويب مستقل، أبني مواقع وتطبيقات ويب عالية الجودة للشركات ورواد الأعمال في الأردن وخارجها. أُطلق في 2024، أركز على تقديم النتائج — ليس فقط الكود.' 
                : 'I\'m a freelance web developer, building high-quality websites and web applications for businesses and entrepreneurs in Jordan and beyond. Launched in 2024, I focus on delivering results — not just code.'
              }
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {language === 'ar' 
                ? 'سواء كنت بحاجة إلى موقع جديد، إعادة تصميم، أو تطبيق ويب مخصص، أعمل معك بشكل وثيق من المفهوم إلى الإطلاق للتأكد من أنه يبدو رائعًا ويعمل بشكل مثالي.' 
                : 'Whether you need a fresh website, a redesign, or a custom web app, I work closely with you from concept to launch to make sure it looks great and works perfectly.'
              }
            </p>

            {/* Values */}
            <ul className="space-y-2 mb-8">
              {values.map((val) => (
                <li key={val} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  {val}
                </li>
              ))}
            </ul>

            
            {/* Contact quick links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/962770125495"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={15} className="text-primary" />
                0770 125 495
              </a>
              <a
                href="https://www.instagram.com/hexwebstudio_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <InstagramIcon size={15} className="text-primary" />
                @hexwebstudio_
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
