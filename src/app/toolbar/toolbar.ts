import { Component, LOCALE_ID, ApplicationConfig, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {

  private readonly locale = inject(LOCALE_ID)

  public readonly languages: Language[] = [
    { name: 'es', code: 'es' },
    { name: 'EN', code: 'en' },
  ];

  get currentLanguage(): string {
    const language = this.languages.find(Lang => Lang.code === this.locale) || this.languages[0];
    return language.code
  }

  public changeLanguage(newLanguage: string): void {
    if (this.currentLanguage === newLanguage) return;

    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}/portfolio-angular/${newLanguage}/`;
  }
}
