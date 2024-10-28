import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {
  constructor() {}

  exportPDF(elements: HTMLElement[]) {
    const pdf = new jsPDF('p', 'mm', 'a4');

    const container = document.createElement('div');

    // Append all elements into the container
    elements.forEach(element => {
      container.appendChild(element.cloneNode(true));
    });

    // Render the container as a single HTML element into the PDF
    pdf.html(container, {
      width: pdf.internal.pageSize.getWidth(),
      html2canvas: {
        useCORS: true,
        scrollX: 0,
        scrollY: 0
      },
      callback: () => {
        pdf.save('exported-file.pdf');
      }

    });
  }
}
