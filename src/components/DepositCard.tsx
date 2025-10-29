import { MapPin, Maximize2, Gem } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface DepositCardProps {
  id: string;
  name: string;
  location: string;
  area: string;
  mineral: string;
  reserves: string;
  image: string;
  featured?: boolean;
}

const DepositCard = ({ 
  id, 
  name, 
  location, 
  area, 
  mineral, 
  reserves, 
  image, 
  featured 
}: DepositCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {featured && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-lg">
            {t('listings.featured')}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Maximize2 className="h-4 w-4 text-accent" />
            <span>{area}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Gem className="h-4 w-4 text-accent" />
            <span>{mineral}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">{t('listings.reserves')}</p>
          <p className="text-lg font-semibold text-primary">{reserves}</p>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          {t('listings.viewDetails')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DepositCard;
