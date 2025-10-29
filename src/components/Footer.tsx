import { Mountain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-accent" />
            <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
              MineralVault
            </span>
          </div>
          
          <p className="text-muted-foreground text-center">
            © {currentYear} MineralVault. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
