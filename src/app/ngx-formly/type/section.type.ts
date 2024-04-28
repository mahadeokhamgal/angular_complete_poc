import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-section',
     template: 
     `<div *ngFor="let field of field.fieldGroup; let i = index;">
        <formly-field [field] = "field"></formly-field>
      </div>`,
})

export class FormlyFieldSection extends FieldType {
    
}