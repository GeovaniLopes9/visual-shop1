import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blackRich pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#hero" className="inline-block mb-4">
              <h1 className="text-2xl font-serif font-bold">
                <span className="text-gradient-gold">Visual</span>
                <span className="text-white">Shop</span>
              </h1>
            </a>
            <p className="text-white/70 mb-4">
              Design que encanta e vende. Transformamos lojas em experiências memoráveis que aumentam o tráfego e convertem mais vendas.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.instagram.com/visualshop.go/" icon="instagram" />
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="linkedin" />
              <SocialLink href="#" icon="pinterest" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Design de Loja" />
              <FooterLink href="#" label="Projeto de Vitrines" />
              <FooterLink href="#" label="Visual Merchandising" />
              <FooterLink href="#" label="Iluminação" />
              <FooterLink href="#" label="Identidade Visual" />
              <FooterLink href="#" label="Design Digital" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="#portfolio" label="Portfólio" />
              <FooterLink href="#calculator" label="Calculadora de Impacto" />
              <FooterLink href="#process" label="Nosso Processo" />
              <FooterLink href="#contact" label="Contato" />
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="Sobre Nós" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <span className="mr-2 text-gold">📱</span>
                <span>(61) 9999-9999</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gold">✉️</span>
                <span>contato@visualshop.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gold">⏰</span>
                <span>Seg-Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Visual Shop. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <a 
      href={href} 
      className="text-white/70 hover:text-gold transition-colors duration-300"
    >
      {label}
    </a>
  </li>
);

interface SocialLinkProps {
  href: string;
  icon: string;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full flex items-center justify-center bg-blackRich-light hover:bg-gold transition-all duration-300 hover:text-blackRich text-white/70"
  >
    {icon === 'instagram' && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.77 3.082C10.235 2.694 13.765 2.694 17.23 3.082C19.31 3.315 20.884 4.848 21.131 6.936C21.514 10.391 21.514 13.609 21.131 17.064C20.884 19.152 19.31 20.685 17.23 20.918C13.765 21.306 10.235 21.306 6.77 20.918C4.69 20.685 3.116 19.152 2.869 17.064C2.486 13.609 2.486 10.391 2.869 6.936C3.116 4.848 4.69 3.315 6.77 3.082ZM17 6C16.4477 6 16 6.44772 16 7C16 7.55228 16.4477 8 17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" fill="currentColor"/>
      </svg>
    )}
    {icon === 'facebook' && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 9.10337V12.1034H7.5V15.1034H9.5V22.1034H13.5V15.1034H15.84L16.5 12.1034H13.5V9.57337C13.5 9.12954 13.6317 8.70447 13.8661 8.3737C14.1005 8.04294 14.4328 7.82683 14.81 7.76337C15.12 7.71337 15.88 7.76337 16.5 7.96337V5.22337C15.93 5.08337 15.15 4.96337 14.5 4.96337C13.15 4.96337 12.33 5.30337 11.64 5.86337C10.67 6.63337 10.09 7.72337 10.05 8.86337C10.03 9.04337 10 9.02337 10 9.20337C10 9.32337 10 8.62337 10 9.10337H9.5Z" fill="currentColor"/>
      </svg>
    )}
    {icon === 'linkedin' && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8.5H9V18.5H5V8.5ZM7 6.5C5.9 6.5 5 5.6 5 4.5C5 3.4 5.9 2.5 7 2.5C8.1 2.5 9 3.4 9 4.5C9 5.6 8.1 6.5 7 6.5ZM13 18.5H17V13C17 11.9 17.9 11 19 11C20.1 11 21 11.9 21 13V18.5H19H21V13C21 10.8 19.2 9 17 9C15.7 9 14.6 9.7 14 10.7V8.5H10V18.5H13Z" fill="currentColor"/>
      </svg>
    )}
    {icon === 'pinterest' && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM13.42 15.5C12.508 15.469 12.122 15.094 11.411 14.732C11.076 16.375 10.696 17.957 9.442 18.957C9.007 16.691 9.837 15.023 10.183 13.231C9.594 12.095 10.281 9.722 11.654 10.226C13.317 10.837 10.417 14.52 12.44 14.92C14.543 15.339 15.338 10.729 14.044 9.396C12.142 7.44 8.546 9.568 9.088 12.389C9.217 13.063 9.931 13.274 9.399 14.217C8.007 13.936 7.566 12.82 7.604 11.388C7.666 9.118 9.619 7.531 11.598 7.316C14.092 7.043 16.412 8.193 16.731 10.537C17.094 13.202 15.659 16.073 13.42 15.5Z" fill="currentColor"/>
      </svg>
    )}
  </a>
);

export default Footer;
