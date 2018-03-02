import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAuthGuard } from '@slb-planck-ui/web-framework';

import {
    PreloadSelectedModulesList,
    RouteData
} from '@slb-planck-ui/web-framework';

const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
        data: <RouteData>{
            name: 'Home',
            preload: false,
            featureId: ''
        }
    },
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
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadSelectedModulesList })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
