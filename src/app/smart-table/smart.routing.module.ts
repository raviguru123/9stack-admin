import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SmartTableComponent} from './smart-table.component';

const routes:Routes=[{
    path:'',
    component:SmartTableComponent
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class SmartRoutingModule {

}
