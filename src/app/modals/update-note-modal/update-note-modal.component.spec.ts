import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoteModalComponent } from './update-note-modal.component';

describe('UpdateNoteModalComponent', () => {
  let component: UpdateNoteModalComponent;
  let fixture: ComponentFixture<UpdateNoteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNoteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
