import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngularComponent } from './ag-grid-angular/ag-grid-angular.component';
import { AgGridBasicGridComponent } from './ag-grid-basic-grid/ag-grid-basic-grid.component';



@NgModule({
  declarations: [
    AgGridAngularComponent,
    AgGridBasicGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgGridAngularComponent,
    AgGridBasicGridComponent
  ]
})
export class AgGridModule { }
