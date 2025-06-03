
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import InteractiveDemo from '@/components/InteractiveDemo';
import AppFeatures from '@/components/AppFeatures';
import DemoSection from '@/components/DemoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <InteractiveDemo />
      <AppFeatures />
      <TechStack />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default Index;
