import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  @Input() navdata: any
  data : string = ''
  closeResult: string = '';
  constructor() { 
    
  }

  ngOnInit(): void {
    this.data = this.navdata
    console.log(this.data)
  }

}
