import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { GeneratedMaterials, GenerationStatus } from '../../models/jobi.model';

type Tab = 'linkedin' | 'pitch' | 'cover';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  i18n = inject(I18nService);

  materials = input<GeneratedMaterials | null>(null);
  status = input<GenerationStatus>('idle');
  currentStep = input<string>('');

  activeTab: Tab = 'linkedin';
  copiedTab: Tab | null = null;

  setTab(tab: Tab) {
    this.activeTab = tab;
  }

  getText(): string {
    const m = this.materials();
    if (!m) return '';
    return { linkedin: m.linkedin, pitch: m.pitch, cover: m.coverLetter }[this.activeTab] ?? '';
  }

  async copy() {
    const text = this.getText();
    if (!text) return;
    await navigator.clipboard.writeText(text);
    this.copiedTab = this.activeTab;
    setTimeout(() => this.copiedTab = null, 2000);
  }
}
