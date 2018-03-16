import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GithubService } from './github.service';
import { SharedInterceptor } from '../shared.interceptor';

@NgModule({
    imports: [
        
    ]
})
export class GithubServiceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GithubServiceModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: SharedInterceptor,
                    multi: true
                },
                GithubService
            ]
        };
    }
}
