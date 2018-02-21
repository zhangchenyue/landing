import { NgModule } from '@angular/core';

import { WebFrameworkSharedModule } from '@slb-planck-ui/web-framework';

@NgModule({
    imports: [
        WebFrameworkSharedModule
    ],
    exports: [
        WebFrameworkSharedModule
    ]
})
export class SharedModule {
}
