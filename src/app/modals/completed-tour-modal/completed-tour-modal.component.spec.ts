import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTourModalComponent } from './completed-tour-modal.component';

describe('CompletedTourModalComponent', () => {
  let component: CompletedTourModalComponent;
  let fixture: ComponentFixture<CompletedTourModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTourModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTourModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
