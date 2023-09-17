import { Component } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import {Router}from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule]
})
export class RegistrationFormPage {

  constructor(private router: Router, public loadingCtrl: LoadingController, private toastController: ToastController, private navCtrl: NavController) {}
  user:any={};
  submit()
  {
    console.log(this.user);
  }
  
  goBack() {
    this.navCtrl.back();
  }
  register()
     {
      this.router.navigate(['/tabs']);    }

      async showPresenting() {
       const loading = await this.loadingCtrl.create({
         message: 'Authenticating...,',
         duration: 1000,
         cssClass: 'custom-loading',
   
     })
}
async presentToast(position: 'top') {
  const toast = await this.toastController.create({
   message: 'Account Created Successfully!',
   cssClass: 'toast-message' ,
   duration: 1500,
   position: position
   });

 await toast.present();
}
}
