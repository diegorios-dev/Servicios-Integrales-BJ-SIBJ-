export interface SiteConfig {
  name: string;
  shortName: string;
  telephoneDisplay: string;
  telephoneRaw: string;
  whatsappNumber: string;
  email: string;
  city: string;
  region: string;
  addressCountry: string;
  url: string;
  openingHours: {
    days: string[];
    opens: string;
    closes: string;
    label: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Servicios Integrales BJ",
  shortName: "SIBJ",
  telephoneDisplay: "+54 9 299 506-4187",
  telephoneRaw: "+5492995064187",
  whatsappNumber: "5492995064187",
  email: "contacto@sibj.com.ar",
  city: "Neuquén",
  region: "Neuquén",
  addressCountry: "AR",
  url: "https://diegorios-dev.github.io/Servicios-Integrales-BJ-SIBJ-/",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
    label: "Lunes a Viernes 8:00 a 18:00 hs",
  },
};

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function url(path: string): string {
  const [pathPart, hashPart] = path.split('#', 2);
  const normalizedPath = pathPart.replace(/^\/+/, '').replace(/\/+$/, '');
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const isFile = /(^|\/)[^/]+\.[^/]+$/.test(normalizedPath);
  const route = normalizedPath && !isFile ? `${normalizedPath}/` : normalizedPath;
  const hash = hashPart === undefined ? '' : `#${hashPart}`;

  return `${baseUrl}${route}${hash}`;
}