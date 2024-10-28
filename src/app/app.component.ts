import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { ExportPdfService } from './services/export-pdf.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: number[] = [0]; // Initial page

  @ViewChildren('pageElement') pageElements!: QueryList<ElementRef>;

  constructor(private pdfService: ExportPdfService) {}

  addPage() {
    this.pages.push(this.pages.length);
  }

  exportPDF() {
    // Get the native elements from the QueryList
    const elements = this.pageElements.map(el => el.nativeElement);

    console.log(elements);

    // Call the service method
    this.pdfService.exportPDF(elements);
  }
}
