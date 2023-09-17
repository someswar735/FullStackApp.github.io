import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwechaFestPage } from './swecha-fest.page';

const routes: Routes = [
  {
    path: '',
    component: SwechaFestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwechaFestPageRoutingModule {}
