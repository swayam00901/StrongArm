import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Ng2TableModule } from '../components/tablecomponents/ng-table-module';
import { DemoRoutingModule } from './demo.routing.module';

import { TableDemoComponent } from './shipment_component/table/table-demo';
import { TableSectionComponent } from './shipment_component/table-section';
import { RowContentComponent } from './shipment_component/table/row-content/row-content.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoComponent,
    TableDemoComponent,
    TableSectionComponent,
    RowContentComponent
  ],
  imports: [

    FormsModule,
    Ng2TableModule,
    DemoRoutingModule,
    PaginationModule.forRoot(),
    TabsModule,
    CommonModule
  ],
  entryComponents: [RowContentComponent],
  providers: [],
 
})

export class Ng2TableDemoModule {
}
