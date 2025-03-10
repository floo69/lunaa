
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const CtaSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('lunaLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoggedIn) {
      toast({
        title: "Already Registered",
        description: "You're already part of Luna's community!",
      });
    } else {
      // Store the email for pre-filling the signup form
      if (formData.email) {
        localStorage.setItem('lunaSignupEmail', formData.email);
      }
      if (formData.name) {
        localStorage.setItem('lunaSignupName', formData.name);
      }
      
      // Navigate to the auth page
      navigate('/auth');
    }
  };

  const handleExploreMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-luna-lavender/50 to-luna-peach/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Redefine Your Health Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of women who have already transformed their wellness experience with Luna.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="rounded-full border-gray-200 focus:border-luna-purple"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="rounded-full border-gray-200 focus:border-luna-purple" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full cta-button cta-button-primary flex items-center justify-center gap-2"
              >
                {isLoggedIn ? 'Access Dashboard' : 'Join Luna Today'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              variant="link" 
              className="text-luna-purple hover:text-purple-700 transition-colors duration-200 flex items-center gap-1"
              onClick={handleExploreMore}
            >
              Explore More Features
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
