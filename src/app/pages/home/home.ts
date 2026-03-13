import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Hero } from '../../components/hero/hero';
import { ServicesSection } from '../../components/services-section/services-section';
import { ProjectsSection } from '../../components/projects-section/projects-section';
import { ContactSection } from '../../components/contact-section/contact-section';
import { Footer } from '../../components/footer/footer';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, ServicesSection, ProjectsSection, ContactSection, Footer],
  template: `
    <main id="main-content">
      <app-hero />
      <app-services-section />
      @if (showProjects()) {
        <app-projects-section />
      }
      <app-contact-section />
      <app-footer />
    </main>
  `,
})
export class Home {
  private readonly portfolioService = inject(PortfolioService);
  protected readonly showProjects = this.portfolioService.showProjects;
  private titleSvc = inject(Title);
  private metaSvc = inject(Meta);
  private doc = inject(DOCUMENT);

  constructor() {
    const url = 'https://devman.cl';
    this.titleSvc.setTitle('devman.cl | Desarrollo de Soluciones Digitales');
    this.metaSvc.updateTag({ name: 'description', content: 'Desarrollo de soluciones digitales a medida: sitios web profesionales, aplicaciones web y automatizaciones con Microsoft Power Platform para pymes y startups.' });
    this.metaSvc.updateTag({ property: 'og:type', content: 'website' });
    this.metaSvc.updateTag({ property: 'og:url', content: url });
    this.metaSvc.updateTag({ property: 'og:title', content: 'devman.cl | Desarrollo de Soluciones Digitales' });
    this.metaSvc.updateTag({ property: 'og:description', content: 'Sitios web profesionales, aplicaciones y automatizaciones con Microsoft Power Platform a medida para pymes y startups.' });
    this.metaSvc.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaSvc.updateTag({ name: 'twitter:url', content: url });
    this.metaSvc.updateTag({ name: 'twitter:title', content: 'devman.cl | Desarrollo de Soluciones Digitales' });
    this.metaSvc.updateTag({ name: 'twitter:description', content: 'Sitios web profesionales, aplicaciones y automatizaciones con Microsoft Power Platform a medida para pymes y startups.' });
    this.metaSvc.updateTag({ property: 'og:locale', content: 'es_CL' });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
