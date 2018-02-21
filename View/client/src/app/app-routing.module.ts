import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAuthGuard  } from '@slb-planck-ui/web-framework';

import {
  PreloadSelectedModulesList,
  RouteData
} from '@slb-planck-ui/web-framework';

const appRoutes: Routes = [
    // {
    //     path: 'common',
    //     loadChildren: 'app/common/common.module#CommonModule',
    //     data: <RouteData>{
    //         preload: false,
    //         featureId: 'module:common'
    //     }
    // },
    {
        path: 'hello',
        loadChildren: 'app/hello/hello.module#HelloModule',
        data: <RouteData>{
            name: 'Hello',
            preload: false,
            featureId: ''
        }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadSelectedModulesList}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
