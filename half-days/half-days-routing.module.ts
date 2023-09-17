import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HalfDaysPage } from './half-days.page';

const routes: Routes = [
  {
    path: '',
    component: HalfDaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HalfDaysPageRoutingModule {}
