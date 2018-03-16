import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ActivitiesServiceModule,
  ApiHubServiceModule,
  BusinessesServiceModule,
  ComputationProcessesServiceModule,
  defaultInterceptorsWithDisplayUnitSystem,
  defaultInterceptors,
  DefaultRequestHttpInterceptor,
  DepthDataServiceModule,
  DnmAcquisitionServiceModule,
  DrillerMonitoringServiceModule,
  DrillstringServiceModule,
  EmDownlinkServiceModule,
  EventLogServiceModule,
  HttpServiceModule,
  HvLogMemoryServiceModule,
  HvTelemetryServiceModule,
  InferenceServiceModule,
  PipeTallyServiceModule,
  PlannerServiceModule,
  PlmServiceModule,
  PrismGatewayServiceModule,
  QuantitiesServiceModule,
  SettingsServiceModule,
  SetUnitSystemHttpInterceptor,
  SpectrogramServiceModule,
  TimeDataServiceModule,
  TrajectoryServiceModule,
  UserManagementServiceModule,
  WebCoreModule,
  WellConstructionMetierServiceModule,
  WellprogramManagerServiceModule
} from '@slb-planck-ui/web-core';


import { serviceConfigFactory } from './service.config.service';
import { GithubServiceModule, GithubService } from './shared/github';

export function httpInterceptorsFactory(): Array<any> {
    return defaultInterceptors;
}

export function httpInterceptorsForHttpServiceFactory(): Array<any> {
    return [];
}
export function defaultHttpInterceptorsForHttpServiceFactory(): Array<any> {
    return defaultInterceptorsWithDisplayUnitSystem;
}

/**
 * The hub mappings need to be added to this set for the api hub so that
 * only 1 connection is created for each of the hubs.
 */

@NgModule({
    imports: [
        HttpClientModule,
        HttpServiceModule.forRoot(httpInterceptorsForHttpServiceFactory),
        WebCoreModule.forRoot(),
        // needed to load all of the common services for web core
        ApiHubServiceModule.forRoot(serviceConfigFactory, httpInterceptorsFactory),
      //  ActivitiesServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
      //  BusinessesServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
      //  ComputationProcessesServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
      //  DepthDataServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
      //  DnmAcquisitionServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
     //   DrillerMonitoringServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
     //   DrillstringServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
     //   EmDownlinkServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
     //   EventLogServiceModule.forRoot(serviceConfigFactory, httpInterceptorsFactory),
    //    HvLogMemoryServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
    //    HvTelemetryServiceModule.forRoot(serviceConfigFactory, httpInterceptorsFactory),
     //   InferenceServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
     //   PipeTallyServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
     //   PlannerServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
    //    PlmServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
      //  PrismGatewayServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
     //   QuantitiesServiceModule.forRoot(serviceConfigFactory, httpInterceptorsFactory),
     //   SettingsServiceModule.forRoot(serviceConfigFactory, httpInterceptorsFactory),
    //    SpectrogramServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
        TimeDataServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
    //    TrajectoryServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
      //  UserManagementServiceModule.forRoot(serviceConfigFactory, httpInterceptorsFactory),
   //     WellConstructionMetierServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
   //     WellprogramManagerServiceModule.forRoot(serviceConfigFactory, defaultHttpInterceptorsForHttpServiceFactory),
        GithubServiceModule.forRoot()
    ],
    providers: [
        DefaultRequestHttpInterceptor,
        SetUnitSystemHttpInterceptor,
    ]
})
export class AppWebCoreModule {
}
