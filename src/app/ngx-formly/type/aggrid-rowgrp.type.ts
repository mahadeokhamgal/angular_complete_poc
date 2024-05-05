import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { FirstDataRenderedEvent, GridOptions, ColDef } from 'ag-grid-community';
import { GridFormlyCellComponent } from './grid-formly-cell.component';
import { DeepCopy } from '../../clone';
@Component({
    selector: 'formly-field-grid-row-group',
    templateUrl: './aggrid-rowgrp.type.html',
})

export class RowGroupTypeComponent extends FieldArrayType implements OnInit {
    gridOptions: GridOptions | undefined; style: any = {};
    emptyArray: any[] = [];
    // gridOptionsLocal: GridOptions[] | undefined;
    groupedData: any[] = [];
    groupedDataLocal: any[] = [];
    ngOnInit() {
        console.log('the props is', this.props);
        console.log("model is", this.model);


        this.style = { width: this.props['width'], height: this.props['height'], }; // map cell Renderer to Formly Component this.props.gridOptions.columnDefs.forEach((column: ColDef) => { column.cellRenderer = GridFormlyCellComponent; }); // set grid options and context of the parent formly field 
        const gridOptions: GridOptions = this.props['gridOptions'] || {};
        gridOptions.context = { parentField: this.field, };
        this.gridOptions = gridOptions;
        this.gridOptions['domLayout'] = 'autoHeight';
        this.gridOptions['suppressNoRowsOverlay'] = true;

        this.groupedData = this.groupBy(this.model, 'investmentDate') as any;
        Object.entries(this.groupedData).forEach((group: any, key) => {
            console.log("grouped data", group, key);
            this.groupedDataLocal[key] = {
                'title': group[0],
                'data': group[1],
                'gridOptions': DeepCopy.copy(this.gridOptions),
            }
        })
    }
    onFirstDataRendered(params: FirstDataRenderedEvent) {
        params.api.sizeColumnsToFit();
        console.log('grouped data is', this.groupBy(this.props['gridOptions']['rowData'], 'investmentDate'));
    }
    groupBy<T>(array: T[], key: keyof T): { [key: string]: T[] } {
        return array.reduce((acc: any, current) => {
            const keyName = current[key];
            if (!acc[keyName]) {
                acc[keyName] = [];
            }
            acc[keyName].push(current);
            return acc;
        }, {});
    }
    getGroupHeaders(): any[] {
        if (!this.props['gridOptions']['rowData']) {
            this.groupedData = [];
            return [];
        }
        this.groupedData = this.groupBy(this.props['gridOptions']['rowData'], 'investmentDate') as any;
        return Object.keys(this.groupedData);
    }

}