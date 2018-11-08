import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelModalComponent } from './admin-del-modal.component';

describe('AdminDelModalComponent', () => {
  let component: AdminDelModalComponent;
  let fixture: ComponentFixture<AdminDelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
