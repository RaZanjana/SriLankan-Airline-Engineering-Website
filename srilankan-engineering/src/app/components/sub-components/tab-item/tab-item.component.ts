import { Component, OnInit, Input } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {
  @Input() tabData: any;
  longTitle : string = ''
  title1 : string = ''
  title2 : string = ''

  constructor() { }

  ngOnInit(): void {
    this.longTitle = this.tabData['title']
    this.title1 = (this.longTitle.split(" "))[0]
    this.title2 = (this.longTitle.split(" "))[1]
    console.log(this.title1);
  }

}
