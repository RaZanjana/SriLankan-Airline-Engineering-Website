import { Component, OnInit, Input } from '@angular/core';
import { ContentServices } from 'src/content.service';

@Component({
  selector: 'app-main-carosel-item',
  templateUrl: './main-carosel-item.component.html',
  styleUrls: ['./main-carosel-item.component.scss']
})
export class MainCaroselItemComponent implements OnInit {
  @Input() data: any;
  constructor(private contentService: ContentServices) { }

  ngOnInit(): void {
  }

  SendInquiry(){
    this.contentService.setMessage("true");
  }

  CallEngineering(){
    location.href="tel:+94 (19) 733 2200"
  }

}
