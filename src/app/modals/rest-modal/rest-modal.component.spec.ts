import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestModalComponent } from './rest-modal.component';

describe('RestModalComponent', () => {
  let component: RestModalComponent;
  let fixture: ComponentFixture<RestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
