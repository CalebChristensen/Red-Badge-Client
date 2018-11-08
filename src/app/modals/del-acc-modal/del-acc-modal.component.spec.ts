import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelAccModalComponent } from './del-acc-modal.component';

describe('DelAccModalComponent', () => {
  let component: DelAccModalComponent;
  let fixture: ComponentFixture<DelAccModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelAccModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelAccModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
