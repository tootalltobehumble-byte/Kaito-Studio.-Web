import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Services() {
  const packages = [
    {
      title: 'Waitlist / Landing Page',
      price: '$850',
      description: 'A highly focused, conversion-optimized single-page website to validate your idea or sell a single offer.',
      features: [
        'Custom Design (No Templates)',
        'Mobile-First Responsive Layout',
        'SEO Optimized Meta Tags',
        'High-Converting Copywriting',
        'Fast Loading & Optimized Assets',
        'Integration with Your Tools (Stripe/Mailchimp)'
      ]
    },
    {
      title: 'Complete Multi-Page Site',
      price: '$1500',
      description: 'A scalable, premium multi-page experience designed to establish deep authority and trust.',
      features: [
        'Up to 5 Custom Pages (e.g., Home, Services, About, Contact)',
        'Strategic User Journey Mapping',
        'Advanced Animations & Transitions',
        'Comprehensive SEO Setup',
        'Mobile-First Responsive',
        'Premium Typography & Color Theory'
      ]
    },
    {
      title: 'Monthly Maintenance',
      price: '$50/mo',
      description: 'Zero-headache technical management to keep your site fast, secure, and updated month over month.',
      features: [
        'Monthly Content Updates',
        'Performance Monitoring',
        'Uptime Tracking',
        'Minor Design Tweaks',
        'Priority Async Support'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12"
    >
      <div className="max-w-3xl mb-16">
        <motion.h2 
          variants={itemVariants}
          className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-6"
        >
          What We Do
        </motion.h2>
        
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 text-cream"
        >
          Expertise & <span className="font-serif italic pt-2 block">Precision</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-secondary text-lg leading-relaxed font-light"
        >
          I don't just build websites; I architect digital experiences that turn visitors into leads. 
          Everything is custom-tailored to your audience. No templates. No generic fluff.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {packages.map((pkg, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-card/20 border border-card p-8 flex flex-col hover:border-accent/40 transition-colors duration-500 rounded-xl"
          >
            <h3 className="font-serif text-2xl mb-2 text-cream">{pkg.title}</h3>
            <p className="font-heading text-3xl text-accent mb-6">{pkg.price}</p>
            <p className="text-secondary text-sm leading-relaxed mb-8 min-h-[60px]">{pkg.description}</p>
            
            <div className="flex-grow">
              <ul className="space-y-4 text-sm text-cream/90">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 w-full"
            >
              <Link 
                to="/contact"
                className="block w-full text-center border border-accent/20 py-4 uppercase tracking-[0.15em] text-xs hover:bg-cream hover:text-midnight transition-colors rounded-lg cursor-pointer"
              >
                Select Package
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
