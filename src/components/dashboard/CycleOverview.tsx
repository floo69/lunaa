
import React from 'react';
import { CalendarDays, Droplets, Moon, Sun } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const CycleOverview = () => {
  // In a real app, this would come from the user's data
  const cycleDay = 12;
  const cycleLength = 28;
  const cyclePhase = "Ovulation";
  const daysUntilNextPeriod = 16;
  const progress = (cycleDay / cycleLength) * 100;
  
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-luna-purple" />
        Your Cycle Overview
      </h2>
      
      <Card className="overflow-hidden border-none shadow-md">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium">
                Day {cycleDay} of Your Cycle
              </h3>
              <p className="text-purple-800 font-semibold mt-1">
                You're in the {cyclePhase} Phase!
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-sm bg-white/80 px-3 py-1.5 rounded-full">
              <Droplets className="h-4 w-4 text-red-400" />
              Next period in {daysUntilNextPeriod} days
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-600 mb-1.5">
              <span>Period</span>
              <span>Follicular</span>
              <span>Ovulation</span>
              <span>Luteal</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            <PhaseCard 
              icon={<Droplets className="h-5 w-5 text-red-400" />} 
              title="Period"
              isActive={cyclePhase === "Period"}
              days="1-5"
            />
            <PhaseCard 
              icon={<Moon className="h-5 w-5 text-blue-400" />} 
              title="Follicular"
              isActive={cyclePhase === "Follicular"}
              days="6-11"
            />
            <PhaseCard 
              icon={<Sun className="h-5 w-5 text-yellow-400" />} 
              title="Ovulation"
              isActive={cyclePhase === "Ovulation"}
              days="12-14"
            />
            <PhaseCard 
              icon={<Moon className="h-5 w-5 text-purple-400" />} 
              title="Luteal"
              isActive={cyclePhase === "Luteal"}
              days="15-28"
            />
          </div>
        </div>
        
        <CardContent className="p-4">
          <h4 className="font-medium text-gray-700">During {cyclePhase}, you might experience:</h4>
          <ul className="mt-2 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
            <li className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-luna-purple"></span>
              Increased energy levels
            </li>
            <li className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-luna-purple"></span>
              Higher sex drive
            </li>
            <li className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-luna-purple"></span>
              Better mood overall
            </li>
            <li className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-luna-purple"></span>
              Increased body temperature
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

interface PhaseCardProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  days: string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ icon, title, isActive, days }) => {
  return (
    <div className={`rounded-lg p-2 text-center ${isActive ? 'bg-white shadow-sm' : 'bg-white/50'}`}>
      <div className="flex justify-center mb-1">
        {icon}
      </div>
      <p className={`text-sm font-medium ${isActive ? 'text-gray-800' : 'text-gray-600'}`}>{title}</p>
      <p className="text-xs text-gray-500">Days {days}</p>
    </div>
  );
};

export default CycleOverview;
