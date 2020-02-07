import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwardsListPage } from './awards-list.page';

const routes: Routes = [
  {
    path: '',
    component: AwardsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwardsListPageRoutingModule {}
