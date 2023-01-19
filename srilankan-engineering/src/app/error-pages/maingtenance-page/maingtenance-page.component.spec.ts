import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaingtenancePageComponent } from './maingtenance-page.component';

describe('MaingtenancePageComponent', () => {
  let component: MaingtenancePageComponent;
  let fixture: ComponentFixture<MaingtenancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaingtenancePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaingtenancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
