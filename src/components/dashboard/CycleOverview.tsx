
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Droplets, Zap, Moon, ArrowRight } from 'lucide-react';

// Define a literal type for cycle phases to prevent type comparison errors
type CyclePhase = 'Period' | 'Follicular' | 'Ovulation' | 'Luteal';

interface PhaseCardProps {
  title: CyclePhase;
  daysCount: number;
  description: string;
  icon: React.ReactNode;
  color: string;
  active: boolean;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ 
  title, 
  daysCount, 
  description, 
  icon, 
  color, 
  active 
}) => {
  return (
    <Card className={`border-none ${active ? 'shadow-md' : 'opacity-70'}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className={`rounded-full p-2 ${color}`}>
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{title}</h3>
            <p className="text-xs text-gray-500">
              {daysCount} {daysCount === 1 ? 'day' : 'days'}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const CycleOverview = () => {
  // In a real app, these would come from the user's data
  const cyclePhase: CyclePhase = 'Ovulation';
  const cycleDay = 14;
  const cycleLength = 28;
  const progress = (cycleDay / cycleLength) * 100;
  
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Cycle Overview</h2>
      
      <Card className="border-none shadow-md mb-6">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="font-medium text-gray-800">Day {cycleDay} of {cycleLength}</h3>
              <p className="text-sm font-medium text-luna-purple">{cyclePhase} Phase</p>
            </div>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          
          <Progress value={progress} className="h-2" />
          
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Period</span>
            <span>Ovulation</span>
            <span>Next Period</span>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <PhaseCard 
          title="Period"
          daysCount={5}
          description="Bleeding starts. The lining of the uterus is shed."
          icon={<Droplets className="h-4 w-4 text-red-500" />}
          color="bg-red-50"
          active={cyclePhase === 'Period'}
        />
        <PhaseCard 
          title="Follicular"
          daysCount={7}
          description="Estrogen rises. Your body prepares for ovulation."
          icon={<ArrowRight className="h-4 w-4 text-pink-500" />}
          color="bg-pink-50"
          active={cyclePhase === 'Follicular'}
        />
        <PhaseCard 
          title="Ovulation"
          daysCount={2}
          description="Egg is released. This is your fertile window."
          icon={<Zap className="h-4 w-4 text-purple-500" />}
          color="bg-purple-50"
          active={cyclePhase === 'Ovulation'}
        />
        <PhaseCard 
          title="Luteal"
          daysCount={14}
          description="Progesterone rises. PMS symptoms may appear."
          icon={<Moon className="h-4 w-4 text-blue-500" />}
          color="bg-blue-50"
          active={cyclePhase === 'Luteal'}
        />
      </div>
    </section>
  );
};

export default CycleOverview;
