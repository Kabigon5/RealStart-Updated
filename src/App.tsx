import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import LoginSignup from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import HowItWorks from './components/HowItWorks';
import Connect from './components/Connect';
import Donate from './components/Donate';
import About from './components/About';
import LoadingSpinner from './components/LoadingSpinner';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user, logout, isLoading } = useAuth();


  const handleLogout = () => {
    logout();
    setCurrentPage('home');
  };

  // Show loading spinner while checking authentication state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} user={user} />;
      case 'login':
        return <LoginSignup onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard user={user} onNavigate={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorks onNavigate={setCurrentPage} />;
      case 'connect':
        return <Connect user={user} onNavigate={setCurrentPage} />;
      case 'donate':
        return <Donate onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      default:
        return <Homepage onNavigate={setCurrentPage} user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        user={user}
        onLogout={handleLogout}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;