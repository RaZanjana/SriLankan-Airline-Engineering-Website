import { Component, OnInit, TemplateRef, ViewEncapsulation, Input, HostListener, Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ContactModalComponent } from '../components/contact-modal/contact-modal.component';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ContentServices } from 'src/content.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  encapsulation: ViewEncapsulation.None,
})
export class MasterPageComponent implements OnInit {

  footerbg:string='assets/images/footer-img.jpeg'
  map:string ='assets/images/map.png'

  navMenuList = [
    {
      id: 1,
      text: 'Home',
      url:'home',
      icon:'bi bi-house',
      navlinkdisplay:'',
      btndisplay:'d-none'
    },
    {
      id: 2,
      text: 'Our Services',
      url:'our-services',
      icon:'bi bi-gear-wide-connected',
      navlinkdisplay:'',
      btndisplay:'d-none'
    },
    {
      id: 3,
      text: 'Capabilities & approvals',
      url:'capabilities-and-approvals',
      icon:'bi bi-patch-check',
      navlinkdisplay:'',
      btndisplay:'d-none'
    },
    {
      id: 4,
      text: 'About us',
      url:'about-us',
      icon:'bi bi-airplane',
      navlinkdisplay:'',
      btndisplay:'d-none'
    },
    {
      id: 5,
      text: 'Media',
      url:'media',
      icon:'bi bi-newspaper',
      navlinkdisplay:'',
      btndisplay:'d-none'
    },
    {
      id: 6,
      text: 'INQUIRE now/ Aog',
      url:'inquiry',
      icon:'',
      navlinkdisplay:'d-none',
      btndisplay:''
    }
  ]

  footerContent = [
    {
      socialmedia:[
        {
          icon:'bi bi-linkedin',
          url:'https://www.linkedin.com/showcase/srilankanengineering/',
          tooltip:'Find out more via LinkedIn'
        },
        {
          icon:'bi bi-facebook',
          url:'https://www.facebook.com/flysrilankan',
          tooltip:'Find out more via Facebook'
        },
        {
          icon:'bi bi-twitter',
          url:'https://twitter.com/flysrilankan',
          tooltip:'Find out more via Twitter'
        },
        {
          icon:'bi bi-instagram',
          url:'https://www.instagram.com/srilankanairlinesofficial/',
          tooltip:'Find out more via Instagram'
        },
        {
          icon:'bi bi-youtube',
          url:'https://www.youtube.com/channel/UCU_e10UGVQS8JikgDpwvdag',
          tooltip:'Find out more via YouTube'
        },
        {
          icon:'bi bi-qr-code',
          url:'',
          tooltip:'Get our web link via QR'
        }
      ]
    },
    {
      footerlinks:[
        {
          text:'Home',
          url:'home'
        },
        {
          text:'Our Services',
          url:'our-services'
        },
        {
          text:'Capabilities & Approvals',
          url:'capabilities-and-approvals'
        },
        {
          text:'About Us',
          url:'about-us'
        },
        {
          text:'Media',
          url:'media'
        },
        {
          text:'Inquiry',
          url:'inquiry'
        }
      ]
    }
  ]

  showToast = true;
  
  constructor(config: NgbModalConfig, private modalService: NgbModal, private offcanvasService: NgbOffcanvas,private contentService: ContentServices, @Inject(DOCUMENT) private document: Document) {
    config.backdrop = 'static';
		config.keyboard = false;
   }

   @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
    document.documentElement.scrollTop > 20) {
      this.document.getElementById('navbar-default')?.classList.add('d-none')
      this.document.getElementById('navbar_scroll')?.classList.remove('d-none')
    }
    else{
      this.document.getElementById('navbar_default')?.classList.remove('d-none')
      this.document.getElementById('navbar_scroll')?.classList.add('d-none')
    }
  }

   openSideMenu(content : TemplateRef<any>){
    const offcanvasRef = this.offcanvasService.open(content, {
      position:'end',
      // backdrop:'static',
      // scroll: true
    })
    offcanvasRef.componentInstance.navdata = this.navMenuList
   }

  openContactModal() {
		const modalRef = this.modalService.open(ContactModalComponent, { centered: true });
		modalRef.componentInstance.contactOne = '+94 (19) 733 2023';
    modalRef.componentInstance.contactTwo = '+94 (19) 733 2080';
    modalRef.componentInstance.contactMail = 'mro@srilankan.com';
	}

  CallPhone1(){
    location.href="tel:+94 (19) 733 2023"
  }

  CallPhone2(){
    location.href="tel:+94 (19) 733 2080"
  }

  SendMail(){
    location.href="mailto:mro@srilankan.com"
  }

  data :any = {
    PageCode : "PA001",
    InnerPageCode : "IP005",
    CompoentList : ["COM027"],
    LanguageCode : "CLG001",
  } 
  datas :any = {
    PageCode : "PA001",
    InnerPageCode : "IP013",
    CompoentList : ["COM029","COM030"],
    LanguageCode : "CLG001",
  } 
  ngOnInit(): void {
    this.contentService.getAllComponents(this.data).subscribe(
      result => {
        this.navMenuList = JSON.parse(result[0].subComponent);
      }
    )
    this.contentService.getAllComponents(this.datas).subscribe(
      result => {
        this.footerContent[0].socialmedia = JSON.parse(result[0].subComponent);
        this.footerContent[0].footerlinks = JSON.parse(result[1].subComponent);
        if(this.footerContent[0].footerlinks != null)
        this.footerContent[1].footerlinks = [];
      }
    )
  }

}
