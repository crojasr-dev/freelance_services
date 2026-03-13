import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <footer class="bg-slate-950 border-t border-white/5 py-8" role="contentinfo">
      <div class="max-w-7xl mx-auto px-6 flex justify-center">
        <nav aria-label="Navegación del pie de página">
          <ul class="flex items-center gap-6" role="list">
            @for (link of footerLinks(); track link.href) {
              <li>
                <a
                  [href]="link.href"
                  class="text-gray-500 hover:text-white text-sm transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500 rounded"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
        </nav>
      </div>
    </footer>
  `,
})
export class Footer {
  private readonly portfolioService = inject(PortfolioService);

  protected readonly footerLinks = computed(() => [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    ...(this.portfolioService.showProjects() ? [{ label: 'Proyectos', href: '#proyectos' }] : []),
    { label: 'Contacto', href: '#contacto' },
  ]);
}
