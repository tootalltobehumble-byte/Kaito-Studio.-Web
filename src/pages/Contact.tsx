import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Kaito Studio";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Get in touch with Abhay at Kaito Studio for premium landing page design.");
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12 flex flex-col items-center">
      <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
        <h2 className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-6">Inquiries</h2>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 text-cream">Let's <span className="font-serif italic pt-2 block">Connect</span></h1>
        <p className="text-secondary text-lg leading-relaxed font-light">
          I work strictly asynchronously. No phone numbers. No Zoom meetings. Fill out the form, and you will receive a detailed email response within 24 hours.
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto">
        {submitted ? (
          <div className="bg-card border border-accent/20 p-12 text-center text-cream">
            <h3 className="font-serif text-2xl mb-4 text-accent">Message Received</h3>
            <p className="text-secondary">
              Thank you for reaching out. I will review your project details and get back to you via email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.1em] text-accent">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-midnight border-b border-card hover:border-accent/50 focus:border-accent focus:outline-none py-3 text-cream transition-colors rounded-none placeholder-card/50"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.1em] text-accent">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-midnight border-b border-card hover:border-accent/50 focus:border-accent focus:outline-none py-3 text-cream transition-colors rounded-none placeholder-card/50"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="package" className="text-xs uppercase tracking-[0.1em] text-accent">Service of Interest</label>
              <select 
                id="package"
                className="w-full bg-midnight border-b border-card hover:border-accent/50 focus:border-accent focus:outline-none py-3 text-cream transition-colors rounded-none appearance-none"
              >
                <option value="landing">$850 - Landing Page</option>
                <option value="multi">$1500 - Multi-page Site</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-xs uppercase tracking-[0.1em] text-accent">Project Details</label>
              <textarea 
                id="details" 
                required
                rows={4}
                className="w-full bg-midnight border-b border-card hover:border-accent/50 focus:border-accent focus:outline-none py-3 text-cream transition-colors rounded-none placeholder-card/50 resize-none"
                placeholder="Tell me about your business and goals..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-cream text-midnight py-4 uppercase tracking-[0.15em] text-sm font-semibold hover:bg-white transition-colors mt-8"
            >
              Submit Inquiry
            </button>
            <p className="text-center text-xs text-secondary mt-4 uppercase tracking-widest opacity-60">100% Async • Secure • Private</p>
          </form>
        )}
      </div>
    </div>
  );
}
