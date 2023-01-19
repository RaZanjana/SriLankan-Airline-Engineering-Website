import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CertificateViewerComponent } from '../../certificate-viewer/certificate-viewer.component';

@Component({
  selector: 'app-certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class CertificateItemComponent implements OnInit {
  @Input() data: any;

  certificate_name : string = ''
  country_name : string = ''
  certificate : string = ''

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  openCertificate() {
		const modalRef = this.modalService.open(CertificateViewerComponent, 
      { centered: true,
         scrollable: true,
          size: 'xl'
      });
    modalRef.componentInstance.cName = this.certificate_name;
    modalRef.componentInstance.cCountry = this.country_name;
    modalRef.componentInstance.cFile = this.certificate;
    console.log(this.certificate);
	}
  ngOnInit(): void {
    this.certificate_name = this.data['cerificate_name'],
    this.country_name = this.data['country_name']
    this.certificate = this.data['certificate_url']
  }

}
