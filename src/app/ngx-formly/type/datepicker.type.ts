import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NgbDatepickerConfig, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FieldType, FormlyFormBuilder, FormlyFieldConfig } from '@ngx-formly/core';
import { startWith } from 'rxjs';


function padNumber(value: number) {
    return isNumber(value) ? `0${value}`.slice(-2) : '';
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}


@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {
    seperator = '.';

    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split(this.seperator);
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return {year: toInteger(dateParts[0]), month: 0, day: 0};
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return {year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: 0};
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return {year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])};
            }
        }   
        return {
            year : 0,
            month: 0,
            day  :0
        };
    }

    format(date: NgbDateStruct): string {
        let stringDate: string = ""; 
        if(date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + this.seperator : "";
            stringDate += isNumber(date.month) ? padNumber(date.month) + this.seperator : "";
            stringDate += date.year;
        }
        return stringDate;
    }
}



@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
//   styleUrls: ['./date-picker.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}]
})
export class DatePickerComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  getFormControl(field: FormlyFieldConfig) : FormControl{
    return field.formControl as FormControl;
}

  ngOnInit() {
  }

}