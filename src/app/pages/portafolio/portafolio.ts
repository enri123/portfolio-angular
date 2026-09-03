import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';

interface MenuItem {
  id: string;
  label: string;
}

interface Proyecto {
  path: string;
  herramientas: string;
  imagen: string;
  label: string;
}

@Component({
  selector: 'app-portafolio',
  imports: [MatListModule],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css',
})
export class Portafolio {
  public currentCheckbox(option: string) {
    const elementos = document.getElementsByClassName(option);
    Array.from(elementos).forEach((el) => {
      el.classList.toggle('oculto');
    });
    console.log(option);
  }

  items = signal<MenuItem[]>([
    { id: 'docker', label: 'Docker' },
    { id: 'ci-cd', label: 'CI/CD' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'full-stack', label: 'Full Stack' },
    { id: 'desktop-app', label: 'Desktop App' },
    { id: 'sql', label: 'SQL' },
    { id: 'python', label: 'Python' },
    { id: 'node', label: 'Node' },
    { id: 'angular', label: 'Angular' },
    { id: 'react', label: 'React' },
  ]);

  proyectos = signal<Proyecto[]>([
    { path: 'https://github.com/enri123/Web_Scraping', herramientas: 'sql python full-stack', label: 'Web Scraping', imagen: 'Web_Scraper.png' },
    { path: 'https://github.com/enri123/Bananas', herramientas: 'python desktop-app', label: 'Bananas', imagen: 'bananas.png' },
    { path: 'https://github.com/enri123/Portafolio', herramientas: 'ci-cd dockerangular frontend', label: 'Portafolio', imagen: 'portafolio.png' },
    { path: 'https://github.com/enri123/IAWeb', herramientas: 'ci-cd docker node full-stack', label: 'IAWeb', imagen: 'iaweb.png' },
    { path: 'https://github.com/enri123/TODOApp', herramientas: 'ci-cd docker react node sql full-stack', label: 'TODOApp', imagen: 'todoapp.png' },
    { path: 'https://github.com/enri123/ProyectoGISReactsKeycloak', herramientas: 'ci-cd docker react node full-stack', label: 'Proyecto GIS', imagen: 'proyecto-gis.png' },
  ]);
}
