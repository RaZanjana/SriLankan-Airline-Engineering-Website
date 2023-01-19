import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogoItemComponent } from './client-logo-item.component';

describe('ClientLogoItemComponent', () => {
  let component: ClientLogoItemComponent;
  let fixture: ComponentFixture<ClientLogoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLogoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLogoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
