//import React from 'react'
import { TrendingUpIcon, ShieldIcon, RocketIcon } from 'lucide-react'
const philosophyPoints = [
  {
    icon: TrendingUpIcon,
    title: 'Markets reward preparation',
    description: 'Knowledge and analysis are the true edge',
  },
  {
    icon: ShieldIcon,
    title: 'Risk management is non-negotiable',
    description: 'It is the bridge between uncertainty and success',
  },
  {
    icon: RocketIcon,
    title: 'Opportunities are infinite',
    description:
      'With the right mindset, every challenge becomes a stepping stone',
  },
]
export function MyPhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E7E] mb-4">
            🌐 My Philosophy
          </h2>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
            <p>
              I am a <strong>full-time trader</strong>, deeply engaged in Indian
              equities and commodities, with a strong foundation built through
              completing all three levels of{' '}
              <strong>CMT (Chartered Market Technician)</strong> and earning the{' '}
              <strong>CFTe (Certified Financial Technician)</strong>{' '}
              designation. Alongside my independent trading practice, I proudly
              operate as a franchisee of <strong>Axis Securities</strong>,
              combining personal expertise with institutional strength.
            </p>
            <p>
              For me, the{' '}
              <strong>stock market is the backbone of the economy</strong>. It
              is often described as risky, but I believe risk is not something
              to fear—it is something to manage. When risk is understood,
              disciplined, and respected, it transforms into opportunity. The
              rewards that follow are often beyond expectation, a testament to
              patience, strategy, and conviction.
            </p>
            <p>
              Trading is not just about numbers or charts; it is about{' '}
              <strong>discipline, resilience, and foresight</strong>. My
              philosophy is simple:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-[#1B5E7E]/20 hover:border-[#4CAF50] transition-all group"
              >
                <div className="bg-gradient-to-br from-[#1B5E7E] to-[#2d7a9f] w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <point.icon size={28} className="text-[#4CAF50]" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  📊 {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#1B5E7E] to-[#2d7a9f] p-8 rounded-2xl text-white mt-12">
            <p className="text-lg leading-relaxed text-center">
              This belief system guides my work every day, whether I am
              analyzing trends, executing trades, or mentoring others.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}