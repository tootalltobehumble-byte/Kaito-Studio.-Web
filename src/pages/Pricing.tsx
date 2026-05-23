import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing | Kaito Studio";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Clear, straightforward pricing for high-converting landing pages and multi-page sites.");
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12 flex flex-col items-center">
      <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
        <h2 className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-6">Investment</h2>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 text-cream">Clear & <span className="font-serif italic pt-2 block">Honest</span></h1>
        <p className="text-secondary text-lg leading-relaxed font-light">
          Straightforward pricing with no hidden fees or surprises. You pay for premium execution and a frictionless, async process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16">
        <div className="bg-card p-10 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
          <h3 className="font-serif text-2xl mb-2 text-cream z-10">Landing Page</h3>
          <p className="font-heading text-5xl text-accent my-6 z-10">$850</p>
          <p className="text-secondary text-sm leading-relaxed mb-8 max-w-xs z-10">
            A high-converting single-page site to validate offers and drive immediate action.
          </p>
          <Link to="/contact" className="mt-auto w-full max-w-[200px] border border-accent/30 py-3 uppercase tracking-widest text-xs hover:bg-cream hover:text-midnight transition-all z-10">
            Get Started
          </Link>
        </div>

        <div className="bg-accent/10 border border-accent/20 p-10 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-card rounded-bl-full"></div>
          <div className="absolute top-4 border border-accent/40 text-accent text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
          <h3 className="font-serif text-2xl mt-4 mb-2 text-cream z-10">Multi-page Site</h3>
          <p className="font-heading text-5xl text-accent my-6 z-10">$1500</p>
          <p className="text-secondary text-sm leading-relaxed mb-8 max-w-xs z-10">
            Up to 5 custom pages, engineered for authority, trust, and premium brand perception.
          </p>
          <Link to="/contact" className="mt-auto w-full max-w-[200px] bg-cream text-midnight py-3 uppercase tracking-widest block text-xs hover:bg-white transition-all z-10">
            Get Started
          </Link>
        </div>
      </div>

      <div className="max-w-3xl w-full border-t border-accent/20 pt-12 text-center">
        <h4 className="font-serif text-xl mb-4">Payment Structure</h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cream tracking-widest uppercase text-sm">
          <span>50% Upfront</span>
          <span className="hidden sm:block text-accent/50">—</span>
          <span>50% On Delivery</span>
        </div>
        <p className="text-secondary text-sm mt-4">
          All projects include $50/mo optional maintenance after launch.
        </p>
      </div>
    </div>
  );
}
