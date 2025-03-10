
import React from 'react';
import { Home, Activity, Stethoscope, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-10 md:hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 py-2">
          <NavButton icon={<Home className="h-5 w-5" />} label="Home" isActive={true} />
          <NavButton icon={<Activity className="h-5 w-5" />} label="Track" />
          <NavButton icon={<Stethoscope className="h-5 w-5" />} label="Consult" />
          <NavButton icon={<Users className="h-5 w-5" />} label="Community" />
        </div>
      </div>
    </footer>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, isActive = false }) => {
  return (
    <Link to="#" className="flex flex-col items-center py-1">
      <div className={`p-1.5 ${isActive ? 'text-luna-purple' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`text-xs ${isActive ? 'text-luna-purple font-medium' : 'text-gray-500'}`}>
        {label}
      </span>
    </Link>
  );
};

export default DashboardFooter;
