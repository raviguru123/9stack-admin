import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'dashboard', loadChildren: './admin/admin.module#AdminModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
