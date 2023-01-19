import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-logo-item',
  templateUrl: './client-logo-item.component.html',
  styleUrls: ['./client-logo-item.component.scss']
})
export class ClientLogoItemComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
