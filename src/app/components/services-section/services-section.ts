import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-services-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './services-section.html',
})
export class ServicesSection {
  private readonly portfolioService = inject(PortfolioService);
  protected readonly services = this.portfolioService.enabledServices;
}
