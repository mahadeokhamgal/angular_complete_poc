import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { CheckboxGenComponent } from '../checkbox-gen/checkbox-gen.component';

@Component({
  selector: 'app-ag-grid-basic-grid',
  templateUrl: './ag-grid-basic-grid.component.html',
  styleUrls: ['./ag-grid-basic-grid.component.less']
})
export class AgGridBasicGridComponent {

  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    {
      field: 'year',
      filter: CheckboxGenComponent,
      checkboxSelection: true,
    },
    {
      field: 'name',
      filter: CheckboxGenComponent,
    },
  ];

  public defaultColDef: ColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };
  public rowData: any[] = [
    { year: '2010', name: 'Michael Phelps' },
    { year: '2011', name: 'Natalie Coughlin' },
    { year: '2012', name: 'Aleksey Nemov' },
    { year: '2013', name: 'Alicia Coutts' },
    { year: '2014', name: 'Missy Franklin' },
    { year: '2018', name: 'Ryan Lochte' },
    { year: '2001', name: 'Allison Schmitt' },
    { year: '2024', name: 'Natalie Coughlin' },
    { year: '2019', name: 'Ian Thorpe' },
    { year: '2010', name: 'Bob Mill' },
    { year: '2000', name: 'Willy Walsh' },
    { year: '2012', name: 'Sarah McCoy' },
    { year: '2013', name: 'Jane Jack' },
    { year: '2014', name: 'Tina Wills' },
  ];
  public themeClass: string =
    "ag-theme-quartz";
  frameworkComponents: any;
  gridOptions: GridOptions<any>;

  constructor() {
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      // enable filtering 
      enableFilter: true,
      columnDefs: this.columnDefs,
      rowData: this.rowData,
    };
  }

  onClicked() {
  }
  public rowSelection: 'single' | 'multiple' = 'multiple';


  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  groupData() {
    const groupData: any = {};
    this.rowData?.forEach(row => {
      const category = row.category;
      if (!groupData[category]) groupData[category] = [];
      groupData[category].push(row);
    })
    return Object.entries(groupData).map(([key, value]) => ({ category: key, children: value }))
  }
}