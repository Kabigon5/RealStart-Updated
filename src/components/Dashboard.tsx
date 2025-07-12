import React from 'react';
import { BookOpen, Users, MessageSquare, CheckSquare, Play, ArrowRight, Star } from 'lucide-react';
import { User } from '../contexts/AuthContext';

interface DashboardProps {
  user: User | null;
  onNavigate: (page: string) => void;
}

export default function Dashboard({ user, onNavigate }: DashboardProps) {
  if (!user) {
    onNavigate('login');
    return null;
  }

  const getStageContent = () => {
    switch (user.lifeStage) {
      case 'incoming-middle':
      case 'current-middle':
        return {
          title: 'Middle School Success',
          description: 'Navigate your middle school journey with confidence',
          guides: [
            'Making Friends in Middle School',
            'Study Skills That Actually Work',
            'Dealing with Changing Social Dynamics',
            'Preparing for High School'
          ],
          videos: [
            'First Week Survival Guide',
            'Organization Tips for Middle Schoolers',
            'Handling Academic Pressure'
          ]
        };
      case 'incoming-high':
      case 'current-high':
        return {
          title: 'High School Mastery',
          description: 'Excel academically and socially in high school',
          guides: [
            'High School Course Planning',
            'Extracurricular Balance',
            'College Prep Timeline',
            'Building Meaningful Relationships'
          ],
          videos: [
            'High School Orientation Guide',
            'Time Management for Busy Students',
            'College Application Strategy'
          ]
        };
      case 'incoming-college':
      case 'current-college':
        return {
          title: 'College Transition',
          description: 'Thrive in your college experience',
          guides: [
            'Dorm Life Essentials',
            'Academic Independence',
            'Campus Involvement Guide',
            'Managing Homesickness'
          ],
          videos: [
            'First Semester Success',
            'Building Your College Network',
            'Study Strategies for College'
          ]
        };
      default:
        return {
          title: 'Academic Success',
          description: 'Navigate your academic journey',
          guides: [
            'General Study Tips',
            'Time Management',
            'Goal Setting',
            'Building Confidence'
          ],
          videos: [
            'Academic Success Fundamentals',
            'Stress Management',
            'Personal Development'
          ]
        };
    }
  };

  const content = getStageContent();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-blue-100 text-lg">{content.description}</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <button
            onClick={() => onNavigate('connect')}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Find a Mentor</h3>
            <p className="text-sm text-gray-600">Connect with students who've been in your shoes</p>
          </button>

          <button
            onClick={() => onNavigate('connect')}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <MessageSquare className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Ask Questions</h3>
            <p className="text-sm text-gray-600">Get answers from our community</p>
          </button>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <CheckSquare className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Progress Tracker</h3>
            <p className="text-sm text-gray-600">3 of 5 goals completed this week</p>
          </div>

          <button
            onClick={() => onNavigate('how-it-works')}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <BookOpen className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Learn More</h3>
            <p className="text-sm text-gray-600">Discover how RealStart works</p>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personalized Guides */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{content.title}</h2>
              <div className="space-y-4">
                {content.guides.map((guide, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="font-medium text-gray-900">{guide}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Video Content */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Video Guides</h3>
              <div className="space-y-4">
                {content.videos.map((video, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <Play className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium text-gray-900">{video}</span>
                    </div>
                    <span className="text-sm text-gray-500">12 min</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Completed "First Week Survival Guide"</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Connected with mentor Ojas</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Joined study group for math</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivation */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Daily Motivation</h3>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </blockquote>
              <p className="text-sm text-gray-600">- Winston Churchill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}