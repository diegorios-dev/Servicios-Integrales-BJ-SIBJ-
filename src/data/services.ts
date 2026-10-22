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
    icon: "",
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
    icon: "",
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
    quote: "Con el equipo de Servicios Integrales B.J venimos trabajando tranquilos. Cuando surge un problema en los locales, responden y acompañan. Estamos conformes con el servicio.",
    author: "Alex Ugarte",
    role: "responsable de mantenimiento",
    badge: "Mostaza (Neuquén y Comodoro)",
    image: url("/assets/mostaza.webp"),
    imageAlt: "Sucursal gastronómica Mostaza atendida por SIBJ",
    category: "Testimonio real"
  },
  {
    quote: "Le instalamos sistema sanitario biodigestor, para tratamiento de agua residuales.",
    author: "Daniel González",
    role: "Mada s.r.l.",
    badge: "Testimonio real",
    image: url("/assets/biodigestor.webp"),
    imageAlt: "Instalación de sistema de tratamiento y drenaje hidrosanitario",
    category: "Obras y Trabajos Civiles"
  }
];