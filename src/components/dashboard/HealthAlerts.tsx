
import React from 'react';
import { AlertCircle, Search } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HealthAlerts = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-luna-purple" />
        Health Alerts & AI Assistant
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Health Alerts */}
        <div className="md:col-span-2">
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-800 mb-3">Custom Health Alerts</h3>
              
              <div className="space-y-3">
                <Alert 
                  title="Potential PCOS Symptoms Detected"
                  description="Based on your logged symptoms over the past 3 cycles, we've noticed patterns consistent with PCOS. We recommend consulting with a healthcare provider."
                  severity="warning"
                />
                
                <Alert 
                  title="Irregular Cycle Pattern"
                  description="Your cycle length has varied significantly in the last 3 months. This might be due to stress, lifestyle changes, or hormonal fluctuations."
                  severity="info"
                />
                
                <Alert 
                  title="Time for a Checkup"
                  description="It's been 12 months since your last recorded gynecological checkup. Regular visits are recommended for preventive care."
                  severity="default"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* AI Symptom Search */}
        <div>
          <Card className="border-none shadow-md h-full">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-800 mb-3">AI Symptom Search</h3>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search for symptoms or ask a question..."
                  className="pl-9 rounded-full"
                />
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full text-xs">
                    Menstrual cramps
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs">
                    PMS symptoms
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs">
                    Irregular periods
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs">
                    Fertility
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">
                  Ask Luna AI about cycle symptoms, health concerns, or wellness tips tailored to your menstrual phase.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface AlertProps {
  title: string;
  description: string;
  severity: 'warning' | 'info' | 'default';
}

const Alert: React.FC<AlertProps> = ({ title, description, severity }) => {
  let bgColor = 'bg-gray-50';
  let borderColor = 'border-gray-200';
  let titleColor = 'text-gray-800';
  let iconColor = 'text-gray-400';
  
  if (severity === 'warning') {
    bgColor = 'bg-amber-50';
    borderColor = 'border-amber-200';
    titleColor = 'text-amber-800';
    iconColor = 'text-amber-500';
  } else if (severity === 'info') {
    bgColor = 'bg-blue-50';
    borderColor = 'border-blue-200';
    titleColor = 'text-blue-800';
    iconColor = 'text-blue-500';
  }
  
  return (
    <div className={`p-3 rounded-lg border ${bgColor} ${borderColor}`}>
      <div className="flex items-start gap-2">
        <AlertCircle className={`h-5 w-5 ${iconColor} mt-0.5`} />
        <div>
          <h4 className={`font-medium ${titleColor}`}>{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthAlerts;
