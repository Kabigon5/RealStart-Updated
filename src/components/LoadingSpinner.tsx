import React from 'react';
import { BookOpen } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading RealStart</h2>
        <p className="text-gray-600">Preparing your personalized experience...</p>
      </div>
    </div>
  );
}