
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { CalendarHeart, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('lunaLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleGetStarted = () => {
    if (isLoggedIn) {
      // In a real app, redirect to dashboard
      console.log('User is logged in, would redirect to dashboard');
      // For now, we'll just show an alert
      alert('Welcome back! In a complete app, you would be redirected to your dashboard.');
    } else {
      // Redirect to auth page
      navigate('/auth');
    }
  };

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white to-luna-lavender/20 bg-hero-pattern">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text">
              Empowering Women's Health, One Cycle at a Time.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Your personalized menstrual, fertility, and wellness companion with AI-powered insights.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button 
                className="cta-button cta-button-primary"
                onClick={handleGetStarted}
              >
                {isLoggedIn ? 'View Dashboard' : 'Get Started'}
              </Button>
              <Button 
                variant="outline" 
                className="cta-button cta-button-secondary"
                onClick={scrollToFeatures}
              >
                Explore Features
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="h-[350px] w-[350px] md:h-[450px] md:w-[450px] relative rounded-full bg-gradient-to-br from-luna-lavender via-luna-peach to-luna-teal p-1 animate-float">
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="p-3 bg-luna-lavender rounded-full animate-float" style={{ animationDelay: '0.5s' }}>
                      <Heart className="h-8 w-8 text-luna-purple" />
                    </div>
                  </div>
                  <div className="absolute top-1/3 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="p-3 bg-luna-peach rounded-full animate-float" style={{ animationDelay: '1.5s' }}>
                      <CalendarHeart className="h-8 w-8 text-rose-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-1/2">
                    <div className="p-3 bg-luna-teal rounded-full animate-float" style={{ animationDelay: '1s' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="Woman smiling" 
                    className="rounded-full object-cover w-full h-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
