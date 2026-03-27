import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../services/i18n.service';
import { jobinput } from '../../models/jobi.model';
@Component({
  selector: 'app-jobi-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jobi-form.component.html'
})
export class jobiFormComponent {
  i18n = inject(I18nService);

  submitted = output<jobinput>();

  cv = '';
  jobiDescription = '';
  position = '';
  company = '';
  apiKey = '';
  showApiKey = false;
  error = '';

  submit() {
    this.error = '';
    if (!this.cv.trim()) { this.error = this.i18n.t('error.empty_cv'); return; }
    if (!this.jobiDescription.trim()) { this.error = this.i18n.t('error.empty_jobi'); return; }
    if (!this.apiKey.trim()) { this.error = this.i18n.t('error.empty_key'); return; }

    this.submitted.emit({
      cv: this.cv,
      jobiDescription: this.jobiDescription,
      position: this.position,
      company: this.company,
      apiKey: this.apiKey
    });
    this.reset();
  }
  reset() {
    this.jobiDescription = '';
    this.position = '';       
    this.company = '';
  }
}

