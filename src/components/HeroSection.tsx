
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('lunaLoggedIn') === 'true';
  
  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };
  
  const handleExploreFeatures = () => {
    // Scroll to features section
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-luna-lavender/30 to-luna-peach/20 bg-hero-pattern animate-fade-in">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Women's Health, <br className="hidden sm:inline" />
            <span className="gradient-text">One Cycle at a Time.</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Your personalized menstrual, fertility, and wellness companion with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="cta-button cta-button-primary" onClick={handleGetStarted}>
              {isLoggedIn ? "Go to Dashboard" : "Get Started"}
            </Button>
            <Button 
              variant="outline" 
              className="cta-button cta-button-secondary"
              onClick={handleExploreFeatures}
            >
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
