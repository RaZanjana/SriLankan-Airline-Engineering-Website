import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation, SwiperOptions, EffectCreative } from "swiper";
import { auto } from '@popperjs/core';

// import content service page
import { ContentServices } from 'src/content.service';

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation, EffectCreative]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  mainCaroselItemsDisply :string = '';
  servicePreviewItemsDisplay : string = '';
  clientSliderItemsDsiplay : string = '';
  mediaItemsDisplay : string = ''

  mainCaroselItems = [
    {
      id: 1,
      title: 'AOG Services',
      caption: 'Our AOG desk is available 24/7 for all your urgent AOG requirements and will respond ASAP',
      imgUrl: 'assets/images/main-carousel/slide1.jpeg',
      btnOneDisplay: '',
      btnTwoDisplay: '',
      btnThreeDisplay: 'd-none',
      btnThreeText: '',
      btnThreeUrl: ''
    },
    {
      id: 2,
      title: 'Full Range of MRO Services',
      caption: 'We offer a wide variety of MRO services covering the Approved Maintenance Organization (AMO) and Continuous Airworthiness Maintenance Organization (CAMO) areas',
      imgUrl: 'assets/images/main-carousel/slide2.jpeg',
      btnOneDisplay: 'd-none',
      btnTwoDisplay: 'd-none',
      btnThreeDisplay: '',
      btnThreeText: 'Explore Services',
      btnThreeUrl: 'our-services'
    },
    {
      id: 3,
      title: 'Globally Recognized and Accredited',
      caption: 'Approved by EASA and many other National Aviation Authorities (NAAs) and Industry Standards',
      imgUrl: 'assets/images/main-carousel/slide3.jpeg',
      btnOneDisplay: 'd-none',
      btnTwoDisplay: 'd-none',
      btnThreeDisplay: '',
      btnThreeText: 'Check Capabilities & Approvals',
      btnThreeUrl: 'capabilities-and-approvals'
    },
    {
      id: 4,
      title: 'Highly Experienced Workforce and World-Class Facilities',
      caption: 'We have 35+ years of experience in MRO services and our staff are well recognized for their quality standards and technical expertise. Our facilities include EASA approved hangars and in-house workshops in Sri Lanka.',
      imgUrl: 'assets/images/main-carousel/slide4.jpeg',
      btnOneDisplay: 'd-none',
      btnTwoDisplay: 'd-none',
      btnThreeDisplay: '',
      btnThreeText: 'Get To Know Us',
      btnThreeUrl: 'about-us'
    }
  ]

  servicePreviewItems = [
    {
      id:1,
      imgUrl:'assets/images/services/line-maintenance.jpeg',
      title:'Line Maintenance',
      desc1:'',
      desc2:''
    },
    {
      id:2,
      imgUrl:'assets/images/services/base-maintenance.jpeg',
      title:'Base Maintenance',
      desc1:'',
      desc2:''
    },
    {
      id:3,
      imgUrl:'assets/images/services/workshops.jpeg',
      title:'Workshops',
      desc1:'',
      desc2:''
    },
    {
      id:4,
      imgUrl:'assets/images/services/camo-services.jpeg',
      title:'camo services',
      desc1:'',
      desc2:''
    },
    {
      id:5,
      imgUrl:'assets/images/services/on-site.jpeg',
      title:'On-site services',
      desc1:'',
      desc2:''
    }
  ]

  clientSliderItems = [
    {
      id:1,
      client: 'singapore airline',
      logoURL: 'assets/images/clients/singapore-airline.png'
    },
    {
      id:2,
      client: 'qatar airways',
      logoURL: 'assets/images/clients/qatar-airways.png'
    },
    {
      id:3,
      client: 'salam air',
      logoURL: 'assets/images/clients/salam-air.png'
    },
    {
      id:4,
      client: 'airasia',
      logoURL: 'assets/images/clients/airasia.png'
    },
    {
      id:5,
      client: 'turkish airline',
      logoURL: 'assets/images/clients/turkish-airline.png'
    },
    {
      id:6,
      client: 'gulf air',
      logoURL: 'assets/images/clients/gulf-air.png'
    }    
  ]

  mediaItems = [
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media1.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb1.jpeg'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media2.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb2.jpeg'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media3.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb3.jpeg'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media4.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb4.jpeg'
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media5.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb5.jpeg'
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media6.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb6.jpeg'
    },
    {
      id: 7,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media7.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb7.jpeg'
    },
    {
      id: 8,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media8.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb8.jpeg'
    },
    {
      id: 9,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media9.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb9.jpeg'
    },
    {
      id: 10,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media10.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb10.jpeg'
    },
    {
      id: 11,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media11.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb11.jpeg'
    },
    {
      id: 12,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media12.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb12.jpeg'
    },
    {
      id: 13,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media13.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb13.jpeg'
    },
    {
      id: 14,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media14.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb14.jpeg'
    },
    {
      id: 15,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media15.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb15.jpeg'
    },
    {
      id: 16,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media16.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb16.jpeg'
    },
  ]

  mainCarouselConfig : SwiperOptions = {
    spaceBetween:30,
    effect:'creative',
    creativeEffect:{
      prev:{
        shadow:true,
        translate:[0,0,-400]
      },
      next:{
        translate:['100%',0,0]
      }
    },
    centeredSlides:true,
    autoplay:{
      delay: 4000,
      disableOnInteraction: false
    },
    loop:true,
    pagination: {
      clickable: true
    },
    navigation: true
  }

  servicePreviewConfig : SwiperOptions = {
    spaceBetween: 5,
    pagination: false,
    navigation: true,
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
        slidesPerView: 5,
      }
    }
  }

  clientsConfig: SwiperOptions = {
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
        slidesPerView: 5,
      }
    },
    spaceBetween: 30,
    pagination: false,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay:{
      delay: 3000,
      disableOnInteraction: false
    }
  }

  mediaConfig: SwiperOptions = {
    spaceBetween: 5,
    pagination:false,
    breakpoints:{
      320:{
        slidesPerView: 1,
      },
      425:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 1,
      },
      1024:{
        slidesPerView: 2,
      }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    },
    navigation:true
  }

  data :any = {
    PageCode : "PA001",
    InnerPageCode : "IP001",
    CompoentList : ["COM001","COM002","COM003","COM007"],
    LanguageCode : "CLG001",
  } 
  constructor(private contentService: ContentServices) { }

  ngOnInit(): void {
   
    this.contentService.getAllComponents(this.data).subscribe(
      result => {
        this.mainCaroselItems = JSON.parse(result[0].subComponent);
        if(this.mainCaroselItems == null)
        this.mainCaroselItemsDisply = 'd-none'

        this.servicePreviewItems = JSON.parse(result[1].subComponent);
        if(this.servicePreviewItems == null)
        this.servicePreviewItemsDisplay = 'd-none'

        this.clientSliderItems = JSON.parse(result[2].subComponent);
        if(this.clientSliderItems == null)
        this.clientSliderItemsDsiplay = 'd-none'

        this.mediaItems = JSON.parse(result[3].subComponent);
        var length = this.mediaItems.length;
        this.mediaItems = this.mediaItems.slice(length-6,length)
        if(this.mediaItems == null)
        this.mediaItemsDisplay = 'd-none'
      }
    )
  }

}
