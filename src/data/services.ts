import { url } from './site';

export interface ServiceItem {
  title: string;
  tag: string;
  icon: string;
  description: string;
  items: string[];
  href: string;
  isCardType?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    title: "Climatización y Refrigeración",
    tag: "Climatización & Mantenimiento Edilicio",
    icon: "ac_unit",
    description: "Mantenimiento preventivo y correctivo de sistemas de climatización, aire acondicionado comercial e industrial y extracción forzada.",
    items: [
      "Instalación y service integral de equipos VRV, Rooftop y splits comerciales.",
      "Mantenimiento preventivo de sistemas de extracción y ventilación forzada.",
      "Control de parámetros de refrigeración y estanqueidad en conductos.",
      "Optimización de eficiencia energética en climatización central.",
      "Detección y reparación de fugas de refrigerante y fallas compresoras.",
      "Atención de urgencias operativas para locales, salones y plantas."
    ],
    href: url("/climatizacion-refrigeracion-neuquen"),
  },
  {
    title: "Mantenimiento Edilicio",
    tag: "Obras Civiles & Redes Sanitarias",
    icon: "apartment",
    description: "Gestión integral de infraestructura corporativa, hidrosanitaria y correctiva para asegurar la operatividad edilicia continua.",
    items: [
      "Relevamiento e intervención integral sobre redes de distribución de agua y colectores.",
      "Reparación, presurización y mantenimiento de conductos hidrosanitarios.",
      "Impermeabilización de cubiertas, techos y sellado de juntas estructurales.",
      "Mantenimiento preventivo y correctivo de carpintería, aberturas y herrajes.",
      "Pintura institucional, tratamiento anticorrosivo y revestimientos protectores.",
      "Gestión integral de mantenimiento correctivo y programado para predios."
    ],
    href: url("/mantenimiento-edilicio-neuquen"),
  },
  {
    title: "Electricidad y Tableros",
    tag: "ELECTROTECNIA",
    icon: "bolt",
    description: "Instalaciones y mantenimiento eléctrico integral para garantizar continuidad operativa y resguardo de maquinaria.",
    items: [
      "Diagnóstico integral de fallas electromecánicas y cortocircuitos.",
      "Armado, cableado y relevamiento térmico de tableros TGBT y seccionales.",
      "Reemplazo de protecciones termomagnéticas, diferenciales y contactores.",
      "Instalaciones y adecuaciones de redes en media y baja tensión.",
      "Mantenimiento preventivo, balanceo de cargas y medición de puesta a tierra (PAT).",
      "Sistemas de respaldo energético: UPS y grupos electrógenos."
    ],
    href: url("/electricidad-tableros-neuquen"),
  },
  {
    title: "Obras y Trabajos Civiles",
    tag: "CONSTRUCCIÓN",
    icon: "construction",
    description: "Ejecución precisa de reformas, adecuaciones funcionales y obra civil menor con cumplimiento de plazos estrictos.",
    items: [
      "Albañilería integral, nivelación de pisos y estructuras de hormigón.",
      "Reformas, modernizaciones y refacciones edilicias integrales.",
      "Adecuación funcional de locales comerciales, depósitos y oficinas corporativas.",
      "Instalaciones de durlock, tabiquería divisoria y cielorrasos acústicos/ignífugos.",
      "Obras de construcción menor y consolidación de infraestructura.",
      "Montaje de portones industriales, pasarelas y herrería pesada."
    ],
    href: url("/obras-trabajos-civiles-neuquen"),
  },
];

export interface PillarItem {
  number: string;
  icon: string;
  title: string;
  text: string;
}

export const pillarsData: PillarItem[] = [
  {
    number: "01 // UNIFICACIÓN",
    icon: "sync",
    title: "Atención Integral 360°",
    text: "Todo en un solo proveedor de confianza, eliminando múltiples contratistas y reduciendo drásticamente costos de gestión y tiempos muertos."
  },
  {
    number: "02 // EXPERIENCIA",
    icon: "badge",
    title: "Personal Capacitado y con Experiencia",
    text: "Personal técnico idóneo y con sólida experiencia de campo, aplicando buenas prácticas y protocolos de seguridad operacional en cada trabajo."
  },
  {
    number: "03 // AGILIDAD",
    icon: "speed",
    title: "Respuesta Rápida para Empresas",
    text: "Atención dedicada con unidades móviles equipadas para comercios, plantas industriales, centros logísticos y oficinas corporativas de alta demanda."
  }
];

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  badge: string;
  image: string;
  imageAlt: string;
  category: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    quote: "“SIBJ resolvió con máxima agilidad el mantenimiento preventivo y correctivo de nuestros sistemas de climatización y extracción en sucursal. Gracias a su rápida respuesta mantuvimos la continuidad de cocina y salón sin interrumpir la operación comercial ni un solo día.”",
    author: "Gerencia Operativa de Sucursal",
    role: "Encargado ",
    badge: "Mostaza S.A.",
    image: url("/assets/mostaza.webp"),
    imageAlt: "Sucursal gastronómica Mostaza atendida por SIBJ",
    category: "Climatización & Mantenimiento Edilicio"
  },
  {
    quote: "Nos instalaron el biodigestor y resolvieron por completo el tratamiento de nuestras aguas residuales. Un trabajo técnico ordenado, en tiempo y respetando las normas de seguridad.",
    author: "Coordinación de Mantenimiento e Infraestructura",
    role: "Daniel González",
    badge: "Mada s.r.l",
    image: url("/assets/instalacion.png"),
    imageAlt: "Instalación de sistema de tratamiento y drenaje hidrosanitario",
    category: "Obras Civiles & Redes Sanitarias"
  }
];