import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const scrollToValueProp = () => {
    document.getElementById('value-prop')?.scrollIntoView({ behavior: 'smooth' });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col relative w-full h-full max-w-7xl mx-auto flex-grow"
    >
      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-12 pb-32 md:pt-24 flex flex-col items-center flex-grow justify-center relative min-h-[calc(100vh-6rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          <div className="lg:col-span-7 flex flex-col z-10 order-2 lg:order-1">
            <motion.h2 
              variants={itemVariants}
              className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-6 w-fit"
            >
              Premium Landing Page Agency
            </motion.h2>
            
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-cream"
            >
              Designs That <span className="font-serif italic block pt-2">Convert.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-secondary text-lg font-light max-w-xl mb-12 leading-relaxed"
            >
              Every site is built exclusively for your specific audience. Nothing generic. 
              Minimal, moody, and engineered for high-performance SaaS, service providers, and coaches.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mb-16 items-start sm:items-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link to="/contact" className="block bg-cream text-midnight px-8 py-4 rounded-sm font-medium tracking-tighter text-sm hover:bg-white transition-colors uppercase w-full sm:w-auto text-center cursor-pointer">
                  Start a Project
                </Link>
              </motion.div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-[10px] uppercase tracking-widest text-secondary">Privacy First</span>
                <span className="text-xs font-serif italic text-cream/70">We don't showcase client work.</span>
              </div>
            </motion.div>

            {/* Stats Bar Container */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-accent/20 mt-6"
            >
              <motion.div variants={statVariants} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-heading text-cream mb-1">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary">Clients</span>
              </motion.div>
              <motion.div variants={statVariants} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-heading text-cream mb-1">4</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary">Countries</span>
              </motion.div>
              <motion.div variants={statVariants} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-heading text-cream mb-1">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary">Satisfaction</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end py-12"
          >
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative w-[85%] max-w-[400px] aspect-[4/5] lg:aspect-[3/4] bg-card flex items-end rounded-2xl overflow-hidden border border-accent group cursor-pointer"
            >
              <img 
                id="founder-photo" 
                src="/src/assets/images/regenerated_image_1779539837094.jpg" 
                alt="Abhay" 
                className="absolute inset-0 w-full h-full object-cover z-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60 z-10"></div>
              
              <div className="p-8 w-full relative z-20">
                <div className="text-[10px] uppercase tracking-[0.4em] mb-2 text-secondary">Founder</div>
                <div className="font-serif text-3xl md:text-4xl italic text-cream">Abhay</div>
              </div>
              
              <div className="absolute top-8 right-8 text-5xl md:text-[80px] font-heading opacity-5 leading-none z-10 pointer-events-none">KAITO</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button 
          onClick={scrollToValueProp} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group focus:outline-none"
          aria-label="Scroll to vision and values"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary group-hover:text-cream transition-colors duration-300">Explore Studio</span>
          <ChevronDown className="w-5 h-5 text-accent group-hover:text-cream animate-bounce transition-colors duration-300" />
        </motion.button>
      </section>
      
      {/* Short Value Prop / Pricing Preview */}
      <section id="value-prop" className="px-6 md:px-12 py-24 bg-card/20 border-y border-accent/20 mt-auto scroll-mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <h3 className="font-heading text-3xl md:text-4xl mb-6 text-cream">Fully Async. Absolute Privacy.</h3>
          <p className="text-secondary text-lg mb-12 font-light">
            No endless meetings, no corporate jargon. I focus strictly on results. Client privacy is my priority, which is why my portfolio remains closed to the public. You see results, not unfulfilled promises.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <div className="flex items-center gap-4 text-cream">
                <span className="font-heading text-2xl text-accent">$850</span>
                <span className="uppercase tracking-widest text-xs border-b border-accent/30 pb-1">Landing Page</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-accent/20"></div>
            <div className="flex items-center gap-4 text-cream">
                <span className="font-heading text-2xl text-accent">$1500</span>
                <span className="uppercase tracking-widest text-xs border-b border-accent/30 pb-1">Multi-page</span>
            </div>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
}
