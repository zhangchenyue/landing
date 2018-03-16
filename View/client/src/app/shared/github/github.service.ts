import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {
    private url: string;
    constructor(private http: HttpClient) {
        this.url = 'https://api.github.com/';
    }

    public getConfiguration(): any {
        return this.http.get(this.url);
    }
}
