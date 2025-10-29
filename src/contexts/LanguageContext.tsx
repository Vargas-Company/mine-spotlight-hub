import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.listings': 'Jazidas',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'hero.title': 'Oportunidades Premium em Jazidas Minerais',
    'hero.subtitle': 'Conectamos investidores e empresas às melhores reservas minerais do Brasil',
    'hero.cta': 'Explorar Jazidas',
    'hero.search': 'Buscar por mineral, localização...',
    'listings.title': 'Jazidas Disponíveis',
    'listings.featured': 'Em Destaque',
    'listings.viewAll': 'Ver Todos',
    'listings.viewDetails': 'Ver Detalhes',
    'listings.location': 'Localização',
    'listings.area': 'Área',
    'listings.mineral': 'Mineral',
    'listings.reserves': 'Reservas Estimadas',
    'contact.title': 'Manifeste Seu Interesse',
    'contact.subtitle': 'Preencha o formulário e entraremos em contato',
    'contact.name': 'Nome Completo',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.company': 'Empresa',
    'contact.message': 'Mensagem',
    'contact.submit': 'Enviar Mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    'nav.home': 'Home',
    'nav.listings': 'Deposits',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Premium Mineral Deposit Opportunities',
    'hero.subtitle': 'Connecting investors and companies to Brazil\'s finest mineral reserves',
    'hero.cta': 'Explore Deposits',
    'hero.search': 'Search by mineral, location...',
    'listings.title': 'Available Deposits',
    'listings.featured': 'Featured',
    'listings.viewAll': 'View All',
    'listings.viewDetails': 'View Details',
    'listings.location': 'Location',
    'listings.area': 'Area',
    'listings.mineral': 'Mineral',
    'listings.reserves': 'Estimated Reserves',
    'contact.title': 'Express Your Interest',
    'contact.subtitle': 'Fill out the form and we\'ll get in touch',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.listings': 'Yacimientos',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',
    'hero.title': 'Oportunidades Premium en Yacimientos Minerales',
    'hero.subtitle': 'Conectamos inversores y empresas con las mejores reservas minerales de Brasil',
    'hero.cta': 'Explorar Yacimientos',
    'hero.search': 'Buscar por mineral, ubicación...',
    'listings.title': 'Yacimientos Disponibles',
    'listings.featured': 'Destacados',
    'listings.viewAll': 'Ver Todos',
    'listings.viewDetails': 'Ver Detalles',
    'listings.location': 'Ubicación',
    'listings.area': 'Área',
    'listings.mineral': 'Mineral',
    'listings.reserves': 'Reservas Estimadas',
    'contact.title': 'Exprese Su Interés',
    'contact.subtitle': 'Complete el formulario y nos pondremos en contacto',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Teléfono',
    'contact.company': 'Empresa',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado con éxito!',
    'footer.rights': 'Todos los derechos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
