import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-fieldset',
     template: 
     `<div style='background: aquamarine;'><h3>{{getLabel(field)}}</h3></div>
     <div *ngFor="let field of field.fieldGroup; let i = index;">
        <formly-field [field] = "field"></formly-field>
      </div>`,
})

export class FormlyFieldFieldset extends FieldType {
    getLabel(field: any): string{
        return field.props?.label || 'Default';
    }
}