import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { Globe, Smartphone, ShoppingCart, Palette, Zap, Code2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function ServicesSection() {
  const { language } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const services = language === 'ar' ? [
    {
      icon: Globe,
      title: 'مواقع الأعمال',
      description: 'مواقع نظيفة، سريعة، واحترافية تمثل علامتك التجارية — من صفحات هبوط إلى مواقع متعددة الصفحات للشركات.',
      tags: ['React', 'Next.js', 'محسّن لمحركات البحث'],
    },
    {
      icon: ShoppingCart,
      title: 'متاجر التجارة الإلكترونية',
      description: 'متاجر إلكترونية غنية بالميزات مع إدارة المنتجات، تكامل الدفع، وتجارب عملاء سلسة.',
      tags: ['Shopify', 'WooCommerce', 'مخصص'],
    },
    {
      icon: Smartphone,
      title: 'تصميم متجاوب',
      description: 'كل موقع أبنيه يبدو رائعًا على جميع أحجام الشاشات — الموبايل، التابلت، والكمبيوتر، بدون تنازلات.',
      tags: ['الموبايل أولاً', 'Tailwind CSS', 'متوافق مع المتصفحات'],
    },
    {
      icon: Palette,
      title: 'تصميم واجهة/تجربة المستخدم',
      description: 'من الإطارات الشبكية إلى الواجهات المصقولة، أصمم تجارب يحبها المستخدمون وتحول الزوار إلى عملاء.',
      tags: ['Figma', 'أنظمة التصميم', 'النماذج الأولية'],
    },
    {
      icon: Zap,
      title: 'تحسين الأداء',
      description: 'أوقات تحميل سريعة للغاية، درجات Lighthouse مثالية، وموارد محسّنة لترتيب موقعك وتحويل الزوار.',
      tags: ['Core Web Vitals', 'التخزين المؤقت', 'CDN'],
    },
    {
      icon: Code2,
      title: 'تطوير تطبيقات الويب',
      description: 'تطبيقات ويب مخصصة مع ميزات في الوقت الفعلي، لوحات تحكم، ووظائف معقدة مبنية بتقنيات حديثة.',
      tags: ['Full Stack', 'APIs', 'قواعد البيانات'],
    },
  ] : [
    {
      icon: Globe,
      title: 'Business Websites',
      description: 'Clean, fast, and professional websites that represent your brand — from landing pages to full multi-page corporate sites.',
      tags: ['React', 'Next.js', 'SEO-Optimized'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Stores',
      description: 'Feature-rich online shops with product management, payment integration, and smooth customer experiences.',
      tags: ['Shopify', 'WooCommerce', 'Custom'],
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Every site I build looks stunning on all screen sizes — mobile, tablet, and desktop, no compromises.',
      tags: ['Mobile-First', 'Tailwind CSS', 'Cross-browser'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'From wireframes to polished interfaces, I design experiences that users love and that convert visitors into customers.',
      tags: ['Figma', 'Design Systems', 'Prototyping'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Blazing-fast load times, perfect Lighthouse scores, and optimized assets so your site ranks and converts.',
      tags: ['Core Web Vitals', 'Caching', 'CDN'],
    },
    {
      icon: Code2,
      title: 'Web App Development',
      description: 'Custom web applications with real-time features, dashboards, and complex functionality built with modern tech.',
      tags: ['Full Stack', 'APIs', 'Databases'],
    },
  ]

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4"
          >
            {language === 'ar' ? 'ما أفعله' : 'What I Do'}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-foreground"
          >
            {language === 'ar' ? 'خدمات مصممة' : 'Services Built to'}{' '}
            <span className="text-primary">{language === 'ar' ? 'لأداء' : 'Perform'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
          >
            {language === 'ar' ? 
              'من صفحات هبوط بسيطة إلى تطبيقات ويب معقدة — أقدم الجودة في كل مقياس.' :
              'From simple landing pages to complex web apps — I deliver quality at every scale.'
            }
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:hex-glow"
                style={{}}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top_left,hsl(157_100%_50%/0.06),transparent_60%)]" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs font-mono bg-secondary text-secondary-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
