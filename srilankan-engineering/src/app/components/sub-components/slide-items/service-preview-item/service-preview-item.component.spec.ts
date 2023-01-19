import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePreviewItemComponent } from './service-preview-item.component';

describe('ServicePreviewItemComponent', () => {
  let component: ServicePreviewItemComponent;
  let fixture: ComponentFixture<ServicePreviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePreviewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
