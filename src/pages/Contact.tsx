import { useState, FormEvent } from 'react';
import { MessageCircle, Instagram, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const whatsappNumber = "919839835630";
  const emailAddress = "kaito.webdev@gmail.com";
  const instagramUsername = "kaitomadeyou";

  // Form states
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('landing');
  const [details, setDetails] = useState('');

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const selectedServiceLabel = 
      service === 'landing' ? 'Landing Page ($850)' : 
      service === 'multi' ? 'Multi-page Site ($1500)' : 
      'Other / Custom Package';

    // Construct highly professional pre-filled WhatsApp message
    const formattedMessage = `Hi Abhay, I would like to book a project with Kaito Studio!

*Project Request Detail:*
• *Name:* ${name}
• *Contact (Email/Social):* ${contact}
• *Service:* ${selectedServiceLabel}

*Project Brief:*
${details}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Redirect / open WhatsApp chat
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const instagramUrl = `https://instagram.com/${instagramUsername}`;
  const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent("Project Inquiry | Kaito Studio")}`;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12 flex flex-col items-center"
    >
      {/* Page Header */}
      <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
        <motion.h2 
          variants={itemVariants}
          className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-6"
        >
          Start Your Project
        </motion.h2>
        
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 text-cream"
        >
          Let's <span className="font-serif italic pt-2 block">Connect</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-secondary text-lg leading-relaxed font-light"
        >
          Fill out the quick template below. It instantly compiles your details and opens a direct secure chat with Abhay to align on the timeline.
        </motion.p>
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col gap-12">
        {/* Contact Form Submitting directly to WhatsApp */}
        <motion.div 
          variants={itemVariants}
          className="bg-card/30 border border-accent/20 rounded-2xl p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-all duration-700"></div>
          
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <h3 className="font-heading text-xl text-cream tracking-tight">WhatsApp Instant Briefing</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-accent font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0E0E10] border border-accent/10 focus:border-accent focus:outline-none px-4 py-3 text-cream transition-colors rounded-lg placeholder-secondary/30 text-sm focus:ring-1 focus:ring-accent/20"
                  placeholder="Abhay Sharma"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact" className="text-[10px] uppercase tracking-widest text-accent font-medium">Email or Handle</label>
                <input 
                  type="text" 
                  id="contact" 
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-[#0E0E10] border border-accent/10 focus:border-accent focus:outline-none px-4 py-3 text-cream transition-colors rounded-lg placeholder-secondary/30 text-sm focus:ring-1 focus:ring-accent/20"
                  placeholder="e.g. kaito@gmail.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-[10px] uppercase tracking-widest text-accent font-medium">Service of Interest</label>
              <select 
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#0E0E10] border border-accent/10 focus:border-accent focus:outline-none px-4 py-3 text-cream transition-colors rounded-lg text-sm focus:ring-1 focus:ring-accent/20 cursor-pointer animate-none"
              >
                <option value="landing">Landing Page — $850 (waitlists, single-product, landing pages)</option>
                <option value="multi">Multi-page Website — $1,500 (portfolio, multi-screen, business solutions)</option>
                <option value="custom">Other / Custom Optimization Project</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-[10px] uppercase tracking-widest text-accent font-medium">Project Brief & Details</label>
              <textarea 
                id="details" 
                required
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-[#0E0E10] border border-accent/10 focus:border-accent focus:outline-none px-4 py-3 text-cream transition-colors rounded-lg placeholder-secondary/30 text-sm focus:ring-1 focus:ring-accent/20 resize-none leading-relaxed"
                placeholder="Briefly describe your venture, visual inspiration, goals, and target timeline..."
              ></textarea>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full"
            >
              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-3 w-full bg-cream hover:bg-white text-midnight font-semibold uppercase tracking-widest text-xs py-4 px-6 rounded-lg transition-all duration-300 shadow-xl group/btn cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-midnight" />
                Send Brief & Chat on WhatsApp
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
            <p className="text-center text-[10px] text-secondary/60 uppercase tracking-widest font-light">100% Secure • Opens instantly in native app or web</p>
          </form>
        </motion.div>

        {/* Under the form: Instagram and Email remain in the same place, and the reason text */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          {/* Email Card */}
          <a 
            href={emailUrl}
            className="flex items-start gap-4 p-6 bg-card/20 hover:bg-card/40 border border-accent/10 hover:border-accent/30 rounded-xl transition-all duration-300 group"
          >
            <div className="p-3 bg-card rounded-lg text-accent group-hover:text-cream transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-secondary block mb-1">Direct Email</span>
              <span className="text-sm font-medium text-cream block group-hover:text-accent transition-colors break-all">{emailAddress}</span>
            </div>
          </a>

          {/* Instagram Card */}
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 bg-card/20 hover:bg-card/40 border border-accent/10 hover:border-accent/30 rounded-xl transition-all duration-300 group"
          >
            <div className="p-3 bg-card rounded-lg text-accent group-hover:text-cream transition-colors">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-secondary block mb-1">Instagram</span>
              <span className="text-sm font-medium text-cream block group-hover:text-accent transition-colors">@{instagramUsername}</span>
            </div>
          </a>
        </motion.div>

        {/* Why Async Callout Card */}
        <motion.div 
          variants={itemVariants}
          className="p-6 bg-card/10 border border-accent/5 rounded-xl text-center max-w-2xl mx-auto"
        >
          <h4 className="text-xs uppercase tracking-widest text-accent mb-2 font-medium">Direct Asynchronous Model</h4>
          <p className="text-xs text-secondary/70 leading-relaxed font-light">
            By avoiding unnecessary meetings, we optimize 100% of our production time for designing responsive layouts, programming fluid motion scripts, and writing high-converting visual copy.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
