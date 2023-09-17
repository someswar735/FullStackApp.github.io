import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalfDaysPageRoutingModule } from './half-days-routing.module';

import { HalfDaysPage } from './half-days.page';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalfDaysPageRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [HalfDaysPage]
})
export class HalfDaysPageModule {}
