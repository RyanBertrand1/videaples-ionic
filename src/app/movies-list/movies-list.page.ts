import {Component, OnInit} from '@angular/core';
import {ProjectInterface} from "../project-interface";
import {ProjetService} from "../../Service/projet.service";
import {Router} from "@angular/router";
import {DataService} from "../../Service/data.service";
import {ActivatedRoute} from "@angular/router";
import {NavController, ToastController} from "@ionic/angular";
import {environment} from "../../environments/environment.prod";

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.page.html',
    styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

    projectInterface: ProjectInterface[] = [];
    typeID: string = '';
    prizeID;
    urlEnvProd= environment.url;
    display;
    constructor(private projectService: ProjetService, private router: Router, private data: DataService, private activatedRoute: ActivatedRoute, private toastController: ToastController) {
    }

    ngOnInit() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.prizeID = params.get('prizeId');
            this.display = params.get('display');
        });
    }

    ionViewWillEnter() {
        this.activatedRoute.paramMap.subscribe(res => {
           this.typeID = res.get('id');
        });
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.prizeID = params.get('prizeId');
            this.display = params.get('display');
        });
        if (this.typeID !== null && this.display !== 'all') {
            this.projectService.getByType(this.typeID).subscribe(data => {
                this.projectInterface = data['hydra:member'];
            });
            this.display = 'type';
        } else {
            this.projectService.get().subscribe({
                next: (res) => {this.projectInterface = res['hydra:member']; },
                error: err => {this.presentToast(JSON.stringify(err)); }
            });
            this.display = 'all';
        }
    }

    ChangeToMovieDetails(pathName: String, info: ProjectInterface) {
        sessionStorage.setItem('infoMovie', JSON.stringify(info));
        this.router.navigate([pathName], {queryParams: {prizeId: this.prizeID, display: this.display}});
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 30000,
        });
        toast.present();
    }
}
