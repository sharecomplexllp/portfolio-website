//import React from 'react';
import { BarChart3Icon, CodeIcon, BrainCircuitIcon, ShieldCheckIcon, TrendingUpIcon, MessageSquareIcon } from 'lucide-react';
const expertiseAreas = [{
  icon: BarChart3Icon,
  title: 'Equity Research & Market Analysis',
  description: 'Deep fundamental and technical analysis of Indian equities with actionable investment insights'
}, {
  icon: TrendingUpIcon,
  title: 'Trading Strategy Design',
  description: 'Technical and quantitative frameworks combining Elliott Wave, and momentum indicators to generate alpha and manage risk'
}, {
  icon: CodeIcon,
  title: 'Algorithmic Model Development',
  description: 'Custom TradingView strategies with backtested performance and risk management protocols'
}, {
  icon: ShieldCheckIcon,
  title: 'Risk & Portfolio Management',
  description: 'Strategic allocation models with position sizing and drawdown control mechanisms'
}, {
  icon: BrainCircuitIcon,
  title: 'Elliott Wave & Momentum',
  description: 'Advanced wave analysis and generate alpha for trend identification'
}, {
  icon: MessageSquareIcon,
  title: 'Market Commentary & Insights',
  description: 'Regular market updates, sector analysis, and macroeconomic trend interpretation'
}];
export function ExpertiseSection() {
  return <section id="expertise" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E7E] mb-4">
            Core Competencies
          </h2>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise, fundamental analysis, and
            quantitative methods to deliver comprehensive market insights
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-[#1B5E7E] to-[#2d7a9f] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <area.icon size={32} className="text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}