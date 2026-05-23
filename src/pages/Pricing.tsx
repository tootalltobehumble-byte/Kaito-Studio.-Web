import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Pricing() {
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
      className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12 flex flex-col items-center"
    >
      <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
        <motion.h2 
          variants={itemVariants} 
          className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-6"
        >
          Investment
        </motion.h2>
        
        <motion.h1 
          variants={itemVariants} 
          className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 text-cream"
        >
          Clear & <span className="font-serif italic pt-2 block">Honest</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className="text-secondary text-lg leading-relaxed font-light"
        >
          Straightforward pricing with no hidden fees or surprises. You pay for premium execution and a frictionless, async process.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16"
      >
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="bg-card p-10 flex flex-col items-center text-center relative overflow-hidden rounded-xl border border-transparent hover:border-accent/10 transition-colors"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
          <h3 className="font-serif text-2xl mb-2 text-cream z-10">Landing Page</h3>
          <p className="font-heading text-5xl text-accent my-6 z-10">$850</p>
          <p className="text-secondary text-sm leading-relaxed mb-8 max-w-xs z-10">
            A high-converting single-page site to validate offers and drive immediate action.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto w-full max-w-[200px] z-10"
          >
            <Link to="/contact" className="block w-full border border-accent/30 py-3 uppercase tracking-widest text-xs hover:bg-cream hover:text-midnight transition-all rounded-md cursor-pointer text-center">
              Get Started
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="bg-accent/10 border border-accent/20 p-10 flex flex-col items-center text-center relative overflow-hidden rounded-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-card rounded-bl-full"></div>
          <div className="absolute top-4 border border-accent/40 text-accent text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
          <h3 className="font-serif text-2xl mt-4 mb-2 text-cream z-10">Multi-page Site</h3>
          <p className="font-heading text-5xl text-accent my-6 z-10">$1500</p>
          <p className="text-secondary text-sm leading-relaxed mb-8 max-w-xs z-10">
            Up to 5 custom pages, engineered for authority, trust, and premium brand perception.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto w-full max-w-[200px] z-10"
          >
            <Link to="/contact" className="block w-full bg-cream text-midnight py-3 uppercase tracking-widest text-xs hover:bg-white transition-all rounded-md cursor-pointer text-center">
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="max-w-3xl w-full border-t border-accent/20 pt-12 text-center"
      >
        <h4 className="font-serif text-xl mb-4">Payment Structure</h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cream tracking-widest uppercase text-sm">
          <span>50% Upfront</span>
          <span className="hidden sm:block text-accent/50">—</span>
          <span>50% On Delivery</span>
        </div>
        <p className="text-secondary text-sm mt-4">
          All projects include $50/mo optional maintenance after launch.
        </p>
      </motion.div>
    </motion.div>
  );
}
