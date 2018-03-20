import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {
    private url: string;
    constructor(private http: HttpClient) {
        this.url = 'https://api-demo.nam.drillops.slb.com/rhintcore/well/v1/';
    }

    public getConfiguration(): any {
        return this.http.get(this.url);
    }
}
