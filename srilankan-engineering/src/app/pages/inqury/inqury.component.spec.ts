import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquryComponent } from './inqury.component';

describe('InquryComponent', () => {
  let component: InquryComponent;
  let fixture: ComponentFixture<InquryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
