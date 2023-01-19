import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workshop-item',
  templateUrl: './workshop-item.component.html',
  styleUrls: ['./workshop-item.component.scss']
})
export class WorkshopItemComponent implements OnInit {

  @Input() slidedata: any;
  constructor() { }

  ngOnInit(): void {
  }

}
