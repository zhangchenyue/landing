import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from '@slb-planck-ui/web-components';
import { HomeComponent } from './home.component';
/**
 * Home module
 */
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        DataTableModule,
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
