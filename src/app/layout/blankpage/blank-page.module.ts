import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { Ng2SmartTableModule} from 'ng2-smart-table';
@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    BlankPageRoutingModule
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
