import { Component, OnInit, Input  } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {
  @Input() 
  contactOne:any;
  contactTwo: any; 
  contactMail:any;

  bg:string='assets/images/footer-img.jpeg'
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
