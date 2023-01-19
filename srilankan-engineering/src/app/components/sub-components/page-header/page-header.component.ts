import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

  Downloadfile(FileUrl:string){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', FileUrl);
    link.setAttribute('download', `brochure.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
