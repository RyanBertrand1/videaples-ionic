import {Component, OnInit} from '@angular/core';
import {ProjectInterface} from "../project-interface";
import {ProjetService} from "../../Service/projet.service";
import {Router} from "@angular/router";
import {DataService} from "../../Service/data.service";

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.page.html',
    styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

    projectInterface: ProjectInterface[] = [];

    constructor(private projectService: ProjetService, private router: Router, private data: DataService) {
    }

    ngOnInit() {
        this.projectService.get().subscribe(data => {
            this.projectInterface = data['hydra:member'];
        });
    }

    ChangeToMovieDetails(pathName: String, info: ProjectInterface) {
        this.data.setParams(info);
        this.router.navigate([pathName]);
    }

}
