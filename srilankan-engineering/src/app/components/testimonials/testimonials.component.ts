import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { ContentServices } from 'src/content.service';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, SwiperOptions, Autoplay } from "swiper";
import { auto } from '@popperjs/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {
      id:1,
      quote:'Lorem ipsum dolor sit amet, cot velit interdum, ac aliquet odio mattis.',
      avatar:'assets/images/testimonials/avatar1.png',
      name:'Allen Collins',
      company:'SalamAir'
    },
    {
      id:2,
      quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      avatar:'assets/images/testimonials/avatar1.png',
      name:'Allen Collins',
      company:'Air Seychelles'
    },
    {
      id:3,
      quote:'Lorem ipsum dolit interdum, ac aliquet odio mattis.',
      avatar:'assets/images/testimonials/avatar1.png',
      name:'Allen Collins',
      company:'Serene Air'
    },
    {
      id:4,
      quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      avatar:'assets/images/testimonials/avatar1.png',
      name:'Allen Collins',
      company:'Maldivian'
    }
  ]

  testimonialConfig : SwiperOptions = {
    spaceBetween: 15,
    pagination: false,
    navigation: false,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay:{
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints:{
      320:{
        slidesPerView: 1,
      },
      425:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 3,
      },
      1024:{
        slidesPerView: 4,
      }
    }
  }

  constructor(private contentService: ContentServices) { }

  data :any = {
    PageCode : "PA001",
    InnerPageCode : "IP003",
    CompoentList : ["COM025"],
    LanguageCode : "CLG001",
  } 

  ngOnInit(): void {
    this.contentService.getAllComponents(this.data).subscribe(
      result => {
        this.testimonials = JSON.parse(result[0].subComponent);
      }
    )
  }

}
