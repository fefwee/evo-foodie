import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecipComponent } from './admin-recip.component';

describe('AdminRecipComponent', () => {
  let component: AdminRecipComponent;
  let fixture: ComponentFixture<AdminRecipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRecipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
