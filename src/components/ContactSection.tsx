
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    storeType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        storeType: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-blackRich">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">
              <span className="text-white">Vamos </span>
              <span className="text-gradient-teal">Conversar</span>
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Estamos prontos para transformar sua loja em uma experiência visual extraordinária 
              que encanta clientes e impulsiona suas vendas.
            </p>

            <div className="bg-blackRich-light rounded-xl p-6 mb-8">
              <h3 className="text-xl font-serif font-bold mb-4">Por que escolher a Visual Shop?</h3>
              <ul className="space-y-3">
                <Feature 
                  icon="✨" 
                  title="Design Estratégico" 
                  description="Criamos espaços que não apenas impressionam, mas convertem visitantes em clientes." 
                />
                <Feature 
                  icon="📈" 
                  title="Resultados Comprovados" 
                  description="Aumento médio de 42% no tráfego e 35% nas vendas após nossas transformações." 
                />
                <Feature 
                  icon="🎯" 
                  title="Abordagem Personalizada" 
                  description="Cada projeto é único, desenvolvido especificamente para sua marca e objetivos." 
                />
                <Feature 
                  icon="🔄" 
                  title="Suporte Contínuo" 
                  description="Acompanhamento pós-implementação para garantir resultados duradouros." 
                />
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 bg-blackRich-light p-5 rounded-lg text-center">
                <p className="text-white/70 mb-1">Email</p>
                <p className="text-lg font-medium">contato@visualshop.com</p>
              </div>
              <div className="flex-1 bg-blackRich-light p-5 rounded-lg text-center">
                <p className="text-white/70 mb-1">Telefone</p>
                <p className="text-lg font-medium">(11) 99999-9999</p>
              </div>
            </div>
          </div>

          <div className="bg-blackRich-light rounded-xl p-8 shadow-lg border border-white/5">
            <h3 className="text-2xl font-serif font-bold mb-6">Solicite uma proposta</h3>

            {showSuccess ? (
              <div className="bg-teal/10 border border-teal/20 rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">🎉</div>
                <h4 className="text-xl font-serif font-bold mb-2 text-teal">Mensagem enviada!</h4>
                <p className="text-white/80">
                  Agradecemos seu contato! Em breve, nossa equipe entrará em contato para iniciarmos 
                  a transformação da sua loja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 mb-2">Nome completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 bg-blackRich border border-white/20 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none text-white"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 bg-blackRich border border-white/20 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none text-white"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white/70 mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-3 bg-blackRich border border-white/20 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none text-white"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="storeType" className="block text-white/70 mb-2">Tipo de loja</label>
                    <select
                      id="storeType"
                      name="storeType"
                      required
                      className="w-full p-3 bg-blackRich border border-white/20 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none text-white"
                      value={formData.storeType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Selecione o tipo</option>
                      <option value="moda">Moda</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="decoracao">Decoração</option>
                      <option value="alimentacao">Alimentação</option>
                      <option value="saude">Saúde & Beleza</option>
                      <option value="esportes">Esportes</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/70 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 bg-blackRich border border-white/20 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none text-white resize-none"
                    placeholder="Conte um pouco sobre sua loja e o que você está buscando..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className={cn(
                      "btn-primary w-full py-4 relative overflow-hidden",
                      isSubmitting ? "cursor-wait" : ""
                    )}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-blackRich" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Solicitar proposta personalizada"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <li className="flex items-start">
    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-blackRich flex items-center justify-center text-xl mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </li>
);

export default ContactSection;
