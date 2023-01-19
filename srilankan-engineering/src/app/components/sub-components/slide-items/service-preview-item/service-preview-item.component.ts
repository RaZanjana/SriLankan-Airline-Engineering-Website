import { Component, OnInit, Input, EventEmitter, Output, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContentServices } from 'src/content.service';

@Component({
  selector: 'app-service-preview-item',
  templateUrl: './service-preview-item.component.html',
  styleUrls: ['./service-preview-item.component.scss']
})
export class ServicePreviewItemComponent implements OnInit {
  @Input() data: any
   ComCode : string = ''
   Sequenceno : string = '';
   @Output() notify: EventEmitter<string> = new EventEmitter();
  constructor(private _router: Router,private contentService: ContentServices) { }

  ngOnInit(): void {
  }

  LoadService(datas:any){
    this.ComCode = datas.ComponentCode
    this.Sequenceno = datas.SequenceNo
    console.log(this.ComCode);
    this.notify.emit(datas.ComponentCode)
    this.contentService.setMessage(datas);
    this._router.navigate(['srilankan-engineering/our-services']);

    }
}
