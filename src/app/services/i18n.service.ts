import { Injectable, signal } from '@angular/core';
import en from '../../locale/messages.en.json';
import es from '../../locale/messages.es.json';

export type Lang = 'en' | 'es';

const TRANSLATIONS: Record<Lang, Record<string, string>> = { en, es };

@Injectable({ providedIn: 'root' })
export class I18nService {
  lang = signal<Lang>('es');

  t(key: string): string {
    return TRANSLATIONS[this.lang()][key] ?? key;
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
    localStorage.setItem('lang', lang);
  }

  init() {
    const saved = localStorage.getItem('lang') as Lang;
    if (saved === 'en' || saved === 'es') this.lang.set(saved);
  }
}
