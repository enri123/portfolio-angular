import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.css',
})
export class CustomSidenav {
  items = signal<MenuItem[]>([
    { path: '/home', icon: 'home', label: $localize`:@@nav.home:Inicio` },
    { path: '/sobre-mi', icon: 'book', label: $localize`:@@nav.about:Sobre mí` },
    { path: '/curriculum', icon: 'school', label: $localize`:@@nav.resume:Currículum` },
    { path: '/portafolio', icon: 'book', label: $localize`:@@nav.portfolio:Portafolio` },
    { path: '/contacto', icon: 'mail', label: $localize`:@@nav.contact:Contacto` },
  ]);
}
