
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add IDs to sections for navigation
    const sections = document.querySelectorAll('section');
    if (sections[0]) sections[0].id = 'hero';
    if (sections[1]) sections[1].id = 'features';
    if (sections[2]) sections[2].id = 'how-it-works';
    if (sections[3]) sections[3].id = 'testimonials';
    
    // Optional: Add scroll observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation classes when elements come into view
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all feature cards and other animated elements
    document.querySelectorAll('.feature-card, .how-it-works-card, .testimonial-card').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
