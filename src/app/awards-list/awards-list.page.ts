import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-awards-list',
    templateUrl: './awards-list.page.html',
    styleUrls: ['./awards-list.page.scss'],
})
export class AwardsListPage implements OnInit {
    items = [];
    colors = [ 'warning', 'danger', 'tertiary', 'success',  'primary', 'secondary'];

    constructor(private router: Router) {
        for (let i = 1; i <= 10; i++) {
            this.items.push('Prix du meilleur' + i.toString());
        }
    }

    ngOnInit() {
    }

    goToMoviesList(id) {
        console.log(id);
        this.router.navigate(['/movies-list', {prixSelectionné: id}]);

    }

}
