import { Component, OnInit } from '@angular/core';
import { Survey } from './home.models';
import { GithubService } from '../shared/github';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title = 'home';
    result = '';
    private surveys: Array<Survey> = [];

    constructor(private githubService: GithubService) {
        const s1: Survey = {
            wellId: 'well-' + Date.now().valueOf(),
            name: 'test1',
            wellboreId: 'wellbore-' + Date.now().valueOf(),
            trajectoryId: 'trajectory-' + Date.now().valueOf(),
            timeMeasuredDepth: 'string',
            bitDepth: '1000',
            rop: '2000',
            rigState: 'Drilling',
            inclination: 0,
            azimuth: 0,
            hasInformation: true
        };

        const s2: Survey = {
            wellId: 'well-' + Date.now().valueOf(),
            name: 'test2',
            wellboreId: 'wellbore-' + Date.now().valueOf(),
            trajectoryId: 'trajectory-' + Date.now().valueOf(),
            timeMeasuredDepth: 'string',
            bitDepth: '1500',
            rop: '2500',
            rigState: 'Drilling',
            inclination: 0,
            azimuth: 0,
            hasInformation: true
        };

        const s3: Survey = {
            wellId: 'well-' + Date.now().valueOf(),
            name: 'test3-' + + Date.now().valueOf(),
            wellboreId: 'wellbore-' + Date.now().valueOf(),
            trajectoryId: 'trajectory-' + Date.now().valueOf(),
            timeMeasuredDepth: 'string',
            bitDepth: '1200',
            rop: '2500',
            rigState: 'Drilling',
            inclination: 0,
            azimuth: 0,
            hasInformation: true
        };
        this.surveys = [s1, s2, s3];
    }

    public ngOnInit() {
        this.githubService.getConfiguration().subscribe((res) => {
            console.log(res);
            this.result = JSON.stringify(res);
        });
    }
}
