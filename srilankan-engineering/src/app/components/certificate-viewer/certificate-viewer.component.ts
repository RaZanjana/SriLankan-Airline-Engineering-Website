import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certificate-viewer',
  templateUrl: './certificate-viewer.component.html',
  styleUrls: ['./certificate-viewer.component.scss']
})
export class CertificateViewerComponent implements OnInit {
  @Input() 
  cName: any;
  cCountry:any;
  cFile:any

  require: any
  FileSaver = require('file-saver');

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.cFile);
  }

  downloadPdf() {
    const pdfUrl = this.cFile;
    const pdfName = this.cName + '_' + this.cCountry;
    this.FileSaver.saveAs(pdfUrl, pdfName);
  }

}
