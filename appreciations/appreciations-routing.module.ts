import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppreciationsPage } from './appreciations.page';

const routes: Routes = [
  {
    path: '',
    component: AppreciationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppreciationsPageRoutingModule {}
