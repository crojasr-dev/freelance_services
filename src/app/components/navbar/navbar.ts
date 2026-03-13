import { Component, ChangeDetectionStrategy, computed, inject, signal, afterNextRender } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly portfolioService = inject(PortfolioService);
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  protected readonly navItems = computed(() => [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    ...(this.portfolioService.showProjects() ? [{ label: 'Proyectos', href: '#proyectos' }] : []),
    { label: 'Contacto', href: '#contacto' },
  ]);

  constructor() {
    afterNextRender(() => {
      window.addEventListener(
        'scroll',
        () => {
          this.isScrolled.set(window.scrollY > 60);
        },
        { passive: true },
      );
    });
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
