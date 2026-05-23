import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    document.title = "Services | Kaito Studio";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Landing pages, multi-page sites, and maintenance packages carefully engineered by Kaito Studio.");
  }, []);

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

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12">
      <div className="max-w-3xl mb-16">
        <h2 className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-6">What We Do</h2>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 text-cream">Expertise & <span className="font-serif italic pt-2 block">Precision</span></h1>
        <p className="text-secondary text-lg leading-relaxed font-light">
          I don't just build websites; I architect digital experiences that turn visitors into leads. 
          Everything is custom-tailored to your audience. No templates. No generic fluff.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-card/20 border border-card p-8 flex flex-col hover:border-accent/40 transition-colors duration-500">
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
            
            <Link 
              to="/contact"
              className="mt-12 block w-full text-center border border-accent/20 py-4 uppercase tracking-[0.15em] text-xs hover:bg-cream hover:text-midnight transition-colors"
            >
              Select Package
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
