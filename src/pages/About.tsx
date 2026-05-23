import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About | Kaito Studio";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "The story of Kaito Studio, run by Abhay, focused on high-quality web design.");
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1 flex flex-col items-start gap-6">
          <h2 className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-2">Who We Are</h2>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight text-cream">
            The Story of <span className="font-serif italic block pt-2">Kaito Studio.</span>
          </h1>
          
          <div className="space-y-6 text-secondary text-base leading-relaxed max-w-lg mt-4 font-light">
            <p>
              "Kaito" translates to "Ocean and Soar." It represents depth, clarity, and the boundless trajectory of digital ambition. Kaito Studio is a highly specialized design practice servicing the US, UK, EU, and Japan.
            </p>
            <p>
              Run by Abhay, a 20-year-old digital specialist, the studio operates on contrarian principles: total client privacy, zero public portfolios, and an entirely asynchronous communication model.
            </p>
            <p>
              We believe great design shouldn't require endless Zoom calls. You provide the vision. We execute with precision. 
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 mt-8 p-6 border border-card bg-card/10">
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-1">Focus</p>
              <p className="font-serif text-cream">SaaS & Services</p>
            </div>
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-1">Model</p>
              <p className="font-serif text-cream">100% Async</p>
            </div>
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-1">Privacy</p>
              <p className="font-serif text-cream">Closed Portfolio</p>
            </div>
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-1">Locations</p>
              <p className="font-serif text-cream">Global Reach</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-accent">
            <img 
              id="founder-photo-about"
              src="https://images.unsplash.com/photo-1542157585-ef20bbcce178?q=80&w=2400&auto=format&fit=crop" 
              alt="Abhay" 
              className="w-full h-full object-cover z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
