import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Segurança e Confiança',
      description: 'Todas as jazidas são verificadas por especialistas geólogos certificados.',
    },
    {
      icon: TrendingUp,
      title: 'Investimento Premium',
      description: 'Acesso exclusivo às melhores oportunidades do mercado mineral brasileiro.',
    },
    {
      icon: Users,
      title: 'Consultoria Especializada',
      description: 'Nossa equipe oferece suporte completo durante todo o processo.',
    },
    {
      icon: Award,
      title: 'Excelência Comprovada',
      description: 'Anos de experiência conectando investidores a jazidas de alto valor.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Sobre a MineralVault
              </h1>
              <div className="h-1 w-32 bg-gradient-hero rounded-full mx-auto mb-8" />
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos a principal plataforma de conexão entre proprietários de jazidas minerais 
                e investidores sérios no mercado brasileiro. Nossa missão é facilitar transações 
                transparentes e seguras no setor de mineração.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-hero">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="shadow-card border-border/50 bg-gradient-card">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Nossa História
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fundada por profissionais com décadas de experiência no setor de mineração, 
                    a MineralVault nasceu da necessidade de modernizar e tornar mais eficiente 
                    o mercado de compra e venda de jazidas minerais no Brasil.
                  </p>
                  <p>
                    Utilizamos tecnologia de ponta e expertise geológica para oferecer uma 
                    plataforma que garante transparência, segurança e agilidade em todas as 
                    transações. Cada jazida listada passa por rigorosa análise técnica antes 
                    de ser disponibilizada para nossos clientes.
                  </p>
                  <p>
                    Hoje, somos referência no setor, conectando investidores nacionais e 
                    internacionais às melhores oportunidades em jazidas de ouro, ferro, 
                    cobre e outros minerais estratégicos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
