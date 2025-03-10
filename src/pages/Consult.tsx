
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { Stethoscope, MessageSquare, Calendar, Search, Pill, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Consult = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Sarah');
  const [query, setQuery] = useState('');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/10 to-luna-peach/10">
      <DashboardHeader userName={userName} />
      
      <main className="container px-4 pb-24 pt-20 mx-auto max-w-5xl">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Healthcare & Consultations
          </h1>
          <p className="text-gray-600 mt-1">Get expert advice, symptom checks, and virtual healthcare.</p>
        </section>
        
        {/* AI Health Chatbot */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-luna-purple" />
            AI Health Assistant
          </h2>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-200 text-purple-800">AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-800">Luna AI Health Assistant</h3>
                    <p className="text-sm text-gray-600">Ask me anything about your menstrual health!</p>
                  </div>
                </div>
                
                {/* Placeholder conversation */}
                <div className="space-y-3 mb-4">
                  <div className="bg-white p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm text-gray-600">Hi Sarah! How can I help you today?</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg max-w-[80%] ml-auto">
                    <p className="text-sm text-gray-700">I've been having more cramps than usual during my period.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm text-gray-600">I'm sorry to hear that. Increased cramping could be related to several factors like hormonal changes, stress, or underlying conditions. How long has this been happening? Have you noticed any other symptoms?</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Input
                    placeholder="Type your health question..."
                    className="pr-12"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Button className="absolute right-1 top-1 p-1 h-8 w-8" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Popular topics: <span className="text-luna-purple">Period pain, Irregular cycles, PCOS, Endometriosis</span></p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500">*The AI assistant provides general information and is not a substitute for professional medical advice.</p>
                <Button variant="outline" size="sm">Full Chat History</Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Book a Virtual Consultation */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-luna-purple" />
            Virtual Healthcare
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-none shadow-md">
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-800 mb-3">Book a Consultation</h3>
                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-blue-100">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      Connect with licensed gynecologists and women's health specialists for personalized advice and treatment plans.
                    </p>
                    <Button className="bg-luna-purple hover:bg-purple-600">
                      Schedule Appointment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-800 mb-3">Emergency Support</h3>
                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-red-100">
                    <Stethoscope className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      For urgent concerns, our on-call healthcare providers are available for same-day consultations and emergency guidance.
                    </p>
                    <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                      Get Emergency Help
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Symptom Checker AI */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Search className="h-5 w-5 text-luna-purple" />
            Symptom Checker
          </h2>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Check Your Symptoms</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Enter your symptoms for preliminary insights. Our AI analyzes patterns from your tracked data and provides personalized feedback.
                  </p>
                  
                  <Input 
                    placeholder="Search symptoms (e.g., cramps, headache, mood swings)"
                    className="mb-3"
                  />
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      Abdominal pain
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      Bloating
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      Fatigue
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      Mood swings
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      Insomnia
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-luna-purple hover:bg-purple-600">
                    Analyze Symptoms
                  </Button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Recent Analysis</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-medium text-gray-700">Frequent Headaches</h4>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Your headaches appear to coincide with the beginning of your luteal phase. This could be related to hormonal changes. Consider tracking if certain foods or activities trigger these headaches.
                      </p>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-medium text-gray-700">Unusual Fatigue</h4>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Your reported fatigue may be connected to your recent irregular sleep patterns. Try establishing a consistent sleep schedule to see if your energy levels improve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Medication & Supplement Guide */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Pill className="h-5 w-5 text-luna-purple" />
            Medication & Supplement Guide
          </h2>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <h3 className="font-medium text-gray-800 mb-3">Personalized Recommendations</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Based on your symptoms and cycle patterns, these supplements may help address your specific needs. Always consult with a healthcare provider before starting new supplements.
                  </p>
                  
                  <div className="space-y-3">
                    <SupplementItem 
                      name="Magnesium"
                      benefit="May help reduce menstrual cramps and improve sleep quality"
                      timing="Best taken during luteal phase and first days of period"
                    />
                    <SupplementItem 
                      name="Vitamin B6"
                      benefit="May reduce PMS symptoms and improve mood"
                      timing="Take consistently throughout your cycle"
                    />
                    <SupplementItem 
                      name="Iron"
                      benefit="Helps prevent anemia, especially important if you have heavy periods"
                      timing="Best absorbed when taken with vitamin C and away from calcium"
                    />
                  </div>
                  
                  <Button variant="outline" className="mt-3 w-full md:w-auto">
                    View Full Recommendations
                  </Button>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-3">Medication Tracker</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Keep track of your medications and get reminders to stay on schedule.
                  </p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center bg-white p-2 rounded-md">
                      <div className="flex items-center gap-2">
                        <Pill className="h-4 w-4 text-pink-500" />
                        <span className="text-sm">Birth Control</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Taken today</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded-md">
                      <div className="flex items-center gap-2">
                        <Pill className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Vitamin D</span>
                      </div>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Missed today</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Add Medication
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <DashboardFooter />
    </div>
  );
};

interface SupplementItemProps {
  name: string;
  benefit: string;
  timing: string;
}

const SupplementItem: React.FC<SupplementItemProps> = ({ name, benefit, timing }) => {
  return (
    <div className="bg-white p-3 rounded-lg border border-gray-100">
      <div className="flex items-start gap-3">
        <div className="rounded-full p-1.5 bg-green-100">
          <Pill className="h-4 w-4 text-green-600" />
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600 mt-1">{benefit}</p>
          <p className="text-xs text-gray-500 mt-1">{timing}</p>
        </div>
      </div>
    </div>
  );
};

export default Consult;
