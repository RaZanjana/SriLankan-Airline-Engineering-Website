import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateViewerComponent } from './certificate-viewer.component';

describe('CertificateViewerComponent', () => {
  let component: CertificateViewerComponent;
  let fixture: ComponentFixture<CertificateViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
