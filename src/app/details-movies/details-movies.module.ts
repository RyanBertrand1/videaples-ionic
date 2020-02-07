import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMoviesPageRoutingModule } from './details-movies-routing.module';

import { DetailsMoviesPage } from './details-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMoviesPageRoutingModule
  ],
  declarations: [DetailsMoviesPage]
})
export class DetailsMoviesPageModule {}
