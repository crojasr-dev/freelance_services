import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ServicesSection } from '../../components/services-section/services-section';
import { ProjectsSection } from '../../components/projects-section/projects-section';
import { ContactSection } from '../../components/contact-section/contact-section';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, ServicesSection, ProjectsSection, ContactSection, Footer],
  template: `
    <main id="main-content">
      <app-hero />
      <app-services-section />
      <app-projects-section />
      <app-contact-section />
      <app-footer />
    </main>
  `,
})
export class Home {}
