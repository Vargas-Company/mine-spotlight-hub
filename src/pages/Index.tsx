import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DepositCard from '@/components/DepositCard';
import heroImage from '@/assets/hero-mining.jpg';
import { deposits } from '@/data/deposits';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredDeposits = deposits.filter(d => d.featured);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/listings?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
              <Input 
                placeholder={t('hero.search')}
                className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <Link to="/listings">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-glow">
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Jazidas */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              {t('listings.featured')}
            </h2>
            <div className="h-1 w-24 bg-gradient-hero rounded-full" />
          </div>
          <Link to="/listings">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              {t('listings.viewAll')}
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDeposits.map((deposit) => (
            <DepositCard key={deposit.id} {...deposit} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
