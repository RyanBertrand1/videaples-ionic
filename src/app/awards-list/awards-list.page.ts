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
        for (let i = 1; i < 8; i++) {
            this.listAwardsInterface.push({
                name: `Prix du meilleur ${i.toString()}`,
                id: i
            });
        }
    }

    ngOnInit() {
        this.awardsService.get().subscribe(data => {
            this.listAwardsInterface = data['hydra:member'];
            console.log(data);
        });
    }

    goToMoviesList(id) {
        console.log(id);
        this.router.navigate(['/movies-list', {prixSelectionné: id}]);

    }

}
