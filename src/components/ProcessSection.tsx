import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const processSteps = [
  {
    id: 1,
    title: "Diagnóstico",
    description: "Análise completa do seu espaço atual, público-alvo, objetivos de negócio e oportunidades de melhoria.",
    icon: "🔍",
    color: "from-teal to-teal-dark"
  },
  {
    id: 2,
    title: "Conceituação",
    description: "Desenvolvimento do conceito visual e experiencial que guiará todo o projeto de transformação.",
    icon: "💡",
    color: "from-gold-light to-gold"
  },
  {
    id: 3,
    title: "Design",
    description: "Criação de layouts, escolha de materiais, paleta de cores e elementos visuais que darão vida ao conceito.",
    icon: "🎨",
    color: "from-teal-light to-teal"
  },
  {
    id: 4,
    title: "Execução",
    description: "Implementação do projeto com atenção meticulosa aos detalhes e supervisão constante.",
    icon: "🛠️",
    color: "from-gold to-gold-dark"
  },
  {
    id: 5,
    title: "Treinamento",
    description: "Capacitação da sua equipe para manter e aproveitar ao máximo o novo ambiente.",
    icon: "👥",
    color: "from-teal to-teal-dark"
  },
  {
    id: 6,
    title: "Análise de Resultados",
    description: "Acompanhamento pós-implementação para medir o impacto e realizar ajustes se necessário.",
    icon: "📊",
    color: "from-gold-light to-gold"
  }
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="section-padding bg-blackRich-light">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="text-white">Nossa</span> <span className="text-gradient-gold">Metodologia</span>
        </h2>
        <p className="text-lg text-white/80 text-center max-w-3xl mx-auto mb-12">
          Conheça o processo que transforma lojas comuns em experiências inesquecíveis, 
          aumentando o engajamento e as vendas.
        </p>

        <div className="hidden lg:flex justify-between mb-12 relative">
          {/* Progress bar */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gold z-0 transition-all duration-700"
            style={{ width: `${(activeStep - 1) * 20}%` }}
          ></div>

          {/* Steps */}
          {processSteps.map((step) => (
            <div 
              key={step.id}
              className="relative z-10"
              onMouseEnter={() => setActiveStep(step.id)}
            >
              <div 
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300",
                  activeStep >= step.id 
                    ? "bg-gradient-to-br from-gold to-gold-dark text-blackRich scale-110 shadow-[0_0_20px_rgba(212,175,55,0.4)]" 
                    : "bg-blackRich-lighter text-white/60"
                )}
              >
                {step.icon}
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap">
                <p className={cn(
                  "font-medium transition-all duration-300",
                  activeStep === step.id ? "text-gold" : "text-white/70"
                )}>
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile steps */}
        <div className="lg:hidden space-y-6 mb-12">
          {processSteps.map((step) => (
            <div 
              key={step.id}
              className={cn(
                "p-6 rounded-lg transition-all duration-300 border-l-4",
                activeStep === step.id 
                  ? "bg-blackRich border-gold" 
                  : "bg-blackRich-lighter border-transparent"
              )}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex items-center mb-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-xl mr-4",
                  activeStep >= step.id 
                    ? "bg-gradient-to-br from-gold to-gold-dark text-blackRich" 
                    : "bg-blackRich text-white/60"
                )}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif font-bold">{step.title}</h3>
              </div>
              <p className="text-white/80 pl-14">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Step details */}
        <div className="bg-blackRich p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-serif font-bold mb-4">
                {processSteps[activeStep - 1].title}
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                {processSteps[activeStep - 1].description}
              </p>
              <div className="bg-blackRich-lighter p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-gold">Resultados desta fase:</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-2 text-gold">✓</span>
                    Clareza sobre as necessidades específicas do seu negócio
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gold">✓</span>
                    Documentação visual do processo de transformação
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gold">✓</span>
                    Base sólida para as próximas etapas do projeto
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-br from-blackRich-lighter to-blackRich-light rounded-xl overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover opacity-90"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/process-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">
            <button 
              className="text-white/70 hover:text-white transition-colors duration-300 disabled:opacity-50"
              onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
              disabled={activeStep === 1}
            >
              ← Fase anterior
            </button>
            <button 
              className="text-gold hover:text-gold-light transition-colors duration-300 disabled:opacity-50"
              onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
              disabled={activeStep === 6}
            >
              Próxima fase →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
