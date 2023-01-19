import { Component, OnInit } from '@angular/core';
// import content service page
import { ContentServices } from 'src/content.service';
import { ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  headerData = [
    {
      subTitle: 'Our Services',
      title: 'A solution for all your needs',
      content: 'SriLankan Engineering provides end-to-end maintenance, repair, and overhaul (MRO) services of aircraft and related components. Our complete MRO suite of services cover the entire gamut of both AMO and CAMO services. This includes but is not limited to Base Maintenance, Line Maintenance & Technical Handling, Component Maintenance & Overhaul, Offshore On-Site AOG Maintenance, Continuous Airworthiness, Fleet Technical Management Services, and Parking/Storage with Return-To-Service Maintenance.',
      btnVisible: 'd-none',
      bgImg: 'assets/images/header-images/our-service.jpeg'
    }
  ]

  selectedTab = 0;

  servicePreviewItems = [
    {
      SequenceNo:1,
      imgUrl:'assets/images/services/line-maintenance.jpeg',
      title:'Line Maintenance',
      desc1:'<p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">We offer line maintenance services at the following airports in Sri Lanka and the Maldives with a trained team of excellent staff who recognize and maintain customer service levels to provide maintenance services at the highest standards.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Bandaranaike International Airport – Katunayake (CMB – VCBI)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Mattala Rajapaksa International Airport – Hambantota (HRI – VCRI)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Velana International Airport – Male (MLE – VRMM)</span></li></ul><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Our technical line support includes full technical logbook Certificate of Release to Service for transit, daily, and weekly checks of the following aircraft and engine combinations.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;"><b>AIRBUS</b></span></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">A320 series (IAE V2500/CFM 56/CFM LEAP-1A/PW 1100G)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">A330 series (RR Trent 700/GE CF6)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">A340 (CFM 56/RR Trent 500)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">A350 (RR Trent XWB)</span></li></ul><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;"><b>BOEING</b></span></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">B737 series (CFM 56/CFM LEAP-1B)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">B777 (GE 90/RR Trent 800)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">B787 (GEnx/RR Trent 1000)</span></li></ul><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">We are able to provide segmented “A” checks on A320 family aircraft.&nbsp;</span><span style="font-family: Helvetica;">Our Cabin Defects Monitoring Team also performs cabin checks to ensure all existing defects are settled and attended to before aircraft release.&nbsp;</span><span style="font-family: Helvetica;">We aim to be your dependable choice of service provider for all your line maintenance requirements in Sri Lanka and the Maldives.</span></p>',
      desc2:'',
      contentVisible:'',
      sliderVisible: 'd-none'
    },
    {
      SequenceNo:2,
      imgUrl:'assets/images/services/base-maintenance.jpeg',
      title:'Base Maintenance',
      desc1:'<p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Our base maintenance facility at Bandaranaike International Airport, Sri Lanka, is fully equipped to perform heavy maintenance of narrow body (Airbus A320 family) and wide body aircraft (Airbus A330/A340). Currently, we have an excellent staff count of over 800 outstanding trained individuals who are highly skilled in all aircraft maintenance areas.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">We perform “A” checks, “C” checks, landing gear changes, engine changes on A320 family (V2500/ CFM 56/ CFM LEAP 1A)/ A330 (Trent 700)/ A340 (CFM 56), NDT inspections, aircraft painting, livery application, aircraft weighing, exterior washing, etc. In addition, we also provide engine video borescope inspections. We also offer customizable maintenance plans to suit your requirements in order to provide cost-effective solutions.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><b><span style="font-family: Helvetica;">Additional Ancillary Services:</span></b></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Retrofit Management</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Structural Modifications</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Working Party Support</span></li></ul><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">We bring with us valuable experience as the first A320neo operator in South Asia and the first A340 operator in Asia, with a sound background on heavy maintenance since 1994. We take pride in ourselves for providing maintenance services of the highest quality, with quick turnaround times, at a very competitive price.</span></p>',
      desc2:'',
      contentVisible:'',
      sliderVisible: 'd-none'
    },
    {
      SequenceNo:3,
      imgUrl:'assets/images/services/workshops.jpeg',
      title:'Workshops',
      desc1:'<p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">We have a full range of in-house workshops that are both EASA and CAASL approved for many components. These workshops are able to conduct inspection, testing, repair and overhaul of components while issuing a release document. The workshops compliment the base maintenance activities and enhance the overall service offering to our customers.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Wheels &amp; Brakes Workshop</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">NDT Workshop</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Structures Workshop</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Paint &amp; Composite Workshop</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Engine Module Shop</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Avionics Workshop (Including oxygen, battery, gallery, electrical, radio &amp; IFE shops)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Seat &amp; Fabric Workshop</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Calibration Lab</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Safety Equipment Workshop</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Aircraft Accessories Workshop</span></li></ul>',
      desc2:'',
      contentVisible:'',
      sliderVisible: 'd-none'
    },
    {
      SequenceNo:4,
      imgUrl:'assets/images/services/camo-services.jpeg',
      title:'CAMO Services',
      desc1:'<p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Our Continuous Aircraft Management Organization (CAMO) division comprises of several teams covering the full gamut of technical expertise in an MRO.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Technical Services – (Powerplant, Structures, Systems, Avionics, Cabin, etc.)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Technical Records</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Airworthiness</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Engineering Planning</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Technical Asset Management + Aircraft Leasing &amp; Projects</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Maintenance Control Center (MCC)</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Engineering Supply Chain Management</span></li></ul>',
      desc2:'',
      contentVisible:'',
      sliderVisible: 'd-none'
    },
    {
      SequenceNo:5,
      imgUrl:'assets/images/services/on-site.jpeg',
      title:'On-site Services',
      desc1:'<p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">We have go-teams that are ready to be deployed on short notice to wherever your aircraft is globally. These specialist teams specialize in quick-turnaround AOG solutions to get your aircraft back up in the sky as soon as possible. A few such services are as follows</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">NDT Inspections</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Borescope Inspections</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Engine Changes</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Structural Repairs</span></li></ul>',
      desc2:'',
      contentVisible:'',
      sliderVisible: 'd-none'
    }
  ]


  data :any = {
    PageCode : "PA001",
    InnerPageCode : "IP002",
    CompoentList : ["COM005"],
    LanguageCode : "CLG001",
  } 

  datas : any;
  title: string = "";

  onNotified(message:string){
    this.title = message;
  }


    

  constructor(private _route : ActivatedRoute,private contentService: ContentServices) { }
  ngOnInit(): void {
//     window.scroll({ 
//       top: 0, 
//       left: 0, 
//       behavior: 'smooth' 
// });
    this.contentService.getAllComponents(this.data).subscribe(
      result => {
        this.headerData = JSON.parse(result[0].subComponent);
      }
    )

    //const id = +this._route.snapshot.params['id'];
    //const com = this._route.snapshot.params['com'];
    const com = this.contentService.getMessage();
    if(com != undefined){
    this.selectedTab = com.SequenceNo-1 || com.id-1;
    //const elementList = document.querySelectorAll('.' + 'container-fluid content');
    // const element = elementList[0] as HTMLElement;
    // element.scrollIntoView({ behavior: 'smooth' });
    }
    else{
    this.selectedTab = 0;
    // const elementList = document.querySelectorAll('.' + 'tab-view');
    // const element = elementList[0] as HTMLElement;
    // element.scrollIntoView({ behavior: 'smooth' });
    }
    this.datas  = {
      PageCode : "PA001",
    InnerPageCode : "IP001",
    CompoentList : ["COM002"],
    LanguageCode : "CLG001",
    } 
    
    
    this.contentService.getAllComponents(this.datas).subscribe(
      result => {
        this.servicePreviewItems = JSON.parse(result[0].subComponent);
      }
    )

  }

}
