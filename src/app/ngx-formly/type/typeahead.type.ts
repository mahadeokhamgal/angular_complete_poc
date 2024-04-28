import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, debounceTime, map, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'formly-field-html',
  template:
    `
    <b>{{ field.props?.['label'] }}</b>
        <input class="form-control" type="text" [formControl]="getFormControl(field)"
        placeholder="Pick one" aria-label="Number" 
        matInput 
            [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let option of filteredOptions | async;" 
            [value]="option">{{option}}</mat-option>
        </mat-autocomplete>
     `,
})

export class FormlyFieldTypeahead extends FieldType {

  filteredOptions: Observable<any> = of([]);

  ngOnInit() {

    this.filteredOptions = this.formControl.valueChanges
    .pipe(
      startWith(''),
        switchMap(term => this.props['filter'](term)),
    )
  }

  getFormControl(field: FormlyFieldConfig): FormControl {
    return field.formControl as FormControl;
  }
  
}

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];