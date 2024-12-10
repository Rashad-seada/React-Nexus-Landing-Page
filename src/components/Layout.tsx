import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './sections/Footer';

export function Layout() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navbar with backdrop blur */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-xl border-b border-white/5" />
          <div className="relative">
            <Navbar />
          </div>
        </div>

        {/* Main content */}
        <Outlet />
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}