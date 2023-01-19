import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ContentServices } from 'src/content.service';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation, SwiperOptions, EffectCube } from "swiper";
import { auto } from '@popperjs/core';

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation, EffectCube]);

@Component({
  selector: 'app-workshops-slider',
  templateUrl: './workshops-slider.component.html',
  styleUrls: ['./workshops-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkshopsSliderComponent implements OnInit {
@Input() data: any;

carouselItems = [
  {
    id:1,
    title:'WHEELS & BRAKES WORKSHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/Wheels & Brakes.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:2,
    title:'NDT WORKSHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/NDT workshop-2.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:3,
    title:'STRUCTURES WORKSHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/Structures workshop-2.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:4,
    title:'PAINT & COMPOSITE WORKSHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/Paint & Composite.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:5,
    title:'ENGINE MODULE SHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/Engines workshop-2.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:6,
    title:'AVIONICS WORKSHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/Avionics workshop-2.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:7,
    title:'SEAT & FABRIC WORKSHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/Seat & Fabric workshop-2.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:8,
    title:'CALIBRATION LAB',
    desc:'',
    imgOne:'assets/images/facilities/workshops/Calibration lab.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:9,
    title:'SAFETY EQUIPMENT WORKSHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/workshop-3.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
  {
    id:10,
    title:'AIRCRAFT ACCESSORIES WORKSHOP',
    desc:'',
    imgOne:'assets/images/facilities/workshops/Aircraft accessories workshop.jpeg',
    img2:'',
    img3:'',
    img4:'',
    img5:''
  },
]

CarouselConfig : SwiperOptions = {
  spaceBetween:30,
  centeredSlides:true,
  autoplay:{
    delay: 3500,
    disableOnInteraction: false
  },
  effect: 'cube',
  grabCursor: true,
  cubeEffect:{
    shadow:true,
    slideShadows:true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  loop:true,
  pagination: {
    dynamicBullets:true
  },
  navigation: true
}

datas :any = {
  PageCode : "PA001",
  InnerPageCode : "IP003",
  CompoentList : ["COM020"],
  LanguageCode : "CLG001",
} 

  constructor(private contentService: ContentServices) { }
  ngOnInit(): void {
    this.contentService.getAllComponents(this.datas).subscribe(
      result => {
        this.carouselItems = JSON.parse(result[0].subComponent);
      }
    )
  }

}
