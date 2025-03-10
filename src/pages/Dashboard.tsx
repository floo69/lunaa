
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CycleOverview from '@/components/dashboard/CycleOverview';
import HealthInsights from '@/components/dashboard/HealthInsights';
import QuickActions from '@/components/dashboard/QuickActions';
import CycleCalendar from '@/components/dashboard/CycleCalendar';
import HealthAlerts from '@/components/dashboard/HealthAlerts';
import WellnessProgress from '@/components/dashboard/WellnessProgress';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Luna User');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('lunaLoggedIn') === 'true';
    
    if (!isLoggedIn) {
      navigate('/auth');
      return;
    }
    
    // Simulate loading user data
    const timer = setTimeout(() => {
      // In a real app, you would fetch user data here
      // For now, we'll just set a default name
      setUserName('Sarah');
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-luna-lavender/30 to-luna-peach/20">
        <div className="text-center">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-luna-purple to-purple-500 mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading your wellness journey...</p>
        </div>
      </div>
    );
  }

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/10 to-luna-peach/10">
      <DashboardHeader userName={userName} />
      
      <main className="container px-4 pb-24 pt-20 mx-auto max-w-5xl">
        {/* Personalized Hero Section */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            {getGreeting()}, <span className="gradient-text">{userName}</span>! 🌸
          </h1>
          <p className="text-gray-600 mt-1">Here's your wellness summary for today.</p>
        </section>
        
        {/* Cycle Overview */}
        <CycleOverview />
        
        {/* AI Health Insights */}
        <HealthInsights />
        
        {/* Quick Actions */}
        <QuickActions />
        
        {/* Cycle Calendar */}
        <CycleCalendar />
        
        {/* Health Alerts */}
        <HealthAlerts />
        
        {/* Wellness Progress */}
        <WellnessProgress />
      </main>
      
      {/* Dashboard Footer with Navigation */}
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
