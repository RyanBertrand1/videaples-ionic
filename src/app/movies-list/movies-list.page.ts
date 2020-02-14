import {Component, OnInit} from '@angular/core';
import {ProjectInterface} from "../project-interface";
import {ProjetService} from "../../Service/projet.service";
import {Router} from "@angular/router";
import {DataService} from "../../Service/data.service";
import {ActivatedRoute} from "@angular/router";
import {NavController, ToastController} from "@ionic/angular";
import {environment} from "../../environments/environment";

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.page.html',
    styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

    projectInterface: ProjectInterface[] = [];
    typeID: string = '';
    prizeID;
    urlEnv = environment.url;
    constructor(private projectService: ProjetService, private router: Router, private data: DataService, private activatedRoute: ActivatedRoute, private toastController: ToastController) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.activatedRoute.paramMap.subscribe(res => {
           this.typeID =res.get('id');
        });
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.prizeID = params.get('prizeId');
        });
        if (this.typeID !== null) {
            this.projectService.getByType(this.typeID).subscribe(data => {
                this.projectInterface = data['hydra:member'];
            });
        } else {
            this.projectService.get().subscribe(data => {
                this.projectInterface = data['hydra:member'];
            });
        }
    }

    ChangeToMovieDetails(pathName: String, info: ProjectInterface) {
        this.data.setParams(info);
        console.log(this.prizeID);
        this.router.navigate([pathName], {queryParams: {prizeId: this.prizeID}});
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 30000,
        });
        toast.present();
    }
}
