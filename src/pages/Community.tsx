
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { Users, MessageSquare, Award, Heart, Search, ThumbsUp, MessageCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Community = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Sarah');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-luna-lavender/10 to-luna-peach/10">
      <DashboardHeader userName={userName} />
      
      <main className="container px-4 pb-24 pt-20 mx-auto max-w-5xl">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Luna Community
          </h1>
          <p className="text-gray-600 mt-1">Connect, share experiences, and get support from others.</p>
        </section>
        
        {/* Search & Quick Actions */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search discussions..." className="pl-9" />
            </div>
            <Button className="bg-luna-purple hover:bg-purple-600">
              <MessageSquare className="mr-2 h-4 w-4" />
              Create a Post
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Button variant="outline" className="justify-start">
              <Users className="mr-2 h-4 w-4 text-purple-500" />
              All Topics
            </Button>
            <Button variant="outline" className="justify-start">
              <Heart className="mr-2 h-4 w-4 text-pink-500" />
              PCOS Support
            </Button>
            <Button variant="outline" className="justify-start">
              <MessageSquare className="mr-2 h-4 w-4 text-blue-500" />
              Endometriosis
            </Button>
            <Button variant="outline" className="justify-start">
              <Award className="mr-2 h-4 w-4 text-amber-500" />
              Fertility
            </Button>
          </div>
        </section>
        
        {/* Featured Discussions & Support Groups */}
        <section className="mb-8">
          <Tabs defaultValue="discussions">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="groups">Support Groups</TabsTrigger>
              <TabsTrigger value="experts">Ask Experts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="discussions">
              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-800 mb-4">Popular Discussions</h3>
                  
                  <div className="space-y-4">
                    <DiscussionPost 
                      avatar="J"
                      username="JaneM"
                      time="2 hours ago"
                      title="Anyone else experience worse cramps with stress?"
                      content="I've noticed that during stressful weeks at work, my period cramps are significantly worse. Has anyone else experienced this? Any tips for managing both stress and pain simultaneously?"
                      tags={["Period Pain", "Stress Management"]}
                      likes={23}
                      comments={8}
                    />
                    
                    <DiscussionPost 
                      avatar="K"
                      username="KateL"
                      time="Yesterday"
                      title="Success with evening primrose oil for PMS?"
                      content="My doctor recommended evening primrose oil supplements for my severe PMS symptoms. Has anyone tried this with success? How long did it take to notice improvements?"
                      tags={["PMS", "Supplements"]}
                      likes={42}
                      comments={15}
                    />
                    
                    <DiscussionPost 
                      avatar="E"
                      username="EmilyR"
                      time="3 days ago"
                      title="Tracking basal body temperature - tips needed!"
                      content="I just started tracking my basal body temperature for fertility awareness. Any tips for consistent readings? What thermometer do you recommend?"
                      tags={["Fertility", "BBT Tracking"]}
                      likes={31}
                      comments={12}
                    />
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    View More Discussions
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="groups">
              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-800 mb-4">Support Groups</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SupportGroupCard 
                      name="PCOS Warriors"
                      members={1240}
                      description="Support, lifestyle tips, and success stories for managing Polycystic Ovary Syndrome."
                      color="bg-pink-50"
                      iconColor="text-pink-500"
                    />
                    
                    <SupportGroupCard 
                      name="Endometriosis Support"
                      members={892}
                      description="A safe space to discuss endometriosis symptoms, treatments, and emotional support."
                      color="bg-purple-50"
                      iconColor="text-purple-500"
                    />
                    
                    <SupportGroupCard 
                      name="Fertility Journey"
                      members={1578}
                      description="For anyone trying to conceive, navigating fertility treatments, or dealing with challenges."
                      color="bg-blue-50"
                      iconColor="text-blue-500"
                    />
                    
                    <SupportGroupCard 
                      name="Teen Menstrual Health"
                      members={745}
                      description="A supportive community for teens learning about their cycles and menstrual health."
                      color="bg-green-50"
                      iconColor="text-green-500"
                    />
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Browse All Groups
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="experts">
              <Card className="border-none shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-800 mb-4">Ask Our Experts</h3>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-700">
                      Submit your questions and get answers from our panel of verified gynecologists, nutritionists, and mental health professionals.
                    </p>
                    <Button className="mt-3 bg-blue-600 hover:bg-blue-700">
                      Submit a Question
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <ExpertAnswer 
                      question="Can vitamin D deficiency affect my menstrual cycle?"
                      expert="Dr. Lisa Chen, MD"
                      expertTitle="OB/GYN"
                      answer="Yes, vitamin D deficiency has been linked to menstrual irregularities and increased PMS symptoms. Vitamin D plays a role in hormonal balance and reproductive health. If you're experiencing cycle changes, consider having your vitamin D levels checked. Supplementation may help regulate your cycle if deficiency is confirmed."
                      time="Answered 1 day ago"
                    />
                    
                    <ExpertAnswer 
                      question="What foods help reduce inflammation during menstruation?"
                      expert="Amara Singh, RD"
                      expertTitle="Nutritionist"
                      answer="Anti-inflammatory foods can help manage period pain. Focus on omega-3 rich foods (fatty fish, walnuts, flaxseeds), colorful fruits and vegetables (especially berries and leafy greens), turmeric, ginger, and green tea. Limit inflammatory foods like processed items, excess sugar, and alcohol, particularly during the week before your period."
                      time="Answered 3 days ago"
                    />
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    See More Expert Answers
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Daily Health Poll */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Daily Health Poll</h2>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-800 mb-3">Which symptom tracking feature would you find most useful?</h3>
              
              <div className="space-y-3 mb-4">
                <div className="relative">
                  <div className="bg-purple-100 h-9 rounded-lg" style={{ width: '65%' }}></div>
                  <div className="absolute inset-0 flex justify-between items-center px-3">
                    <span className="text-sm font-medium">Custom symptom categories</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-pink-100 h-9 rounded-lg" style={{ width: '18%' }}></div>
                  <div className="absolute inset-0 flex justify-between items-center px-3">
                    <span className="text-sm font-medium">Wearable device integration</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-blue-100 h-9 rounded-lg" style={{ width: '12%' }}></div>
                  <div className="absolute inset-0 flex justify-between items-center px-3">
                    <span className="text-sm font-medium">Medication reminders</span>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-green-100 h-9 rounded-lg" style={{ width: '5%' }}></div>
                  <div className="absolute inset-0 flex justify-between items-center px-3">
                    <span className="text-sm font-medium">Other</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500 items-center">
                <span>742 community members have voted</span>
                <Button variant="ghost" size="sm" className="text-luna-purple hover:text-purple-700">
                  Vote Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Gamification Badges */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-luna-purple" />
            Your Community Achievements
          </h2>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-amber-500" />
                  </div>
                  <h4 className="font-medium text-gray-800">Helpful Member</h4>
                  <p className="text-xs text-gray-500 mt-1">For answering 10+ questions</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                    <Heart className="h-8 w-8 text-pink-500" />
                  </div>
                  <h4 className="font-medium text-gray-800">Supportive Friend</h4>
                  <p className="text-xs text-gray-500 mt-1">For offering support in groups</p>
                </div>
                
                <div className="flex flex-col items-center text-center opacity-50">
                  <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <MessageSquare className="h-8 w-8 text-gray-400" />
                  </div>
                  <h4 className="font-medium text-gray-400">Discussion Starter</h4>
                  <p className="text-xs text-gray-400 mt-1">Create 5 discussions to unlock</p>
                </div>
                
                <div className="flex flex-col items-center text-center opacity-50">
                  <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                  <h4 className="font-medium text-gray-400">Community Leader</h4>
                  <p className="text-xs text-gray-400 mt-1">Help 25 members to unlock</p>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-600">
                  You've earned 2 out of 12 community badges. Keep participating to earn more!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <DashboardFooter />
    </div>
  );
};

interface DiscussionPostProps {
  avatar: string;
  username: string;
  time: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
}

const DiscussionPost: React.FC<DiscussionPostProps> = ({ 
  avatar, username, time, title, content, tags, likes, comments 
}) => {
  return (
    <div className="border-b border-gray-100 pb-4">
      <div className="flex items-center gap-2 mb-2">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800">
            {avatar}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{username}</span>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
        </div>
      </div>
      
      <h4 className="font-medium text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">{content}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600">
          <ThumbsUp className="h-4 w-4 mr-1" />
          {likes}
        </Button>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600">
          <MessageCircle className="h-4 w-4 mr-1" />
          {comments}
        </Button>
      </div>
    </div>
  );
};

interface SupportGroupCardProps {
  name: string;
  members: number;
  description: string;
  color: string;
  iconColor: string;
}

const SupportGroupCard: React.FC<SupportGroupCardProps> = ({ 
  name, members, description, color, iconColor 
}) => {
  return (
    <div className={`${color} p-4 rounded-lg`}>
      <div className="flex items-start gap-3">
        <div className="rounded-full p-2 bg-white/60">
          <Users className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-800">{name}</h4>
            <span className="text-xs text-gray-600">{members} members</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <Button variant="outline" size="sm" className="mt-2 bg-white/70">
            Join Group
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ExpertAnswerProps {
  question: string;
  expert: string;
  expertTitle: string;
  answer: string;
  time: string;
}

const ExpertAnswer: React.FC<ExpertAnswerProps> = ({ 
  question, expert, expertTitle, answer, time 
}) => {
  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <h4 className="font-medium text-gray-800 mb-2">{question}</h4>
      <div className="flex items-center gap-2 mb-2">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-blue-100 text-blue-800">
            DR
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-blue-800">{expert}</p>
          <p className="text-xs text-gray-500">{expertTitle}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">{answer}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  );
};

export default Community;
