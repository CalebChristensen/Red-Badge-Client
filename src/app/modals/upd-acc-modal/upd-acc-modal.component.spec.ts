import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdAccModalComponent } from './upd-acc-modal.component';

describe('UpdAccModalComponent', () => {
  let component: UpdAccModalComponent;
  let fixture: ComponentFixture<UpdAccModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdAccModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdAccModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
