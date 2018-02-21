import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
/**
 * Hello module
 */
@NgModule({
    declarations: [
        HelloComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: HelloComponent },
        ])
    ],
    exports: [
        HelloComponent
    ],
})
export class HelloModule {
}
