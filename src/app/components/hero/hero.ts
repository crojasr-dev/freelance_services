import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly stats = [
    { value: '5+', label: 'Años de experiencia' },
    { value: '30+', label: 'Proyectos entregados' },
    { value: '20+', label: 'Clientes satisfechos' },
  ];

  protected readonly techStack = ['C#', 'JavaScript', 'SQL', 'PowerApps', 'PowerAutomate', '.NET', 'Angular'];
}
