
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, AtSign, Apple, Mail, Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Authentication = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Form state
  const [signupForm, setSignupForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  
  // Handle signup form changes
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle login form changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle signup submission
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple validation
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords don't match!");
      setIsLoading(false);
      return;
    }
    
    // Simulate authentication delay
    setTimeout(() => {
      // In a real app, you would handle authentication here
      console.log('Signup form submitted:', signupForm);
      setIsLoading(false);
      
      // Redirect to home after successful signup
      navigate('/');
      
      // For demo purposes, set a flag in localStorage to simulate being logged in
      localStorage.setItem('lunaLoggedIn', 'true');
    }, 1500);
  };
  
  // Handle login submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      // In a real app, you would handle authentication here
      console.log('Login form submitted:', loginForm);
      setIsLoading(false);
      
      // Redirect to home after successful login
      navigate('/');
      
      // For demo purposes, set a flag in localStorage to simulate being logged in
      localStorage.setItem('lunaLoggedIn', 'true');
    }, 1500);
  };
  
  // Handle OAuth signup/login
  const handleOAuthSignIn = (provider: string) => {
    setIsLoading(true);
    
    // Simulate OAuth authentication
    setTimeout(() => {
      console.log(`Sign in with ${provider}`);
      setIsLoading(false);
      
      // Redirect to home after successful login
      navigate('/');
      
      // For demo purposes, set a flag in localStorage to simulate being logged in
      localStorage.setItem('lunaLoggedIn', 'true');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/50 to-luna-peach/30 flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-luna-purple to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold gradient-text">Luna</span>
        </Link>
      </div>
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid grid-cols-2 w-full rounded-none">
            <TabsTrigger value="signup" className="py-3">Sign Up</TabsTrigger>
            <TabsTrigger value="login" className="py-3">Login</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signup" className="p-6">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold gradient-text">Create Your Account</h1>
              <p className="text-gray-600 mt-2">Start your wellness journey with Luna</p>
            </div>
            
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="fullName"
                    name="fullName"
                    type="text" 
                    placeholder="Your Name"
                    value={signupForm.fullName}
                    onChange={handleSignupChange}
                    className="pl-10 rounded-full"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="signupEmail" className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="signupEmail"
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com"
                    value={signupForm.email}
                    onChange={handleSignupChange}
                    className="pl-10 rounded-full"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="signupPassword" className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="signupPassword"
                    name="password"
                    type="password" 
                    placeholder="Create a strong password"
                    value={signupForm.password}
                    onChange={handleSignupChange}
                    className="pl-10 rounded-full"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password" 
                    placeholder="Confirm your password"
                    value={signupForm.confirmPassword}
                    onChange={handleSignupChange}
                    className="pl-10 rounded-full"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full cta-button cta-button-primary flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
                {!isLoading && <ArrowRight className="h-4 w-4" />}
              </Button>
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative px-4 bg-white">
                  <span className="text-sm text-gray-500">or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                  onClick={() => handleOAuthSignIn('Google')}
                  disabled={isLoading}
                >
                  <AtSign className="h-5 w-5 text-red-500" />
                  <span>Google</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                  onClick={() => handleOAuthSignIn('Apple')}
                  disabled={isLoading}
                >
                  <Apple className="h-5 w-5" />
                  <span>Apple</span>
                </Button>
              </div>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                By signing up, you agree to our{' '}
                <a href="#" className="text-luna-purple hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-luna-purple hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </TabsContent>
          
          <TabsContent value="login" className="p-6">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold gradient-text">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Continue your wellness journey</p>
            </div>
            
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="loginEmail" className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="loginEmail"
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    className="pl-10 rounded-full"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="loginPassword" className="text-sm font-medium text-gray-700">Password</label>
                  <a href="#" className="text-xs text-luna-purple hover:underline">Forgot Password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="loginPassword"
                    name="password"
                    type="password" 
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    className="pl-10 rounded-full"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full cta-button cta-button-primary flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? 'Logging In...' : 'Log In'}
                {!isLoading && <ArrowRight className="h-4 w-4" />}
              </Button>
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative px-4 bg-white">
                  <span className="text-sm text-gray-500">or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                  onClick={() => handleOAuthSignIn('Google')}
                  disabled={isLoading}
                >
                  <AtSign className="h-5 w-5 text-red-500" />
                  <span>Google</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                  onClick={() => handleOAuthSignIn('Apple')}
                  disabled={isLoading}
                >
                  <Apple className="h-5 w-5" />
                  <span>Apple</span>
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
      
      <p className="mt-8 text-center text-gray-600">
        <Link to="/" className="text-luna-purple hover:underline">
          ← Back to Home
        </Link>
      </p>
    </div>
  );
};

export default Authentication;
