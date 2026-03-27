import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultsComponent } from './components/results/results.component';
import { AboutComponent } from './components/about/about.component';
import { GroqService } from './services/groq.service';
import { I18nService } from './services/i18n.service';
import { jobinput, GeneratedMaterials, GenerationStatus } from './models/jobi.model';
import { jobiFormComponent } from './components/jobi-form/jobi-form.component';

type Page = 'home' | 'about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, jobiFormComponent, ResultsComponent, AboutComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private groq = inject(GroqService);
  i18n = inject(I18nService);

  page = signal<Page>('home');
  status = signal<GenerationStatus>('idle');
  materials = signal<GeneratedMaterials | null>(null);
  currentStep = signal<string>('');

  ngOnInit() {
    this.i18n.init();
  }

  navigate(page: Page) {
    this.page.set(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async onSubmit(input: jobinput) {
    this.status.set('loading');
    this.materials.set(null);

    try {
      const result = await this.groq.generateAll(input, (step) => {
        this.currentStep.set(this.i18n.t(`results.generating.${step}`));
      });
      this.materials.set(result);
      this.status.set('done');
    } catch {
      this.status.set('error');
    }
  }
}
