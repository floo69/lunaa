
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/10 to-luna-peach/10">
      <DashboardHeader userName="Sarah" />
      
      <main className="container px-4 pb-24 pt-20 mx-auto max-w-5xl">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Community
          </h1>
          <p className="text-gray-600 mt-1">Connect with others and share experiences.</p>
        </section>

        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Forums & Support Groups</h2>
            <p className="text-gray-600">Coming soon! This feature is still under development.</p>
          </div>
        </div>
      </main>
      
      <DashboardFooter />
    </div>
  );
};

export default Community;
