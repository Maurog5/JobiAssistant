import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService, Lang } from '../../services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  i18n = inject(I18nService);
  navigate = output<'home' | 'about'>();

  setLang(lang: Lang) {
    this.i18n.setLang(lang);
  }
}
