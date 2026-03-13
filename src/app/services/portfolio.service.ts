import { Injectable, signal } from '@angular/core';
import { SERVICES } from '../data/portfolio.data';
import { SITE_CONFIG } from '../data/site.config';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly enabledServices = signal(SERVICES.filter((s) => s.enabled)).asReadonly();
  readonly showProjects = signal(SITE_CONFIG.showProjectsSection).asReadonly();
}
