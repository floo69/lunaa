
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Menu, 
  X, 
  UserCircle, 
  LogOut, 
  Settings, 
  HelpCircle 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('lunaLoggedIn');
    navigate('/');
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-luna-purple to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold gradient-text">Luna</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-luna-purple transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-luna-purple transition-colors">Track</a>
            <a href="#" className="text-gray-700 hover:text-luna-purple transition-colors">Consult</a>
            <a href="#" className="text-gray-700 hover:text-luna-purple transition-colors">Community</a>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 hidden md:flex">
                  <UserCircle className="h-5 w-5" />
                  <span>{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Help & Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container px-4 py-3">
            <nav className="flex flex-col gap-2">
              <a href="#" className="py-2 text-gray-700 hover:text-luna-purple transition-colors">Home</a>
              <a href="#" className="py-2 text-gray-700 hover:text-luna-purple transition-colors">Track</a>
              <a href="#" className="py-2 text-gray-700 hover:text-luna-purple transition-colors">Consult</a>
              <a href="#" className="py-2 text-gray-700 hover:text-luna-purple transition-colors">Community</a>
              <div className="py-2 flex items-center gap-2">
                <UserCircle className="h-5 w-5 text-gray-700" />
                <span>{userName}</span>
              </div>
              <Button 
                variant="ghost" 
                className="justify-start pl-0 py-2 hover:bg-transparent text-red-500 hover:text-red-600"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 mr-2" />
                Log out
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
