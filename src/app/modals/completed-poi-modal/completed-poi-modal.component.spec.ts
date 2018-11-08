import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPoiModalComponent } from './completed-poi-modal.component';

describe('CompletedPoiModalComponent', () => {
  let component: CompletedPoiModalComponent;
  let fixture: ComponentFixture<CompletedPoiModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedPoiModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPoiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
