import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { InstagramIcon } from './icons'
import { useLanguage } from '../contexts/LanguageContext'

const projects = [
  {
    title: 'Dev Studio Setup',
    category: 'Web Development',
    description: 'Multi-screen developer workspace showcasing a modern coding environment.',
    image:
      'https://images.unsplash.com/photo-1744555270794-6d378b9e7cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDB8MHx8fDE3NzgwNzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'Webflow Platform UI',
    category: 'UI Design',
    description: 'Modern no-code website builder interface with clean component library.',
    image:
      'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpbyUyMG1vZGVybnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['Next.js', 'Tailwind'],
  },
  {
    title: 'Mobile Health App',
    category: 'Mobile UI',
    description: 'Health tracking app with clean data visualization and intuitive UX.',
    image:
      'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['React Native', 'Design'],
  },
  {
    title: 'Multi-Screen Dashboard',
    category: 'Dashboard',
    description: 'Real-time analytics dashboard with dark mode and live data feeds.',
    image:
      'https://images.unsplash.com/photo-1753715613373-90b1ea010731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ24lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDB8MHx8fDE3NzgwNzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['Full Stack', 'APIs'],
  },
  {
    title: 'Social Media App UI',
    category: 'UI/UX',
    description: 'Social app with map integration and community feed for local events.',
    image:
      'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['Design', 'Prototyping'],
  },
  {
    title: 'E-Commerce Website',
    category: 'E-Commerce',
    description: 'Online store with product pages, cart flow, and SEO-optimized blog.',
    image:
      'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpbyUyMG1vZGVybnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
    tags: ['Shopify', 'SEO'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.08 } 
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export function PortfolioSection() {
  const { language, t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const projects = language === 'ar' ? [
    {
      title: 'إعداد ستوديو التطوير',
      category: 'تطوير الويب',
      description: 'مساحة عمل متعددة الشاشات للمطورين تعرض بيئة برمجة حديثة.',
      image:
        'https://images.unsplash.com/photo-1744555270794-6d378b9e7cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDB8MHx8fDE3NzgwNzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['React', 'TypeScript'],
    },
    {
      title: 'واجهة منصة ويب فلو',
      category: 'تصميم واجهة المستخدم',
      description: 'واجهة منشئ مواقع الويب بدون كود مع مكتبة مكونات نظيفة.',
      image:
        'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpbyUyMG1vZGVybnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['Next.js', 'Tailwind'],
    },
    {
      title: 'تطبيق صحة موبايل',
      category: 'واجهة الموبايل',
      description: 'تطبيق تتبع الصحة مع تصور بيانات نظيف وواجهة مستخدم بديهية.',
      image:
        'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['React Native', 'Design'],
    },
    {
      title: 'لوحة تحكم متعددة الشاشات',
      category: 'لوحة التحكم',
      description: 'لوحة تحكم تحليلية في الوقت الفعلي مع الوضع الليلي وموجودات البيانات المباشرة.',
      image:
        'https://images.unsplash.com/photo-1753715613373-90b1ea010731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ24lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDB8MHx8fDE3NzgwNzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['Full Stack', 'APIs'],
    },
    {
      title: 'واجهة تطبيق وسائل التواصل',
      category: 'واجهة/تجربة المستخدم',
      description: 'تطبيق اجتماعي مع تكامل الخرائط وتغذية مجتمعية للفعاليات المحلية.',
      image:
        'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['Design', 'Prototyping'],
    },
    {
      title: 'موقع تجارة إلكترونية',
      category: 'التجارة الإلكترونية',
      description: 'متجر إلكتروني مع صفحات المنتجات، تدفق سلة التسوق، ومدونة محسنة لمحركات البحث.',
      image:
        'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpbyUyMG1vZGVybnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['Shopify', 'SEO'],
    },
  ] : [
    {
      title: 'Dev Studio Setup',
      category: 'Web Development',
      description: 'Multi-screen developer workspace showcasing a modern coding environment.',
      image:
        'https://images.unsplash.com/photo-1744555270794-6d378b9e7cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDB8MHx8fDE3NzgwNzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['React', 'TypeScript'],
    },
    {
      title: 'Webflow Platform UI',
      category: 'UI Design',
      description: 'Modern no-code website builder interface with clean component library.',
      image:
        'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpbyUyMG1vZGVybnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['Next.js', 'Tailwind'],
    },
    {
      title: 'Mobile Health App',
      category: 'Mobile UI',
      description: 'Health tracking app with clean data visualization and intuitive UX.',
      image:
        'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['React Native', 'Design'],
    },
    {
      title: 'Multi-Screen Dashboard',
      category: 'Dashboard',
      description: 'Real-time analytics dashboard with dark mode and live data feeds.',
      image:
        'https://images.unsplash.com/photo-1753715613373-90b1ea010731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ24lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDB8MHx8fDE3NzgwNzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['Full Stack', 'APIs'],
    },
    {
      title: 'Social Media App UI',
      category: 'UI/UX',
      description: 'Social app with map integration and community feed for local events.',
      image:
        'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['Design', 'Prototyping'],
    },
    {
      title: 'E-Commerce Website',
      category: 'E-Commerce',
      description: 'Online store with product pages, cart flow, and SEO-optimized blog.',
      image:
        'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpbyUyMG1vZGVybnxlbnwwfDB8fHwxNzc4MDc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=800',
      tags: ['Shopify', 'SEO'],
    },
  ]

  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(157_100%_50%/0.03)_0%,transparent_70%)] pointer-events-none" />

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
            {language === 'ar' ? 'الأعمال المختارة' : 'Selected Work'}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-foreground"
          >
            {language === 'ar' ? 'بعض عينات بسيطة من أعمالي' : 'some simple samples of my work'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
          >
            {language === 'ar' ? 'نظرة على ما بنيناه. تابع' : 'A glimpse at what we\'ve built. Follow'}{' '}
            <a
              href="https://www.instagram.com/hexwebstudio_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              @hexwebstudio_
              <InstagramIcon size={12} />
            </a>{' '}
            {language === 'ar' ? 'لمعرض الأعمال الكامل.' : 'for the full portfolio.'}
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-1 gap-6"
        >
          <motion.div
            variants={cardVariants}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">
              {language === 'ar' ? 'متجر الطباعة ثلاثي الأبعاد' : '3D Printing Shop'}
            </h3>
            <div className="w-full">
              <iframe
                src="https://printshop3d.lovable.app/"
                width="100%"
                height="500"
                style={{ border: '0', borderRadius: '12px' }}
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">
              {language === 'ar' ? 'ابتسامات مشرقة في الأردن' : 'Radiant Smiles Jordan'}
            </h3>
            <div className="w-full">
              <iframe
                src="https://radiant-smiles-jordan.lovable.app/"
                width="100%"
                height="500"
                style={{ border: '0', borderRadius: '12px' }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>

              </div>
    </section>
  )
}
