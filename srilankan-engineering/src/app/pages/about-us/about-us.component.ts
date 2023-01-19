import { Component, OnInit } from '@angular/core';
import { ContentServices } from 'src/content.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  headerData = [
    {
      subTitle: 'WHO WE ARE?',
      title: 'Our story',
      content: 'SriLankan Engineering originally founded to maintain the fleet of SriLankan Airlines aircraft, has many years of first-hand expertise in keeping multiple aircraft types airworthy. With over 35 years of experience in aircraft maintenance including EASA Part 145 Certified Line, Base and Component Repair & Overhaul services in the aviation industry. SriLankan Engineering is geared to offer its services to the world. Our strategic geographic location in the heart of the Indian Ocean, enables us to provide a convenient and efficient service with integrated aviation maintenance and engineering facilities.',
      btnVisible: 'd-none',
      bgImg: 'assets/images/header-images/about-us.jpeg'
    }
  ]

  selectedTab = 0;

  FacilityItems = [
    {
      SequenceNo:1,
      imgUrl:'assets/images/facilities/wide-body.jpeg',
      title:'Wide-Body Hanger',
      desc1:'<p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">The Wide Body hangar nicknamed the “B747 Hangar” due to its past history of servicing Air Lanka B747 aircraft, is a fully enclosed structure comprising of integrated workshops and offices, and annexed to the hangar is a central storage building. The Wide Body hangar can be used for Line and Base maintenance activities. It is capable of housing three aircraft together at any given time, with either a configuration of one wide body and two narrow body aircraft, or a configuration of three narrow body aircraft.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">The apron adjoining the wide body hangar is equipped with thrust deflectors to perform engine run ups for all aircraft types.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;"><b>Dimensions</b></span></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;"> Floor area: 7,781m2</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Maximum Tail height: 27m</span></li></ul>',
      desc2:'',
      contentVisible:'',
      sliderVisible: 'd-none'
    },
    {
      SequenceNo:2,
      imgUrl:'assets/images/facilities/narrow-body.jpeg',
      title:'Narrow-Body Hanger',
      desc1:'<p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">﻿</span><span style="font-family: Helvetica;">The Narrow Body hangar is a fully enclosed structure comprising of integrated workshops and offices. The Narrow Body hangar can be used for Line and Base maintenance activities. It is capable of housing one narrow body aircraft at any given time.</span></p><p style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;"><b>Dimensions</b></span></p><ul><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Floor area: 2,819m2</span></li><li style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="font-family: Helvetica;">Maximum Tail height: 16.7m</span></li></ul>',
      desc2:'',
      contentVisible:'',
      sliderVisible: 'd-none'
    },
    {
      SequenceNo:3,
      imgUrl:'assets/images/services/workshops-bg.jpeg',
      title:'Workshops',
      desc1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
      desc2:'',
      contentVisible:'d-none',
      sliderVisible: ''
    }
  ]

  constructor(private contentService: ContentServices) { }

  data :any = {
    PageCode : "PA001",
    InnerPageCode : "IP003",
    CompoentList : ["COM019","COM021"],
    LanguageCode : "CLG001",
  } 

  ngOnInit(): void {
   
    this.contentService.getAllComponents(this.data).subscribe(
      result => {
        this.FacilityItems = JSON.parse(result[0].subComponent);
        this.headerData = JSON.parse(result[1].subComponent);
      }
    )
  }

}
