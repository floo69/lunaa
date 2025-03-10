
import React from 'react';
import { BrainCircuit, CloudSunRain, Dumbbell, Cookie } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const HealthInsights = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-luna-purple" />
        AI-Powered Insights
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Energy Level Card */}
        <Card className="border-none shadow-md">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full p-2 bg-green-100">
                <Dumbbell className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Today's Energy Levels</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-green-600 font-medium">High</span>
                  <span className="text-lg">🚀</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Perfect time for strength workouts! Your body is optimized for high-intensity training during ovulation.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                    Recommended: HIIT
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                    Strength Training
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Cravings Card */}
        <Card className="border-none shadow-md">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full p-2 bg-yellow-100">
                <Cookie className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Nutrition Insights</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-600 font-medium">Craving sweets?</span>
                  <span className="text-lg">🍫</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Your hormones might be fluctuating. Try magnesium-rich foods like dark chocolate, nuts, and avocados.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                    Dark Chocolate
                  </span>
                  <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                    Almonds
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Weather-Based Insight */}
        <Card className="border-none shadow-md md:col-span-2">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full p-2 bg-blue-100">
                <CloudSunRain className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Weather-Based Health Insight</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-blue-600 font-medium">It's humid today!</span>
                  <span className="text-lg">💧</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  High humidity can increase water retention and bloating during your cycle. Stay hydrated with electrolyte-rich drinks to prevent fatigue and bloating.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    Drink more water
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    Limit salt intake
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    Potassium-rich foods
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HealthInsights;
