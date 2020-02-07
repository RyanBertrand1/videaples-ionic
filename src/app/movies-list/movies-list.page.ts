import { Component, OnInit } from '@angular/core';
import {ProjectInterface} from "../project-interface";
import { ProjetService } from "../../Service/projet.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  projectInterface: ProjectInterface[] = [];

  constructor(private projectService: ProjetService) { }

  ngOnInit() {
    this.projectService.get().subscribe(data =>{
      console.log(data);
      this.projectInterface = data['hydra:member'];
      console.log(this.projectInterface);
    });
  }

}
