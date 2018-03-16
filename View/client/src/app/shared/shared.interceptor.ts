import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedInterceptor implements HttpInterceptor {
    private settingURL = '/api/appsettings';
    private static appSettings: Object = null;
  
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return Observable.fromPromise(this.handleAccess(request, next));
    };

    private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        if(!SharedInterceptor.appSettings){
            SharedInterceptor.appSettings = await this.getAppSettings();
        }
        request = request.clone({
                    setHeaders: {
                        'Authorization': `Bearer ${SharedInterceptor.appSettings.serviceToken}`
                    }
                });
        return next.handle(request).toPromise();
    }

    getAppSettings():Promise<any>{
        let xhr = null;
        if(XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject('Microsoft.XMLHttp');
        }
        return new Promise((resolve, reject)=>{
            xhr.open('GET', this.settingURL);
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState==4){
                    if(xhr.status>=200 && xhr.status<400){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr.status);
                    }
                }
            }
            xhr.send(null);
        });
    }
    
}
