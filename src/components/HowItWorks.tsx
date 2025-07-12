import React from 'react';
import { Users, Search, Lightbulb, MessageCircle, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (page: string) => void;
}

export default function HowItWorks({ onNavigate }: HowItWorksProps) {
  const steps = [
    {
      icon: Users,
      title: 'Student Interviews & Research',
      description: 'We conduct in-depth interviews with students, educators, and counselors to understand the real challenges students face during academic transitions.',
      details: [
        'One-on-one interviews with recent graduates',
        'Focus groups with current students',
        'Expert insights from counselors and educators',
        'Analysis of academic transition data'
      ],
      color: 'blue'
    },
    {
      icon: Search,
      title: 'Pattern Recognition & Analysis',
      description: 'Our team identifies common patterns in academic, social, and emotional struggles that students experience during major transitions.',
      details: [
        'Academic performance challenges',
        'Social adaptation difficulties',
        'Emotional stress and anxiety patterns',
        'Time management and organization issues'
      ],
      color: 'purple'
    },
    {
      icon: Lightbulb,
      title: 'Actionable Guidance Creation',
      description: 'We transform insights into bite-sized, actionable guidance that students can immediately apply to their situations.',
      details: [
        'Step-by-step transition guides',
        'Interactive checklists and tools',
        'Video tutorials and walkthroughs',
        'Personalized recommendation systems'
      ],
      color: 'orange'
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Support & Community',
      description: 'Students receive ongoing support through our mentorship program, community forums, and AI-powered assistance.',
      details: [
        'Peer-to-peer mentorship matching',
        'Expert Q&A sessions',
        'Community discussion forums',
        'AI chatbot for immediate answers'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500 text-blue-600 bg-blue-50',
      purple: 'bg-purple-500 text-purple-600 bg-purple-50',
      orange: 'bg-orange-500 text-orange-600 bg-orange-50',
      green: 'bg-green-500 text-green-600 bg-green-50'
    };
    return colorMap[color as keyof typeof colorMap].split(' ');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How RealStart Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process transforms real student experiences into actionable guidance, 
            helping you navigate academic transitions with confidence and support.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const [iconBg, textColor, cardBg] = getColorClasses(step.color);
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className={`h-6 w-6 text-white`} />
                    </div>
                    <div className="flex items-center">
                      <span className={`text-sm font-semibold ${textColor} mr-3`}>
                        Step {index + 1}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <div className={`w-2 h-2 ${iconBg} rounded-full mr-3`}></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className={`${cardBg} p-8 rounded-2xl`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <Icon className={`h-16 w-16 ${textColor} mx-auto mb-4`} />
                      <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-center text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The RealStart Impact
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our systematic approach has helped thousands of students successfully navigate their 
            academic transitions, building confidence and achieving their goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-blue-100">Reduction in transition anxiety</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <p className="text-blue-100">Students successfully supported</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Would recommend to friends</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('login')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}