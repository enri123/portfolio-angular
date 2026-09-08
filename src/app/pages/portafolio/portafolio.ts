import { Component, computed, signal } from '@angular/core';

interface Filtro {
  id: string;
  label: string;
}

interface GrupoFiltros {
  titulo: string;
  items: Filtro[];
}

interface Proyecto {
  path: string;
  herramientas: string;
  imagen: string;
  label: string;
}

@Component({
  selector: 'app-portafolio',
  imports: [],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css',
})
export class Portafolio {
  filtros: GrupoFiltros[] = [
    {
      titulo: 'Tecnologias',
      items: [
        { id: 'docker', label: 'Docker' },
        { id: 'ci-cd', label: 'CI/CD' },
        { id: 'backend', label: 'Backend' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'full-stack', label: 'Full Stack' },
        { id: 'desktop-app', label: 'Desktop App' },
      ],
    },
    {
      titulo: 'Lenguajes de programacion',
      items: [
        { id: 'sql', label: 'SQL' },
        { id: 'python', label: 'Python' },
        { id: 'node', label: 'Node' },
        { id: 'angular', label: 'Angular' },
        { id: 'react', label: 'React' },
      ],
    },
  ];

  proyectos = signal<Proyecto[]>([
    { path: 'https://github.com/enri123/Web_Scraping', herramientas: 'sql python full-stack backend frontend', label: 'Web Scraping', imagen: 'Web_Scraper.png' },
    { path: 'https://github.com/enri123/Bananas', herramientas: 'python desktop-app', label: 'Bananas', imagen: 'bananas.png' },
    { path: 'https://github.com/enri123/portfolio-angular', herramientas: 'ci-cd docker angular frontend', label: 'Portafolio', imagen: 'portafolio.png' },
    { path: 'https://github.com/enri123/IAWeb', herramientas: 'ci-cd docker node full-stack backend frontend', label: 'IAWeb', imagen: 'IAWeb.jpeg' },
    { path: 'https://github.com/enri123/TODOApp', herramientas: 'ci-cd docker react node sql full-stack backend frontend', label: 'TODOApp', imagen: 'todoapp.png' },
    { path: 'https://github.com/enri123/ProyectoGISReactsKeycloak', herramientas: 'ci-cd docker react node full-stack backend frontend', label: 'Proyecto GIS', imagen: 'munimap.jpeg' },
  ]);

  selectedFilters = signal<Record<string, boolean>>(
    Object.fromEntries(this.filtros.flatMap((grupo) => grupo.items).map((item) => [item.id, false])),
  );

  visibleProjects = computed(() => {
    const selectedTools = Object.entries(this.selectedFilters())
      .filter(([, selected]) => selected)
      .map(([tool]) => tool);

    if (selectedTools.length === 0) {
      return this.proyectos();
    }

    return this.proyectos().filter((project) =>
      project.herramientas.split(' ').some((tool) => selectedTools.includes(tool)),
    );
  });

  public currentCheckbox(option: string) {
    this.selectedFilters.update((filters) => ({ ...filters, [option]: !filters[option] }));
  }
}
