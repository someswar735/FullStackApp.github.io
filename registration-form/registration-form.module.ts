import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationFormPageRoutingModule } from './registration-form-routing.module';

import { RegistrationFormPage } from './registration-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationFormPageRoutingModule
  ],
  declarations: []
})
export class RegistrationFormPageModule {}
