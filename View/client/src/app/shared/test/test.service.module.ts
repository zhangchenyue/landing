import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestService } from './test.service';
import { SharedInterceptor } from '../shared.interceptor';

@NgModule({
    imports: [
    ]
})
export class TestServiceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TestServiceModule,
            providers: [
                // {
                //     provide: HTTP_INTERCEPTORS,
                //     useClass: SharedInterceptor,
                //     multi: true
                // },
                TestService
            ]
        };
    }
}
