import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DepositCard from '@/components/DepositCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { deposits } from '@/data/deposits';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

const Listings = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const allDeposits = useMemo(() => {
    if (!searchQuery.trim()) return deposits;
    
    const query = searchQuery.toLowerCase();
    return deposits.filter(deposit => 
      deposit.name.toLowerCase().includes(query) ||
      deposit.location.toLowerCase().includes(query) ||
      deposit.mineral.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              {t('listings.title')}
            </h1>
            {searchQuery && (
              <p className="text-muted-foreground mb-4">
                {allDeposits.length} {allDeposits.length === 1 ? 'resultado' : 'resultados'} para "{searchQuery}"
              </p>
            )}
            <div className="h-1 w-32 bg-gradient-hero rounded-full" />
          </div>
          
          {allDeposits.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allDeposits.map((deposit) => (
                <DepositCard key={deposit.id} {...deposit} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">
                Nenhuma jazida encontrada para "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
