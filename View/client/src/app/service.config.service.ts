import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {
    ServiceConfig
} from '@slb-planck-ui/web-core';

const windowRef: any = <any>window;
export const url: string = (windowRef.planck &&
    windowRef.planck.config &&
    windowRef.planck.config.urls &&
    windowRef.planck.config.urls.internal &&
    windowRef.planck.config.urls.internal.apiHubUrl &&
    windowRef.planck.config.urls.internal.apiHubUrl !== ''
) ? windowRef.planck.config.urls.internal.apiHubUrl : window.location.origin + '/api';
const serviceConfig: any = new ServiceConfig();
serviceConfig.repositoryUrl$ = Observable.of(url);
serviceConfig.streamUrl$ = Observable.of(url);
serviceConfig.streamParams$ = Observable.of({
    'unitSystemName': 'display'
});

export function serviceConfigFactory(): ServiceConfig {
    return serviceConfig;
}
