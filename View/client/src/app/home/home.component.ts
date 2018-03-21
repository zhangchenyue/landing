import { Component, OnInit } from '@angular/core';
import { Well } from './home.models';
import { GithubService } from '../shared/github';
import { TestService } from '../shared/test';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title = 'home';
    private wells: Array<Well> = [];

    constructor(private githubService: GithubService, private github2Service: TestService) { }

    public ngOnInit() {
        // this.githubService.getConfiguration().subscribe((res) => {
        //     console.log(res);
        //     this.result = JSON.stringify(res);
        // });

        this.github2Service.getConfiguration().subscribe((res) => {
            const wells = res ? res.value : [];
            wells.length = 50;
            this.wells = wells.map((well: any) => Object.assign({}, well, { isCollapsed: true }));
        });
    }

    public onCollapseChanged(collapse) {
        console.log(collapse);
    }

    public goToRODashboard() {
        const url = 'https://rointro-dmz-wa-rodashboard.azurewebsites.net/dashboard';
        window.open(url);
    }

    public goToRhapsody(id) {
        const url = `https://rhintrhapsody-dmz-wa-kpidashboard.azurewebsites.net/performance?wellID=${id}`;
        window.open(url);
    }

    public goToZeus(id) {
        const url = `https://zeintzeus-dmz-wa-zeusdashboard.azurewebsites.net??wellID=${id}`;
        window.open(url);
    }

    public onSearch(event) {
        console.log(event);
    }
}
