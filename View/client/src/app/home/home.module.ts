import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTableModule, PanelModule, IconModule, AsyncLoaderModule, ButtonModule } from '@slb-planck-ui/web-components';
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
        ButtonModule,
        DataTableModule,
        PanelModule,
        IconModule,
        ActionBarModule,
        AsyncLoaderModule,
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
