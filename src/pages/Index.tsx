
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import CalculatorSection from '@/components/CalculatorSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Easter egg - click logo 3 times
    let logoClickCount = 0;
    const logo = document.querySelector('header a[href="#hero"] h1');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        logoClickCount++;
        if (logoClickCount === 3) {
          alert('🎁 Parabéns! Você desbloqueou um template gratuito. Envie um email para template@visualshop.com para receber seu brinde!');
          logoClickCount = 0;
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <CalculatorSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
