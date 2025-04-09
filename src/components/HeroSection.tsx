import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blackRich/70 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/store-timelapse.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10 mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight">
              <span className="text-white">Design que</span><br />
              <span className="text-gradient-gold">encanta</span> <span className="text-white">&</span><br />
              <span className="text-gradient-teal">vende</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Criamos experiências visuais que transformam lojas comuns em destinos irresistíveis, 
              aumentando o tráfego e convertendo visitantes em clientes fiéis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary animate-pulse-subtle">
                Quero essa transformação
              </a>
              <a href="#portfolio" className="px-5 py-3 border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 rounded-lg font-medium">
                Ver portfólio
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative">
            <BeforeAfterSlider
              beforeImage="/store1.png"
              afterImage="/store2.png"
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2">Scroll para explorar</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
