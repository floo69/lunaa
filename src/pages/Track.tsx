
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { Calendar, Plus, Droplets, Activity, Moon, Pill } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Track = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Sarah');
  
  // Simulated data for the calendar
  const today = new Date();
  const currentDay = today.getDate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/10 to-luna-peach/10">
      <DashboardHeader userName={userName} />
      
      <main className="container px-4 pb-24 pt-20 mx-auto max-w-5xl">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Track Your Cycle
          </h1>
          <p className="text-gray-600 mt-1">Log symptoms, track your period, and gain insights.</p>
        </section>
        
        {/* Calendar View Section */}
        <section className="mb-8">
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-luna-purple" />
                  Cycle Calendar
                </h2>
                <div className="text-sm text-gray-500">
                  May 2023
                </div>
              </div>
              
              {/* Simplified Calendar - In a real app, use a proper calendar component */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const dayNum = i - 2; // Offset to start month correctly
                  return (
                    <div 
                      key={i} 
                      className={`rounded-full w-10 h-10 flex items-center justify-center mx-auto text-sm
                      ${dayNum === currentDay ? 'bg-luna-purple text-white' : 
                        dayNum > 0 && dayNum <= 31 ? 'hover:bg-gray-100 cursor-pointer' : 'text-gray-300'}`}
                    >
                      {dayNum > 0 && dayNum <= 31 ? dayNum : ''}
                    </div>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  Period
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-pink-300"></span>
                  Fertile Window
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-purple-400"></span>
                  Ovulation
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-blue-300"></span>
                  PMS
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Quick Actions for Tracking */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Add</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickAddCard 
              icon={<Droplets className="h-5 w-5 text-red-400" />}
              title="Log Period"
              description="Add first day or flow intensity"
              color="bg-red-50"
            />
            <QuickAddCard 
              icon={<Plus className="h-5 w-5 text-purple-500" />}
              title="Log Symptoms"
              description="Cramps, headache, bloating, etc."
              color="bg-purple-50"
            />
            <QuickAddCard 
              icon={<Activity className="h-5 w-5 text-blue-500" />}
              title="Log Mood & Energy"
              description="Track emotional changes"
              color="bg-blue-50"
            />
            <QuickAddCard 
              icon={<Pill className="h-5 w-5 text-green-500" />}
              title="Log Medication"
              description="Birth control, supplements, etc."
              color="bg-green-50"
            />
          </div>
        </section>
        
        {/* Recent Logs & Insights */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activity & Insights</h2>
          
          <Tabs defaultValue="logs">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="logs">Recent Logs</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>
            <TabsContent value="logs">
              <Card className="border-none shadow-md">
                <CardContent className="p-4 space-y-3">
                  <LogItem 
                    date="Today" 
                    title="Logged Symptoms" 
                    description="Mild cramps, fatigue, bloating"
                    icon={<Plus className="h-4 w-4 text-purple-500" />}
                  />
                  <LogItem 
                    date="Yesterday" 
                    title="Logged Mood" 
                    description="Energetic in morning, tired in evening"
                    icon={<Activity className="h-4 w-4 text-blue-500" />}
                  />
                  <LogItem 
                    date="3 days ago" 
                    title="Logged Period End" 
                    description="Flow stopped after 5 days"
                    icon={<Droplets className="h-4 w-4 text-red-400" />}
                  />
                  <Button variant="outline" className="w-full">View All Activity</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="insights">
              <Card className="border-none shadow-md">
                <CardContent className="p-4 space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Moon className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-purple-800">Trending Symptoms</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          We've noticed you experience mild headaches about 3 days before your period starts. This could be related to hormonal changes during the luteal phase.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Activity className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-800">Energy Patterns</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Your energy levels tend to peak during the follicular phase. This is a great time for high-intensity workouts and creative activities.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Pill className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Supplement Suggestion</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Your symptoms suggest possible magnesium deficiency. Consider magnesium-rich foods or supplements, especially during your luteal phase.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Wearable Integration */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Connect Wearable Devices</h2>
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 mb-2">Sync with your health apps</h3>
                  <p className="text-sm text-gray-600">
                    Connect Luna with Apple Health, Fitbit, or Oura Ring to automatically import your temperature, sleep, and activity data for more accurate predictions.
                  </p>
                </div>
                <Button className="bg-luna-purple hover:bg-purple-600">
                  Connect Devices
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <DashboardFooter />
    </div>
  );
};

interface QuickAddCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const QuickAddCard: React.FC<QuickAddCardProps> = ({ icon, title, description, color }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className={`p-4 ${color} rounded-lg h-full`}>
        <div className="flex flex-col items-center text-center">
          <div className="mb-2">
            {icon}
          </div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-xs text-gray-600 mt-1">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface LogItemProps {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const LogItem: React.FC<LogItemProps> = ({ date, title, description, icon }) => {
  return (
    <div className="flex items-start gap-3 border-b border-gray-100 pb-3">
      <div className="bg-gray-100 p-2 rounded-full">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium text-gray-800">{title}</h4>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default Track;
