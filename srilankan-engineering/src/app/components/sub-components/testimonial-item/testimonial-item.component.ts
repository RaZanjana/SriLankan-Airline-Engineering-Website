import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss']
})

export class TestimonialItemComponent implements OnInit {

  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}
