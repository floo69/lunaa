
import React from 'react';
import { Sprout, Calendar, Target } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const WellnessProgress = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Sprout className="h-5 w-5 text-luna-purple" />
        Wellness Gamification
      </h2>
      
      <Card className="border-none shadow-md">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tree-Planting Progress */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Sprout className="h-4 w-4 text-green-600" />
                Tree-Planting Progress
              </h3>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">🌱</div>
                  <div>
                    <h4 className="font-medium text-green-800">You've planted 3 trees so far!</h4>
                    <p className="text-sm text-green-600">By consistent tracking on Luna</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Your next tree</span>
                      <span className="text-gray-600">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Track 7 more days to plant your next tree with our sustainability partner.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cycle-Synced Productivity */}
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-600" />
                Cycle-Synced Productivity
              </h3>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <h4 className="font-medium text-purple-800">Optimal days for peak performance</h4>
                    <p className="text-sm text-purple-600">Based on your energy levels during this cycle</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white p-2 rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Creative work</span>
                    </div>
                    <span className="text-sm text-gray-600">Days 12-16</span>
                  </div>
                  <div className="bg-white p-2 rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Team projects</span>
                    </div>
                    <span className="text-sm text-gray-600">Days 8-11</span>
                  </div>
                  <div className="bg-white p-2 rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Strategic planning</span>
                    </div>
                    <span className="text-sm text-gray-600">Days 17-20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default WellnessProgress;
