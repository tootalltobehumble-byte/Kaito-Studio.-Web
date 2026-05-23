import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Kaito Studio | Premium Landing Pages";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Landing pages that convert. Kaito Studio is a premium design agency run by Abhay.");
  }, []);

  return (
    <div className="flex flex-col relative w-full h-full max-w-7xl mx-auto flex-grow">
      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-12 pb-24 md:pt-24 flex flex-col items-center flex-grow justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          <div className="lg:col-span-7 flex flex-col z-10 order-2 lg:order-1">
            <h2 className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-6 w-fit">Premium Landing Page Agency</h2>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-cream">
              Designs That <span className="font-serif italic block pt-2">Convert.</span>
            </h1>
            <p className="text-secondary text-lg font-light max-w-xl mb-12 leading-relaxed">
              Every site is built exclusively for your specific audience. Nothing generic. 
              Minimal, moody, and engineered for high-performance SaaS, service providers, and coaches.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16 items-start sm:items-center">
              <Link to="/contact" className="bg-cream text-midnight px-8 py-4 rounded-sm font-medium tracking-tighter text-sm hover:bg-white transition-colors uppercase w-full sm:w-auto text-center">
                Start a Project
              </Link>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-[10px] uppercase tracking-widest text-secondary">Privacy First</span>
                <span className="text-xs font-serif italic text-cream/70">We don't showcase client work.</span>
              </div>
            </div>

            {/* Stats Bar Container */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-accent/30 mt-6">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-heading text-cream mb-1">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary">Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-heading text-cream mb-1">4</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary">Countries</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-heading text-cream mb-1">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary">Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end py-12">
            <div className="relative w-[85%] max-w-[400px] aspect-[4/5] lg:aspect-[3/4] bg-card flex items-end rounded-2xl overflow-hidden border border-accent group">
              <img 
                id="founder-photo" 
                src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=2390&auto=format&fit=crop" 
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Short Value Prop / Pricing Preview */}
      <section className="px-6 md:px-12 py-24 bg-card/20 border-y border-accent/20 mt-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
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
        </div>
      </section>

    </div>
  );
}
