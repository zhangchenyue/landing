import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import {
  DashboardComponent,
  DashboardModule,
  RigDeploymentModule,
  MenuItem,
  MenuStoreService,
  PageStoreService,
  WebFrameworkConfig,
  WebFrameworkModule,
} from '@slb-planck-ui/web-framework';

import { IconRegistry } from '@slb-planck-ui/web-components';
import { AppRoutingModule } from './app-routing.module';
import { AppWebCoreModule } from './app-web-core.module';
import { SharedModule } from './shared/shared.module';
import { getMenuItemsForProduct } from './menu-items';
import { environment } from '../environments/environment';


export const frameworkConfig: WebFrameworkConfig = {
  productTitle: 'Landing',
  applicationTitle: 'Execution',
  theme: {
    defaultTheme: 'light',
    themePath: {
      light: [
        'assets/global_theme_light.css',
        'assets/framework_theme_light.css'
      ],
      dark: [
        'assets/global_theme_dark.css',
        'assets/framework_theme_dark.css'
      ]
    },
  }
};


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    WebFrameworkModule.forRoot(frameworkConfig),
    DashboardModule,
    RigDeploymentModule,
    AppRoutingModule,
    AppWebCoreModule,
    SharedModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule {
  constructor(menuStoreService: MenuStoreService,
    pageStoreService: PageStoreService,
    iconRegistry: IconRegistry,
    sanitizer: DomSanitizer) {
    const menuItems: Array<MenuItem> = getMenuItemsForProduct();
    menuStoreService.setMenuItems(menuItems);

    // set the product title here since the AOT will remove window properties from the config definition.
    pageStoreService.setProductTitle('Landing page');
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/basic.svg'));
  }
}
