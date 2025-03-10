
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { 
  Users, 
  MessageSquare, 
  Calendar,
  Lock,
  ThumbsUp,
  Heart,
  Search,
  PenSquare,
  Plus,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Award,
  UserCircle2,
  Clock,
  Filter,
  ChevronDown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sample discussion topics
  const discussionTopics = [
    {
      id: 1,
      category: 'Period & Cycle Health',
      title: 'Dealing with irregular periods after COVID vaccine',
      author: 'Emily',
      time: '3 hours ago',
      replies: 24,
      hearts: 18,
      isExpertVerified: true
    },
    {
      id: 2,
      category: 'Fitness & Nutrition',
      title: 'Best foods to eat during your luteal phase?',
      author: 'Jessica',
      time: '1 day ago',
      replies: 16,
      hearts: 31,
      isExpertVerified: false
    },
    {
      id: 3,
      category: 'PCOS & Hormonal Disorders',
      title: 'How I reversed my PCOS symptoms with lifestyle changes',
      author: 'Anonymous',
      time: '2 days ago',
      replies: 47,
      hearts: 89,
      isExpertVerified: true
    },
    {
      id: 4,
      category: 'Mental Health & Mood Changes',
      title: 'Coping with anxiety during PMS - what works for you?',
      author: 'Sophia',
      time: '3 days ago',
      replies: 38,
      hearts: 62,
      isExpertVerified: false
    }
  ];
  
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Breaking the Stigma Around Periods',
      date: 'May 28, 2023',
      time: '7:00 PM EST',
      host: 'Dr. Sarah Johnson, OB/GYN'
    },
    {
      id: 2,
      title: 'Nutrition for Hormone Balance',
      date: 'June 5, 2023',
      time: '6:30 PM EST',
      host: 'Lisa Chen, Nutritionist'
    }
  ];
  
  const categories = [
    { id: 'period', name: 'Period & Cycle Health', icon: '🩸' },
    { id: 'fitness', name: 'Fitness & Nutrition', icon: '🏋️‍♀️' },
    { id: 'pregnancy', name: 'Pregnancy & Fertility', icon: '🤰' },
    { id: 'mental', name: 'Mental Health & Mood Changes', icon: '😔' },
    { id: 'pcos', name: 'PCOS & Hormonal Disorders', icon: '🔬' },
    { id: 'menopause', name: 'Menopause & Aging', icon: '👵' }
  ];
  
  const filteredTopics = selectedCategory 
    ? discussionTopics.filter(topic => topic.category === selectedCategory)
    : discussionTopics;

  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/10 to-luna-peach/10">
      <DashboardHeader userName="Sarah" />
      
      <main className="container px-4 pb-24 pt-20 mx-auto max-w-5xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
            You're Not Alone – <span className="gradient-text">Join a Supportive, Empowering Community</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discuss health topics, ask questions anonymously, and connect with others on similar wellness journeys.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button className="bg-gradient-to-r from-luna-purple to-purple-500 hover:opacity-90">
              <PenSquare className="mr-2 h-4 w-4" /> Ask a Question
            </Button>
            <Button variant="outline" className="border-luna-purple text-luna-purple hover:bg-luna-lavender/20">
              <Search className="mr-2 h-4 w-4" /> Browse Topics
            </Button>
          </div>
        </section>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="bg-gradient-to-r from-luna-lavender/50 to-luna-peach/30 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Discussion Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-1.5">
                  <Button 
                    variant={selectedCategory === null ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Topics
                  </Button>
                  
                  {categories.map(category => (
                    <Button 
                      key={category.id}
                      variant={selectedCategory === category.name ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <span className="mr-2">{category.icon}</span> {category.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Suggest New Topic
                </Button>
              </CardFooter>
            </Card>
            
            {/* Support Groups */}
            <Card className="mt-6">
              <CardHeader className="bg-gradient-to-r from-luna-teal/30 to-luna-lavender/30 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Support Groups
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">PCOS Warriors</span>
                      <Lock className="h-3 w-3 text-gray-400" />
                    </div>
                    <Button variant="ghost" size="sm">Join</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Endometriosis Support</span>
                      <Lock className="h-3 w-3 text-gray-400" />
                    </div>
                    <Button variant="ghost" size="sm">Join</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">First-time Menstruators</span>
                    </div>
                    <Button variant="ghost" size="sm">Join</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Pregnancy Planning</span>
                    </div>
                    <Button variant="ghost" size="sm">Join</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View All Groups
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content - Discussions */}
          <div className="lg:col-span-2">
            {/* Discussions Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {selectedCategory ? selectedCategory : 'Recent Discussions'}
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
            
            {/* Discussion List */}
            <div className="space-y-4">
              {filteredTopics.map(topic => (
                <Card key={topic.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-luna-lavender/30 text-luna-purple">
                            {topic.category}
                          </span>
                          {topic.isExpertVerified && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600 flex items-center gap-1">
                              <Sparkles className="h-3 w-3" /> Expert Verified
                            </span>
                          )}
                        </div>
                        <h3 className="font-medium text-lg mb-2">{topic.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 gap-4">
                          <div className="flex items-center gap-1">
                            <UserCircle2 className="h-3.5 w-3.5" />
                            {topic.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {topic.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-sm">
                            <MessageCircle className="h-4 w-4 text-gray-400" />
                            <span>{topic.replies}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Heart className="h-4 w-4 text-luna-purple" />
                            <span>{topic.hearts}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-luna-purple">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="w-full">
                Load More Discussions
              </Button>
            </div>
            
            {/* Live Sessions & Webinars */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Upcoming Live Sessions</h2>
                <Button variant="ghost" size="sm" className="text-luna-purple">
                  View All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {upcomingEvents.map(event => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="relative">
                      <div className="absolute top-0 right-0 bg-luna-purple text-white px-3 py-1 text-xs rounded-bl-lg">
                        Live Event
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">with {event.host}</p>
                        <div className="flex items-center text-sm text-gray-500 gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {event.time}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <Button variant="outline" size="sm">Set Reminder</Button>
                          <Button size="sm" className="bg-luna-purple hover:bg-purple-600">
                            RSVP Now
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <DashboardFooter />
    </div>
  );
};

export default Community;
