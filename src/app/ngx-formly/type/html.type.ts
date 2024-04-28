import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-html',
     template: 
     `<span>html</span>
     <div [innerHTML]="to['html'] | safeHtml"></div>
     `,
})

export class FormlyFieldHtml extends FieldType {
    getHtml(field:FormlyFieldConfig):string{
      return field.props?.['html'] || 'default html';
    }
}