import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTableModule, PanelModule, IconModule } from '@slb-planck-ui/web-components';
import { ActionBarModule } from './action-bar';
import { HomeComponent } from './home.component';
/**
 * Home module
 */
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        DataTableModule,
        PanelModule,
        IconModule,
        ActionBarModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent },
        ])
    ],
    exports: [
        HomeComponent
    ],
})
export class HomeModule {
}
