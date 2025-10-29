import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DepositCard from '@/components/DepositCard';
import { useLanguage } from '@/contexts/LanguageContext';
import depositGold from '@/assets/deposit-gold.jpg';
import depositIron from '@/assets/deposit-iron.jpg';
import depositCopper from '@/assets/deposit-copper.jpg';

const Listings = () => {
  const { t } = useLanguage();

  const allDeposits = [
    {
      id: '1',
      name: 'Serra Dourada',
      location: 'Minas Gerais, Brasil',
      area: '2.500 hectares',
      mineral: 'Ouro',
      reserves: '12.5 milhões de onças',
      image: depositGold,
      featured: true,
    },
    {
      id: '2',
      name: 'Vale Vermelho',
      location: 'Pará, Brasil',
      area: '5.200 hectares',
      mineral: 'Minério de Ferro',
      reserves: '850 milhões de toneladas',
      image: depositIron,
      featured: true,
    },
    {
      id: '3',
      name: 'Montanha Azul',
      location: 'Bahia, Brasil',
      area: '3.100 hectares',
      mineral: 'Cobre',
      reserves: '2.3 milhões de toneladas',
      image: depositCopper,
      featured: true,
    },
    {
      id: '4',
      name: 'Planalto Verde',
      location: 'Goiás, Brasil',
      area: '1.800 hectares',
      mineral: 'Níquel',
      reserves: '450 mil toneladas',
      image: depositGold,
    },
    {
      id: '5',
      name: 'Cachoeira Prata',
      location: 'Mato Grosso, Brasil',
      area: '2.200 hectares',
      mineral: 'Prata',
      reserves: '8.2 milhões de onças',
      image: depositIron,
    },
    {
      id: '6',
      name: 'Rio Cristal',
      location: 'Amazonas, Brasil',
      area: '4.500 hectares',
      mineral: 'Bauxita',
      reserves: '320 milhões de toneladas',
      image: depositCopper,
    },
  ];

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
