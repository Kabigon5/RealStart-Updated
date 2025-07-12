import React from 'react';
import { ArrowRight, Users, Heart, Target, Star } from 'lucide-react';
import { User } from '../contexts/AuthContext';

interface HomepageProps {
  onNavigate: (page: string) => void;
  user: User | null;
}

export default function Homepage({ onNavigate, user }: HomepageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Helping You Own Your
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Next Chapter
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Navigate your academic transitions with confidence. Real advice from students who've been there, 
              expert guidance, and a community that has your back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate(user ? 'dashboard' : 'login')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
              >
                {user ? 'Go to Dashboard' : 'Get Started'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                Learn How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
              <p className="text-gray-700">of students feel unprepared for academic transitions</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">2,500+</div>
              <p className="text-gray-700">students helped through major transitions</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-700">report feeling more confident after using RealStart</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What RealStart Does
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bridge the gap between where you are and where you want to be, providing 
              the support system every student deserves during life's biggest transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Student Voices</h3>
              <p className="text-gray-600">
                Honest advice and experiences from students who've successfully navigated 
                the same transitions you're facing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Target className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Guidance</h3>
              <p className="text-gray-600">
                Curated content and actionable advice tailored to your specific academic 
                stage and personal challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Heart className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Connect with mentors, join communities, and access resources that help 
                you thrive throughout your academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories from Students
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from students who found their footing with RealStart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "RealStart helped me realize I wasn't alone in feeling overwhelmed about starting high school. 
                The advice from other students was exactly what I needed to hear."
              </p>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Sarah M.</div>
                <div>Incoming Freshman</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "RealStart's guidance helped me feel confident about starting college. Ojas's approach 
                really understands what students go through during these transitions."
              </p>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Alex M.</div>
                <div>College Freshman</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Thanks to Ojas and RealStart, I felt prepared for high school instead of anxious. 
                The real student advice made all the difference."
              </p>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Jordan K.</div>
                <div>High School Freshman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Own Your Next Chapter?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who've found their confidence and direction with RealStart.
          </p>
          <button
            onClick={() => onNavigate(user ? 'dashboard' : 'login')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center"
          >
            {user ? 'Go to Dashboard' : 'Start Your Journey'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}