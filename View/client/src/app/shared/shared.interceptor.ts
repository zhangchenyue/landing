import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

declare var ActiveXObject: any;

@Injectable()
export class SharedInterceptor implements HttpInterceptor {
    private settingURL = '/api/appsettings';
    private appSettingsSubject: ReplaySubject<any>;

    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.appSettingsSubject) {
            console.log('Fetching appSettings from server...');
            this.appSettingsSubject = new ReplaySubject<any>(1);
            this.getAppSettings().then((settings) => {
                this.appSettingsSubject.next(settings);
            }).catch((error) => {
                return this.appSettingsSubject.error(error);
            });
        }
        return this.appSettingsSubject
            .asObservable()
            .filter((settings: any) => !!settings)
            .flatMap((settings: any) => {
                request = request.clone({
                    setHeaders: {
                        'Authorization': `Bearer ${settings.serviceToken}`
                    }
                });
                return next.handle(request);
            });
    }

    getAppSettings(): Promise<any> {
        let xhr = null;
        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHttp');
        }
        return new Promise((resolve, reject) => {
            xhr.open('GET', this.settingURL);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 400) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.status);
                    }
                }
            };
            xhr.send(null);
        });
    }

}
