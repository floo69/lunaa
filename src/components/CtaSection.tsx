
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('lunaLoggedIn') === 'true';
  
  const handleCtaClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-luna-lavender/40 to-luna-peach/30 animate-fade-in">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Redefine Your <span className="gradient-text">Health Journey?</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Join thousands of women who are taking control of their health with personalized insights, 
            cycle tracking, and a supportive community.
          </p>
          <Button 
            className="cta-button cta-button-primary text-lg px-8 py-6" 
            onClick={handleCtaClick}
          >
            {isLoggedIn ? "Go to Dashboard" : "Join Luna Today"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
