import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsMoviesPage } from './details-movies.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsMoviesPageRoutingModule {}
