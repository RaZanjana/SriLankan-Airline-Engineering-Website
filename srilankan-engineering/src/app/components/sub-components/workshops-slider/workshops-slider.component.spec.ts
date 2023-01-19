import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsSliderComponent } from './workshops-slider.component';

describe('WorkshopsSliderComponent', () => {
  let component: WorkshopsSliderComponent;
  let fixture: ComponentFixture<WorkshopsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
