import React, { useState } from 'react';
import { MessageSquare, Users, Search, Send, Star, Clock, User as UserIcon } from 'lucide-react';
import { User } from '../contexts/AuthContext';

interface ConnectProps {
  user: User | null;
  onNavigate: (page: string) => void;
}

export default function Connect({ user, onNavigate }: ConnectProps) {
  const [activeTab, setActiveTab] = useState('mentors');
  const [searchQuery, setSearchQuery] = useState('');
  const [newQuestion, setNewQuestion] = useState('');

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Connect with the RealStart Community</h1>
          <p className="text-lg text-gray-600 mb-8">Please sign in to connect with mentors and join discussions.</p>
          <button
            onClick={() => onNavigate('login')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Sign In to Continue
          </button>
        </div>
      </div>
    );
  }

  const mentors = [
    {
      id: 1,
      name: 'Ojas Thakur',
      stage: 'College Senior',
      expertise: 'College Transition, Study Abroad',
      rating: 4.9,
      sessions: 150,
      bio: 'Helped students navigate freshman year challenges and study abroad opportunities.',
      available: true
    }
  ];

  const questions = [
    {
      id: 1,
      title: 'How do I make friends in college?',
      author: 'Alex M.',
      timeAgo: '2 hours ago',
      replies: 8,
      likes: 15,
      category: 'Social',
      preview: 'I\'m starting college next month and I\'m really nervous about making friends. Any tips?'
    },
    {
      id: 2,
      title: 'Best study strategies for high school?',
      author: 'Jamie L.',
      timeAgo: '5 hours ago',
      replies: 12,
      likes: 23,
      category: 'Academic',
      preview: 'Middle school was easy but high school seems overwhelming. What study methods actually work?'
    },
    {
      id: 3,
      title: 'Dealing with homesickness in college',
      author: 'Taylor K.',
      timeAgo: '1 day ago',
      replies: 6,
      likes: 9,
      category: 'Emotional',
      preview: 'I\'ve been at college for a month but I still miss home so much. Is this normal?'
    }
  ];

  const handleAskQuestion = () => {
    if (newQuestion.trim()) {
      // In a real app, this would submit to a backend
      alert('Question submitted! Our community will respond soon.');
      setNewQuestion('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect & Get Support
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with experienced mentors, ask questions to our community, and get the support you need 
            to navigate your academic journey with confidence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('mentors')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'mentors' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="h-4 w-4 inline mr-2" />
              Find Mentors
            </button>
            <button
              onClick={() => setActiveTab('qa')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'qa' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MessageSquare className="h-4 w-4 inline mr-2" />
              Q&A Forum
            </button>
          </div>
        </div>

        {activeTab === 'mentors' && (
          <div>
            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search mentors by expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                        <p className="text-sm text-gray-600">{mentor.stage}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      mentor.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {mentor.available ? 'Available' : 'Busy'}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                      <span className="text-sm text-gray-500 ml-2">({mentor.sessions} sessions)</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Expertise</p>
                    <p className="text-sm font-medium text-gray-900">{mentor.expertise}</p>
                  </div>

                  <button
                    disabled={!mentor.available}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      mentor.available
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {mentor.available ? 'Connect' : 'Currently Unavailable'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'qa' && (
          <div className="max-w-4xl mx-auto">
            {/* Ask Question */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Ask the Community</h2>
              <div className="space-y-4">
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="What's on your mind? Ask anything about your academic journey..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleAskQuestion}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Ask Question
                  </button>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{question.preview}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ml-4 ${
                      question.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                      question.category === 'Social' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {question.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        {question.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {question.timeAgo}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>{question.replies} replies</span>
                      <span>{question.likes} likes</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}