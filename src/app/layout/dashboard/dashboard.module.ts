import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Ng2TableModule } from '../components/tablecomponents/ng-table-module';

//import { TableDemoComponent } from './shipment_component/table/table-demo';
//import { TableSectionComponent } from './shipment_component/table-section';
//import { RowContentComponent } from './shipment_component/table/row-content/row-content.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { BarchartComponent } from '../shared/barchart/barchart.component';
import { DonutComponent } from '../donut-chart/donut.component';

import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent,
    TabsComponent,
    TableDemoComponent,
    StoreTransferComponent,
    PoShipmentComponent,
    RowContentComponent,
    PORowContentComponent,
    STRowContentComponent

} from './components';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbCarouselModule.forRoot(),
        PaginationModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        Ng2TableModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        TabsComponent,
        TableDemoComponent,
        StoreTransferComponent,
        PoShipmentComponent,
        RowContentComponent,
        PORowContentComponent,
        STRowContentComponent,
        HomeComponent,
        BarchartComponent,
        DonutComponent
      
        
    ],
    entryComponents: [RowContentComponent,PORowContentComponent,
        STRowContentComponent]
})
export class DashboardModule {}

