
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
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
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="rounded-full border-gray-200 focus:border-luna-purple"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="rounded-full border-gray-200 focus:border-luna-purple" 
                />
              </div>
              <Button className="w-full cta-button cta-button-primary flex items-center justify-center gap-2">
                Join Luna Today
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button variant="link" className="text-luna-purple hover:text-purple-700 transition-colors duration-200 flex items-center gap-1">
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
