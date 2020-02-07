import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwardsListPageRoutingModule } from './awards-list-routing.module';

import { AwardsListPage } from './awards-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwardsListPageRoutingModule
  ],
  declarations: [AwardsListPage]
})
export class AwardsListPageModule {}
