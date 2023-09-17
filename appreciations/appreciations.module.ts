import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppreciationsPageRoutingModule } from './appreciations-routing.module';

import { AppreciationsPage } from './appreciations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppreciationsPageRoutingModule
  ],
  declarations: [AppreciationsPage]
})
export class AppreciationsPageModule {}
