import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyBasicComponent } from './formly-basic.component';

describe('FormlyBasicComponent', () => {
  let component: FormlyBasicComponent;
  let fixture: ComponentFixture<FormlyBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlyBasicComponent]
    });
    fixture = TestBed.createComponent(FormlyBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
