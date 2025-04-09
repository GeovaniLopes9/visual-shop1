import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const storeTypes = [
  { id: 'moda', label: 'Moda', icon: '👗' },
  { id: 'tecnologia', label: 'Tecnologia', icon: '📱' },
  { id: 'decoracao', label: 'Decoração', icon: '🏠' },
  { id: 'alimentacao', label: 'Alimentação', icon: '🍽️' },
  { id: 'saude', label: 'Saúde & Beleza', icon: '💆' },
  { id: 'esportes', label: 'Esportes', icon: '🏃' }
];

const services = [
  { id: 'layout', label: 'Layout da Loja', increase: { traffic: 25, sales: 15 } },
  { id: 'vitrine', label: 'Design de Vitrine', increase: { traffic: 30, sales: 20 } },
  { id: 'identidade', label: 'Identidade Visual', increase: { traffic: 15, sales: 20 } },
  { id: 'digital', label: 'Integração Digital', increase: { traffic: 35, sales: 25 } }
];

const CalculatorSection = () => {
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [trafficIncrease, setTrafficIncrease] = useState(0);
  const [salesIncrease, setSalesIncrease] = useState(0);
  const [roi, setRoi] = useState(0);
  const [investment, setInvestment] = useState(0);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId) 
        : [...prev, serviceId]
    );
  };

  useEffect(() => {
    // Calculate increases based on selected services
    let trafficSum = 0;
    let salesSum = 0;
    let baseInvestment = 0;

    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        trafficSum += service.increase.traffic;
        salesSum += service.increase.sales;
        baseInvestment += 5000; // Example base investment per service
      }
    });

    // Apply diminishing returns for multiple services
    const trafficFinal = Math.min(100, trafficSum * (1 - (selectedServices.length * 0.05)));
    const salesFinal = Math.min(100, salesSum * (1 - (selectedServices.length * 0.05)));
    
    // Calculate ROI: (Gain from Investment - Cost of Investment) / Cost of Investment
    const averageTicket = 150; // Example average purchase value
    const monthlyCustomers = 1000; // Example monthly customers
    const potentialGain = (monthlyCustomers * (salesFinal / 100)) * averageTicket * 12; // Annual gain
    const calculatedRoi = baseInvestment > 0 ? ((potentialGain - baseInvestment) / baseInvestment) * 100 : 0;

    setTrafficIncrease(Math.round(trafficFinal));
    setSalesIncrease(Math.round(salesFinal));
    setRoi(Math.round(calculatedRoi));
    setInvestment(baseInvestment);
  }, [selectedServices]);

  return (
    <section id="calculator" className="section-padding bg-blackRich">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="text-gradient-teal">Calculadora</span> de Impacto
        </h2>
        <p className="text-lg text-white/80 text-center max-w-3xl mx-auto mb-12">
          Descubra o potencial de transformação da sua loja. Selecione seu tipo de negócio e os serviços 
          desejados para ver projeções de crescimento em tempo real.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-blackRich-light p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">1. Qual é o seu tipo de loja?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {storeTypes.map((store) => (
                <button
                  key={store.id}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 border-2",
                    selectedStore === store.id
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-white/10 bg-blackRich-lighter text-white/70 hover:border-white/30"
                  )}
                  onClick={() => setSelectedStore(store.id)}
                >
                  <span className="text-3xl mb-2">{store.icon}</span>
                  <span className="text-sm font-medium">{store.label}</span>
                </button>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-bold mb-6">2. Quais serviços deseja?</h3>
            <div className="space-y-3 mb-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-lg transition-all duration-300 cursor-pointer",
                    selectedServices.includes(service.id)
                      ? "bg-gold/10 border-l-4 border-gold"
                      : "bg-blackRich-lighter hover:bg-blackRich-lighter/70"
                  )}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center">
                    <div 
                      className={cn(
                        "w-5 h-5 rounded-full mr-3 flex items-center justify-center border",
                        selectedServices.includes(service.id)
                          ? "border-gold bg-gold"
                          : "border-white/30"
                      )}
                    >
                      {selectedServices.includes(service.id) && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="font-medium">{service.label}</span>
                  </div>
                  <div className="text-sm text-white/60">
                    <span className="text-teal">+{service.increase.traffic}% tráfego</span>
                    {' • '}
                    <span className="text-gold">+{service.increase.sales}% vendas</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-24 bg-gradient-to-br from-blackRich-light to-blackRich-lighter p-8 rounded-xl shadow-lg border border-white/5">
              <h3 className="text-2xl font-serif font-bold mb-6">Projeção de Impacto</h3>

              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Aumento de Tráfego</span>
                    <span className="text-teal font-bold">+{trafficIncrease}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-teal-gradient rounded-full transition-all duration-1000" 
                      style={{ width: `${trafficIncrease}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Aumento de Vendas</span>
                    <span className="text-gold font-bold">+{salesIncrease}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold-gradient rounded-full transition-all duration-1000" 
                      style={{ width: `${salesIncrease}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">ROI Estimado</span>
                    <span className="text-white font-bold">{roi}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal to-gold rounded-full transition-all duration-1000" 
                      style={{ width: `${Math.min(100, roi/10)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-blackRich p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Investimento Estimado:</span>
                  <span className="text-2xl font-bold text-white">
                    {investment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
              </div>

              <div className="text-center">
                <button className="btn-primary w-full">Receber proposta detalhada</button>
                <p className="text-sm text-white/60 mt-4">
                  Receba uma análise personalizada e um plano de transformação para sua loja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
