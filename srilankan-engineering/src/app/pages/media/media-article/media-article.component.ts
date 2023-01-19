import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ContentServices } from 'src/content.service';

@Component({
  selector: 'app-media-article',
  templateUrl: './media-article.component.html',
  styleUrls: ['./media-article.component.scss']
})
export class MediaArticleComponent implements OnInit {

  media_img : string = ''
  media_title: string = ''
  mediaDesc: string =  ''

  mediaData = [
    {
  media_img : '',
  media_title: '',
  mediaDesc: ''
    }
  ]

  data : any = [];
  constructor(private _location: Location,private contentService: ContentServices) { }

  goBack(){
    this._location.back();
  }
  ngOnInit(): void {
    const com = this.contentService.getMessage();
    if(com != undefined){
      this.media_img = com.imageURL
      this.mediaDesc = com.caption
      this.media_title = com.title
    }
    else{
    }
  }

}
