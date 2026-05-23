import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOMetadata {
  title: string;
  description: string;
}

const SEO_MAP: Record<string, SEOMetadata> = {
  '/': {
    title: 'Kaito Studio | Premium Landing Pages & Web Design',
    description: 'Kaito Studio is a premium web designer agency run by Abhay, specializing in high-converting landing page design and elite landing page optimization.',
  },
  '/services': {
    title: 'Services | Kaito Studio',
    description: 'Premium landing pages, custom multi-page sites, and elite landing page optimization packages carefully engineered by Abhay at Kaito Studio.',
  },
  '/pricing': {
    title: 'Pricing | Kaito Studio',
    description: 'Clear, straightforward pricing for high-converting landing pages, custom web design packages, and premium multi-page sites by Abhay.',
  },
  '/about': {
    title: 'About | Kaito Studio',
    description: 'The story of Kaito Studio, run by Abhay. A premium freelance web designer and full stack web developer focused on conversion optimization.',
  },
  '/contact': {
    title: 'Book a Project | Kaito Studio',
    description: 'Book a high-converting premium landing page or web site design with Abhay via WhatsApp, Instagram, or Email. Get elite optimization.',
  }
};

const DEFAULT_SEO: SEOMetadata = {
  title: 'Kaito Studio | Premium Web Site Designer & Agency',
  description: 'Kaito Studio is a premium web designer agency run by Abhay, specializing in high-converting landing page design and elite landing page optimization.',
};

export function useSEO() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const seoInfo = SEO_MAP[path] || DEFAULT_SEO;
    
    // 1. Update Document Title
    document.title = seoInfo.title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoInfo.description);

    // 3. Update or Create Canonical Link
    const siteUrl = 'https://kaito.studio';
    const canonicalUrl = `${siteUrl}${path === '/' ? '' : path}`;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

  }, [location.pathname]);
}
