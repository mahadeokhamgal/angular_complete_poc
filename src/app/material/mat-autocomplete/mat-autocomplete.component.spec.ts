import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutocompleteComponent } from './mat-autocomplete.component';

describe('MatAutocompleteComponent', () => {
  let component: MatAutocompleteComponent;
  let fixture: ComponentFixture<MatAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatAutocompleteComponent]
    });
    fixture = TestBed.createComponent(MatAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
