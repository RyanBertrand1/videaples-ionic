import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-awards-list',
    templateUrl: './awards-list.page.html',
    styleUrls: ['./awards-list.page.scss'],
})
export class AwardsListPage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToMoviesList() {
        this.router.navigate(['/movies-list']);

    }

}
