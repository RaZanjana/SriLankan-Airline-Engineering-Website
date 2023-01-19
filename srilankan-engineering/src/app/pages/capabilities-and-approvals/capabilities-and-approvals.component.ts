import { Component, OnInit } from '@angular/core';
import { ContentServices } from 'src/content.service';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CertificateViewerComponent } from 'src/app/components/certificate-viewer/certificate-viewer.component';

@Component({
  selector: 'app-capabilities-and-approvals',
  templateUrl: './capabilities-and-approvals.component.html',
  styleUrls: ['./capabilities-and-approvals.component.scss']
})
export class CapabilitiesAndApprovalsComponent implements OnInit {
  title: string = 'We are globally recognized and accredited'
  subtitle: string = 'CAPABILITIES & APPROVALS'
  desc: string = 'SriLankan Engineering has obtained Part 145 maintenance approvals from the European Union Aviation Safety Agency (EASA), the Civil Aviation Authority of Sri Lanka, and many other National Aviation Authorities (NAAs). Additionally, SriLankan Engineering has its own Safety Management System (SMS) and Quality Management System (QMS) in place which is monitored, updated and audited regularly. Furthermore, we also hold IATA Operational Safety Audit (IOSA) and IATA Safety Audit for Ground Operations (ISAGO) certification. Our Part 145 maintenance organization is complimented by our own in-house EASA Part 147 organization.'

  headerData = [
    {
      subTitle: 'CAPABILITIES & APPROVALS',
      title: 'We are globally recognized and accredited',
      content: 'SriLankan Engineering has obtained Part 145 maintenance approvals from the European Union Aviation Safety Agency (EASA), the Civil Aviation Authority of Sri Lanka, and many other National Aviation Authorities (NAAs). Additionally, SriLankan Engineering has its own Safety Management System (SMS) and Quality Management System (QMS) in place which is monitored, updated and audited regularly. Furthermore, we also hold IATA Operational Safety Audit (IOSA) and IATA Safety Audit for Ground Operations (ISAGO) certification. Our Part 145 maintenance organization is complimented by our own in-house EASA Part 147 organization.',
      btnVisible: 'd-none',
      bgImg: 'assets/images/header-images/certificate-bg.jpeg'
    }
  ]

  certificate_details = [
    {
      id:2,
      cerificate_name:'Civil aviation affairs',
      country_code: 'BH',
      country_name: 'Bahrain',
      certificate_url: '/assets/files/Certificates/Bahrain - ATR_8_5.91.pdf'
    },
    {
      id:3,
      cerificate_name:'Bermuda civil aviation authority',
      country_code: 'bm',
      country_name: 'Bermuda',
      certificate_url: '/assets/files/Certificates/Bermuda - BCAA AMO Approval for UL  BDA-AMO-717.pdf'
    },
    {
      id:4,
      cerificate_name:'Civil aviation administration of china',
      country_code: 'cn',
      country_name: 'China',
      certificate_url: '/assets/files/Certificates/China - CAAC F09400780.pdf'
    },
    {
      id:5,
      cerificate_name:'DIRECTOR GENERAL OF CIVIL AVIATION INDIA',
      country_code: 'in',
      country_name: 'India',
      certificate_url: '/assets/files/Certificates/India - DGCA India.pdf'
    },
    {
      id:6,
      cerificate_name:'DIRECTORATE GENERAL OF CIVIL AVIATION KUWAIT',
      country_code: 'kw',
      country_name: 'Kuwait',
      certificate_url: '/assets/files/Certificates/Kuwait - DGCA Kuwait.pdf'
    },
    {
      id:7,
      cerificate_name:'MALDIVES CIVIL AVIATION AUTHORITY',
      country_code: 'mv',
      country_name: 'Maldives',
      certificate_url: '/assets/files/Certificates/Maldives - AMO MV-145-045.pdf'
    },
    {
      id:8,
      cerificate_name:'CIVIL AVIATION AUTHORITY OF NEPAL',
      country_code: 'np',
      country_name: 'Nepal',
      certificate_url: '/assets/files/Certificates/Nepal - CAAN AMO.pdf'
    },
    {
      id:9,
      cerificate_name:'DIRECTORATE GENERAL OF CIVIL AVIATION REGULATION OF SULTANATE OF OMAN',
      country_code: 'om',
      country_name: 'Oman',
      certificate_url: '/assets/files/Certificates/Oman - AWR 263 AL 070 91.pdf'
    },
    {
      id:10,
      cerificate_name:'PAKISTAN CIVIL AVIATION AUTHORITY',
      country_code: 'pk',
      country_name: 'Pakistan',
      certificate_url: '/assets/files/Certificates/Pakistan - PCAA Approval Certificate.pdf'
    },
    {
      id:11,
      cerificate_name:'QATAR CIVIL AVIATION AUTHORITY',
      country_code: 'qa',
      country_name: 'Qatar',
      certificate_url: '/assets/files/Certificates/Qatar - QCAA renewal 2021.pdf'
    },
    {
      id:10,
      cerificate_name:'PAKISTAN CIVIL AVIATION AUTHORITY',
      country_code: 'pk',
      country_name: 'Pakistan',
      certificate_url: '/assets/files/Certificates/Pakistan - PCAA Approval Certificate.pdf'
    },
    {
      id:12,
      cerificate_name:'SEYCHELLES CIVIL AVIATION AUTHORITY',
      country_code: 'sc',
      country_name: 'Seychelles',
      certificate_url: '/assets/files/Certificates/Seychelles - SCAA 145.F.03_19 Form 3.pdf'
    },
    {
      id:10,
      cerificate_name:'CIVIL AVIATION AUTHORITY OF SINGAPORE',
      country_code: 'sg',
      country_name: 'Singapore',
      certificate_url: '/assets/files/Certificates/Singapore - CAAS AWI 327.pdf'
    },
    {
      id:11,
      cerificate_name:'DIRECTORATE GENERAL OF CIVIL AVIATION',
      country_code: 'tk',
      country_name: 'Turkey',
      certificate_url: '/assets/files/Certificates/Turkey - DGCA.pdf'
    },
    {
      id:10,
      cerificate_name:'GENERAL CIVIL AVIATION AUTHORITY',
      country_code: 'ae',
      country_name: 'UAE',
      certificate_url: '/assets/files/Certificates/UAE - GCAA UAE.pdf'
    }
  ]

  data :any = {
    PageCode : "PA001",
    InnerPageCode : "IP012",
    CompoentList : ["COM017","COM022"],
    LanguageCode : "CLG001",
  } 

  constructor(private contentService: ContentServices, private modalService: NgbModal) { }

  ngOnInit(): void {
   
    this.contentService.getAllComponents(this.data).subscribe(
      result => {
        this.certificate_details = JSON.parse(result[0].subComponent);
        this.headerData = JSON.parse(result[1].subComponent);
        console.log(this.certificate_details);
      }
    )
  }

  openCertificate() {
		const modalRef = this.modalService.open(CertificateViewerComponent, 
      { centered: true,
         scrollable: true,
          size: 'xl'
      });
    modalRef.componentInstance.cName = 'European union aviation safety agency';
    modalRef.componentInstance.cCountry = 'European Union';
    modalRef.componentInstance.cFile = '/assets/files/Certificates/Bahrain - ATR_8_5.91.pdf';
	}

}
