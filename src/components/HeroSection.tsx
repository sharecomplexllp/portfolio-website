//import React from 'react';
import {  LinkedinIcon } from 'lucide-react';
export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#1B5E7E] to-slate-800 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Abhay Bhimajiani
              </h1>
              <div className="h-1 w-24 bg-[#4CAF50]" />
            </div>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Founder & Equity Research Analyst
            </p>
            <p className="text-lg text-gray-300 max-w-xl">
              Technical • Fundamental • Quantitative Insights
            </p>
            <p className="text-gray-300 leading-relaxed max-w-xl">
              Combining advanced certifications (CMT Level III, CFTe, NISM
              Series VIII & NISM Series V - Mutual Fund Distributor) with data-driven investment models to decode market
              patterns and generate actionable insights.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://linkedin.com/in/abhay-bhimajiani-50a223237" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all backdrop-blur-sm">
                <LinkedinIcon size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
          {/* Right: Professional Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4CAF50] rounded-2xl transform rotate-6 opacity-20" />
              <img src="/image18.jpg" alt="Abhay Bhimajiani" className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover" />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>;
}