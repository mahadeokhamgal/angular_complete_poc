import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxGenComponent } from './checkbox-gen.component';

describe('CheckboxGenComponent', () => {
  let component: CheckboxGenComponent;
  let fixture: ComponentFixture<CheckboxGenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxGenComponent]
    });
    fixture = TestBed.createComponent(CheckboxGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
