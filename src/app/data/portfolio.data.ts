import { CategoryFilter, Project, Service } from '../models/portfolio.model';

export const PROJECTS: Project[] = [
  {
    id: 'tienda-online',
    title: 'Tienda Online',
    description:
      'E-commerce completo con catálogo de productos, carrito de compras y pasarela de pago integrada.',
    image: 'https://placehold.co/800x450/4f46e5/ffffff?text=Tienda+Online',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'web-site',
    additionalInfo:
      'Sistema con gestión de inventario en tiempo real, notificaciones por correo y panel de administración. Integración con Stripe para pagos seguros y soporte para múltiples métodos de pago.',
    liveUrl: '#',
  },
  {
    id: 'sistema-gestion',
    title: 'Sistema de Gestión de Proyectos',
    description:
      'Plataforma web para gestión de tareas, proyectos y equipos de trabajo con reportes en tiempo real.',
    image: 'https://placehold.co/800x450/7c3aed/ffffff?text=Gestión+Proyectos',
    technologies: ['React', 'TypeScript', 'FastAPI', 'MongoDB', 'Docker'],
    category: 'web-app',
    additionalInfo:
      'Incluye tablero Kanban, seguimiento de tiempo por tarea, reportes exportables en PDF y Excel, y sistema de notificaciones por email. Roles y permisos configurables por equipo.',
    liveUrl: '#',
  },
  {
    id: 'sistema-inventario',
    title: 'Sistema de Inventario',
    description:
      'Aplicación de escritorio para gestión de inventario con control de stock, alertas y reportes automáticos.',
    image: 'https://placehold.co/800x450/0891b2/ffffff?text=Inventario',
    technologies: ['Electron', 'Vue.js', 'SQLite', 'TypeScript'],
    category: 'desktop-app',
    additionalInfo:
      'Funciona offline con sincronización automática al recuperar la conexión. Incluye soporte para lector de código de barras, generación de reportes PDF y alertas de stock mínimo.',
  },
  {
    id: 'landing-restaurante',
    title: 'Sitio para Restaurante',
    description:
      'Sitio web con carta digital, sistema de reservas online y galería de fotos actualizable.',
    image: 'https://placehold.co/800x450/059669/ffffff?text=Restaurante',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    category: 'web-site',
    additionalInfo:
      'Sistema de reservas con confirmación automática por email, carta digital actualizable desde panel de administración y galería de imágenes optimizada.',
    liveUrl: '#',
  },
  {
    id: 'crm-ventas',
    title: 'CRM de Ventas',
    description:
      'Sistema CRM para gestión de clientes, oportunidades de venta y seguimiento del proceso comercial.',
    image: 'https://placehold.co/800x450/dc2626/ffffff?text=CRM+Ventas',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'MySQL', 'AWS'],
    category: 'web-app',
    additionalInfo:
      'Pipeline de ventas visual con drag-and-drop, automatización de seguimientos por email, integración con calendario y reportes de métricas comerciales en tiempo real.',
    liveUrl: '#',
  },
  {
    id: 'pos-sistema',
    title: 'Sistema POS',
    description:
      'Punto de venta para comercios con gestión de caja, ventas, clientes y productos.',
    image: 'https://placehold.co/800x450/d97706/ffffff?text=POS+Sistema',
    technologies: ['Tauri', 'Angular', 'Rust', 'SQLite'],
    category: 'desktop-app',
    additionalInfo:
      'Soporte para múltiples métodos de pago, impresión de tickets en impresora térmica, cierre de caja diario y sincronización con sistema de inventario.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-site',
    title: 'Sitios Web',
    description:
      'Diseño y desarrollo de sitios web profesionales, modernos y optimizados para buscadores.',
    iconPath:
      'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
    features: [
      'Diseño responsive y mobile-first',
      'Optimización SEO',
      'Alta velocidad de carga',
      'Panel de administración de contenido',
      'Integración con redes sociales',
    ],
    enabled: true,
  },
  {
    id: 'web-app',
    title: 'Aplicaciones Web',
    description:
      'Desarrollo de aplicaciones web complejas y escalables adaptadas a los procesos de tu negocio.',
    iconPath: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
    features: [
      'Arquitectura escalable y mantenible',
      'APIs REST',
      'Autenticación y autorización segura',
      'Dashboards con reportes y gráficos',
      'Integración con servicios externos',
    ],
    enabled: true,
  },
  {
    id: 'power-apps',
    title: 'Power Apps',
    description:
      'Desarrollo de aplicaciones empresariales low-code adaptadas a los procesos de tu organización.',
    iconPath:
      'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 9 1.5 1.5 3-3',
    features: [
      'Canvas Apps para interfaces personalizadas',
      'Model-Driven Apps con lógica de negocio',
      'Conectores a más de 1000 servicios',
      'Integración con Microsoft 365 y Dataverse',
      'Aplicaciones responsivas para móvil y escritorio',
    ],
    enabled: true,
  },
  {
    id: 'power-automate',
    title: 'Power Automate',
    description:
      'Automatización de procesos repetitivos y flujos de trabajo para aumentar la productividad de tu equipo.',
    iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    features: [
      'Flujos cloud automatizados y programados',
      'Automatización robótica de procesos (RPA)',
      'Flujos de aprobación empresarial',
      'Integración con más de 1000 conectores',
      'Desktop flows para aplicaciones legacy',
    ],
    enabled: false,
  },
  {
    id: 'desktop-app',
    title: 'Aplicaciones de Escritorio',
    description:
      'Aplicaciones de escritorio multiplataforma para Windows, macOS y Linux con alto rendimiento.',
    iconPath:
      'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3',
    features: [
      'Multiplataforma: Windows, macOS, Linux',
      'Funcionamiento offline',
      'Alto rendimiento nativo',
      'Integración con hardware (impresoras, lectores)',
      'Actualizaciones automáticas',
    ],
    enabled: false,
  },
];

export const CATEGORY_FILTERS: CategoryFilter[] = [
  { id: 'all', label: 'Todos' },
  { id: 'web-site', label: 'Sitios Web' },
  { id: 'web-app', label: 'Aplicaciones Web' },
  { id: 'desktop-app', label: 'Apps de Escritorio' },
];
