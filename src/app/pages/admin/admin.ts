import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-admin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './admin.html',
})
export class Admin {
  private readonly portfolioService = inject(PortfolioService);

  protected readonly services = this.portfolioService.services;

  protected toggle(id: string): void {
    this.portfolioService.toggleService(id);
  }
}
