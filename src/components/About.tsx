import React from 'react';
import { BookOpen, Target, Users, Award, ArrowRight, Quote } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const stats = [
    { label: 'Students Helped', value: '2,500+' },
    { label: 'Success Rate', value: '95%' },
    { label: 'Partner Schools', value: '150+' },
    { label: 'Volunteer Mentors', value: '400+' }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Founded by high school student Ojas Thakur after experiencing firsthand the challenges of academic transitions.'
    },
    {
      year: '2023',
      title: 'First 100 Students',
      description: 'Reached our first milestone of helping 100 students successfully navigate their academic transitions.'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Expanded to serve 2,500+ students across 150+ schools with our mentor network.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Planning to reach 10,000 students and launch our AI-powered personalized guidance system.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About RealStart
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Born from student experience, built for student success. We're changing how students 
            navigate academic transitions, one story at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                RealStart exists to ensure no student faces academic transitions alone. We believe every 
                student deserves to feel prepared, supported, and confident as they move through their 
                educational journey.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                By connecting students with real experiences, expert guidance, and peer support, we're 
                building a community where academic transitions become opportunities for growth rather 
                than sources of anxiety.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Target className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-600">Every student thriving through academic transitions</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <Users className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-sm text-gray-600">Student-first, authentic, and accessible support</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <Quote className="h-12 w-12 text-blue-600 mb-6" />
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "I started RealStart because I remember feeling completely lost during my transition to high school. 
                I realized that students need real, honest guidance from people who've actually been there."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  OT
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Ojas Thakur</div>
                  <div className="text-sm text-gray-600">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact by the Numbers</h2>
            <p className="text-lg text-gray-600">Real results from our community-driven approach</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Problem We're Solving
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Academic transitions are critical moments that shape a student's entire educational journey, 
              yet most students navigate them without adequate support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-100 p-8 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-4">60%</div>
              <p className="text-gray-700">of students report feeling unprepared for academic transitions</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 p-8 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-4">45%</div>
              <p className="text-gray-700">experience increased anxiety during transition periods</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-xl">
              <div className="text-3xl font-bold text-yellow-600 mb-4">30%</div>
              <p className="text-gray-700">struggle academically in their first year after transition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              From Ojas's personal challenge to a movement supporting thousands
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1"></div>
                
                <div className="relative flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg mx-8"></div>
                
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-xl shadow-sm ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="text-sm font-semibold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Students, educators, and professionals united by a common mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                OT
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ojas Thakur</h3>
              <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">College freshman who started RealStart to help other students navigate transitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're a student seeking support or want to help others, there's a place for you in the RealStart community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('login')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('donate')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              Support Our Mission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}