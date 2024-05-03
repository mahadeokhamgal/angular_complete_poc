import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridAngularComponent } from './ag-grid-angular/ag-grid-angular.component';
import { AgGridBasicGridComponent } from './ag-grid-basic-grid/ag-grid-basic-grid.component';
import { CheckboxGenComponent } from './checkbox-gen/checkbox-gen.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgGridAngularComponent,
    AgGridBasicGridComponent,
    CheckboxGenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule
  ],
  exports: [
    AgGridAngularComponent,
    AgGridBasicGridComponent
  ]
})
export class AgGridLocalModule { }
