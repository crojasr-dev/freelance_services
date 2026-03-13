export type ProjectCategory = 'all' | 'web-site' | 'web-app' | 'desktop-app';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: Exclude<ProjectCategory, 'all'>;
  additionalInfo?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  features: string[];
  enabled: boolean;
  ctaLink?: string;
}

export interface CategoryFilter {
  id: ProjectCategory;
  label: string;
}
