import { Component, ChangeDetectionStrategy, input, signal, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Project } from '../../models/portfolio.model';

const CATEGORY_LABELS: Record<string, string> = {
  'web-site': 'Sitio Web',
  'web-app': 'Aplicación Web',
  'desktop-app': 'App de Escritorio',
};

const CATEGORY_CLASSES: Record<string, string> = {
  'web-site': 'bg-indigo-100 text-indigo-700',
  'web-app': 'bg-violet-100 text-violet-700',
  'desktop-app': 'bg-cyan-100 text-cyan-700',
};

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  project = input.required<Project>();

  isExpanded = signal(false);

  categoryLabel = computed(() => CATEGORY_LABELS[this.project().category] ?? this.project().category);

  categoryClass = computed(
    () => CATEGORY_CLASSES[this.project().category] ?? 'bg-gray-100 text-gray-700',
  );

  toggleExpand(): void {
    this.isExpanded.update((v) => !v);
  }
}
