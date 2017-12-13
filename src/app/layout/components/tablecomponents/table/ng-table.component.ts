import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, Compiler, ViewContainerRef, ViewChild, ComponentRef, ComponentFactory, ComponentFactoryResolver} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {IMyDpOptions} from 'mydatepicker';
// other imports here...
declare var require: any;
let template = require('./ng-table.html');

@Component({
  selector: 'ng-table',
  template,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgTableComponent {
  // Table values
  @Input() public expandedComponent:any;
  @Input() public rows:Array<any> = [];
  @Input() public expandable:boolean;
  @Input() public editingRow:number;
  @Input() public editingColumn:number;
  @Input() public rowInputs:any = {};
  @Input()
  public set config(conf:any) {
    if (conf.className instanceof Array) {
      conf.className = conf.className.join(' ');
    }
    this._config = conf;
  }


  // Outputs (Events)
  @Output() public tableChanged:EventEmitter<any> = new EventEmitter();
  @Output() public cellClicked:EventEmitter<any> = new EventEmitter();
  @Output() public expanderClicked:EventEmitter<any> = new EventEmitter();
  @Output() public scrolledDown:EventEmitter<any> = new EventEmitter();
  @Output() public valueEdit:EventEmitter<any> = new EventEmitter();

  public showFilterRow:Boolean = false;
  public showExpandedRow:Boolean = false;
  public expandedRowIndex:number = null;
  public currentChanges: any = {};

  @Input()
  public set columns(values:Array<any>) {
    values.forEach((value:any) => {
      if (value.filtering) {
        this.showFilterRow = true;
      }
      if (value.className && value.className instanceof Array) {
        value.className = value.className.join(' ');
      }
      let column = this._columns.find((col:any) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
  }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm/dd/yyyy',
};

public dateConfig = {
  // other options...
  format: "MM/DD/YYYY",
};

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };
dateSelected: string = '';
  private _columns:Array<any> = [];
  private _config:any = {};
  public scrollPercentage:number = 0;

  public constructor(private sanitizer:DomSanitizer, public ref: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {
  }

  public sanitize(html:string):SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public get columns():Array<any> {
    return this._columns;
  }

  public get config():any {
    return this._config;
  }

  public get configColumns():any {
    let sortColumns:Array<any> = [];

    this.columns.forEach((column:any) => {
      if (column.sort) {
        sortColumns.push(column);
      }
    });

    return {columns: sortColumns};
  }

  public onChangeTable(column:any):void {
    this._columns.forEach((col:any) => {
      if (col.name !== column.name && col.sort !== false) {
        col.sort = '';
      }
    });
    this.showExpandedRow = false;
    this.expandedRowIndex = null;
    this.tableChanged.emit({sorting: this.configColumns});
    this.ref.markForCheck();
  }

  public toggleRowExpansion(row:any, rowNum:number) {
      if (this.showExpandedRow && (this.expandedRowIndex == rowNum)) {
          this.showExpandedRow = false;
          this.expandedRowIndex = null;
      }
      else {
          this.showExpandedRow = true;
          this.expandedRowIndex = rowNum;
          this.expanderClicked.emit({ row: row, rowNum: rowNum });
          this.ref.markForCheck();
      }
  };

  public checkScroll(event:any) {
      this.scrollPercentage = event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight);
      if (this.scrollPercentage > this.config.renderMoreAt) {
          this.scrolledDown.emit(this.scrollPercentage);
      }
  };


  public getData(row:any, propertyName:string):string {
    return propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
  }

  public cellClick(row:any, column:any):void {
    this.cellClicked.emit({row, column});
  }

  public setRowToEdit(rowIndex:any, column:any){
    this.editingRow = rowIndex;
    for(let col of this.columns){
      if(col.editWith != this.columns[column].name){
        col.isEditing = false;
      }else if(col.editWith === this.columns[column].name){
        col.isEditing = true;
      } 
      else if(col.showDate === this.columns[column].name){
        col.showDatePicker = true;
      } 
    }
    this.columns[column].isEditing = true;
  }

  public updateChanges(colName:any, val:any){
    this.currentChanges[colName] = val.value;
  }

  public submitChange(row:any, rIndex:number, columnName:string, cIndex:number, newVal:any ){
    let valueChange = {
                        rowChanged: row,
                        rowIndex: rIndex,
                        columnChanged: columnName,
                        columnIndex: cIndex,
                        oldValue: row[columnName],
                        newValue: newVal.value
                      }

    let allChanges = [valueChange];
    
    this.columns.forEach((col, index) => {
      if(col.editWith === this.columns[cIndex].name && this.currentChanges[col.name] != undefined){
        let newValueChange = {
                              rowChanged: row,
                              rowIndex: rIndex,
                              columnChanged: col.name,
                              columnIndex: index,
                              oldValue: row[col.name],
                              newValue: this.currentChanges[col.name]
                             }
        allChanges.push(newValueChange);
      }
    })
    // Check for changes
    let noChanges = true;
    for(let change of allChanges){
      if(change.newValue != change.oldValue){
        noChanges = false;
      }
    }
    if(noChanges){
      this.editingRow = null;
      return;
    }
    this.valueEdit.emit(allChanges);
    this.editingRow = null;

    this.currentChanges = {};
  }
}



/** WEBPACK FOOTER **
 ** ./components/table/ng-table.component.ts
 **/