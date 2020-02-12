import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PrizeService} from '../../Service/prize.service';
import {Awards} from '../awards';

@Component({
    selector: 'app-awards-list',
    templateUrl: './awards-list.page.html',
    styleUrls: ['./awards-list.page.scss'],
})
export class AwardsListPage implements OnInit {
    listAwardsInterface: Awards[] = [];
    colors = ['warning', 'danger', 'tertiary', 'secondary', 'primary', 'success'];

    constructor(private router: Router, private awardsService: PrizeService) {
    }

    ngOnInit() {
        this.awardsService.get().subscribe(data => {
            this.listAwardsInterface = data['hydra:member'];
            console.log(data);
        });
    }

    goToProjectList(typeId, prizeId){
        this.router.navigate(['/movies-list', typeId], {queryParams: {prizeId: prizeId}})
    }
}
