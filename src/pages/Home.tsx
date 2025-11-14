//import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ExpertiseSection } from '../components/ExpertiseSection';
import { MyPhilosophySection } from '../components/MyPhilosophySection'
import { VisionSection } from '../components/VisionSection'
import { ContactSection } from '../components/ContactSection';
export function Home() {
  return <div className="w-full">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <MyPhilosophySection />
      <VisionSection />
      <ContactSection />
    </div>;
}