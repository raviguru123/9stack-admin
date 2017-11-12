import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        AdminRoutingModule,
        StatModule,
    ],
    declarations: [
        AdminComponent
    ]
})
export class AdminModule { }
