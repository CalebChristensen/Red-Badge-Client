import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedRestModalComponent } from './completed-rest-modal.component';

describe('CompletedRestModalComponent', () => {
  let component: CompletedRestModalComponent;
  let fixture: ComponentFixture<CompletedRestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedRestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedRestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
