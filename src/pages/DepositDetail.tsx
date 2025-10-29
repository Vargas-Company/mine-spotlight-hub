import { useParams, Link } from 'react-router-dom';
import { MapPin, Maximize2, Gem, ArrowLeft, FileText, Mountain, Factory } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { deposits } from '@/data/deposits';
import mineralGoldClose from '@/assets/mineral-gold-close.jpg';
import mineralCopperClose from '@/assets/mineral-copper-close.jpg';
import mineralIronClose from '@/assets/mineral-iron-close.jpg';
import infrastructure from '@/assets/infrastructure.jpg';

const DepositDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  
  const deposit = deposits.find(d => d.id === id);

  if (!deposit) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Jazida não encontrada</h1>
            <Link to="/listings">
              <Button variant="outline">Voltar para listagem</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const allImages = [
    deposit.image,
    mineralGoldClose,
    mineralCopperClose,
    mineralIronClose,
    infrastructure,
    ...deposit.gallery,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/listings" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            {t('listings.viewAll')}
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-card">
              <img 
                src={deposit.image} 
                alt={deposit.name}
                className="w-full h-full object-cover"
              />
              {deposit.featured && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-lg">
                  {t('listings.featured')}
                </Badge>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold text-foreground mb-4">{deposit.name}</h1>
                <div className="h-1 w-32 bg-gradient-hero rounded-full mb-6" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t('listings.location')}</p>
                    <p className="font-semibold text-foreground">{deposit.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Maximize2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t('listings.area')}</p>
                    <p className="font-semibold text-foreground">{deposit.area}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Gem className="h-5 w-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t('listings.mineral')}</p>
                    <p className="font-semibold text-foreground">{deposit.mineral}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Mountain className="h-5 w-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t('listings.reserves')}</p>
                    <p className="font-semibold text-foreground">{deposit.reserves}</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="block">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t('details.interested')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8 shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="h-6 w-6 text-accent" />
                {t('details.overview')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {deposit.description[language as keyof typeof deposit.description]}
              </p>
            </CardContent>
          </Card>

          {/* Technical Specifications */}
          <Card className="mb-8 shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">{t('details.specifications')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Teor Médio / Grade</p>
                  <p className="text-lg font-semibold text-foreground">{deposit.specifications.grade}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Profundidade / Depth</p>
                  <p className="text-lg font-semibold text-foreground">{deposit.specifications.depth}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Método de Extração / Extraction</p>
                  <p className="text-lg font-semibold text-foreground">{deposit.specifications.extraction}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Acessibilidade / Accessibility</p>
                  <p className="text-lg font-semibold text-foreground">{deposit.specifications.accessibility}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Geology */}
          <Card className="mb-8 shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Mountain className="h-6 w-6 text-accent" />
                {t('details.geology')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {deposit.geology[language as keyof typeof deposit.geology]}
              </p>
            </CardContent>
          </Card>

          {/* Infrastructure */}
          <Card className="mb-8 shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Factory className="h-6 w-6 text-accent" />
                {t('details.infrastructure')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {deposit.infrastructure[language as keyof typeof deposit.infrastructure]}
              </p>
            </CardContent>
          </Card>

          {/* Documentation */}
          <Card className="mb-8 shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="h-6 w-6 text-accent" />
                {t('details.documentation')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deposit.documentation.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg border border-border">
                    <FileText className="h-5 w-5 text-accent" />
                    <span className="text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gallery */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">{t('details.gallery')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allImages.slice(0, 6).map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                    <img 
                      src={image} 
                      alt={`${deposit.name} - ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-card shadow-glow border-border/50 p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('details.interested')}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Entre em contato conosco para mais informações sobre esta oportunidade
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  {t('nav.contact')}
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DepositDetail;
