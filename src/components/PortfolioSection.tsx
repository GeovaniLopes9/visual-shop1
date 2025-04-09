import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  stats: {
    trafficIncrease: string;
    salesIncrease: string;
    roi: string;
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Expresso Doce",
    category: "Gastronomia",
    image: "/expresso-doce.jpg",
    description: "Transformação completa desta cafeteria e doceria, criando um ambiente acolhedor e instagramável que convida os clientes a prolongarem sua estadia e compartilharem suas experiências nas redes sociais.",
    stats: {
      trafficIncrease: "+55%",
      salesIncrease: "+48%",
      roi: "420%"
    }
  },
  {
    id: 2,
    title: "PiseBem",
    category: "Moda",
    image: "/pisebem.jpg",
    description: "Revitalização moderna e elegante desta loja de calçados, com foco em exposição inteligente dos produtos e áreas de experiência que permitem os clientes testarem os calçados em diferentes tipos de pisos.",
    stats: {
      trafficIncrease: "+62%",
      salesIncrease: "+45%",
      roi: "380%"
    }
  }
];

const categories = ["Todos", "Moda", "Gastronomia"];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="portfolio" className="section-padding bg-blackRich-light">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="text-gradient-gold">Portfólio</span>
        </h2>
        <p className="text-lg text-white/80 text-center max-w-3xl mx-auto mb-12">
          Explore nossa coleção de projetos transformadores. Passe o mouse sobre cada projeto para ver detalhes 
          e clique para expandir o case completo.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                selectedCategory === category
                  ? "bg-gold text-blackRich"
                  : "bg-blackRich-lighter text-white/70 hover:text-white hover:bg-blackRich-light"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "group overflow-hidden rounded-xl bg-blackRich transition-all duration-500",
                "hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]",
                expandedProject === project.id ? "col-span-1 md:col-span-2 lg:col-span-3" : ""
              )}
            >
              <div 
                className={cn(
                  "cursor-pointer",
                  expandedProject === project.id ? "flex flex-col lg:flex-row" : ""
                )}
                onClick={() => handleProjectClick(project.id)}
              >
                <div 
                  className={cn(
                    "relative overflow-hidden",
                    expandedProject === project.id ? "lg:w-1/2" : "h-64"
                  )}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-700",
                      "group-hover:scale-105",
                      expandedProject === project.id ? "" : "group-hover:rotate-[1deg]"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blackRich to-transparent opacity-60"></div>
                </div>

                <div 
                  className={cn(
                    "p-6",
                    expandedProject === project.id ? "lg:w-1/2" : ""
                  )}
                >
                  <h3 className="text-xl lg:text-2xl font-serif font-bold mb-2">{project.title}</h3>
                  <span className="inline-block text-sm text-teal bg-teal/10 px-3 py-1 rounded-full mb-4">
                    {project.category}
                  </span>
                  <p className="text-white/80 mb-6">{project.description}</p>

                  {expandedProject === project.id && (
                    <>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-blackRich-lighter p-4 rounded-lg text-center">
                          <p className="text-sm text-white/60 mb-1">Tráfego</p>
                          <p className="text-2xl font-bold text-gradient-teal">{project.stats.trafficIncrease}</p>
                        </div>
                        <div className="bg-blackRich-lighter p-4 rounded-lg text-center">
                          <p className="text-sm text-white/60 mb-1">Vendas</p>
                          <p className="text-2xl font-bold text-gradient-gold">{project.stats.salesIncrease}</p>
                        </div>
                        <div className="bg-blackRich-lighter p-4 rounded-lg text-center">
                          <p className="text-sm text-white/60 mb-1">ROI</p>
                          <p className="text-2xl font-bold text-white">{project.stats.roi}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="text-gold hover:text-gold-light transition-colors">
                          Ver estudo completo →
                        </button>
                        <button className="text-white/60 hover:text-white transition-colors text-sm">
                          Fechar detalhes
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Ver todos os projetos</button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
