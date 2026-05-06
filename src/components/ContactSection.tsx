import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react'
import { InstagramIcon } from './icons'
import { useLanguage } from '../contexts/LanguageContext'

export function ContactSection() {
  const { language } = useLanguage()

  const contactMethods = language === 'ar' ? [
    {
      icon: MessageCircle,
      label: 'واتساب',
      value: '+962 770 125 495',
      description: 'أسرع استجابة — عادة خلال ساعات',
      href: 'https://wa.me/962770125495',
      cta: 'فتح واتساب',
    },
    {
      icon: Phone,
      label: 'الهاتف',
      value: '0770 125 495',
      description: 'اتصل خلال ساعات العمل (9ص–6م توقيت عمان)',
      href: 'tel:+962770125495',
      cta: 'اتصل الآن',
    },
    {
      icon: InstagramIcon,
      label: 'انستغرام',
      value: '@hexwebstudio_',
      description: 'رسالة للاستفسارات المشاريع والأعمال',
      href: 'https://www.instagram.com/hexwebstudio_',
      cta: 'عرض الملف الشخصي',
    },
  ] : [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+962 770 125 495',
      description: 'Fastest response — usually within hours',
      href: 'https://wa.me/962770125495',
      cta: 'Open WhatsApp',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0770 125 495',
      description: 'Call during business hours (9AM–6PM AST)',
      href: 'tel:+962770125495',
      cta: 'Call Now',
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: '@hexwebstudio_',
      description: 'DM for project inquiries & portfolio',
      href: 'https://www.instagram.com/hexwebstudio_',
      cta: 'View Profile',
    },
  ]
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(157_100%_50%/0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4"
          >
            {language === 'ar' ? 'تواصل معي' : 'Get In Touch'}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-foreground"
          >
            {language === 'ar' ? 'لنبني شيئًا' : "Let's Build Something"}{' '}
            <span className="text-primary">{language === 'ar' ? 'عظيم معًا' : 'Great Together'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
          >
            {language === 'ar' ? 
              'جاهز لبدء مشروعك؟ تواصل من خلال أي من القنوات أدناه وسأعود إليك بسرعة.' :
              'Ready to start your project? Reach out through any of the channels below and I\'ll get back to you quickly.'
            }
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 block"
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_left,hsl(157_100%_50%/0.06),transparent_60%)]" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mb-1">{method.label}</div>
                  <div className="font-heading font-bold text-foreground text-lg mb-2">{method.value}</div>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <div className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                    {method.cta}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Location strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-lg border border-border bg-card overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(157_100%_50%/0.05),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <div className="font-heading font-bold text-foreground text-lg">{language === 'ar' ? 'مقر في عمان، الأردن' : 'Based in Amman, Jordan'}</div>
                <div className="text-muted-foreground text-sm">{language === 'ar' ? 'خدمة العملاء محليًا وعالميًا' : 'Serving clients locally & worldwide'}</div>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="https://wa.me/962770125495"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-sm hover:bg-primary/90 hover:shadow-[0_0_16px_hsl(157_100%_50%/0.4)] transition-all active:scale-95"
              >
                {language === 'ar' ? 'ابدأ مشروعًا' : 'Start a Project'}
              </a>
              <a
                href="https://www.instagram.com/hexwebstudio_"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-border text-foreground font-semibold text-sm rounded-sm hover:border-primary/50 hover:text-primary transition-all active:scale-95"
              >
                {language === 'ar' ? 'تابعنا' : 'Follow Us'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
