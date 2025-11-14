//import React from 'react';
import { AwardIcon, TrendingUpIcon, BrainIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E7E] mb-4">
            Behind the Charts
          </h2>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              I'm an <strong>Equity Research Analyst</strong> and the{' '}
              <strong>Founder of ShareComplex LLP</strong>, with a focus on
              building data-driven investment models and trading frameworks.
            </p>
            <p>
              With certifications in <strong>CMT (Level III)</strong>,{' '}
              <strong>CFTe</strong>, <strong>NISM Series VIII</strong>,and <strong>NISM Series V - Mutual Fund Distributor</strong> I
              combine technical precision, fundamental depth, and quantitative
              reasoning to generate actionable market insights.
            </p>
            <p>
              My journey from clinical sciences to market analytics taught me
              the value of structure, discipline, and pattern recognition —
              principles that now define my approach to financial markets.
            </p>
            <p className="text-[#1B5E7E] font-semibold text-lg">
              I believe trading is both an art of probability and a science of
              structure, and my work reflects that balance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-[#1B5E7E] to-[#2d7a9f] p-6 rounded-xl text-white shadow-lg">
              <AwardIcon size={40} className="mb-4 text-[#4CAF50]" />
              <h3 className="text-xl font-bold mb-2">Certifications</h3>
              <ul className="space-y-2 text-sm">
                <li>• CMT Level III Cleared</li>
                <li>• Certified Financial Technician (CFTe)</li>
                <li>• NISM Series VIII: Equity Derivatives</li>
                <li>• NISM Series V : Mutual Fund Distributor </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#4CAF50] to-[#45a049] p-6 rounded-xl text-white shadow-lg">
              <TrendingUpIcon size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-sm">
                Equity Research Analyst at ShareComplex LLP since <strong>2019</strong>,
                specializing in real-world financial modeling, valuation, and
                portfolio analysis.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl text-white shadow-lg">
              <BrainIcon size={40} className="mb-4 text-[#4CAF50]" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-sm">
                Bachelor of Dental Surgery, Gujarat University — bringing
                analytical rigor from healthcare to finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}