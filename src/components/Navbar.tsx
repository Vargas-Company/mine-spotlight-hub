import { Link } from 'react-router-dom';
import { Mountain, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt' as const, label: 'Português' },
    { code: 'en' as const, label: 'English' },
    { code: 'es' as const, label: 'Español' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Mountain className="h-7 w-7 text-accent transition-transform group-hover:scale-110" />
            <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
              MineralVault
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/listings" className="text-foreground hover:text-accent transition-colors">
              {t('nav.listings')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-accent/10' : ''}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
