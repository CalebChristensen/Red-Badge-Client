import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspreeComponent } from './formspree.component';

describe('FormspreeComponent', () => {
  let component: FormspreeComponent;
  let fixture: ComponentFixture<FormspreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormspreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormspreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
