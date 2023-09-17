import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwechaFestPageRoutingModule } from './swecha-fest-routing.module';

import { SwechaFestPage } from './swecha-fest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwechaFestPageRoutingModule
  ],
  declarations: [SwechaFestPage]
})
export class SwechaFestPageModule {}
