import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyBasicComponent } from './formly-basic/formly-basic.component';
import { FormlyFieldTabs } from './type/tabs.type';
import { FormlyFieldSection } from './type/section.type';
import { FormlyFieldFieldset } from './type/fieldset.type';
import { DatePickerComponent } from './type/datepicker.type';
import { FormlyFieldHtml } from './type/html.type';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldTypeahead } from './type/typeahead.type';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { SafeHtmlPipe } from './safe-html.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AgGridLocalModule } from '../ag-grid/ag-grid.module';
import { GridFormlyCellComponent } from './type/grid-formly-cell.component';
import { GridTypeComponent } from './type/aggrid.type';
import { AggridIntegrationComponent } from './aggrid-integration/aggrid-integration.component';



@NgModule({
  declarations: [
    FormlyBasicComponent,
    FormlyFieldTabs,
    FormlyFieldSection,
    FormlyFieldFieldset,
    DatePickerComponent,
    FormlyFieldHtml,
    FormlyFieldTypeahead,
    SafeHtmlPipe,
    GridTypeComponent,
    GridFormlyCellComponent,
    AggridIntegrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
    AgGridLocalModule,
    FormlyModule.forRoot({
      validationMessages: [{ name: 'required', message: 'This field is required' }],
      types: [
        { name: 'tabs', component: FormlyFieldTabs },
        { name: 'section', component: FormlyFieldSection },
        { name: 'fieldset', component: FormlyFieldFieldset },
        { name: 'date', component: DatePickerComponent },
        { name: 'htmlTemplate', component: FormlyFieldHtml },
        { name: 'typeahead', component: FormlyFieldTypeahead },
        { name: 'aggrid', component: GridTypeComponent, defaultOptions: { props: { width: '100%', height: '400px', }, }, }
      ],
      wrappers: []
    }),
    FormlyBootstrapModule,
  ],
  exports: [
    FormlyBasicComponent,
    FormlyFieldTabs,
    FormlyFieldSection,
    FormlyFieldFieldset,
    DatePickerComponent,
    FormlyFieldHtml,
    FormlyFieldTypeahead,
    SafeHtmlPipe,
  ]
})
export class NgxFormlyModule { }
