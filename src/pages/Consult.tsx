
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { 
  CalendarCheck,
  Bot,
  Stethoscope,
  ClipboardCheck,
  Pill,
  Search,
  MoonStar,
  Sun,
  MicIcon,
  Send,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Consult = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'Hi there! I\'m Luna AI, your personal health assistant. How can I help you today?'}
  ]);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatMessages(prev => [...prev, {role: 'user', content: message}]);
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      let response = "I understand your concern. Based on your data, this could be related to recent stress or diet changes. Would you like more information?";
      
      // Custom responses based on common questions
      if (message.toLowerCase().includes('period late')) {
        response = "Your period is about 3 days late based on your tracking data. This could be due to stress, diet changes, or hormonal fluctuations. If you're concerned, I recommend booking a consultation with a gynecologist.";
      } else if (message.toLowerCase().includes('cramp')) {
        response = "I notice you've been experiencing more frequent cramps this cycle. Some natural remedies include heat therapy, gentle exercise, and hydration. For persistent pain, consider speaking with our healthcare providers.";
      }
      
      setChatMessages(prev => [...prev, {role: 'assistant', content: response}]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/10 to-luna-peach/10">
      <DashboardHeader userName="Sarah" />
      
      <main className="container px-4 pb-24 pt-20 mx-auto max-w-5xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Your Health, Your Way – <span className="gradient-text">Consult Experts Anytime, Anywhere</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Book virtual gynecologist consultations, chat with AI-powered health assistants, and track your symptoms in one place.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button className="bg-gradient-to-r from-luna-purple to-purple-500 hover:opacity-90">
              <CalendarCheck className="mr-2 h-4 w-4" /> Book a Consultation
            </Button>
            <Button variant="outline" className="border-luna-purple text-luna-purple hover:bg-luna-lavender/20">
              <Bot className="mr-2 h-4 w-4" /> Ask Luna AI
            </Button>
          </div>
        </section>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Chatbot Section */}
          <section className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-luna-purple to-purple-500 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-semibold">Luna AI Health Assistant</h2>
                <p className="text-sm text-gray-500">Powered by advanced health analytics</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 h-72 overflow-y-auto mb-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block max-w-[80%] rounded-lg p-3 ${
                    msg.role === 'user' 
                      ? 'bg-luna-purple text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <MicIcon className="h-4 w-4" />
              </Button>
              <Input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask Luna about your health..." 
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="bg-luna-purple hover:bg-purple-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </section>
          
          {/* Virtual Consultation */}
          <Card>
            <CardHeader className="bg-gradient-to-r from-luna-lavender to-luna-teal/30 rounded-t-lg">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-luna-purple" />
                <CardTitle>Virtual Gynecologist Consultation</CardTitle>
              </div>
              <CardDescription>Speak with licensed healthcare professionals</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Schedule a private video consultation with gynecologists specialized in various women's health issues.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Button variant="outline" className="justify-start text-sm">
                  PCOS Specialist
                </Button>
                <Button variant="outline" className="justify-start text-sm">
                  Fertility Expert
                </Button>
                <Button variant="outline" className="justify-start text-sm">
                  Menopause Care
                </Button>
                <Button variant="outline" className="justify-start text-sm">
                  General Gynecology
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-luna-purple to-purple-500 hover:opacity-90">
                View Available Appointments <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Symptom Checker */}
          <Card>
            <CardHeader className="bg-gradient-to-r from-luna-peach/50 to-luna-teal/30 rounded-t-lg">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-luna-purple" />
                <CardTitle>Symptom Checker & Health Insights</CardTitle>
              </div>
              <CardDescription>Understand what your body is telling you</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Enter your symptoms and get AI-powered analysis with recommended actions.
              </p>
              <div className="flex gap-2 mb-4">
                <Input placeholder="Search symptoms..." />
                <Button size="icon" variant="ghost">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
                <p className="font-medium text-luna-purple">Insight Example:</p>
                <p>"Frequent bloating detected – Reduce processed foods and increase water intake."</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Explore Health Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Medication Guide */}
          <Card className="md:col-span-2">
            <CardHeader className="bg-gradient-to-r from-luna-teal/30 to-luna-lavender/50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-luna-purple" />
                <CardTitle>Medication & Supplement Guide</CardTitle>
              </div>
              <CardDescription>Track and manage your medications</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-medium mb-2">Birth Control</h3>
                  <p className="text-sm text-gray-600 mb-3">Track your contraceptive pills and get reminders</p>
                  <Button variant="outline" className="w-full text-sm">Set Up Tracking</Button>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-medium mb-2">Supplements</h3>
                  <p className="text-sm text-gray-600 mb-3">Vitamin and mineral supplements based on your needs</p>
                  <Button variant="outline" className="w-full text-sm">Recommendations</Button>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-medium mb-2">Prescriptions</h3>
                  <p className="text-sm text-gray-600 mb-3">Keep track of all your prescription medications</p>
                  <Button variant="outline" className="w-full text-sm">Add Medication</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <DashboardFooter />
    </div>
  );
};

export default Consult;
