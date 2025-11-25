import depositGold from '@/assets/deposit-gold.jpg';
import depositIron from '@/assets/deposit-iron.jpg';
import infrastructure from '@/assets/infrastructure.jpg';
import jazidaSF1 from '@/assets/JazidaSF1.jpg';
import quebrahonda from '@/assets/quebrahonda.jpeg';

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
    name: 'Mineradora de Ferro',
    location: 'Minas Gerais, Brasil, quadrilatero ferrífero',
    area: '231 hectares',
    mineral: 'Cobre',
    reserves: '2.5 milhões de toneladas',
    image: infrastructure,
    featured: true,
    description: {
      pt: 'Área com 231 hectares já está  com requerimento de Lavra',
      en: 'An area of 231 hectares already has a mining lease application in progress.',
      es: 'Un área de 231 hectáreas ya cuenta con solicitud de requerimiento de lavra en curso.',
      zh: '231公顷的区域已提交采矿权（采矿申请）申请。',
    },
    specifications: {
      grade: 'Granulado de 6,5 a 26 mm',
      depth: 'xxx metros',
      extraction: 'Underground',
      accessibility: 'Estoque de 2500.000 toneladas de finos de minério incluso',
    },
    geology: {
      pt: 'x.',
      en: 'x.',
      es: 'x.',
      zh: 'x.',
    },
    infrastructure: {
      pt: 'Balança rodoviária com capacidade de 100 toneladas com escritório de 60 m², Galpão 01  1800 m² para estocagem de matéria-prima, Galpão 02  1200 m² para estocagem de matéria-prima, Galpão 03  1700 m² para produção, Galpão 04  1200 m² para oficina industrial, mecânica, depósito de pneus, óleos, lavador, sanitários, vestiário, refeitório, almoxarifado e tanque de combustível, Galpão 05  1000 m² para almoxarifado geral,Escritório da área de produção com 40 m², Sítio residência e lazer com 5000 m², Parque industrial com 55000 m², Direito minerário com 231,74 ha, número XXXX/XXXX, em fase de requerimento de lavra, Duas centrais de britagem de minério de ferro com capacidade total de até 40000 toneladas/mês, Central de britagem para produção de finos com capacidade de até 10000 toneladas/mês, Tromel de 12m x 1,8m com capacidade de 40000 toneladas/mês, Direito minerário com 18,04 ha, número XXXX/XXX, em fase de licenciamento para guia de utilização de 300.000 toneladas/ano, 02 máquinas carregadeiras XCMG LW500 ano 2021, Porteira fechada, Estoque de 2.500.000 toneladas de finos de minério incluso, Granulado de 6,5 a 26 mm,Área com 231 hectares já com requerimento de lavra, Estamos direto com mandatário',
      en: 'Road weighbridge with 100-ton capacity and a 60 m² office; Warehouse 01 (1,800 m²) for raw material storage; Warehouse 02 (1,200 m²) for raw material storage; Warehouse 03 (1,700 m²) for production; Warehouse 04 (1,200 m²) for industrial workshop, mechanical works, tire depot, oil storage, washer, sanitary facilities, locker rooms, canteen, storeroom and fuel tank; Warehouse 05 (1,000 m²) for general storeroom; Production area office (40 m²); Residential and leisure site (5,000 m²); Industrial park (55,000 m²); Mining right for 231.74 ha (number XXXX/XXXX) currently in mining lease application phase; Two iron ore crushing plants with combined capacity up to 40,000 tonnes/month; Crushing plant for fines production with capacity up to 10,000 tonnes/month; Trommel 12 m x 1.8 m with capacity 40,000 tonnes/month; Mining right of 18.04 ha (number XXXX/XXX) in licensing phase for a utilization guideline of 300,000 tonnes/year; Two XCMG LW500 wheel loaders (2021); Closed gate operation; Stock of 2,500,000 tonnes of fines included; Granulometry 6.5–26 mm; Area of 231 hectares already under a mining lease application; We operate directly with the principal/mandatary.',
      es: 'Báscula vial con capacidad de 100 toneladas y oficina de 60 m²; Galpón 01 (1.800 m²) para almacenamiento de materia prima; Galpón 02 (1.200 m²) para almacenamiento de materia prima; Galpón 03 (1.700 m²) para producción; Galpón 04 (1.200 m²) para taller industrial, mecánica, depósito de neumáticos, almacenaje de aceites, lavadero, sanitarios, vestuarios, comedor, almacén y tanque de combustible; Galpón 05 (1.000 m²) para almacén general; Oficina del área de producción (40 m²); Sitio residencial y recreativo (5.000 m²); Parque industrial (55.000 m²); Derecho minero de 231,74 ha (número XXXX/XXXX) en fase de solicitud de requerimiento de lavra; Dos plantas de trituración de mineral de hierro con capacidad total de hasta 40.000 toneladas/mes; Planta de trituración para producción de finos con capacidad de hasta 10.000 toneladas/mes; Tromel de 12 m x 1,8 m con capacidad de 40.000 toneladas/mes; Derecho minero de 18,04 ha (número XXXX/XXX) en fase de licencia para guía de utilización de 300.000 toneladas/año; 02 cargadoras XCMG LW500 año 2021; Operación con portería cerrada; Stock de 2.500.000 toneladas de finos incluido; Granulometría 6,5–26 mm; Área de 231 hectáreas ya con solicitud de requerimiento de lavra; Operamos directamente con el mandatario/proponente.',
      zh: '路桥衡器（100 吨量程）及 60 平方米办公室；仓库 01（1,800 平方米）用于原料堆放；仓库 02（1,200 平方米）用于原料堆放；仓库 03（1,700 平方米）用于生产；仓库 04（1,200 平方米）作为工业车间、机械维修、轮胎库、油品库、清洗设施、卫生间、更衣室、食堂、物资库及燃料罐；仓库 05（1,000 平方米）作为综合物资仓库；生产区办公室（40 平方米）；居住及休闲用地（5,000 平方米）；工业园区（55,000 平方米）；采矿权 231.74 公顷（编号 XXXX/XXXX），处于采矿申请阶段；两座铁矿破碎中心，总处理能力可达 40,000 吨/月；用于细粉生产的破碎中心，产能可达 10,000 吨/月；12 m x 1.8 m 滚筒筛，产能 40,000 吨/月；采矿权 18.04 公顷（编号 XXXX/XXX），处于核准以实现 300,000 吨/年利用指南的许可阶段；两台 XCMG LW500 装载机（2021 年）；封闭闸门运营；包含 2,500,000 吨细粉库存；粒度 6.5–26 mm；231 公顷区域已提交采矿申请；我们直接与委托方/权利人合作。',
    },
    documentation: ['Alvará de Lavra: Concedido, garantindo operação plena de extração.','Licença Ambiental: Válida, atendendo a todos os requisitos legais e ambientais.','Licença de Operação: Concedida e válida.','Licença de Instalação: Concedida e válida.','Licença Prévia para Extração de Cobre: Concedida e válida.','Licença do Exército para Detonação: Concedida e válida.'],
    gallery: [infrastructure, depositIron, depositGold],
  },


  {
    id: '2',
    name: 'Mina Sao Francisco',
    location: 'Curaçá, Bahia',
    area: '996.46 hectares',
    mineral: 'Cobre, quartzo',
    reserves: '5 milhões de Toneladas',
    image: jazidaSF1,
    featured: true,
    description: {
      pt: 'A Mina de Sao Francisco é uma das jazidas de cobre mais promissoras do Brasil, localizada em uma região de fácil acesso com infraestrutura consolidada. O depósito apresenta teores elevados e geologia favorável para extração a céu aberto.',
      en: 'The São Francisco Mine is one of Brazil\'s most promising copper deposits, located in an easily accessible region with established infrastructure. The deposit exhibits high grades and favorable geology for open-pit mining.',
      es: 'La Mina São Francisco es una de las explotaciones de cobre más prometedoras de Brasil, ubicada en una región de fácil acceso con infraestructura consolidada. El depósito presenta leyes elevadas y geología favorable para la extracción a cielo abierto.',
      zh: '圣弗朗西斯科矿是巴西最有前景的铜矿床之一，位于交通便利、基础设施完善的地区。该矿床品位高，地质条件有利于露天开采。',
    },
    specifications: {
      grade: '0,7694% Cu',
      depth: 'ate 700 metros',
      extraction: 'Céu aberto / Underground',
      accessibility: 'Rodovia pavimentada a 15km',
    },
    geology: {
      pt: 'A minério da fazenda São Francisco será concentrado em usina através de processo convencional,constando das seguintes fases: britagem, peneiramento, estocagem/homogeneização, moagem, classificação, flotação, espessamento/filtragem e expedição.',
      en: 'The ore from the São Francisco property will be processed at a concentrator using a conventional flowsheet, consisting of the following stages: crushing, screening, stockpiling/homogenization, grinding, classification, flotation, thickening/filtration and dispatch.',
      es: 'El mineral de la fazenda São Francisco se concentrará en una planta mediante un flujo de proceso convencional, que consta de las siguientes etapas: trituración, cribado, apilamiento/homogeneización, molienda, clasificación, flotación, espesamiento/filtrado y expedición.',
      zh: '圣弗朗西斯科矿场的矿石将通过常规工艺在选厂进行处理，工艺包括：破碎、筛分、堆存/均化、研磨、分级、浮选、浓缩/过滤和发运。',
    },
    infrastructure: {
      pt: 'Energia elétrica disponível, estradas de acesso, proximidade a centros urbanos e mão de obra qualificada na região.',
      en: 'Electric power is available, with access roads, proximity to urban centers, and a qualified workforce in the region.',
      es: 'Energía eléctrica disponible, carreteras de acceso, proximidad a centros urbanos y mano de obra calificada en la región.',
      zh: '电力可用，道路畅通，靠近城市中心，且该地区具有合格的劳动力。',
    },
    documentation: ['Levantamento Bibliográfico','Reconhecimento Preliminar','Levantamento Topográfico','Escavações','Mapeamento Geológico','Sondagens','Geofísica','Licença Ambiental','Amostragem e Análises Químicas','Avaliação de Reservas','Critérios para o bloqueio de reservas','Cálculo das Reservas' ],
    gallery: [depositGold, depositIron, infrastructure],

   
  },


  {
    id: '3',
    name: 'Quebrada Honda 1 e 2',
    location: ' Atacama. Província de Huasco, Chile',
    area: '200 hectares',
    mineral: 'cobre, cátodo de cobre, prata e ouro',
    reserves: '10 milhões de toneladas',
    image: quebrahonda,
    featured: true,
    description: {
      pt: 'A jazida chilena representa uma oportunidade excepcional em vários setores minerais. Com reservas massivas de alta qualidade e localização estratégica próxima a portos de exportação.',
      en: 'The Chilean deposit represents an exceptional opportunity across several mineral sectors, with massive, high-quality reserves and a strategic location close to export ports.',
      es: 'El yacimiento chileno representa una oportunidad excepcional en varios sectores minerales, con reservas masivas y de alta calidad y una ubicación estratégica cercana a puertos de exportación.',
      zh: '该智利矿床在多个矿产领域具有卓越的机会，拥有大规模高品质储量，并且地处靠近出口港口的战略位置。',
    },
    specifications: {
      grade: '6% Co',
      depth: '180 metros',
      extraction: 'Céu aberto',
      accessibility: 'Rodovia perto',
    },
    geology: {
      pt: 'deposição de vários minerais depende basicamente da temperatura de fusão e do peso específico, de modo que, no fundo do depósito, no caso dasminas Quebrada Honda, podemos encontrar uma quantidade maior de ouro em comparação com cobre',
      en: 'The deposition of various minerals essentially depends on melting temperature and specific gravity; therefore, at the base of the deposit—such as in the Quebrada Honda mines—it is possible to find a greater proportion of gold compared to copper.',
      es: 'La deposición de varios minerales depende principalmente de la temperatura de fusión y del peso específico; por lo tanto, en la base del depósito—como en las minas Quebrada Honda—es posible encontrar una mayor proporción de oro en comparación con el cobre.',
      zh: '多种矿物的沉积主要取决于熔点和比重；因此在矿床底部（例如Quebrada Honda矿床）金的比例可能高于铜。',
    },
    infrastructure: {
      pt: 'Nossos projetos futuros são focados na exploração e exportação de minerais, com concentração em minério de cobre, cátodo de cobre, prata e ouro. Para alcançar esse objetivo, precisamos construir nossa própria planta de mineração e concentração, além de uma planta para produção de cátodo de cobre e outros minerais.Nossa empresa de mineração é capaz de extrair todo o material e, com máquinas e recursos modernos, extrair os minerais mais importantes, que são cobre, ouro e prata, além de aproveitar outros minerais que possuem valor e importância comercial.',
      en: 'Our future projects are focused on exploration and export of minerals, concentrating on copper ore, copper cathode, silver and gold. To achieve this objective, we plan to build our own mining and concentration plant as well as a facility for copper cathode production and other minerals. Our mining company is equipped to extract the material and, with modern machinery and resources, recover the principal minerals—copper, gold and silver—while also valorizing other commercially significant minerals.',
      es: 'Nuestros proyectos futuros están enfocados en la exploración y exportación de minerales, centrados en mineral de cobre, cátodo de cobre, plata y oro. Para lograr este objetivo, planeamos construir nuestra propia planta de minería y concentración, además de una planta para la producción de cátodo de cobre y otros minerales. Nuestra empresa minera está capacitada para extraer el material y, con maquinaria y recursos modernos, recuperar los minerales principales—cobre, oro y plata—y aprovechar otros minerales de valor comercial.',
      zh: '我们的未来项目专注于矿产的勘探与出口，主要以铜矿、铜电解板、银和金为重点。为实现这一目标，我们计划建设自己的采矿和选矿厂，以及用于铜电解板和其他矿产生产的工厂。本公司具备现代化设备和资源，能够开采并回收主要矿物（铜、金、银），同时对其他具有商业价值的矿物进行增值利用。',
    },
    documentation: ['Estudo de Impacto Ambiental', 'Plano de Lavra', 'Certificação de Qualidade', 'Mapa Geológico'],
    gallery: [depositIron, depositGold, infrastructure],
    
  },

  // {
  //   id: '4',
  //   name: 'Planalto Verde',
  //   location: 'Goiás, Brasil',
  //   area: '1.800 hectares',
  //   mineral: 'Níquel',
  //   reserves: '450 mil toneladas',
  //   image: depositGold,
  //   description: {
  //     pt: 'Jazida de níquel laterítico com teores competitivos e boa recuperação metalúrgica. Localização estratégica no centro do Brasil.',
  //     en: 'Lateritic nickel deposit with competitive grades and good metallurgical recovery. Strategic location in central Brazil.',
  //     es: 'Yacimiento de níquel laterítico con leyes competitivas y buena recuperación metalúrgica. Ubicación estratégica en el centro de Brasil.',
  //     zh: '红土型镍矿床，品位具有竞争力，冶金回收率高。位于巴西中部的战略位置。',
  //   },
  //   specifications: {
  //     grade: '1.5% Ni',
  //     depth: '80 metros',
  //     extraction: 'Céu aberto',
  //     accessibility: 'Rodovia estadual a 10km',
  //   },
  //   geology: {
  //     pt: 'Perfil laterítico típico desenvolvido sobre rochas ultramáficas. Horizonte saprolitico enriquecido em níquel.',
  //     en: 'Typical lateritic profile developed on ultramafic rocks. Saprolite horizon enriched in nickel.',
  //     es: 'Perfil laterítico típico desarrollado sobre rocas ultramáficas. Horizonte saprolítico enriquecido en níquel.',
  //     zh: '典型的红土剖面，发育于超镁铁质岩石之上。富含镍的腐岩层。',
  //   },
  //   infrastructure: {
  //     pt: 'Proximidade a rodovias principais, disponibilidade de mão de obra, clima favorável ao ano todo.',
  //     en: 'Proximity to main highways, workforce availability, favorable climate year-round.',
  //     es: 'Proximidad a carreteras principales, disponibilidad de mano de obra, clima favorable todo el año.',
  //     zh: '靠近主要公路，劳动力充足，全年气候适宜。',
  //   },
  //   documentation: ['Relatório NI 43-101', 'Estudo Metalúrgico', 'Licença de Pesquisa', 'Dados de Sondagem'],
  //   gallery: [depositGold, depositCopper, depositIron],
  // },
  // {
  //   id: '5',
  //   name: 'Cachoeira Prata',
  //   location: 'Mato Grosso, Brasil',
  //   area: '2.200 hectares',
  //   mineral: 'Prata',
  //   reserves: '8.2 milhões de onças',
  //   image: depositIron,
  //   description: {
  //     pt: 'Depósito polimetálico com prata como metal principal e valores significativos de chumbo e zinco como subprodutos.',
  //     en: 'Polymetallic deposit with silver as main metal and significant lead and zinc by-product values.',
  //     es: 'Depósito polimetálico con plata como metal principal y valores significativos de plomo y zinc como subproductos.',
  //     zh: '多金属矿床，以银为主要金属，铅和锌副产品价值显著。',
  //   },
  //   specifications: {
  //     grade: '180 g/t Ag, 2% Pb, 3% Zn',
  //     depth: '200 metros',
  //     extraction: 'Underground',
  //     accessibility: 'Aeroporto regional a 35km',
  //   },
  //   geology: {
  //     pt: 'Veios epitermais de baixa sulfetação com mineralização de argentita, galena e esfalerita.',
  //     en: 'Low-sulfidation epithermal veins with argentite, galena and sphalerite mineralization.',
  //     es: 'Vetas epitermales de baja sulfuración con mineralización de argentita, galena y esfalerita.',
  //     zh: '低硫型浅成热液脉，含辉银矿、方铅矿和闪锌矿矿化。',
  //   },
  //   infrastructure: {
  //     pt: 'Região em desenvolvimento, incentivos fiscais estaduais, proximidade a centros de processamento.',
  //     en: 'Developing region, state tax incentives, proximity to processing centers.',
  //     es: 'Región en desarrollo, incentivos fiscales estatales, proximidad a centros de procesamiento.',
  //     zh: '发展中地区，享有州税收优惠，靠近加工中心。',
  //   },
  //   documentation: ['Modelo Geológico 3D', 'Viabilidade Econômica', 'Certificação Ambiental', 'Plano de Fechamento'],
  //   gallery: [depositIron, depositGold, depositCopper],
  // },
  // {
  //   id: '6',
  //   name: 'Rio Cristal',
  //   location: 'Amazonas, Brasil',
  //   area: '4.500 hectares',
  //   mineral: 'Bauxita',
  //   reserves: '320 milhões de toneladas',
  //   image: depositCopper,
  //   description: {
  //     pt: 'Grande depósito de bauxita de alta qualidade, adequado para produção de alumínio metalúrgico. Reservas para décadas de operação.',
  //     en: 'Large high-quality bauxite deposit suitable for metallurgical aluminum production. Reserves for decades of operation.',
  //     es: 'Gran depósito de bauxita de alta calidad, adecuado para la producción de aluminio metalúrgico. Reservas para décadas de operación.',
  //     zh: '大型高品质铝土矿床，适合生产冶金级铝。储量可供数十年开采。',
  //   },
  //   specifications: {
  //     grade: '50% Al2O3',
  //     depth: '15 metros',
  //     extraction: 'Céu aberto',
  //     accessibility: 'Rio navegável adjacente',
  //   },
  //   geology: {
  //     pt: 'Bauxita laterítica desenvolvida sobre granitos e gnaisses em clima tropical. Alto teor de alumina disponível.',
  //     en: 'Lateritic bauxite developed on granites and gneisses in tropical climate. High available alumina content.',
  //     es: 'Bauxita laterítica desarrollada sobre granitos y gneises en clima tropical. Alto contenido de alúmina disponible.',
  //     zh: '热带气候条件下发育于花岗岩和片麻岩之上的红土型铝土矿。有效氧化铝含量高。',
  //   },
  //   infrastructure: {
  //     pt: 'Transporte fluvial disponível, energia hidrelétrica regional, área de preservação ambiental regulamentada.',
  //     en: 'River transport available, regional hydroelectric power, regulated environmental preservation area.',
  //     es: 'Transporte fluvial disponible, energía hidroeléctrica regional, área de preservación ambiental regulada.',
  //     zh: '河运可用，区域水力发电，环保区域受到监管。',
  //   },
  //   documentation: ['Inventário de Recursos', 'Plano Ambiental', 'Estudo Hidrológico', 'Acordo com Comunidades'],
  //   gallery: [depositCopper, depositGold, depositIron],
  // },
];
