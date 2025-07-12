import React, { useState } from 'react';
import { Heart, DollarSign, Users, BookOpen, CheckCircle } from 'lucide-react';

interface DonateProps {
  onNavigate: (page: string) => void;
}

export default function Donate({ onNavigate }: DonateProps) {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const presetAmounts = [10, 25, 50, 100, 250];

  const impactData = [
    {
      amount: 25,
      impact: 'Provides school supplies for 1 student',
      icon: BookOpen,
      color: 'blue'
    },
    {
      amount: 50,
      impact: 'Covers application fees for 2 students',
      icon: DollarSign,
      color: 'green'
    },
    {
      amount: 100,
      impact: 'Funds 1 month of mentorship for 5 students',
      icon: Users,
      color: 'purple'
    },
    {
      amount: 250,
      impact: 'Sponsors a complete transition program',
      icon: Heart,
      color: 'orange'
    }
  ];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    alert(`Thank you for your ${donationType} donation of $${amount}! This is a demo - no payment was processed.`);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'text-blue-600 bg-blue-50',
      green: 'text-green-600 bg-green-50',
      purple: 'text-purple-600 bg-purple-50',
      orange: 'text-orange-600 bg-orange-50'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Student Success
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation helps underserved students access the resources, mentorship, and support 
            they need to successfully navigate their academic transitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>

            {/* Donation Type */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`p-4 rounded-lg border-2 font-medium transition-colors ${
                    donationType === 'one-time'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`p-4 rounded-lg border-2 font-medium transition-colors ${
                    donationType === 'monthly'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Amount
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-3 rounded-lg border-2 font-medium transition-colors ${
                      selectedAmount === amount && !customAmount
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Impact Preview */}
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Your Impact</h3>
              <p className="text-gray-700">
                Your ${customAmount || selectedAmount} {donationType} donation will help provide essential support 
                to students during their academic transitions.
              </p>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105"
            >
              Donate ${customAmount || selectedAmount} {donationType === 'monthly' ? 'Monthly' : 'Now'}
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Secure payment processing. Your donation is tax-deductible.
            </p>
          </div>

          {/* Impact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Your Donation Helps</h2>
            
            <div className="space-y-6 mb-8">
              {impactData.map((item, index) => {
                const Icon = item.icon;
                const colorClasses = getColorClasses(item.color);
                
                return (
                  <div key={index} className="flex items-start">
                    <div className={`p-3 rounded-lg ${colorClasses} mr-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">${item.amount}</h3>
                      <p className="text-gray-600">{item.impact}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Impact This Year</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Students Supported</span>
                  <span className="font-semibold text-gray-900">2,547</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">School Supplies Provided</span>
                  <span className="font-semibold text-gray-900">1,230 sets</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Application Fees Covered</span>
                  <span className="font-semibold text-gray-900">847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mentorship Hours</span>
                  <span className="font-semibold text-gray-900">15,420</span>
                </div>
              </div>
            </div>

            {/* Transparency */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">100% Transparency</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We believe in complete transparency about how your donations are used:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 85% directly supports students and programs</li>
                <li>• 10% covers operational costs</li>
                <li>• 5% invested in growth and technology</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Donor Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                "Thanks to Ojas and RealStart's support, I was able to afford my college application fees and 
                get the guidance I needed to navigate the whole process. I'm now a college freshman!"
              </blockquote>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Maria G.</div>
                <div>First-generation college student</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                "The support I received through Ojas's RealStart program made my transition to 
                high school so much smoother. I felt prepared and confident every step of the way."
              </blockquote>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Jordan T.</div>
                <div>High school sophomore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}