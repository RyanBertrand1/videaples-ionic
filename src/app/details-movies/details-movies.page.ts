import {Component, OnInit} from '@angular/core';
import {ProjectInterface} from "../project-interface";
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../Service/data.service";

@Component({
    selector: 'app-details-movies',
    templateUrl: './details-movies.page.html',
    styleUrls: ['./details-movies.page.scss'],
})
export class DetailsMoviesPage implements OnInit {

    infoMovie: ProjectInterface[] = [];

    constructor(private router: ActivatedRoute, private data: DataService) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.infoMovie = this.data.getParams();
    }
}
