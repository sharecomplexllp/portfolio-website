import React from 'react'
import {
  HeartHandshakeIcon,
  TrendingUpIcon,
  UsersIcon,
  LightbulbIcon,
} from 'lucide-react'
const visionPillars = [
  {
    icon: HeartHandshakeIcon,
    title: 'Integrity First',
    description:
      'Never misguiding clients for short-term gains. Trust is the foundation of every relationship we build.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Simplicity in Service',
    description:
      'Straightforward, clear, and client-focused solutions that make investing easy to understand and act upon.',
  },
  {
    icon: UsersIcon,
    title: 'Accessibility for All',
    description:
      'Enabling every small investor to participate confidently in the markets and transform their wealth over time.',
  },
  {
    icon: LightbulbIcon,
    title: 'Collective Expertise',
    description:
      'Harnessing diverse skills and perspectives to deliver strategies that balance risk and reward.',
  },
]
export function VisionSection() {
  return (
    <section
      id="vision"
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E7E] mb-4">
            🚀 Vision of ShareComplex LLP
          </h2>
          <div className="w-24 h-1 bg-[#4CAF50] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2019
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ShareComplex LLP was born from a simple yet powerful belief: the{' '}
              <strong>
                financial markets should be accessible, transparent, and
                rewarding for everyone
              </strong>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My vision is to create a company where{' '}
              <strong>like-minded, energetic professionals</strong> come
              together under one roof, bringing their expertise to empower
              investors of all sizes. At ShareComplex, we stand for:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {visionPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-[#4CAF50] to-[#45a049] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  🤝 {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#1B5E7E] to-slate-800 p-8 md:p-12 rounded-2xl text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed text-center">
              Our mission is to guide investors with{' '}
              <strong>clarity, honesty, and foresight</strong>—helping them not
              just grow wealth, but build confidence in their financial journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}