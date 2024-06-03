import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
// import { AgGridAngular } from 'ag-grid-angular';
import { FirstDataRenderedEvent, GridOptions, ColDef, GridReadyEvent, ColGroupDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { GridFormlyCellComponent } from './grid-formly-cell.component';
import * as _ from 'lodash';
@Component({
    selector: 'formly-field-grid-row-group',
    templateUrl: './aggrid-rowgrp.type.html',
})

export class RowGroupTypeComponent extends FieldArrayType implements OnInit {
    gridOptions: GridOptions | undefined;
    style: any = {};
    emptyArray: any[] = [];
    emptyArray2: any[] = [];
    // gridOptionsLocal: GridOptions[] | undefined;
    groupedData: any[] = [];
    groupedDataLocal: any[] = [];
    columnDefs!: (ColDef | ColGroupDef)[];
    @ViewChild('topGrid') topGrid!: AgGridAngular;
    @ViewChildren('dynamicElements') dynamicElementRefsC !: any;
    ngOnInit() {
        console.log('the props is', this.props);
        console.log("model is", this.model);


        this.style = { width: this.props['width'], height: this.props['height'], }; // map cell Renderer to Formly Component this.props.gridOptions.columnDefs.forEach((column: ColDef) => { column.cellRenderer = GridFormlyCellComponent; }); // set grid options and context of the parent formly field 
        const gridOptions: GridOptions = this.props['gridOptions'] || {};
        gridOptions.context = { parentField: this.field, };
        this.gridOptions = gridOptions;
        this.columnDefs = gridOptions.columnDefs as any;
        this.gridOptions['domLayout'] = 'autoHeight';
        this.gridOptions['suppressNoRowsOverlay'] = true;

        this.groupedData = this.groupBy(this.model, 'investmentDate') as any;
        let idx = 0;
        Object.entries(this.groupedData).forEach((group: any, key) => {
            console.log("grouped data", group, key);
            this.groupedDataLocal[key] = {
                'id': idx++,
                'title': group[0],
                'data': group[1],
                'gridOptions': _.cloneDeep(this.gridOptions),
                'isCollapsed': false,
            }
        })
    }
    onFirstDataRendered(params: FirstDataRenderedEvent) {
        // params.api.sizeColumnsToFit();
        // console.log('grouped data is', this.groupBy(this.props['gridOptions']['rowData'], 'investmentDate'));
    }
    getMiddleAlignedGrids() {
        return this.topGrid ?
            [...(this.groupedDataLocal || []).map(e => e.gridApi).filter(e => e), this.topGrid]
            : (this.groupedDataLocal || []).map(e => e.gridApi).filter(e => e);
    }
    onGridReadyGroup(params: GridReadyEvent, id: string | number) {
        this.groupedDataLocal[id as any].gridApi = params.api;
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