import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotLineComponent } from './dot-line.component';

describe('DotLineComponent', () => {
  let component: DotLineComponent;
  let fixture: ComponentFixture<DotLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
