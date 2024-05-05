import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { FirstDataRenderedEvent, GridOptions, ColDef } from 'ag-grid-community';
import { GridFormlyCellComponent } from './grid-formly-cell.component';
@Component({
    selector: 'formly-field-grid', 
    templateUrl:'./aggrid-rowgrp.type.html',
})

export class RowGroupTypeComponent extends FieldArrayType implements OnInit {
    gridOptions: GridOptions | undefined; style: any = {};
    ngOnInit() {
        console.log('the props is',this.props)
        
        this.style = { width: this.props['width'], height: this.props['height'], }; // map cell Renderer to Formly Component this.props.gridOptions.columnDefs.forEach((column: ColDef) => { column.cellRenderer = GridFormlyCellComponent; }); // set grid options and context of the parent formly field 
        const gridOptions: GridOptions = this.props['gridOptions'] || {};
        gridOptions.context = { parentField: this.field, };
        this.gridOptions = gridOptions;
       
    }
    onFirstDataRendered(params: FirstDataRenderedEvent) { 
        params.api.sizeColumnsToFit();
        console.log('grouped data is',this.groupBy(this.props['gridOptions']['rowData'],'investmentDate'));
     }
    groupBy<T>(array: T[], key: keyof T): { [key: string]: T[] } {
        return array.reduce((acc : any, current) => {
            const keyName = current[key];
            if (!acc[keyName]) {
                acc[keyName] = [];
            }
            acc[keyName].push(current);
            return acc;
        }, {});
    }
    
 
    
 
}