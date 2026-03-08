import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { CATEGORY_FILTERS, PROJECTS } from '../../data/portfolio.data';
import { ProjectCategory } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCard],
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  protected readonly filters = CATEGORY_FILTERS;

  selectedCategory = signal<ProjectCategory>('all');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === category);
  });

  selectCategory(id: ProjectCategory): void {
    this.selectedCategory.set(id);
  }
}
