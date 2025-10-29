import depositGold from '@/assets/deposit-gold.jpg';
import depositIron from '@/assets/deposit-iron.jpg';
import depositCopper from '@/assets/deposit-copper.jpg';

export interface Deposit {
  id: string;
  name: string;
  location: string;
  area: string;
  mineral: string;
  reserves: string;
  image: string;
  featured?: boolean;
  description: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  specifications: {
    grade: string;
    depth: string;
    extraction: string;
    accessibility: string;
  };
  geology: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  infrastructure: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  documentation: string[];
  gallery: string[];
}

export const deposits: Deposit[] = [
  {
    id: '1',
    name: 'Serra Dourada',
    location: 'Minas Gerais, Brasil',
    area: '2.500 hectares',
    mineral: 'Ouro',
    reserves: '12.5 milhões de onças',
    image: depositGold,
    featured: true,
    description: {
      pt: 'A Serra Dourada é uma das jazidas de ouro mais promissoras do Brasil, localizada em uma região de fácil acesso com infraestrutura consolidada. O depósito apresenta teores elevados e geologia favorável para extração a céu aberto.',
      en: 'Serra Dourada is one of Brazil\'s most promising gold deposits, located in an easily accessible region with established infrastructure. The deposit shows high grades and favorable geology for open-pit mining.',
      es: 'Serra Dourada es uno de los yacimientos de oro más prometedores de Brasil, ubicado en una región de fácil acceso con infraestructura establecida. El depósito presenta altas leyes y geología favorable para minería a cielo abierto.',
      zh: '塞拉杜拉达是巴西最有前景的金矿床之一，位于交通便利且基础设施完善的地区。该矿床品位高，地质条件有利于露天开采。',
    },
    specifications: {
      grade: '3.2 g/t Au',
      depth: '250 metros',
      extraction: 'Céu aberto / Underground',
      accessibility: 'Rodovia pavimentada a 15km',
    },
    geology: {
      pt: 'Depósito de ouro orogênico hospedado em sequência de rochas metamórficas do greenstone belt. Mineralização controlada por zonas de cisalhamento com alteração hidrotermal intensa.',
      en: 'Orogenic gold deposit hosted in metamorphic rock sequence of greenstone belt. Mineralization controlled by shear zones with intense hydrothermal alteration.',
      es: 'Depósito de oro orogénico alojado en secuencia de rocas metamórficas del cinturón de rocas verdes. Mineralización controlada por zonas de cizallamiento con intensa alteración hidrotermal.',
      zh: '造山型金矿床，赋存于绿岩带变质岩序列中。矿化受剪切带控制，具有强烈的热液蚀变。',
    },
    infrastructure: {
      pt: 'Energia elétrica disponível, estradas de acesso, proximidade a centros urbanos e mão de obra qualificada na região.',
      en: 'Electric power available, access roads, proximity to urban centers and qualified workforce in the region.',
      es: 'Energía eléctrica disponible, carreteras de acceso, proximidad a centros urbanos y mano de obra calificada en la región.',
      zh: '电力供应充足，道路通达，靠近城市中心，该地区拥有专业劳动力。',
    },
    documentation: ['Relatório Geológico', 'Análise de Viabilidade', 'Licenças Ambientais', 'Levantamento Topográfico'],
    gallery: [depositGold, depositIron, depositCopper],
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
    description: {
      pt: 'O Vale Vermelho representa uma oportunidade excepcional no setor de minério de ferro. Com reservas massivas de alta qualidade e localização estratégica próxima a portos de exportação.',
      en: 'Vale Vermelho represents an exceptional opportunity in the iron ore sector. With massive high-quality reserves and strategic location near export ports.',
      es: 'Vale Vermelho representa una oportunidad excepcional en el sector del mineral de hierro. Con reservas masivas de alta calidad y ubicación estratégica cerca de puertos de exportación.',
      zh: '红谷代表铁矿石行业的绝佳机会。拥有大规模的高质量储量，且位置优越，靠近出口港口。',
    },
    specifications: {
      grade: '65% Fe',
      depth: '180 metros',
      extraction: 'Céu aberto',
      accessibility: 'Ferrovia a 8km',
    },
    geology: {
      pt: 'Formação ferrífera bandada (BIF) do tipo Algoma. Minério de hematita compacta com baixos teores de impurezas, ideal para siderurgia.',
      en: 'Algoma-type Banded Iron Formation (BIF). Compact hematite ore with low impurity levels, ideal for steelmaking.',
      es: 'Formación de hierro bandeado (BIF) tipo Algoma. Mineral de hematita compacta con bajos niveles de impurezas, ideal para siderurgia.',
      zh: '阿尔戈马型条带状铁建造（BIF）。致密赤铁矿，杂质含量低，非常适合炼钢。',
    },
    infrastructure: {
      pt: 'Acesso ferroviário próximo, porto de exportação a 120km, subestação elétrica de alta tensão na região.',
      en: 'Nearby rail access, export port 120km away, high-voltage electrical substation in the region.',
      es: 'Acceso ferroviario cercano, puerto de exportación a 120 km, subestación eléctrica de alta tensión en la región.',
      zh: '附近有铁路通道，距离出口港口120公里，该地区设有高压变电站。',
    },
    documentation: ['Estudo de Impacto Ambiental', 'Plano de Lavra', 'Certificação de Qualidade', 'Mapa Geológico'],
    gallery: [depositIron, depositGold, depositCopper],
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
    description: {
      pt: 'A Montanha Azul é uma jazida de cobre de classe mundial, com mineralização sulfetada de alta qualidade e potencial para subprodutos de ouro e prata.',
      en: 'Montanha Azul is a world-class copper deposit with high-quality sulfide mineralization and potential for gold and silver by-products.',
      es: 'Montanha Azul es un yacimiento de cobre de clase mundial con mineralización sulfurada de alta calidad y potencial para subproductos de oro y plata.',
      zh: '蓝山是世界级铜矿床，具有高品质的硫化物矿化，并有金银副产品的潜力。',
    },
    specifications: {
      grade: '1.8% Cu, 0.5 g/t Au',
      depth: '350 metros',
      extraction: 'Underground',
      accessibility: 'Rodovia federal a 25km',
    },
    geology: {
      pt: 'Depósito do tipo pórfiro cuprífero com mineralização de calcopirita e bornita. Zona de alteração potássica bem desenvolvida.',
      en: 'Porphyry copper-type deposit with chalcopyrite and bornite mineralization. Well-developed potassic alteration zone.',
      es: 'Depósito tipo pórfido de cobre con mineralización de calcopirita y bornita. Zona de alteración potásica bien desarrollada.',
      zh: '斑岩型铜矿床，含黄铜矿和斑铜矿矿化。钾质蚀变带发育良好。',
    },
    infrastructure: {
      pt: 'Região com tradição em mineração, disponibilidade de água, energia de hidrelétrica próxima.',
      en: 'Region with mining tradition, water availability, nearby hydroelectric power.',
      es: 'Región con tradición minera, disponibilidad de agua, energía hidroeléctrica cercana.',
      zh: '该地区具有采矿传统，水源充足，附近有水力发电站。',
    },
    documentation: ['Programa de Pesquisa Mineral', 'Análise Econômica', 'Relatório de Sustentabilidade', 'Cadastro Minerário'],
    gallery: [depositCopper, depositIron, depositGold],
  },
  {
    id: '4',
    name: 'Planalto Verde',
    location: 'Goiás, Brasil',
    area: '1.800 hectares',
    mineral: 'Níquel',
    reserves: '450 mil toneladas',
    image: depositGold,
    description: {
      pt: 'Jazida de níquel laterítico com teores competitivos e boa recuperação metalúrgica. Localização estratégica no centro do Brasil.',
      en: 'Lateritic nickel deposit with competitive grades and good metallurgical recovery. Strategic location in central Brazil.',
      es: 'Yacimiento de níquel laterítico con leyes competitivas y buena recuperación metalúrgica. Ubicación estratégica en el centro de Brasil.',
      zh: '红土型镍矿床，品位具有竞争力，冶金回收率高。位于巴西中部的战略位置。',
    },
    specifications: {
      grade: '1.5% Ni',
      depth: '80 metros',
      extraction: 'Céu aberto',
      accessibility: 'Rodovia estadual a 10km',
    },
    geology: {
      pt: 'Perfil laterítico típico desenvolvido sobre rochas ultramáficas. Horizonte saprolitico enriquecido em níquel.',
      en: 'Typical lateritic profile developed on ultramafic rocks. Saprolite horizon enriched in nickel.',
      es: 'Perfil laterítico típico desarrollado sobre rocas ultramáficas. Horizonte saprolítico enriquecido en níquel.',
      zh: '典型的红土剖面，发育于超镁铁质岩石之上。富含镍的腐岩层。',
    },
    infrastructure: {
      pt: 'Proximidade a rodovias principais, disponibilidade de mão de obra, clima favorável ao ano todo.',
      en: 'Proximity to main highways, workforce availability, favorable climate year-round.',
      es: 'Proximidad a carreteras principales, disponibilidad de mano de obra, clima favorable todo el año.',
      zh: '靠近主要公路，劳动力充足，全年气候适宜。',
    },
    documentation: ['Relatório NI 43-101', 'Estudo Metalúrgico', 'Licença de Pesquisa', 'Dados de Sondagem'],
    gallery: [depositGold, depositCopper, depositIron],
  },
  {
    id: '5',
    name: 'Cachoeira Prata',
    location: 'Mato Grosso, Brasil',
    area: '2.200 hectares',
    mineral: 'Prata',
    reserves: '8.2 milhões de onças',
    image: depositIron,
    description: {
      pt: 'Depósito polimetálico com prata como metal principal e valores significativos de chumbo e zinco como subprodutos.',
      en: 'Polymetallic deposit with silver as main metal and significant lead and zinc by-product values.',
      es: 'Depósito polimetálico con plata como metal principal y valores significativos de plomo y zinc como subproductos.',
      zh: '多金属矿床，以银为主要金属，铅和锌副产品价值显著。',
    },
    specifications: {
      grade: '180 g/t Ag, 2% Pb, 3% Zn',
      depth: '200 metros',
      extraction: 'Underground',
      accessibility: 'Aeroporto regional a 35km',
    },
    geology: {
      pt: 'Veios epitermais de baixa sulfetação com mineralização de argentita, galena e esfalerita.',
      en: 'Low-sulfidation epithermal veins with argentite, galena and sphalerite mineralization.',
      es: 'Vetas epitermales de baja sulfuración con mineralización de argentita, galena y esfalerita.',
      zh: '低硫型浅成热液脉，含辉银矿、方铅矿和闪锌矿矿化。',
    },
    infrastructure: {
      pt: 'Região em desenvolvimento, incentivos fiscais estaduais, proximidade a centros de processamento.',
      en: 'Developing region, state tax incentives, proximity to processing centers.',
      es: 'Región en desarrollo, incentivos fiscales estatales, proximidad a centros de procesamiento.',
      zh: '发展中地区，享有州税收优惠，靠近加工中心。',
    },
    documentation: ['Modelo Geológico 3D', 'Viabilidade Econômica', 'Certificação Ambiental', 'Plano de Fechamento'],
    gallery: [depositIron, depositGold, depositCopper],
  },
  {
    id: '6',
    name: 'Rio Cristal',
    location: 'Amazonas, Brasil',
    area: '4.500 hectares',
    mineral: 'Bauxita',
    reserves: '320 milhões de toneladas',
    image: depositCopper,
    description: {
      pt: 'Grande depósito de bauxita de alta qualidade, adequado para produção de alumínio metalúrgico. Reservas para décadas de operação.',
      en: 'Large high-quality bauxite deposit suitable for metallurgical aluminum production. Reserves for decades of operation.',
      es: 'Gran depósito de bauxita de alta calidad, adecuado para la producción de aluminio metalúrgico. Reservas para décadas de operación.',
      zh: '大型高品质铝土矿床，适合生产冶金级铝。储量可供数十年开采。',
    },
    specifications: {
      grade: '50% Al2O3',
      depth: '15 metros',
      extraction: 'Céu aberto',
      accessibility: 'Rio navegável adjacente',
    },
    geology: {
      pt: 'Bauxita laterítica desenvolvida sobre granitos e gnaisses em clima tropical. Alto teor de alumina disponível.',
      en: 'Lateritic bauxite developed on granites and gneisses in tropical climate. High available alumina content.',
      es: 'Bauxita laterítica desarrollada sobre granitos y gneises en clima tropical. Alto contenido de alúmina disponible.',
      zh: '热带气候条件下发育于花岗岩和片麻岩之上的红土型铝土矿。有效氧化铝含量高。',
    },
    infrastructure: {
      pt: 'Transporte fluvial disponível, energia hidrelétrica regional, área de preservação ambiental regulamentada.',
      en: 'River transport available, regional hydroelectric power, regulated environmental preservation area.',
      es: 'Transporte fluvial disponible, energía hidroeléctrica regional, área de preservación ambiental regulada.',
      zh: '河运可用，区域水力发电，环保区域受到监管。',
    },
    documentation: ['Inventário de Recursos', 'Plano Ambiental', 'Estudo Hidrológico', 'Acordo com Comunidades'],
    gallery: [depositCopper, depositGold, depositIron],
  },
];
