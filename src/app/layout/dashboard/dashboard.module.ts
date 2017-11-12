import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule} from 'ng2-smart-table';

import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
