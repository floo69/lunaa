
import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CycleCalendar = () => {
  // In a real app, these would be calculated based on user data
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  
  // Mock period days for calendar visualization
  const periodDays = [8, 9, 10, 11, 12];
  const ovulationDays = [22, 23];
  const pmsDays = [5, 6, 7];
  const fertileWindow = [20, 21, 22, 23, 24, 25];
  
  // Generate calendar days for the current month
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1).getDay();
  
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const prevMonthPadding = Array.from({ length: firstDayOfMonth }, (_, i) => null);
  const allDays = [...prevMonthPadding, ...calendarDays];
  
  // Calculate next period and ovulation dates
  const nextPeriodDate = new Date(currentYear, currentDate.getMonth(), 8);
  const nextOvulationDate = new Date(currentYear, currentDate.getMonth(), 22);
  
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <CalendarIcon className="h-5 w-5 text-luna-purple" />
        Cycle Prediction & Calendar
      </h2>
      
      <Card className="border-none shadow-md">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-medium text-lg">{currentMonth} {currentYear}</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Day names */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {allDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="p-2"></div>;
              }
              
              const isToday = day === currentDate.getDate();
              const isPeriodDay = periodDays.includes(day);
              const isOvulationDay = ovulationDays.includes(day);
              const isPMSDay = pmsDays.includes(day);
              const isFertileDay = fertileWindow.includes(day);
              
              let bgColor = '';
              let dotColor = '';
              let textColor = isToday ? 'text-white' : 'text-gray-700';
              
              if (isPeriodDay) {
                bgColor = 'bg-red-100';
                dotColor = 'bg-red-500';
                if (isToday) bgColor = 'bg-red-500';
              } else if (isOvulationDay) {
                bgColor = 'bg-yellow-100';
                dotColor = 'bg-yellow-500';
                if (isToday) bgColor = 'bg-yellow-500';
              } else if (isPMSDay) {
                bgColor = 'bg-purple-100';
                dotColor = 'bg-purple-500';
                if (isToday) bgColor = 'bg-purple-500';
              } else if (isFertileDay) {
                bgColor = 'bg-green-50';
                dotColor = 'bg-green-500';
                if (isToday) bgColor = 'bg-green-500';
              } else if (isToday) {
                bgColor = 'bg-luna-purple';
              }
              
              return (
                <div
                  key={`day-${day}`}
                  className={`p-2 text-center rounded-full flex flex-col items-center justify-center ${bgColor}`}
                >
                  <span className={`text-sm ${textColor}`}>{day}</span>
                  {(isPeriodDay || isOvulationDay || isPMSDay || isFertileDay) && !isToday && (
                    <span className={`w-1.5 h-1.5 rounded-full mt-0.5 ${dotColor}`}></span>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span>Period</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span>Ovulation</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span>Fertile Window</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              <span>PMS</span>
            </div>
          </div>
          
          {/* Upcoming events */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <h4 className="font-medium text-red-800 text-sm">Next Period</h4>
              <p className="text-red-600 mt-1">{nextPeriodDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} (in {periodDays[0] - currentDate.getDate()} days)</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h4 className="font-medium text-yellow-800 text-sm">Next Ovulation</h4>
              <p className="text-yellow-600 mt-1">{nextOvulationDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} (in {ovulationDays[0] - currentDate.getDate()} days)</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CycleCalendar;
