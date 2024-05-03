import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridIntegrationComponent } from './aggrid-integration.component';

describe('AggridIntegrationComponent', () => {
  let component: AggridIntegrationComponent;
  let fixture: ComponentFixture<AggridIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggridIntegrationComponent]
    });
    fixture = TestBed.createComponent(AggridIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
