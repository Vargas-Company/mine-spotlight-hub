import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DepositCard from '@/components/DepositCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { deposits } from '@/data/deposits';

const Listings = () => {
  const { t } = useLanguage();

  const allDeposits = deposits;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              {t('listings.title')}
            </h1>
            <div className="h-1 w-32 bg-gradient-hero rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDeposits.map((deposit) => (
              <DepositCard key={deposit.id} {...deposit} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
