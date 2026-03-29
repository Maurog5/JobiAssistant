import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PdfExtractorService {

  async extract(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const typedArray = new Uint8Array(arrayBuffer);
    const pdf = await (window as any).pdfjsLib.getDocument({ data: typedArray }).promise;

    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      fullText += content.items.map((item: any) => item.str).join(' ') + '\n';
    }
    return fullText;
  }
}