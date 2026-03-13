import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SERVICES } from '../data/portfolio.data';
import { SITE_CONFIG } from '../data/site.config';
import { Service } from '../models/portfolio.model';

const STORAGE_KEY = 'portfolio_services_state';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly _services = signal<Service[]>(this.loadInitialServices());

  readonly services = this._services.asReadonly();
  readonly enabledServices = computed(() => this._services().filter((s) => s.enabled));
  readonly showProjects = signal(SITE_CONFIG.showProjectsSection).asReadonly();

  toggleService(id: string): void {
    this._services.update((services) =>
      services.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s)),
    );
    this.persistState();
  }

  private loadInitialServices(): Service[] {
    if (!isPlatformBrowser(this.platformId)) {
      return SERVICES;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return SERVICES;

      const state: Record<string, boolean> = JSON.parse(stored);
      return SERVICES.map((s) => ({
        ...s,
        enabled: Object.prototype.hasOwnProperty.call(state, s.id) ? state[s.id] : s.enabled,
      }));
    } catch {
      return SERVICES;
    }
  }

  private persistState(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const state = this._services().reduce<Record<string, boolean>>((acc, s) => {
      acc[s.id] = s.enabled;
      return acc;
    }, {});

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}
