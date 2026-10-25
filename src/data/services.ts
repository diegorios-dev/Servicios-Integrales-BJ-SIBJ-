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
    tag: "Climatización y refrigeración",
    icon: "ac_unit",
    description: "Mantenimiento de climatización y refrigeración para locales, comercios y empresas en Neuquén.",
    items: [
      "Aire acondicionado.",
      "Cámaras y precámaras de frío.",
      "Detección de fugas.",
      "Carga de refrigerante.",
      "Mantenimiento de condensadoras y evaporadoras.",
      "Diagnóstico y reparación de fallas."
    ],
    href: url("/climatizacion-refrigeracion-neuquen"),
  },
  {
    title: "Mantenimiento Edilicio",
    tag: "Mantenimiento de locales",
    icon: "apartment",
    description: "Mantenimiento edilicio preventivo y correctivo para locales, comercios y empresas en Neuquén.",
    items: [
      "Reparaciones generales.",
      "Pintura.",
      "Cambio de pisos/baldosas.",
      "Plomería.",
      "Destapes y pérdidas.",
      "Mantenimiento preventivo de locales."
    ],
    href: url("/mantenimiento-edilicio-neuquen"),
  },
  {
    title: "Electricidad y Tableros",
    tag: "ELECTROTECNIA",
    icon: "bolt",
    description: "Electricidad y tableros para locales, comercios y empresas en Neuquén.",
    items: [
      "Diagnóstico de fallas.",
      "Tableros.",
      "Térmicas y contactores.",
      "Instalaciones y reparaciones eléctricas.",
      "Mantenimiento preventivo."
    ],
    href: url("/electricidad-tableros-neuquen"),
  },
  {
    title: "Obras y Trabajos Civiles",
    tag: "CONSTRUCCIÓN",
    icon: "construction",
    description: "Obras y trabajos civiles para locales, comercios y empresas en Neuquén.",
    items: [
      "Albañilería.",
      "Reparaciones.",
      "Adecuaciones de locales.",
      "Instalaciones.",
      "Trabajos relacionados con construcción e infraestructura."
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
    text: "Personal técnico idóneo y con experiencia para atender cada trabajo."
  },
  {
    number: "03 // AGILIDAD",
    icon: "offline_bolt",
    title: "Respuesta Rápida para Empresas",
    text: "Atención dedicada para locales, comercios y empresas."
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
  isWork?: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    quote: "Trabajar con el equipo de Servicios Integrales B.J nos brinda tranquilidad y confianza. Siempre que surge algún inconveniente en nuestros locales, contamos con una respuesta rápida y un acompañamiento constante para encontrar soluciones. Valoramos su compromiso, la atención recibida y la predisposición para resolver cada situación. Estamos muy conformes con el servicio y el respaldo que nos brindan día a día.",
    author: "Alex Ugarte",
    role: "responsable de mantenimiento",
    badge: "Mostaza (Neuquén y Comodoro)",
    image: url("/assets/mostaza.webp"),
    imageAlt: "Sucursal gastronómica Mostaza atendida por SIBJ",
    category: "Mantenimiento"
  },
  {
    quote: "Realizamos la instalación de un sistema sanitario con biodigestor para el tratamiento de aguas residuales, ofreciendo una solución eficiente y confiable para el saneamiento. El sistema permite tratar los efluentes de manera segura, contribuyendo al cuidado del medio ambiente y al uso responsable de los recursos naturales.",
    author: "Daniel González",
    role: "Mantenimiento y Obras",
    badge: "Mada s.r.l.",
    image: url("/assets/biodigestor.webp"),
    imageAlt: "Instalación de sistema de tratamiento y drenaje hidrosanitario",
    category: "Obras y Trabajos Civiles"
  }
];