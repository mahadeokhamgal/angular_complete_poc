import { Component } from '@angular/core';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IDoesFilterPassParams, IFilterParams } from 'ag-grid-community';

@Component({
  selector: 'app-checkbox-gen',
  templateUrl: './checkbox-gen.component.html',
  styleUrls: ['./checkbox-gen.component.less']
})
export class CheckboxGenComponent <T extends{[key: string]:any}> implements IFilterAngularComp {
  values:T[]=[];
   selectedValues:{[key:string]:boolean}={};
   columnKey : keyof T = '';
   column:any;
 params!: IFilterParams;
   // isFilterActiveBool: any;
   // year = 'All';
 agInit(params: IFilterParams): void {
   this.params = params;
   this.columnKey=params.colDef.field as keyof T;
   this.values=this.getCheckboxesForApi();
   // this.values.forEach(value=>{
   //     this.selectedValues[cellValue] = true;
   // });
 }

 getAllRows(): T[] {
   let rowData: T[] = [];
   this.params.api.forEachNode(node => rowData.push(node.data));
   return rowData;
 }
 getCheckboxesForApi(): T[] {
   this.values=[];
    this.params.api.forEachNode(node => this.values.push(node.data[this.columnKey]));
    return this.values;
 }
 isFilterActive(): boolean {
   return Object.values(this.selectedValues).some(value =>value);
 }

 doesFilterPass(params: IDoesFilterPassParams): boolean {
   const cellValue = params.data[this.columnKey]
   return this.selectedValues[cellValue];
 }

 getModel():any {
   return this.selectedValues;
 }

 setModel(model: any):void {
   this.selectedValues=model;
 }

 updateFilter():void {
   this.params.filterChangedCallback();
   this.params.filterModifiedCallback();
   console.log('calling change');
   
 }
}