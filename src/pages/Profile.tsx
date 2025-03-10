
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { UserCircle, Calendar, Award, Settings, ChevronRight, Shield, Bell, Moon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Sarah');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/10 to-luna-peach/10">
      <DashboardHeader userName={userName} />
      
      <main className="container px-4 pb-24 pt-20 mx-auto max-w-5xl">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Your Profile
          </h1>
          <p className="text-gray-600 mt-1">Manage your information and preferences.</p>
        </section>
        
        {/* User Profile Summary */}
        <section className="mb-8">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-luna-purple text-white text-xl">S</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-gray-800">{userName} Johnson</h2>
                  <p className="text-gray-600">Member since April 2023</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600">Cycle Length</p>
                      <p className="text-xl font-medium text-purple-800">28 days</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600">Period Length</p>
                      <p className="text-xl font-medium text-pink-800">5 days</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600">Tracked Cycles</p>
                      <p className="text-xl font-medium text-blue-800">7</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-luna-purple hover:bg-purple-600">
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Wellness Score & Achievements */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-luna-purple" />
            Wellness Score & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-800">AI Wellness Score</h3>
                  <span className="text-2xl font-bold text-green-600">82</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                  Based on your tracking consistency, symptom improvements, and cycle regularity.
                </p>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Tracking Consistency</span>
                      <span className="text-gray-600">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Symptom Management</span>
                      <span className="text-gray-600">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Cycle Regularity</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Wellness Activities</span>
                      <span className="text-gray-600">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-800 mb-3">Recent Achievements</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <div className="rounded-full p-2 bg-amber-100">
                      <Calendar className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">3-Month Tracking Streak!</h4>
                      <p className="text-sm text-gray-600">You've consistently tracked your cycle for 3 months.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="rounded-full p-2 bg-green-100">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">Symptom Detective</h4>
                      <p className="text-sm text-gray-600">You've logged detailed symptoms for 7 cycles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="rounded-full p-2 bg-blue-100">
                      <UserCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">Profile Complete</h4>
                      <p className="text-sm text-gray-600">You've completed your health profile.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Customization Options & Settings */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Settings className="h-5 w-5 text-luna-purple" />
            Customization & Privacy Settings
          </h2>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                <SettingsItem 
                  icon={<Calendar className="h-5 w-5 text-purple-600" />}
                  title="Cycle Settings"
                  description="Customize cycle length, period duration, and ovulation preferences"
                  onClick={() => navigate('/settings')}
                />
                
                <SettingsItem 
                  icon={<Moon className="h-5 w-5 text-blue-600" />}
                  title="Theme & Appearance"
                  description="Change theme, color scheme, and app display options"
                  onClick={() => navigate('/settings')}
                />
                
                <SettingsItem 
                  icon={<Bell className="h-5 w-5 text-pink-600" />}
                  title="Notification Preferences"
                  description="Manage reminders for period, ovulation, and medication"
                  onClick={() => navigate('/settings')}
                />
                
                <SettingsItem 
                  icon={<Shield className="h-5 w-5 text-green-600" />}
                  title="Privacy & Data Sharing"
                  description="Control who can see your data and how it's used"
                  onClick={() => navigate('/settings')}
                />
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Cycle & Health History */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-luna-purple" />
            Cycle & Health History
          </h2>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">Your Tracked History</h3>
                  <Button variant="outline" size="sm">
                    View Full History
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 font-medium text-gray-600">Cycle Start</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-600">Cycle Length</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-600">Period Length</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-600">Key Symptoms</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-600"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-2">May 12, 2023</td>
                        <td className="py-3 px-2">28 days</td>
                        <td className="py-3 px-2">5 days</td>
                        <td className="py-3 px-2">Cramps, fatigue, headache</td>
                        <td className="py-3 px-2">
                          <Button variant="ghost" size="sm">Details</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-2">April 14, 2023</td>
                        <td className="py-3 px-2">29 days</td>
                        <td className="py-3 px-2">6 days</td>
                        <td className="py-3 px-2">Severe cramps, bloating</td>
                        <td className="py-3 px-2">
                          <Button variant="ghost" size="sm">Details</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-2">March 16, 2023</td>
                        <td className="py-3 px-2">28 days</td>
                        <td className="py-3 px-2">5 days</td>
                        <td className="py-3 px-2">Mild cramps, mood swings</td>
                        <td className="py-3 px-2">
                          <Button variant="ghost" size="sm">Details</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800">Export Your Data</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Download your complete cycle history and health data in CSV or PDF format to share with your healthcare provider.
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">Export as CSV</Button>
                        <Button variant="outline" size="sm">Export as PDF</Button>
                      </div>
                    </div>
                  </div>
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

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ icon, title, description, onClick }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-3">
        <div className="rounded-full p-2 bg-gray-100">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  );
};

export default Profile;
