import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ContentServices } from 'src/content.service';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MediaItemComponent implements OnInit {
  @Input() data: any;

  constructor(private _router: Router,private contentService: ContentServices) { }
  content:string =''
  @ViewChild('contentdiv',{static:false}) dviInner:ElementRef | undefined;

  ngOnInit(): void {
  }

  ngAfterViewInit(){

    this.content = this.dviInner?.nativeElement.innerText

  }
  LoadMedia(datas:any){
    this.contentService.setMessage(datas);
    this._router.navigate(['srilankan-engineering/media-article']);

    }


    gallery_settings = {
      counter: false,
      plugins: [lgZoom],
      fullScreen: true
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
      const { index, prevIndex } = detail;
      console.log(index, prevIndex);
    };

}
