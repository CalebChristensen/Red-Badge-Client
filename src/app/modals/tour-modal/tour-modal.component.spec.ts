import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourModalComponent } from './tour-modal.component';

describe('TourModalComponent', () => {
  let component: TourModalComponent;
  let fixture: ComponentFixture<TourModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
