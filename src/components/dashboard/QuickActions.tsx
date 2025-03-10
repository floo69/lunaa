
import React from 'react';
import { PlusCircle, Stethoscope, ActivitySquare, Users, Watch, Sparkles } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const QuickActions = () => {
  const quickActions = [
    {
      icon: <PlusCircle className="h-5 w-5" />,
      title: "Track Symptoms",
      description: "Log pain, mood, cravings, and flow",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: <Stethoscope className="h-5 w-5" />,
      title: "Virtual Consultation",
      description: "Book an appointment with a gynecologist",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: <ActivitySquare className="h-5 w-5" />,
      title: "Personalized Plan",
      description: "Diet & exercise for your cycle phase",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community Forums",
      description: "Join discussions anonymously",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: <Watch className="h-5 w-5" />,
      title: "Wearable Integration",
      description: "Sync with your fitness devices",
      color: "text-indigo-600 bg-indigo-100"
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Tree-Planting Progress",
      description: "You've planted 3 trees so far!",
      color: "text-emerald-600 bg-emerald-100"
    }
  ];
  
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <Card 
            key={index} 
            className="border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${action.color}`}>
                  {action.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
