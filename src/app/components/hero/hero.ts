import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  private readonly portfolioService = inject(PortfolioService);
  protected readonly showProjects = this.portfolioService.showProjects;
  protected readonly stats = [
    { value: '5+', label: 'Años de experiencia' },
    { value: '30+', label: 'Proyectos entregados' },
    { value: '20+', label: 'Clientes satisfechos' },
  ];

  protected readonly techStack = ['C#', 'JavaScript', 'SQL', 'Microsoft Power Platform', '.NET', 'Angular'];
}
