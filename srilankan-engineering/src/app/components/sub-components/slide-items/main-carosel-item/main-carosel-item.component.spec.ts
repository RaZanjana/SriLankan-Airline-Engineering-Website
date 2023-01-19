import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaroselItemComponent } from './main-carosel-item.component';

describe('MainCaroselItemComponent', () => {
  let component: MainCaroselItemComponent;
  let fixture: ComponentFixture<MainCaroselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCaroselItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCaroselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
