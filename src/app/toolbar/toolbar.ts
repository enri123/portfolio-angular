import { DOCUMENT } from '@angular/common';
import { Component, LOCALE_ID, inject } from '@angular/core';
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
  private readonly locale = inject(LOCALE_ID);
  private readonly document = inject(DOCUMENT);
  private readonly styleStorageKey = 'portfolio-style';

  public selectedStyle = this.getStoredStyle();

  public readonly languages: Language[] = [
    { name: 'es', code: 'es' },
    { name: 'EN', code: 'en' },
  ];

  get currentLanguage(): string {
    const language = this.languages.find((Lang) => Lang.code === this.locale) || this.languages[0];
    return language.code;
  }

  public changeStyle(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const style = value === '2' || value === '3' ? value : '1';

    this.selectedStyle = style;
    this.document.documentElement.dataset['style'] = style;
    localStorage.setItem(this.styleStorageKey, style);
  }

  private getStoredStyle(): '1' | '2' | '3' {
    const storedStyle = localStorage.getItem(this.styleStorageKey);
    const style = storedStyle === '2' || storedStyle === '3' ? storedStyle : '1';

    this.document.documentElement.dataset['style'] = style;
    return style;
  }

  public changeLanguage(newLanguage: string): void {
    if (this.currentLanguage === newLanguage) return;

    // GitHub Pages
    if (window.location.hostname === 'enri123.github.io') {
      window.location.href = `${window.location.origin}/portfolio-angular/${newLanguage}/`;
      return;
    }

    // Docker / Nginx / Servidor propio
    const url = new URL(window.location.href);

    url.pathname = url.pathname.replace(/\/(es|en)(?=\/|$)/, `/${newLanguage}`);

    window.location.href = url.toString();
  }
}
