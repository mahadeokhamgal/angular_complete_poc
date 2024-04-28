import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridBasicGridComponent } from './ag-grid-basic-grid.component';

describe('AgGridBasicGridComponent', () => {
  let component: AgGridBasicGridComponent;
  let fixture: ComponentFixture<AgGridBasicGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridBasicGridComponent]
    });
    fixture = TestBed.createComponent(AgGridBasicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
