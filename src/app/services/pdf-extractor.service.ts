import { Injectable } from '@angular/core';

/** URL of the pdf.js worker, copied to the build output by angular.json (assets). */
const PDF_WORKER_SRC = '/pdf.worker.min.mjs';

@Injectable({ providedIn: 'root' })
export class PdfExtractorService {

  async extract(file: File): Promise<string> {
    // Lazy-load pdf.js only when the user uploads a PDF, to keep the initial bundle small.
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;

    const data = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjs.getDocument({ data }).promise;

    const pages: string[] = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      pages.push(content.items.map(item => ('str' in item ? item.str : '')).join(' '));
    }
    return pages.join('\n').trim();
  }
}
