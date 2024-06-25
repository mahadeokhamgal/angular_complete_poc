import { ChangeDetectorRef, Component, OnInit, ViewChildren } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { GridOptions, ColDef, ColGroupDef } from 'ag-grid-community';
import * as _ from 'lodash';

@Component({
    selector: 'formly-field-grid-row-group',
    templateUrl: './aggrid-rowgrp.type.html',
    styleUrls: ["./aggrid.rowgroup.css"],
})

export class RowGroupTypeComponent extends FieldArrayType implements OnInit {
    gridOptions: GridOptions | undefined;
    style: any = {};
    groupedData: any[] = [];
    groupedDataLocal: any[] = [];
    columnDefs!: (ColDef | ColGroupDef)[];
    
    @ViewChildren('dynamicElements') dynamicElementRefsC !: any;
    totalEntries: number = 0;
    pageSize:number = 20;
    groupedDataPerPage: any;
    constructor(private cdr: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        
        /**
         * // map cell Renderer to Formly Component 
         * this.props.gridOptions.columnDefs.forEach((column: ColDef) => { column.cellRenderer = GridFormlyCellComponent; }); 
         * // set grid options and context of the parent formly field 
         */
        // console.log("sorted", this.model.sort((a: any, b: any) => a['investmentDate'].localeCompare(b['investmentDate'])));

        
        this.model.sort((a: any, b: any) => a['investmentDate'].localeCompare(b['investmentDate']))

        this.style = { width: this.props['width'], height: this.props['height'], }; 
        const gridOptions: GridOptions = this.props['gridOptions'] || {};
        gridOptions.context = { parentField: this.field, };
        this.gridOptions = gridOptions;
        this.columnDefs = gridOptions.columnDefs as any;
        this.gridOptions['domLayout'] = 'autoHeight';
        this.gridOptions['suppressNoRowsOverlay'] = true;

        this.totalEntries = (this.model|| []).length;
        this.gotoPage(1);
        // setTimeout(() => {
        //     this.gotoPage(2);
        // }, 4000)
    }

    /**
     * this one to get the only rows dedicated to current page.
     * need to think of scenario when user clicks on selectall, if the grids on other pages if they'll be active or not and overhead on app from it.  
     */
    gotoPage(pageNo: number){
        let endIndex = Math.min((pageNo) * this.pageSize, this.model.length);
        let startIndex = ((pageNo-1) * this.pageSize) + 1;
        console.log(endIndex, startIndex);
        var tempModel = _.cloneDeep(this.model).splice(startIndex-1, this.pageSize);
        console.log("tempModel", tempModel);
        this.updateDataForCurrentPage(tempModel);   
    }

    updateDataForCurrentPage(data: any[]) {
        this.groupedDataLocal = [];
        let idx = 0;
        Object.entries(this.groupBy(data, 'investmentDate')).forEach((group: any, key) => {
            console.log("grouped data", group, key);
            this.groupedDataLocal[key] = {
                'id': idx++,
                'title': group[0],
                'data': group[1],
                'gridOptions': _.cloneDeep(this.gridOptions),
                'isCollapsed': false,
            }
        })
        this.cdr.detectChanges();
    }

    /**
     * i do nothing just to trigger change detection so html will zone will bind
     * [alignedGrids]="dynamicElementRefsC" with latest value
     * @param params 
     * @param id 
     * @returns 
     */
    onGridReadyGroup() {
        /**
         * this.groupedDataLocal[id as any].gridApi = params.api;
         */
        this.cdr.detectChanges();
    }

    /**
     * To group the input rowdata as per grouping rule provided
     * @param array 
     * @param key 
     * @returns 
     */
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

}