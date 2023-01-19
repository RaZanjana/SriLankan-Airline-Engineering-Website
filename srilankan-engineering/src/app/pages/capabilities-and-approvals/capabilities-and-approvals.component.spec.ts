import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilitiesAndApprovalsComponent } from './capabilities-and-approvals.component';

describe('CapabilitiesAndApprovalsComponent', () => {
  let component: CapabilitiesAndApprovalsComponent;
  let fixture: ComponentFixture<CapabilitiesAndApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapabilitiesAndApprovalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapabilitiesAndApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
