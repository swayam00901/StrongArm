import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTableComponent } from './table/ng-table.component';

import { MyDatePickerModule } from 'mydatepicker';
import { NgTableFilteringDirective } from './table/ng-table-filtering.directive';
import { NgTablePagingDirective } from './table/ng-table-paging.directive';
import { NgTableSortingDirective } from './table/ng-table-sorting.directive';
import { NgTableRowComponent } from './table/ng-table-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
 
} from '@angular/material';
import {DpDatePickerModule} from 'ng2-date-picker';




@NgModule({
  imports: [CommonModule,DpDatePickerModule,MyDatePickerModule,FormsModule],
  declarations: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective, NgTableRowComponent],
  exports: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
  
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule]
})
export class Ng2TableModule {
}



/** WEBPACK FOOTER **
 ** ./components/ng-table-module.ts
 **/