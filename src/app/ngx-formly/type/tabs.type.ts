import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-tabs',
     template: 
     `<mat-tab-group> 
        <mat-tab *ngFor="let tab of field.fieldGroup; let i = index; let last = last" [label]="tab.props?.label + getErrorCount(tab)" > 
            <formly-field [field]="tab"></formly-field>
                <button *ngIf="last && field.props?.['isSubmit']" class="btn btn-primary" [disabled]="!form.valid" type="submit">Submit</button>
        </mat-tab>
    </mat-tab-group>`,
})

export class FormlyFieldTabs extends FieldType {
    TabWiseFields:any = {};
    getLabel(tab: any): string{
        return (tab.props?.label + this.getErrorCount(this.field)) || 'Default';
    }

    getErrorCount(field: FormlyFieldConfig){
        this.extractAllFieldsRecurse(field, field.props?.label);
        let errCount = this.TabWiseFields[field.props?.label as string]?.filter((f:any) => 
            f.formControl.errors !== null
        ).length;
        // if(errCount == 0) return 'def';
        return ' - -> ' + errCount; 
    }
    extractAllFieldsRecurse(field: FormlyFieldConfig, tab: any): void {
        if(field.fieldGroup && field.fieldGroup.length > 0) 
            for(let key of field.fieldGroup) 
                this.extractAllFieldsRecurse(key, tab);
        else {
            if(!this.TabWiseFields.hasOwnProperty(tab)) this.TabWiseFields[tab] = [];
            this.TabWiseFields[tab] = this.TabWiseFields[tab].filter((f:any) => f.key !== field.key).concat(field);
        }
    }

    // isValid(field: FormlyFieldConfig): boolean {
    //     if (field.key) {
    //         return field.formControl.valid;
    //     }
    //     return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
    // }
}